import { reactive as Me, onMounted as Xa, nextTick as Ve, onActivated as Za, isRef as Cv, watch as ie, onBeforeUnmount as ft, onDeactivated as gr, unref as ho, inject as ii, getCurrentInstance as Gn, computed as R, provide as li, isVNode as Ja, Fragment as Pe, ref as I, createApp as wv, onUnmounted as Pa, h as _l, onBeforeMount as Sv, defineComponent as _, createVNode as x, Teleport as Va, Transition as Be, withDirectives as we, vShow as Ea, mergeProps as Ee, openBlock as h, createBlock as pe, resolveDynamicComponent as Qa, normalizeClass as m, normalizeStyle as q, resolveComponent as le, resolveDirective as Ae, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as re, createElementBlock as T, renderList as Ne, createCommentVNode as ee, onUpdated as Wt, createTextVNode as be, pushScopeId as Ma, popScopeId as Ia, withModifiers as Pn, normalizeProps as si, guardReactiveProps as xl, vModelText as kv, toRefs as $v, withKeys as Li, toRaw as Ri, TransitionGroup as Tv } from "vue";
var es = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, Jw = Me(es);
const sn = Me(es), Ge = (e) => typeof e == "string", go = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", ui = (e) => Object.prototype.toString.call(e) === "[object Object]", Ov = (e) => typeof e == "object" && e !== null, di = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), Pv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Dn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ge(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : go(e) ? Number(e) : e, Fa = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, vi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, ct = () => typeof window < "u", Ui = (e) => [...new Set(e)], ns = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Vv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Ev = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Yi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Fi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Mv = (e) => {
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
      this.has(r) && Fa(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, yo = (e) => e, Hi = (e) => Math.pow(e, 3), rs = (e) => e < 0.5 ? Hi(e * 2) / 2 : 1 - Hi((1 - e) * 2) / 2, Gt = (e, n) => e ?? n, as = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ca = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function ji(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Iv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ji(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ji(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Bv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Wi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function qt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function fi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Nv(e) {
  return bo.apply(this, arguments);
}
function bo() {
  return bo = Iv(function* (e) {
    yield Vn();
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
  }), bo.apply(this, arguments);
}
function so(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ba(e) {
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
function Dv(e) {
  for (var n = [], r = e; r !== window; )
    r = Ba(r), n.push(r);
  return n;
}
function ts(e, n) {
  if (Ge(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Ov(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var os = (e) => Ge(e) && e.endsWith("rem"), Av = (e) => Ge(e) && e.endsWith("px") || xe(e), zv = (e) => Ge(e) && e.endsWith("%"), is = (e) => Ge(e) && e.endsWith("vw"), ls = (e) => Ge(e) && e.endsWith("vh"), Lv = (e) => Ge(e) && e.startsWith("calc("), Rv = (e) => Ge(e) && e.startsWith("var("), De = (e) => {
  if (xe(e))
    return e;
  if (Av(e))
    return +e.replace("px", "");
  if (is(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ls(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (os(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ge(e) ? L(e) : 0;
}, ce = (e) => {
  if (e != null)
    return zv(e) || is(e) || ls(e) || os(e) || Lv(e) || Rv(e) ? e : De(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ce(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function kn(e) {
  var n = as();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Gi(e) {
  var n = as();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Kt(e) {
  kn(() => {
    kn(e);
  });
}
function Vn() {
  return new Promise((e) => {
    kn(() => {
      kn(e);
    });
  });
}
function Uv() {
  return new Promise((e) => {
    kn(e);
  });
}
function ot(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = qt(e), s = fi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), c = s + (a - s) * o(v);
        e.scrollTo(c, f), kn(d);
      } else
        e.scrollTo(a, r), u();
    };
    kn(d);
  });
}
function ss(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Vv(a);
    return n[o] = t, n;
  }, {});
}
function Yv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function It(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tn(e) {
  let n = !1;
  Xa(() => {
    e(), Ve(() => {
      n = !0;
    });
  }), Za(() => {
    n && e();
  });
}
function wa(e, n, r, a = {}) {
  if (!ct())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const c = ho(f);
    c && (c.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const c = ho(f);
    c && (c.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  Cv(e) && (d = ie(() => e.value, (f, c) => {
    u(c), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return tn(() => {
    s(e);
  }), ft(() => {
    u(e);
  }), gr(() => {
    u(e);
  }), v;
}
function us(e, n, r) {
  if (!ct())
    return;
  wa(document, n, (t) => {
    const o = ho(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Fv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Hv(e) {
  const n = Gn();
  return e in n.provides;
}
function ci(e) {
  if (!Hv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = ii(e), { childInstances: r, collect: a, clear: t } = n, o = Fv(n, ["childInstances", "collect", "clear"]), l = Gn();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Xa(() => {
        Ve().then(() => {
          a(l, u);
        });
      }), ft(() => {
        Ve().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function jv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Ja(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function mi(e) {
  const n = Gn(), r = Me([]), a = [], t = R(() => r.length), o = () => {
    const u = jv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Fa(r, u), Fa(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      li(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
var Wv = ["collect", "clear"];
function qi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ki(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        qi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        qi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Gv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function qv(e) {
  var n = wv(e), r = document.createElement("div");
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
      return () => _l(e, Bt({}, n, r));
    }
  }, {
    unmount: t
  } = qv(a);
  return {
    unmountInstance: t
  };
}
function ds(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Comment) {
      if (r.type === Pe && Ce(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function Kv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Ja(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function In(e) {
  var n = Me([]), r = Gn(), a = () => {
    var i = Kv(r.subTree);
    n.sort((s, u) => i.indexOf(s.vnode) - i.indexOf(u.vnode));
  }, t = (i) => {
    n.push(i), a();
  }, o = (i) => {
    Fa(n, i);
  };
  li(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var l = R(() => n.length);
  return {
    length: l
  };
}
function Bn(e) {
  if (!vs(e))
    return {
      index: null
    };
  var n = ii(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Gn();
  Xa(() => {
    Ve().then(() => r(o));
  }), Pa(() => {
    Ve().then(() => a(o));
  });
  var l = R(() => t.indexOf(o));
  return {
    index: l
  };
}
function Tn(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Fa(n, o);
  }, t = (o) => {
    li(e, Bt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function On(e) {
  if (!vs(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = ii(e), {
    collect: r,
    clear: a
  } = n, t = Gv(n, Wv), o = (l) => {
    Xa(() => r(l)), ft(() => a(l));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function vs(e) {
  var n = Gn();
  return e in n.provides;
}
function pn() {
  var e = I(""), n = /* @__PURE__ */ function() {
    var t = Ki(function* (o, l, i) {
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
    var t = Ki(function* (o, l, i, s, u) {
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
function Xv(e) {
  wa(window, "hashchange", e), wa(window, "popstate", e);
}
function Xt() {
  var e = I(!1);
  return Za(() => {
    e.value = !1;
  }), gr(() => {
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
function k(e) {
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
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
var {
  n: fs
} = ne("ripple"), Xi = 250;
function Zv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Jv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, c = u - l;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: i
  };
}
function cs(e) {
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
      } = Jv(this, e), s = document.createElement("div");
      s.classList.add(fs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Zv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Co() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + fs());
    if (r.length) {
      var a = r[r.length - 1], t = Xi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Xi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function ms() {
  var e = this._ripple;
  Yv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Qv(e, n) {
  var r, a, t;
  e._ripple = Nt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: Co.bind(e)
  }), e.addEventListener("touchstart", cs, {
    passive: !0
  }), e.addEventListener("touchmove", ms, {
    passive: !0
  }), e.addEventListener("dragstart", Co, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function _v(e) {
  e.removeEventListener("touchstart", cs), e.removeEventListener("touchmove", ms), e.removeEventListener("dragstart", Co), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function xv(e, n) {
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Nt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ps = {
  mounted: Qv,
  unmounted: _v,
  updated: xv,
  install(e) {
    e.directive("ripple", this);
  }
}, Qw = ps;
const ze = ps;
function ef(e) {
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
    validator: ef
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
function hs() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function gt(e) {
  sn.locks[e] = 1, hs();
}
function yt(e) {
  delete sn.locks[e], hs();
}
function Zt(e, n) {
  var {
    uid: r
  } = Gn();
  n && ie(n, (a) => {
    a === !1 ? yt(r) : a === !0 && e() === !0 && gt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? gt(r) : yt(r));
  }), Sv(() => {
    n && n() === !1 || e() === !0 && gt(r);
  }), Pa(() => {
    n && n() === !1 || e() === !0 && yt(r);
  }), Za(() => {
    n && n() === !1 || e() === !0 && gt(r);
  }), gr(() => {
    n && n() === !1 || e() === !0 && yt(r);
  });
}
function pt(e, n) {
  var r = I(sn.zIndex);
  return ie(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wo.apply(this, arguments);
}
function nf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ja(e);
}
var {
  n: Nn,
  classes: uo
} = ne("popup");
const fn = _({
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
    } = Xt(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    Zt(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), Xv(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return x("div", {
        class: uo(Nn("overlay"), d),
        style: wo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => x("div", Ee({
      class: uo(Nn("content"), Nn("--" + e.position), [e.defaultStyle, Nn("--content-background-color")], [e.defaultStyle, Nn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: p,
        position: y
      } = e;
      return x(Be, {
        name: Nn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(x("div", {
          class: uo(Nn("$--box"), Nn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && i(), x(Be, {
          name: p || Nn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Ea, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return x(Va, {
          to: d,
          disabled: o.value
        }, nf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
fn.install = function(e) {
  e.component(fn.name, fn);
};
var _w = fn, gs = {
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
function Zi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function rf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Zi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Zi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: af,
  classes: tf
} = ne("icon");
function of(e, n) {
  return h(), pe(
    Qa(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
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
var ys = _({
  name: "VarIcon",
  props: gs,
  setup(e) {
    var n = I(""), r = I(!1), a = /* @__PURE__ */ function() {
      var t = rf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ve(), setTimeout(() => {
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
      n: af,
      classes: tf,
      nextName: n,
      animateInProgress: r,
      isURL: Pv,
      toNumber: L,
      toSizeUnit: ce
    };
  }
});
ys.render = of;
const $e = ys;
$e.install = function(e) {
  e.component($e.name, $e);
};
var xw = $e;
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, So.apply(this, arguments);
}
var lf = So({
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
}, Ke(mt, [
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
const pi = {
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
}, bs = {
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
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ko.apply(this, arguments);
}
function hi() {
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
    e[o] = ko({}, e[o], l), a(o);
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
  packs: Cs,
  pack: He,
  add: gi,
  use: yi,
  merge: ws
} = hi();
gi("zh-CN", pi);
yi("zh-CN");
var eS = {
  zhCN: pi,
  enUS: bs,
  packs: Cs,
  pack: He,
  add: gi,
  use: yi,
  merge: ws,
  useLocale: hi
};
const $o = {
  zhCN: pi,
  enUS: bs,
  packs: Cs,
  pack: He,
  add: gi,
  use: yi,
  merge: ws,
  useLocale: hi
};
var {
  n: sf,
  classes: uf
} = ne("action-sheet"), df = ["onClick"];
function vf(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Ae("ripple");
  return h(), pe(
    a,
    Ee({
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
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [W(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: m(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(h(!0), T(
          Pe,
          null,
          Ne(e.actions, (o) => we((h(), T(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (h(), pe(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: o.icon,
                size: o.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : ee("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              re(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            df
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
var Ss = _({
  name: "VarActionSheet",
  directives: {
    Ripple: ze
  },
  components: {
    VarPopup: fn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: lf,
  setup(e) {
    var n = I(!1), r = (t) => {
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
      n: sf,
      classes: uf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
      dt: Gt,
      handleSelect: r
    };
  }
});
Ss.render = vf;
const tr = Ss;
function To() {
  return To = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, To.apply(this, arguments);
}
var _n, bi = {};
function ff(e) {
  return e === void 0 && (e = {}), To({}, bi, e);
}
function Sa(e) {
  return ct() ? new Promise((n) => {
    Sa.close();
    var r = Me(ff(e));
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = _a(tr, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), _n === r && (_n = null);
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
function cf(e) {
  bi = e;
}
function mf() {
  bi = {};
}
function pf() {
  if (_n != null) {
    var e = _n;
    _n = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Sa.Component = tr;
tr.install = function(e) {
  e.component(tr.name, tr);
};
Sa.install = function(e) {
  e.component(tr.name, tr);
};
Object.assign(Sa, {
  setDefaultOptions: cf,
  resetDefaultOptions: mf,
  close: pf
});
var nS = tr;
function hf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var gf = {
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
    validator: hf
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
  n: yf,
  classes: bf
} = ne("app-bar");
function Cf(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: q(e.rootStyles)
    },
    [A(
      "div",
      {
        class: m(e.n("toolbar"))
      },
      [A(
        "div",
        {
          class: m(e.n("left"))
        },
        [W(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
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
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title"))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), A(
        "div",
        {
          class: m(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
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
        )) : ee("v-if", !0), W(e.$slots, "right")],
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
var ks = _({
  name: "VarAppBar",
  props: gf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(), t = I(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = R(() => {
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
    return tn(o), Wt(o), {
      n: yf,
      classes: bf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
ks.render = Cf;
const wr = ks;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var rS = wr;
function Ji(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ji(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ji(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
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
var wf = "background-image", Sf = "lazy-loading", kf = "lazy-error", Qi = "lazy-attempt", $f = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Po = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ha = [], Dt = [], $s = Mv(100), Ue = {
  loading: Po,
  error: Po,
  attempt: 3,
  throttleWait: 300,
  events: $f
}, Ci = vi(ht, Ue.throttleWait);
function Qt(e, n) {
  e._lazy.arg === wf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Tf(e) {
  e._lazy.loading && Qt(e, e._lazy.loading), ht();
}
function Of(e) {
  e._lazy.error && Qt(e, e._lazy.error), e._lazy.state = "error", Si(e), ht();
}
function Ts(e, n) {
  Qt(e, n), e._lazy.state = "success", Si(e), ht();
}
function Pf(e) {
  var n;
  Dt.includes(e) || (Dt.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ci, {
      passive: !0
    });
  }));
}
function Vf() {
  Dt.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ci);
    });
  }), Dt.length = 0;
}
function Ef(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Sf)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(kf)) != null ? a : Ue.error,
    attempt: e.getAttribute(Qi) ? Number(e.getAttribute(Qi)) : Ue.attempt
  };
  e._lazy = Oo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Qt(e, Po), k(Ue.filter, e._lazy);
}
function Mf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, $s.add(n), Ts(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Of(e) : Os(e);
  });
}
function Os(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if ($s.has(n)) {
      Ts(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Tf(e), Mf(e, n);
  }
}
function wi(e) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Jt(function* (e) {
    (yield Nv(e)) && Os(e);
  }), Vo.apply(this, arguments);
}
function ht() {
  Ha.forEach((e) => wi(e));
}
function If(e) {
  return Eo.apply(this, arguments);
}
function Eo() {
  return Eo = Jt(function* (e) {
    !Ha.includes(e) && Ha.push(e), Dv(e).forEach(Pf), yield wi(e);
  }), Eo.apply(this, arguments);
}
function Si(e) {
  Fa(Ha, e), Ha.length === 0 && Vf();
}
function Bf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Ps(e, n) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Jt(function* (e, n) {
    Ef(e, n), yield If(e);
  }), Mo.apply(this, arguments);
}
function Nf(e, n) {
  return Io.apply(this, arguments);
}
function Io() {
  return Io = Jt(function* (e, n) {
    if (!Bf(e, n)) {
      Ha.includes(e) && (yield wi(e));
      return;
    }
    yield Ps(e, n);
  }), Io.apply(this, arguments);
}
function Df(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = l;
}
var Vs = {
  mounted: Ps,
  unmounted: Si,
  updated: Nf,
  install(e, n) {
    Df(n), Ci = vi(ht, Ue.throttleWait), e.directive("lazy", this);
  }
}, aS = Vs;
const it = Vs;
function Af(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Es = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ms(e) {
  return Es(e) || xe(e) || Ge(e);
}
var zf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ms,
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
    validator: Af,
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
  n: Lf,
  classes: Rf
} = ne("avatar"), Uf = ["src", "lazy-loading", "lazy-error"], Yf = ["src"];
function Ff(e, n) {
  var r = Ae("lazy");
  return h(), T(
    "div",
    {
      ref: "avatarElement",
      class: m(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
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
    [e.src ? (h(), T(
      Pe,
      {
        key: 0
      },
      [e.lazy ? we((h(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
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
        Uf
      )), [[r, e.src]]) : (h(), T(
        "img",
        {
          key: 1,
          class: m(e.n("image")),
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
        Yf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: m(e.n("text")),
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
var Is = _({
  name: "VarAvatar",
  directives: {
    Lazy: it
  },
  props: zf,
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
      d ? (u._lazy.state === "success" && k(v, s), u._lazy.state === "error" && k(f, s)) : k(v, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return tn(t), Wt(t), {
      internalSizeValidator: Es,
      sizeValidator: Ms,
      toSizeUnit: ce,
      n: Lf,
      classes: Rf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Is.render = Ff;
const Sr = Is;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var tS = Sr, Hf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: jf,
  classes: Wf
} = ne("avatar-group");
function Gf(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Bs = _({
  name: "VarAvatarGroup",
  props: Hf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": ce(e.offset)
    });
    return {
      n: jf,
      classes: Wf,
      toSizeUnit: ce,
      rootStyles: n
    };
  }
});
Bs.render = Gf;
const kr = Bs;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var oS = kr;
function qf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Kf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var nr = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: qf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Kf
  },
  // loading颜色
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
  n: Xf,
  classes: Zf
} = ne("loading"), Jf = (e) => (Ma(""), e = e(), Ia(), e), Qf = /* @__PURE__ */ Jf(() => /* @__PURE__ */ A(
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
)), _f = [Qf];
function xf(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
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
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [A(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          _f,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (h(!0), T(
        Pe,
        null,
        Ne(e.loadingTypeDict, (r, a) => (h(), T(
          Pe,
          {
            key: a
          },
          [e.type === a ? (h(), T(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), T(
              Pe,
              null,
              Ne(r, (t) => (h(), T(
                "div",
                {
                  key: t + a,
                  style: q({
                    backgroundColor: e.color
                  }),
                  class: m(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
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
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
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
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ns = _({
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
    }, t = R(() => k(r.default) ? e.loading : !0);
    return {
      n: Xf,
      classes: Zf,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Ns.render = xf;
const wn = Ns;
wn.install = function(e) {
  e.component(wn.name, wn);
};
var iS = wn;
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
function Ds(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ec(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function nc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var rc = {
  type: {
    type: String,
    validator: Ds
  },
  nativeType: {
    type: String,
    default: "button",
    validator: nc
  },
  size: {
    type: String,
    validator: ec
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
  loadingType: Ke(nr, "type"),
  loadingSize: Ke(nr, "size"),
  loadingColor: Bo({}, Ke(nr, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, As = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), zs = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function ac() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(As), {
    length: r
  } = In(zs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function tc() {
  var {
    bindParent: e,
    parentProvider: n
  } = On(As), {
    index: r
  } = Bn(zs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
function Ls(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function oc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ns(t)] = o, r;
  }, {}) : {};
}
function ic(e) {
  var {
    value: n
  } = e._hover, r = oc(e);
  Object.keys(n).forEach((a) => {
    var t = ns(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function ki(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function lc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Rs(e) {
  lc(e), ki(e, e._hover.rawStyle);
}
function Us() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, di(e)) {
    e(this._hover.hovering);
    return;
  }
  ki(this, e);
}
function Ys() {
  if (this._hover.hovering = !1, di(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Rs(this);
}
function Fs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Ls(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, ic(e), e.addEventListener("mouseenter", Us), e.addEventListener("mouseleave", Ys));
}
function Hs(e, n) {
  Ls(n.arg) || (Rs(e), e.removeEventListener("mouseenter", Us), e.removeEventListener("mouseleave", Ys));
}
function sc(e, n) {
  Hs(e, n);
}
function uc(e, n) {
  return !di(n.value) && e._hover.hovering;
}
function dc(e, n) {
  Fs(e, n), uc(e, n) && ki(e, n.value);
}
var js = {
  mounted: Fs,
  unmounted: Hs,
  beforeUpdate: sc,
  updated: dc,
  install(e) {
    e.directive("hover", this);
  }
}, lS = js;
const At = js;
var {
  n: vc,
  classes: fc
} = ne("button"), cc = ["type", "disabled"];
function mc(e, n) {
  var r = le("var-loading"), a = Ae("ripple"), t = Ae("hover");
  return we((h(), T(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
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
    [e.loading || e.pending ? (h(), pe(
      r,
      {
        key: 0,
        class: m(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : ee("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), A(
      "div",
      {
        class: m(e.classes(e.n("overlay"), [e.hovering, e.n("--hovering")]))
      },
      null,
      2
      /* CLASS */
    )],
    46,
    cc
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }], [t, e.handleHover, "desktop"]]);
}
var Ws = _({
  name: "VarButton",
  components: {
    VarLoading: wn
  },
  directives: {
    Ripple: ze,
    Hover: At
  },
  props: rc,
  setup(e) {
    var n = I(!1), r = I(!1), {
      buttonGroup: a
    } = tc(), t = R(() => {
      if (!a)
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
        mode: c
      } = a;
      return {
        elevation: 0,
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: c.value !== "normal",
        outline: c.value === "outline"
      };
    }), o = (u) => {
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
      !f || d || v || n.value || o(k(f, u));
    }, i = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || o(k(f, u));
    }, s = (u) => {
      r.value = u;
    };
    return {
      n: vc,
      classes: fc,
      pending: n,
      states: t,
      hovering: r,
      handleHover: s,
      handleClick: l,
      handleTouchstart: i
    };
  }
});
Ws.render = mc;
const Xe = Ws;
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
  onClick: U()
}, {
  n: hc,
  classes: gc
} = ne("back-top");
function yc(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), pe(
    Va,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ee({
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
      [W(e.$slots, "default", {}, () => [x(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [x(r, {
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
var Gs = _({
  name: "VarBackTop",
  components: {
    VarButton: Xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: pc,
  setup(e) {
    var n = I(!1), r = I(null), a = I(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = fi(t);
      ot(t, {
        left: v,
        duration: e.duration,
        animation: rs
      });
    }, l = vi(() => {
      n.value = qt(t) >= De(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ts(e.target, "BackTop") : Ba(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Xa(() => {
      i(), s(), a.value = !1;
    }), Za(s), ft(u), gr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ce,
      n: hc,
      classes: gc,
      handleClick: o
    };
  }
});
Gs.render = yc;
const $r = Gs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var uS = $r;
function bc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Cc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var wc = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: bc
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: !1
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: !1
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0
  },
  // 显示最大值
  maxValue: {
    type: [String, Number]
  },
  // 自定义徽标颜色
  color: {
    type: String
  },
  // 定位位置
  position: {
    type: String,
    default: "right-top",
    validator: Cc
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: qn,
  classes: Sc
} = ne("badge"), kc = {
  key: 1
};
function $c(e, n) {
  var r = le("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [x(
      Be,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [we(A(
          "span",
          Ee(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (h(), pe(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (h(), T(
            "span",
            kc,
            re(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Ea, !e.hidden]])]),
        _: 1
        /* STABLE */
      },
      8,
      ["name"]
    ), W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var qs = _({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: wc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = R(() => {
      var {
        type: l,
        position: i,
        dot: s,
        icon: u
      } = e, d = r.default && qn("position") + " " + qn("--" + i), v = s ? qn("dot") : null, f = o(), c = u ? qn("icon") : null;
      return [qn("--" + l), d, v, f, c];
    }), t = R(() => {
      var {
        dot: l,
        value: i,
        maxValue: s
      } = e;
      return l ? "" : i !== void 0 && s !== void 0 && L(i) > s ? s + "+" : i;
    }), o = () => {
      var {
        position: l,
        dot: i
      } = e;
      if (i) {
        if (l.includes("right"))
          return qn("dot--right");
        if (l.includes("left"))
          return qn("dot--left");
      }
    };
    return {
      n: qn,
      classes: Sc,
      values: t,
      contentClass: a
    };
  }
});
qs.render = $c;
const or = qs;
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
  onChange: U(),
  "onUpdate:active": U(),
  onBeforeChange: U(),
  onFabClick: U(),
  fabProps: {
    type: Object
  }
}, Ks = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Xs = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Oc() {
  var {
    childProviders: e,
    bindChildren: n
  } = Tn(Ks), {
    length: r
  } = In(Xs);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
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
var {
  n: Pc,
  classes: Vc
} = ne("bottom-navigation"), {
  n: _t
} = ne("bottom-navigation-item"), _i = _t("--right-half-space"), xi = _t("--left-half-space"), el = _t("--right-space"), Ec = {
  type: "primary"
};
function Mc(e, n) {
  var r = le("var-button");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (h(), pe(
      r,
      Ee({
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
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Zs = _({
  name: "VarBottomNavigation",
  components: {
    VarButton: Xe
  },
  props: Tc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = I({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Oc(), v = () => {
      s.value === 0 || f() || c() || p();
    }, f = () => u.find((O) => {
      var {
        name: z
      } = O;
      return t.value === z.value;
    }), c = () => u.find((O) => {
      var {
        index: z
      } = O;
      return t.value === z.value;
    }), p = () => {
      xe(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, y = (O) => {
      t.value !== O && (e.onBeforeChange ? g(O) : V(O));
    }, g = (O) => {
      var z = k(e.onBeforeChange, O);
      z = Ce(z) ? z : [z], Promise.all(z).then((M) => {
        M.some((b) => !b) || V(O);
      });
    }, V = (O) => {
      k(e["onUpdate:active"], O), k(e.onChange, O);
    }, P = () => {
      var O = B();
      O.forEach((z) => {
        z.classList.remove(_i, xi, el);
      });
    }, S = (O) => {
      var z = B(), M = z.length, b = O % 2 === 0;
      z.forEach((w, j) => {
        $(b, w, j, M);
      });
    }, $ = (O, z, M, b) => {
      var w = M === b - 1;
      if (!O && w) {
        z.classList.add(el);
        return;
      }
      var j = M === b / 2 - 1, Q = M === b / 2;
      j ? z.classList.add(_i) : Q && z.classList.add(xi);
    }, B = () => Array.from(a.value.querySelectorAll("." + _t())), C = () => {
      k(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (O) => {
      i.value = No({}, Ec, O);
    }, {
      immediate: !0,
      deep: !0
    }), tn(() => {
      r.fab && S(s.value);
    }), Wt(() => {
      P(), r.fab && S(s.value);
    }), {
      n: Pc,
      classes: Vc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: C,
      fabProps: i
    };
  }
});
Zs.render = Mc;
const Tr = Zs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var vS = Tr, Ic = {
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
    bindParent: n
  } = On(Ks), {
    index: r
  } = Bn(Xs);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Nc,
  classes: Dc
} = ne("bottom-navigation-item"), Ac = {
  type: "danger",
  dot: !0
};
function zc(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Ae("ripple");
  return we((h(), T(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), pe(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: m(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : ee("v-if", !0), W(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), pe(
      a,
      Ee({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : ee("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (h(), T(
        Pe,
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
var Js = _({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: or,
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: Ic,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = I({}), {
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
      var c, p = (c = n.value) != null ? c : t.value;
      k(e.onClick, p), k(o.onToggle, p);
    };
    return l(d), ie(() => r.value, (c) => {
      a.value = c === !0 ? Ac : r.value;
    }, {
      immediate: !0
    }), {
      n: Nc,
      classes: Dc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Js.render = zc;
const Or = Js;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var fS = Or, Lc = {
  separator: {
    type: String
  },
  onClick: U()
}, Qs = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Rc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = mi(Qs);
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
  } = ci(Qs);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Yc,
  classes: Fc
} = ne("breadcrumb");
function Hc(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : W(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
        "div",
        {
          class: m(e.n("separator"))
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
var _s = _({
  name: "VarBreadcrumb",
  props: Lc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Uc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: Yc,
      classes: Fc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
_s.render = Hc;
const Pr = _s;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var cS = Pr, jc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Wc
} = ne("breadcrumbs");
function Gc(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var xs = _({
  name: "VarBreadcrumbs",
  props: jc,
  setup(e) {
    var n = R(() => e.separator), {
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
xs.render = Gc;
const Vr = xs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var mS = Vr;
function qc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Kc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Xc(e) {
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
    validator: Kc
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
  n: Jc,
  classes: Qc
} = ne("button-group");
function _c(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var eu = _({
  name: "VarButtonGroup",
  props: Zc,
  setup(e) {
    var {
      bindButtons: n
    } = ac(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: Jc,
      classes: Qc
    };
  }
});
eu.render = _c;
const Er = eu;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var pS = Er;
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
  onClick: U(),
  "onUpdate:floating": U()
};
function nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function rl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        nl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        nl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nm,
  classes: rm
} = ne("card"), am = 500, tm = ["src", "alt"];
function om(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Ae("ripple");
  return we((h(), T(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
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
        class: m(e.n("floater")),
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
      [W(e.$slots, "image", {}, () => [e.src ? (h(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
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
        tm
      )) : ee("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: q({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [W(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: q({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [W(e.$slots, "close-button", {}, () => [x(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Pn(e.close, ["stop"])
          },
          {
            default: ve(() => [x(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: m(e.n("close-button-icon"))
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
    ), A(
      "div",
      {
        class: m(e.n("holder")),
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
var nu = _({
  name: "VarCard",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarButton: Xe
  },
  props: em,
  setup(e) {
    var n = I(null), r = I(null), a = I("auto"), t = I("auto"), o = I("100%"), l = I("100%"), i = I("auto"), s = I("auto"), u = I(void 0), d = I("hidden"), v = I("0px"), f = I("0"), c = R(() => e.layout === "row"), p = I(!1), y = I(!1), {
      zIndex: g
    } = pt(() => e.floating, 1);
    Zt(() => e.floating, () => !c.value);
    var V = "auto", P = "auto", S = null, $ = I(null), B = /* @__PURE__ */ function() {
      var z = rl(function* () {
        clearTimeout($.value), clearTimeout(S), $.value = null, $.value = setTimeout(/* @__PURE__ */ rl(function* () {
          var {
            width: M,
            height: b,
            left: w,
            top: j
          } = n.value.getBoundingClientRect();
          a.value = ce(M), t.value = ce(b), o.value = a.value, l.value = t.value, i.value = ce(j), s.value = ce(w), u.value = "fixed", V = i.value, P = s.value, p.value = !0, yield Vn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? am : 0);
      });
      return function() {
        return z.apply(this, arguments);
      };
    }(), C = () => {
      clearTimeout(S), clearTimeout($.value), $.value = null, o.value = a.value, l.value = t.value, i.value = V, s.value = P, v.value = "0px", f.value = "0", p.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", V = "auto", P = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      k(e["onUpdate:floating"], !1);
    }, O = (z) => {
      k(e.onClick, z);
    };
    return ie(() => e.floating, (z) => {
      c.value || Ve(() => {
        z ? B() : C();
      });
    }, {
      immediate: !0
    }), {
      n: nm,
      classes: rm,
      toSizeUnit: ce,
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
      isRow: c,
      close: D,
      showFloatingButtons: p,
      floated: y,
      handleClick: O
    };
  }
});
nu.render = om;
const Mr = nu;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var hS = Mr, im = {
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
  n: lm,
  classes: sm
} = ne("cell");
function um(e, n) {
  var r = le("var-icon"), a = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), e.iconClass))
      },
      [x(
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
    )) : ee("v-if", !0)]), A(
      "div",
      {
        class: m(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("extra"), e.extraClass))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var ru = _({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: im,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ce(e.borderOffset),
      "--cell-border-right": ce(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: lm,
      classes: sm,
      toSizeUnit: ce,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
ru.render = um;
const ir = ru;
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
} = ne("form-details"), fm = {
  key: 0
}, cm = {
  key: 0
};
function mm(e, n) {
  return h(), pe(
    Be,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [A(
          "div",
          {
            class: m(e.n("error-message"))
          },
          [x(
            Be,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                fm,
                re(e.errorMessage),
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
        ), A(
          "div",
          {
            class: m(e.n("extra-message"))
          },
          [x(
            Be,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                cm,
                re(e.extraMessage),
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
var au = _({
  name: "VarFormDetails",
  props: dm,
  setup: () => ({
    n: vm
  })
});
au.render = mm;
const je = au;
je.install = function(e) {
  e.component(je.name, je);
};
var yS = je, pm = {
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
}, tu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), ou = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function hm() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(tu), {
    length: r
  } = In(ou);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function gm() {
  var {
    bindParent: e,
    parentProvider: n
  } = On(tu), {
    index: r
  } = Bn(ou);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var iu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function hn() {
  var {
    bindParent: e,
    parentProvider: n
  } = On(iu), r = Gn(), a = e ? (t) => {
    e(Do({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function ym() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(iu);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: bm,
  classes: Cm
} = ne("checkbox");
function wm(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [we((h(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [x(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [x(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
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
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), x(
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
var lu = _({
  name: "VarCheckbox",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: pm,
  setup(e) {
    var n = I(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = I(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = gm(), {
      form: i,
      bindForm: s
    } = hn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = pn(), c = (C) => {
      Ve(() => {
        var {
          validateTrigger: D,
          rules: O,
          modelValue: z
        } = e;
        d(D, C, O, z);
      });
    }, p = (C) => {
      n.value = C;
      var {
        checkedValue: D,
        onChange: O
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(O, n.value), c("onChange"), C === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, y = (C) => {
      var {
        disabled: D,
        readonly: O,
        checkedValue: z,
        uncheckedValue: M,
        onClick: b
      } = e;
      if (!(i != null && i.disabled.value || D) && (k(b, C), !(i != null && i.readonly.value || O))) {
        t.value = !0;
        var w = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && w || p(r.value ? M : z);
      }
    }, g = (C) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e;
      n.value = C.includes(D) ? D : O;
    }, V = () => {
      t.value = !1;
    }, P = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, S = (C) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e, z = ![D, O].includes(C);
      z && (C = r.value ? O : D), p(C);
    }, $ = () => v(e.rules, e.modelValue);
    ie(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var B = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: $,
      resetValidation: f,
      reset: P,
      resetWithAnimation: V
    };
    return k(l, B), k(s, B), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: bm,
      classes: Cm,
      handleClick: y,
      toggle: S,
      reset: P,
      validate: $,
      resetValidation: f
    };
  }
});
lu.render = wm;
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: $m,
  classes: Tm
} = ne("checkbox-group");
function Om(e, n) {
  var r = le("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), x(
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
var su = _({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: km,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = hm(), {
      bindForm: l
    } = hn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = pn(), v = R(() => i.value), f = (D) => {
      Ve(() => {
        var {
          validateTrigger: O,
          rules: z,
          modelValue: M
        } = e;
        s(O, D, z, M);
      });
    }, c = (D) => {
      k(e["onUpdate:modelValue"], D), k(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) || c([...O, D]);
    }, y = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) && c(O.filter((z) => z !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: O
      } = D;
      return O(e.modelValue);
    }), V = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, P = () => {
      var D = t.map((z) => {
        var {
          checkedValue: M
        } = z;
        return M.value;
      }), O = Ui(D);
      return V(), k(e["onUpdate:modelValue"], O), O;
    }, S = () => {
      var D = t.filter((z) => {
        var {
          checked: M
        } = z;
        return !M.value;
      }).map((z) => {
        var {
          checkedValue: M
        } = z;
        return M.value;
      }), O = Ui(D);
      return V(), k(e["onUpdate:modelValue"], O), O;
    }, $ = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, B = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, g, {
      deep: !0
    }), ie(() => a.value, g);
    var C = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: B,
      resetValidation: d,
      reset: $,
      errorMessage: v
    };
    return o(C), k(l, C), {
      errorMessage: i,
      n: $m,
      classes: Tm,
      checkAll: P,
      inverseAll: S,
      reset: $,
      validate: B,
      resetValidation: d
    };
  }
});
su.render = Om;
const Ir = su;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var CS = Ir;
function Pm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Em = {
  type: {
    type: String,
    default: "default",
    validator: Pm
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
  iconName: Ke(gs, "name"),
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
  n: Kn,
  classes: Mm
} = ne("chip");
function Im(e, n) {
  var r = le("var-icon");
  return h(), pe(
    Be,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [W(e.$slots, "left"), A(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (h(), T(
          "span",
          {
            key: 0,
            class: m(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [x(
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
var uu = _({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Em,
  setup(e) {
    var n = R(() => {
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
    }), r = R(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = Kn(o ? "$--flex" : "$--inline-flex"), d = i ? Kn("plain") + " " + Kn("plain-" + l) : Kn("--" + l), v = s ? Kn("--round") : null;
      return [Kn("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: Kn,
      classes: Mm,
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
var wS = sr;
function Bm(e) {
  return ["row", "column"].includes(e);
}
function Nm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Dm(e) {
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
    validator: Bm
  },
  justify: {
    type: String,
    validator: Nm
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
  onClick: U()
}, du = Symbol("ROW_BIND_COL_KEY"), vu = Symbol("ROW_COUNT_COL_KEY");
function zm() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(du), {
    length: r
  } = In(vu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Lm() {
  var {
    parentProvider: e,
    bindParent: n
  } = On(du), {
    index: r
  } = Bn(vu);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: bt,
  classes: Rm
} = ne("col");
function Um(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
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
var fu = _({
  name: "VarCol",
  props: Am,
  setup(e) {
    var n = I({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Lm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ui(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(bt("--span-" + u + "-" + c)), f && v.push(bt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(bt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: bt,
      classes: Rm,
      padding: n,
      toNumber: L,
      toSizeUnit: ce,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: It
    };
  }
});
fu.render = Um;
const Br = fu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var SS = Br, cu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), mu = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Ym() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(cu), {
    length: r
  } = In(mu);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Hm
} = ne("collapse");
function jm(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var pu = _({
  name: "VarCollapse",
  props: Fm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Ym(), t = R(() => e.modelValue), o = R(() => e.offset), l = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (c, p) => l() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, p) => {
      var y = i(c, p);
      k(e["onUpdate:modelValue"], y), k(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: y
          } = p;
          return e.modelValue === y.value;
        });
      var c = r.filter((p) => {
        var {
          name: y
        } = p;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: y
      } = c;
      return y.value === void 0 && e.modelValue === p.value;
    }) : r.filter((c) => {
      var {
        index: p,
        name: y
      } = c;
      return y.value === void 0 && e.modelValue.includes(p.value);
    }), v = () => {
      if (l()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var y = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), ie(() => n.value, () => Ve().then(v)), ie(() => e.modelValue, () => Ve().then(v)), {
      n: Hm
    };
  }
});
pu.render = jm;
const Nr = pu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var kS = Nr;
function Wm() {
  var {
    parentProvider: e,
    bindParent: n
  } = On(cu), {
    index: r
  } = Bn(mu);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
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
  classes: Km
} = ne("collapse-item");
function Xm(e, n) {
  var r = le("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: m(e.n("header-title"))
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
          class: m(e.n("header-icon"))
        },
        [W(e.$slots, "icon", {}, () => [x(
          r,
          {
            name: e.icon,
            transition: 250,
            class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
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
        class: m(e.n("content")),
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
          class: m(e.n("content-wrap"))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Ea, e.show]])],
    2
    /* CLASS */
  );
}
var hu = _({
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
    } = Wm(), t = !0, o = I(null), l = I(!1), i = I(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = R(() => e.name), f = (S, $) => {
      s.value === void 0 || S && Ce(s.value) || $ === i.value || (i.value = $, c(!0));
    }, c = (S) => {
      e.disabled || S || d(e.name || n.value, !i.value);
    }, p = () => {
      o.value && (o.value.style.height = "", l.value = !0, Ve(() => {
        var {
          offsetHeight: S
        } = o.value;
        o.value.style.height = 0 + "px", kn(() => {
          o.value.style.height = S + "px", t && Kt(() => {
            t && V();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: S
        } = o.value;
        o.value.style.height = S + "px", kn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, V = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), ie(i, (S) => {
      S ? p() : g();
    }), {
      n: qm,
      start: y,
      classes: Km,
      show: l,
      isShow: i,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: V
    };
  }
});
hu.render = Xm;
const Dr = hu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var $S = Dr, Zm = {
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
  n: Jm
} = ne("countdown"), Ao = 1e3, zo = 60 * Ao, Lo = 60 * zo, al = 24 * Lo;
function Qm(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", si(xl(e.timeData)), () => [be(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var gu = _({
  name: "VarCountdown",
  props: Zm,
  setup(e) {
    var n = I(""), r = I({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (p, y) => {
      var g = Object.values(y), V = ["DD", "HH", "mm", "ss"], P = [24, 60, 60, 1e3];
      if (V.forEach(($, B) => {
        p.includes($) ? p = p.replace($, Ca("" + g[B], 2, "0")) : g[B + 1] += g[B] * P[B];
      }), p.includes("S")) {
        var S = Ca("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", S) : p.includes("SS") ? p = p.replace("SS", S.slice(0, 2)) : p = p.replace("S", S.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / al), g = Math.floor(p % al / Lo), V = Math.floor(p % Lo / zo), P = Math.floor(p % zo / Ao), S = Math.floor(p % Ao), $ = {
        days: y,
        hours: g,
        minutes: V,
        seconds: P,
        milliseconds: S
      };
      r.value = $, k(e.onChange, r.value), n.value = s(e.format, $);
    }, d = () => {
      var {
        time: p,
        onEnd: y
      } = e, g = performance.now();
      if (a || (a = g + L(p)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        k(y);
        return;
      }
      t && (o = kn(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, Gi(o);
    }, c = () => {
      a = 0, t = !1, Gi(o), d();
    };
    return ie(() => e.time, () => {
      c(), e.autoStart && v();
    }, {
      immediate: !0
    }), Za(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), gr(() => {
      i = t, f();
    }), Pa(f), {
      showTime: n,
      timeData: r,
      n: Jm,
      start: v,
      pause: f,
      reset: c
    };
  }
});
gu.render = Qm;
const Ar = gu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var TS = Ar;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Aa = 9e15, yr = 1e9, Ro = "0123456789abcdef", zt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Lt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Uo = {
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
}, yu, An, fe = !0, xt = "[DecimalError] ", pr = xt + "Invalid argument: ", bu = xt + "Precision limit exceeded", Cu = xt + "crypto unavailable", wu = "[object Decimal]", Ze = Math.floor, Ye = Math.pow, _m = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, xm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ep = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Su = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Sn = 1e7, de = 7, np = 9007199254740991, rp = zt.length - 1, Yo = Lt.length - 1, K = { toStringTag: wu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
K.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(pr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
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
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = ap(a, Pu(a, r)), a.precision = e, a.rounding = n, ue(An == 2 || An == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = We(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Oe(u.plus(d).times(i), u.plus(s), l + 2, 1), We(i.d).slice(0, l) === (r = We(a.d)).slice(0, l))
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
  return fe = !0, ue(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Oe(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Oe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / no(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = ja(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = ja(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / no(5, e)), t = ja(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Cn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Cn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Cn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Oe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Cn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Yo)
      return l = Cn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Yo)
      return l = Cn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(i / de), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), fe = !0, ue(l, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
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
  var n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
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
  if (fe = !1, i = v + c, l = rr(u, i), a = n ? Rt(d, i + 10) : rr(e, i), s = Oe(l, a, i, 1), lt(s.d, t = v, f))
    do
      if (i += 10, l = rr(u, i), a = n ? Rt(d, i + 10) : rr(e, i), s = Oe(l, a, i, 1), !o) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (lt(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, p = c.constructor;
  if (e = new p(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new p(NaN) : c.d ? e.s = -e.s : e = new p(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, i = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(c);
    else
      return new p(s === 3 ? -0 : 0);
    return fe ? ue(e, i, s) : e;
  }
  if (r = Ze(e.e / de), d = Ze(c.e / de), u = u.slice(), o = d - r, o) {
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
        u[t] = Sn - 1;
      --u[t], u[a] += Sn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = eo(u, r), fe ? ue(e, i, s) : e) : new p(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Fo(this);
};
K.naturalLogarithm = K.ln = function() {
  return rr(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, i, s) : e;
  if (o = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / de), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Sn | 0, u[t] %= Sn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = eo(u, a), fe ? ue(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(pr + e);
  return r.d ? (n = ku(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = op(a, Pu(a, r)), a.precision = e, a.rounding = n, ue(An > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (fe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = We(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(l, o, r + 2, 1)).times(0.5), We(o.d).slice(0, r) === (n = We(a.d)).slice(0, r))
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
  return fe = !0, ue(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(An == 2 || An == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + c[a] * f[t - a - 1] + n, o[t--] = i % Sn | 0, n = i / Sn | 0;
    o[t] = (o[t] + n) % Sn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = eo(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return $i(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, yr), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, !0) : (an(e, 0, yr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = En(t) : (an(e, 0, yr), n === void 0 ? n = o.rounding : an(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, p = c.d, y = c.constructor;
  if (!p)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = ku(p) - c.e - 1, l = o % de, n.d[0] = Ye(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(pr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (fe = !1, i = new y(We(p)), d = y.precision, y.precision = o = p.length * de * 2; v = Oe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Oe(u, a, o, 1).minus(c).abs().cmp(Oe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return $i(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : an(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Oe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return $i(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= np)
    return t = $u(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + We(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (fe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Fo(e.times(rr(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), lt(t.d, a, o) && (n = a + 10, t = ue(Fo(e.times(rr(i, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, fe = !0, s.rounding = o, ue(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, yr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, yr), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Zn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += Zn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(pr + e);
}
function lt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
}
function Ot(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Ro.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function ap(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / no(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = ja(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Oe = function() {
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
    var u, d, v, f, c, p, y, g, V, P, S, $, B, C, D, O, z, M, b, w, j = a.constructor, Q = a.s == t.s ? 1 : -1, F = a.d, E = t.d;
    if (!F || !F[0] || !E || !E[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (F ? E && F[0] == E[0] : !E) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !E ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Sn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), b = E.length, z = F.length, V = new j(Q), P = V.d = [], v = 0; E[v] == (F[v] || 0); v++)
      ;
    if (E[v] > (F[v] || 0) && d--, o == null ? (C = o = j.precision, l = j.rounding) : i ? C = o + (a.e - t.e) + 1 : C = o, C < 0)
      P.push(1), p = !0;
    else {
      if (C = C / c + 2 | 0, v = 0, b == 1) {
        for (f = 0, E = E[0], C++; (v < z || f) && C--; v++)
          D = f * s + (F[v] || 0), P[v] = D / E | 0, f = D % E | 0;
        p = f || v < z;
      } else {
        for (f = s / (E[0] + 1) | 0, f > 1 && (E = e(E, f, s), F = e(F, f, s), b = E.length, z = F.length), O = b, S = F.slice(0, b), $ = S.length; $ < b; )
          S[$++] = 0;
        w = E.slice(), w.unshift(0), M = E[0], E[1] >= s / 2 && ++M;
        do
          f = 0, u = n(E, S, b, $), u < 0 ? (B = S[0], b != $ && (B = B * s + (S[1] || 0)), f = B / M | 0, f > 1 ? (f >= s && (f = s - 1), y = e(E, f, s), g = y.length, $ = S.length, u = n(y, S, g, $), u == 1 && (f--, r(y, b < g ? w : E, g, s))) : (f == 0 && (u = f = 1), y = E.slice()), g = y.length, g < $ && y.unshift(0), r(S, y, $, s), u == -1 && ($ = S.length, u = n(E, S, b, $), u < 1 && (f++, r(S, b < $ ? w : E, $, s))), $ = S.length) : u === 0 && (f++, S = [0]), P[v++] = f, u && S[0] ? S[$++] = F[O] || 0 : (S = [F[O]], $ = 1);
        while ((O++ < z || S[0] !== void 0) && C--);
        p = S[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (c == 1)
      V.e = d, yu = p;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      V.e = v + d * c - 1, ue(V, i ? o + V.e + 1 : o, l, p);
    }
    return V;
  };
}();
function ue(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor;
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
            o != i && (e.e++, v[0] == Sn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Sn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function En(e, n, r) {
  if (!e.isFinite())
    return Ou(e);
  var a, t = e.e, o = We(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Zn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Zn(-t - 1) + o, r && (a = r - l) > 0 && (o += Zn(a))) : t >= l ? (o += Zn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Zn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Zn(a))), o;
}
function eo(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Rt(e, n, r) {
  if (n > rp)
    throw fe = !0, r && (e.precision = r), Error(bu);
  return ue(new e(zt), n, 1, !0);
}
function Cn(e, n, r) {
  if (n > Yo)
    throw Error(bu);
  return ue(new e(Lt), n, r, !0);
}
function ku(e) {
  var n = e.length - 1, r = n * de + 1;
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
function $u(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), ol(o.d, l) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), ol(n.d, l);
  }
  return fe = !0, o;
}
function tl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Tu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Fo(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = p) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Oe(o, r, s, 1)), We(i.d).slice(0, s) === We(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && lt(l.d, s - a, c, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = p, c, fe = !0);
      else
        return f.precision = p, l;
    }
    l = i;
  }
}
function rr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, c = 1, p = 10, y = e, g = y.d, V = y.constructor, P = V.rounding, S = V.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new V(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (fe = !1, d = S) : d = n, V.precision = d += p, r = We(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), c++;
    o = y.e, a > 1 ? (y = new V("0." + r), o++) : y = new V(a + "." + r.slice(1));
  } else
    return u = Rt(V, d + 2, S).times(o + ""), y = rr(new V(a + "." + r.slice(1)), d - p).plus(u), V.precision = S, n == null ? ue(y, S, P, fe = !0) : y;
  for (v = y, s = l = y = Oe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Oe(l, new V(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Rt(V, d + 2, S).times(o + ""))), s = Oe(s, new V(c), d, 1), n == null)
        if (lt(s.d, d - p, P, i))
          V.precision = d += p, u = l = y = Oe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = i = 1;
        else
          return ue(s, V.precision = S, P, fe = !0);
      else
        return V.precision = S, s;
    s = u, t += 2;
  }
}
function Ou(e) {
  return String(e.s * e.s / 0);
}
function Ho(e, n) {
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
    e.d.push(+n), fe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function tp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Su.test(n))
      return Ho(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (xm.test(n))
    r = 16, n = n.toLowerCase();
  else if (_m.test(n))
    r = 2;
  else if (ep.test(n))
    r = 8;
  else
    throw Error(pr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = $u(a, new a(r), o, o * 2)), u = Ot(n, r, Sn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = eo(u, d), e.d = u, fe = !1, l && (e = Oe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : ar.pow(2, s))), fe = !0, e);
}
function op(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : ja(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / no(5, r)), n = ja(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function ja(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Oe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Oe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return fe = !0, l.d.length = d + 1, l;
}
function no(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Pu(e, n) {
  var r, a = n.s < 0, t = Cn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return An = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    An = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return An = tl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    An = tl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function $i(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (an(r, 1, yr), a === void 0 ? a = c.rounding : an(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Ou(e);
  else {
    for (d = En(e), l = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - l, f.d = Ot(En(f), 10, t), f.e = f.d.length), v = Ot(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = yu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Ro.charAt(v[l]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ot(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Ro.charAt(v[l]);
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
function ol(e, n) {
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
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Cn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Cn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Cn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = Cn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
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
    throw Error(xt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    yr,
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
    if (r = o[n], t && (this[r] = Uo[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(pr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Uo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Cu);
      else
        this[r] = !1;
    else
      throw Error(pr + r + ": " + a);
  return this;
}
function bp(e) {
  return new this(e).cos();
}
function Cp(e) {
  return new this(e).cosh();
}
function Vu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, il(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        fe ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Ho(u, o.toString());
    } else if (s !== "string")
      throw Error(pr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Su.test(o) ? Ho(u, o) : tp(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = yp, t.clone = Vu, t.isDecimal = il, t.abs = ip, t.acos = lp, t.acosh = sp, t.add = up, t.asin = dp, t.asinh = vp, t.atan = fp, t.atanh = cp, t.atan2 = mp, t.cbrt = pp, t.ceil = hp, t.clamp = gp, t.cos = bp, t.cosh = Cp, t.div = wp, t.exp = Sp, t.floor = kp, t.hypot = $p, t.ln = Tp, t.log = Op, t.log10 = Vp, t.log2 = Pp, t.max = Ep, t.min = Mp, t.mod = Ip, t.mul = Bp, t.pow = Np, t.random = Dp, t.round = Ap, t.sign = zp, t.sin = Lp, t.sinh = Rp, t.sqrt = Up, t.sub = Yp, t.sum = Fp, t.tan = Hp, t.tanh = jp, t.trunc = Wp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function wp(e, n) {
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
  for (fe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return fe = !0, new this(1 / 0);
      r = n;
    }
  return fe = !0, r.sqrt();
}
function il(e) {
  return e instanceof ar || e && e.toStringTag === wu || !1;
}
function Tp(e) {
  return new this(e).ln();
}
function Op(e, n) {
  return new this(e).log(n);
}
function Pp(e) {
  return new this(e).log(2);
}
function Vp(e) {
  return new this(e).log(10);
}
function Ep() {
  return Tu(this, arguments, "lt");
}
function Mp() {
  return Tu(this, arguments, "gt");
}
function Ip(e, n) {
  return new this(e).mod(n);
}
function Bp(e, n) {
  return new this(e).mul(n);
}
function Np(e, n) {
  return new this(e).pow(n);
}
function Dp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : an(e, 1, yr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Cu);
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
function Yp(e, n) {
  return new this(e).sub(n);
}
function Fp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Hp(e) {
  return new this(e).tan();
}
function jp(e) {
  return new this(e).tanh();
}
function Wp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var ar = K.constructor = Vu(Uo);
zt = new ar(zt);
Lt = new ar(Lt);
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
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, {
  n: qp,
  classes: Kp
} = ne("counter"), ll = 100, sl = 600, Xp = ["inputmode", "readonly", "disabled"];
function Zp(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [we(x(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.formDisabled || e.readonly || e.formReadonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), we(A(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
        Xp
      ), [[kv, e.inputValue]]), we(x(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.formDisabled || e.formReadonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
      /* FULL_PROPS */
    ), x(
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
var Eu = _({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  inheritAttrs: !1,
  props: Gp,
  setup(e) {
    var n = I(""), r, a, t, o, {
      bindForm: l,
      form: i
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), {
      readonly: f,
      disabled: c
    } = i ?? {}, p = () => d(e.rules, e.modelValue), y = (E) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: Y,
          modelValue: X
        } = e;
        u(H, E, Y, X);
      });
    }, g = () => {
      var {
        min: E
      } = e;
      k(e["onUpdate:modelValue"], E != null ? L(E) : 0), v();
    }, V = {
      reset: g,
      validate: p,
      resetValidation: v
    }, P = R(() => {
      var {
        max: E,
        modelValue: H
      } = e;
      return E != null && L(H) >= L(E);
    }), S = R(() => {
      var {
        min: E,
        modelValue: H
      } = e;
      return E != null && L(H) <= L(E);
    }), $ = (E) => {
      var {
        decimalLength: H,
        max: Y,
        min: X
      } = e, N = L(E);
      return Y != null && N > L(Y) && (N = L(Y)), X != null && N < L(X) && (N = L(X)), E = String(N), H != null && (E = N.toFixed(L(H))), E;
    }, B = (E) => {
      var {
        lazyChange: H,
        onBeforeChange: Y
      } = e, {
        value: X
      } = E.target, N = $(X);
      H ? k(Y, L(N), F) : Q(N), y("onInputChange");
    }, C = () => {
      var {
        disabled: E,
        readonly: H,
        disableDecrement: Y,
        decrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || E || H || Y || !X) && !S.value) {
        var oe = new ar(L(G)).minus(new ar(L(Z))).toString(), ge = $(oe), he = L(ge);
        k(J, he), N ? k(ae, he, F) : (Q(ge), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: E,
        readonly: H,
        disableIncrement: Y,
        incrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || E || H || Y || !X) && !P.value) {
        var oe = new ar(L(G)).plus(new ar(L(Z))).toString(), ge = $(oe), he = L(ge);
        k(J, he), N ? k(ae, he, F) : (Q(ge), y("onIncrement"));
      }
    }, O = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (o = window.setTimeout(() => {
        j();
      }, sl));
    }, z = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (t = window.setTimeout(() => {
        w();
      }, sl));
    }, M = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, b = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, w = () => {
      r = window.setTimeout(() => {
        D(), w();
      }, ll);
    }, j = () => {
      a = window.setTimeout(() => {
        C(), j();
      }, ll);
    }, Q = (E) => {
      n.value = E;
      var H = L(E);
      k(e["onUpdate:modelValue"], H);
    }, F = (E) => {
      Q($(String(E))), y("onLazyChange");
    };
    return k(l, V), ie(() => e.modelValue, (E) => {
      Q($(String(E))), k(e.onChange, L(E));
    }), Q($(String(e.modelValue))), {
      n: qp,
      classes: Kp,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: P,
      isMin: S,
      validate: p,
      reset: g,
      resetValidation: v,
      handleChange: B,
      decrement: C,
      increment: D,
      pressDecrement: O,
      pressIncrement: z,
      releaseDecrement: M,
      releaseIncrement: b,
      toSizeUnit: ce,
      toNumber: L
    };
  }
});
Eu.render = Zp;
const zr = Eu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var OS = zr, Mu = 60, Iu = Mu * 60, Bu = Iu * 24, Jp = Bu * 7, Wa = 1e3, vo = Mu * Wa, ul = Iu * Wa, Qp = Bu * Wa, _p = Jp * Wa, Ti = "millisecond", za = "second", La = "minute", Ra = "hour", Jn = "day", Pt = "week", bn = "month", Nu = "quarter", Qn = "year", Ua = "date", xp = "YYYY-MM-DDTHH:mm:ssZ", dl = "Invalid Date", eh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, nh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const rh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var jo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ah = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + jo(t, 2, "0") + ":" + jo(o, 2, "0");
}, th = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, bn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), bn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, oh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ih = function(n) {
  var r = {
    M: bn,
    y: Qn,
    w: Pt,
    d: Jn,
    D: Ua,
    h: Ra,
    m: La,
    s: za,
    ms: Ti,
    Q: Nu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, lh = function(n) {
  return n === void 0;
};
const sh = {
  s: jo,
  z: ah,
  m: th,
  a: oh,
  p: ih,
  u: lh
};
var rt = "en", Lr = {};
Lr[rt] = rh;
var Oi = function(n) {
  return n instanceof ro;
}, Ut = function e(n, r, a) {
  var t;
  if (!n)
    return rt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Lr[o] && (t = o), r && (Lr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Lr[i] = n, t = i;
  }
  return !a && t && (rt = t), t || !a && rt;
}, te = function(n, r) {
  if (Oi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new ro(a);
}, uh = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = sh;
Te.l = Ut;
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
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, ro = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Ut(r.locale, null, !0), this.parse(r);
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
    return this.$d.toString() !== dl;
  }, n.isSame = function(a, t) {
    var o = te(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return te(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < te(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(V, P) {
      var S = Te.w(o.$u ? Date.UTC(o.$y, P, V) : new Date(o.$y, P, V), o);
      return l ? S : S.endOf(Jn);
    }, u = function(V, P) {
      var S = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Te.w(o.toDate()[V].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : $).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Qn:
        return l ? s(1, 0) : s(31, 11);
      case bn:
        return l ? s(1, v) : s(0, v + 1);
      case Pt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(l ? f - y : f + (6 - y), v);
      }
      case Jn:
      case Ua:
        return u(c + "Hours", 0);
      case Ra:
        return u(c + "Minutes", 1);
      case La:
        return u(c + "Seconds", 2);
      case za:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Jn] = i + "Date", o[Ua] = i + "Date", o[bn] = i + "Month", o[Qn] = i + "FullYear", o[Ra] = i + "Hours", o[La] = i + "Minutes", o[za] = i + "Seconds", o[Ti] = i + "Milliseconds", o)[l], u = l === Jn ? this.$D + (t - this.$W) : t;
    if (l === bn || l === Qn) {
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
      var c = te(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (i === bn)
      return this.set(bn, this.$M + a);
    if (i === Qn)
      return this.set(Qn, this.$y + a);
    if (i === Jn)
      return s(1);
    if (i === Pt)
      return s(7);
    var u = (l = {}, l[La] = vo, l[Ra] = ul, l[za] = Wa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || dl;
    var l = a || xp, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, p = function(S, $, B, C) {
      return S && (S[$] || S(t, l)) || B[$].slice(0, C);
    }, y = function(S) {
      return Te.s(s % 12 || 12, S, "0");
    }, g = c || function(P, S, $) {
      var B = P < 12 ? "AM" : "PM";
      return $ ? B.toLowerCase() : B;
    }, V = {
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
    return l.replace(nh, function(P, S) {
      return S || V[P] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * vo, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[Qn] = v / 12, l[bn] = v, l[Nu] = v / 3, l[Pt] = (d - u) / _p, l[Jn] = (d - u) / Qp, l[Ra] = d / ul, l[La] = d / vo, l[za] = d / Wa, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(bn).$D;
  }, n.$locale = function() {
    return Lr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Ut(a, t, !0);
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
}(), Du = ro.prototype;
te.prototype = Du;
[["$ms", Ti], ["$s", za], ["$m", La], ["$H", Ra], ["$W", Jn], ["$M", bn], ["$y", Qn], ["$D", Ua]].forEach(function(e) {
  Du[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, ro, te), e.$i = !0), te;
};
te.locale = Ut;
te.isDayjs = Oi;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Lr[rt];
te.Ls = Lr;
te.p = {};
const Au = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, zu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function vh(e) {
  return ["date", "month"].includes(e);
}
var Vt = [{
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
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: ch
} = ne("picker-header");
function mh(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [x(
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
        default: ve(() => [x(r, {
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
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [x(
        Be,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T(
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
    ), x(
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
        default: ve(() => [x(r, {
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
var Lu = _({
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
    } = n, a = I(!1), t = I(0), o = R(() => {
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
      n: ch,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Lu.render = mh;
const Ru = Lu;
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
te.extend(Au);
te.extend(zu);
var {
  n: Ct,
  classes: ph
} = ne("month-picker"), {
  n: wt
} = ne("date-picker");
function hh(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [x(
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
      ), x(
        Be,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("ul", {
            key: e.panelKey
          }, [(h(!0), T(
            Pe,
            null,
            Ne(e.MONTH_LIST, (t) => (h(), T("li", {
              key: t.index
            }, [x(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Wo({}, e.buttonProps(t.index)), {
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
var Uu = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Xe,
    PanelHeader: Ru
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
    } = n, [a, t] = e.current.split("-"), o = I(!1), l = I(0), i = I(null), s = Me({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (P) => {
      var S, $;
      return (S = ($ = He.value.datePickerMonthDict) == null ? void 0 : $[P].abbr) != null ? S : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: $,
          max: B
        }
      } = e, C = !0, D = !0, O = S + "-" + P;
      return B && (C = te(O).isSameOrBefore(te(B), "month")), $ && (D = te(O).isSameOrAfter(te($), "month")), C && D;
    }, c = (P) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: $,
          chooseRangeMonth: B
        },
        componentProps: {
          type: C,
          range: D
        }
      } = e;
      if (D) {
        if (!B.length)
          return !1;
        var O = te(P).isSameOrBefore(te(B[1]), "month"), z = te(P).isSameOrAfter(te(B[0]), "month");
        return O && z;
      }
      return C === "month" ? S.includes(P) : $.some((M) => M.includes(P));
    }, p = (P) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: $
        },
        componentProps: {
          allowedDates: B,
          color: C,
          multiple: D,
          range: O
        }
      } = e, z = $ + "-" + P, M = () => O || D ? c(z) : (S == null ? void 0 : S.index) === P && u.value, b = () => f(P) ? B ? !B(z) : !1 : !0, w = b(), j = () => w ? !0 : O || D ? !c(z) : !u.value || (S == null ? void 0 : S.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (O || D || u.value) && w ? !0 : O || D ? !c(z) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, F = () => w ? "" : Q() ? C ?? "" : M() ? "" : wt() + "-color-cover", E = F().startsWith(wt());
      return {
        outline: Q(),
        text: j(),
        color: j() ? "" : C,
        textColor: E ? "" : F(),
        [wt() + "-color-cover"]: E,
        class: ph(Ct("button"), [w, Ct("button--disabled")])
      };
    }, y = (P, S) => {
      var $ = S.currentTarget;
      $.classList.contains(Ct("button--disabled")) || r("choose-month", P);
    }, g = (P) => {
      o.value = P === "prev", l.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, V = (P) => {
      i.value.checkDate(P);
    };
    return ie(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: S,
          max: $
        }
      } = e;
      $ && (s.right = !te("" + (L(P) + 1)).isSameOrBefore(te($), "year")), S && (s.left = !te("" + (L(P) - 1)).isSameOrAfter(te(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Ct,
      nDate: wt,
      pack: He,
      MONTH_LIST: Vt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: V,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
Uu.render = hh;
const gh = Uu;
var {
  n: vl,
  classes: yh
} = ne("year-picker"), bh = ["onClick"];
function Ch(e, n) {
  return h(), T(
    "ul",
    {
      class: m(e.n())
    },
    [(h(!0), T(
      Pe,
      null,
      Ne(e.yearList, (r) => (h(), T(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        re(r),
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
var Yu = _({
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
    } = n, a = R(() => {
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
        var d = te(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), c = L(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var p = u[0]; p >= u[1]; p--)
        o.push(p);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return tn(() => {
      var o = document.querySelector("." + vl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: vl,
      classes: yh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Yu.render = Ch;
const wh = Yu;
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Go.apply(this, arguments);
}
te.extend(Au);
te.extend(zu);
var {
  n: Da,
  classes: Sh
} = ne("day-picker"), {
  n: St
} = ne("date-picker");
function kh(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [x(
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
      ), x(
        Be,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(h(!0), T(
              Pe,
              null,
              Ne(e.sortWeekList, (t) => (h(), T(
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
              class: m(e.n("body"))
            },
            [(h(!0), T(
              Pe,
              null,
              Ne(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [x(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Go({}, e.buttonProps(t)), {
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
var Fu = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Xe,
    PanelHeader: Ru
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
    } = n, [a, t, o] = e.current.split("-"), l = I([]), i = I(!1), s = I(0), u = I(null), d = Me({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var O;
      return e.choose.chooseYear === e.preview.previewYear && ((O = e.choose.chooseMonth) == null ? void 0 : O.index) === e.preview.previewMonth.index;
    }), c = R(() => {
      var O = nt.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return O === -1 || O === 0 ? nt : nt.slice(O).concat(nt.slice(0, O));
    }), p = (O) => {
      var z, M;
      return (z = (M = He.value.datePickerWeekDict) == null ? void 0 : M[O].abbr) != null ? z : "";
    }, y = (O) => O > 0 ? O : "", g = () => {
      var {
        preview: {
          previewMonth: O,
          previewYear: z
        }
      } = e, M = te(z + "-" + O.index).daysInMonth(), b = te(z + "-" + O.index + "-01").day(), w = c.value.findIndex((j) => j.index === "" + b);
      l.value = [...Array(w).fill(-1), ...Array.from(Array(M + 1).keys())].filter((j) => j);
    }, V = () => {
      var {
        preview: {
          previewYear: O,
          previewMonth: z
        },
        componentProps: {
          max: M,
          min: b
        }
      } = e;
      if (M) {
        var w = O + "-" + (L(z.index) + 1);
        d.right = !te(w).isSameOrBefore(te(M), "month");
      }
      if (b) {
        var j = O + "-" + (L(z.index) - 1);
        d.left = !te(j).isSameOrAfter(te(b), "month");
      }
    }, P = (O) => {
      var {
        preview: {
          previewYear: z,
          previewMonth: M
        },
        componentProps: {
          min: b,
          max: w
        }
      } = e, j = !0, Q = !0, F = z + "-" + M.index + "-" + O;
      return w && (j = te(F).isSameOrBefore(te(w), "day")), b && (Q = te(F).isSameOrAfter(te(b), "day")), j && Q;
    }, S = (O) => {
      var {
        choose: {
          chooseDays: z,
          chooseRangeDay: M
        },
        componentProps: {
          range: b
        }
      } = e;
      if (b) {
        if (!M.length)
          return !1;
        var w = te(O).isSameOrBefore(te(M[1]), "day"), j = te(O).isSameOrAfter(te(M[0]), "day");
        return w && j;
      }
      return z.includes(O);
    }, $ = (O) => {
      if (O < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Da("button")
        };
      var {
        choose: {
          chooseDay: z
        },
        preview: {
          previewYear: M,
          previewMonth: b
        },
        componentProps: {
          allowedDates: w,
          color: j,
          multiple: Q,
          range: F
        }
      } = e, E = M + "-" + b.index + "-" + O, H = () => F || Q ? S(E) : L(z) === O && f.value, Y = () => P(O) ? w ? !w(E) : !1 : !0, X = Y(), N = () => X ? !0 : F || Q ? !S(E) : !f.value || L(z) !== O, Z = () => v.value && L(o) === O && e.componentProps.showCurrent ? (F || Q || f.value) && X ? !0 : F || Q ? !S(E) : f.value ? z !== o : !0 : !1, G = () => X ? "" : Z() ? j ?? "" : H() ? "" : St() + "-color-cover", J = G().startsWith(St());
      return {
        text: N(),
        outline: Z(),
        textColor: J ? "" : G(),
        [St() + "-color-cover"]: J,
        class: Sh(Da("button"), Da("button--usable"), [X, Da("button--disabled")])
      };
    }, B = (O) => {
      i.value = O === "prev", s.value += O === "prev" ? -1 : 1, r("check-preview", "month", O);
    }, C = (O, z) => {
      var M = z.currentTarget;
      M.classList.contains(Da("button--disabled")) || r("choose-day", O);
    }, D = (O) => {
      u.value.checkDate(O);
    };
    return tn(() => {
      g(), V();
    }), ie(() => e.preview, () => {
      g(), V();
    }), {
      n: Da,
      nDate: St,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: B,
      chooseDay: C,
      buttonProps: $
    };
  }
});
Fu.render = kh;
const $h = Fu;
var {
  n: Th,
  classes: Oh
} = ne("date-picker");
function Ph(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
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
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [x(
          Be,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (h(), T("div", {
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
              )])])) : (h(), T("div", {
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
              )]) : W(e.$slots, "date", si(Ee({
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
        class: m(e.n("body")),
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
      [x(
        Be,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), pe(
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
          )) : e.getPanelType === "month" ? (h(), pe(
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
          )) : e.getPanelType === "date" ? (h(), pe(
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
var Hu = _({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: gh,
    YearPickerPanel: wh,
    DayPickerPanel: $h
  },
  props: fh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Vt.find((se) => se.index === i), u = I(!1), d = I(!1), v = I(!0), f = I(), c = I(), p = I(), y = I(s), g = I(l), V = I(!1), P = I([]), S = I([]), $ = I([]), B = I([]), C = I(null), D = I(null), O = Me({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), z = R(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: P.value,
      chooseDays: S.value,
      chooseRangeMonth: $.value,
      chooseRangeDay: B.value
    })), M = R(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), b = R(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return $.value.length ? $.value[0] + " ~ " + $.value[1] : "";
      var me = "";
      if (f.value) {
        var Se, ke;
        me = (Se = (ke = He.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + P.value.length + He.value.datePickerSelected : me;
    }), w = R(() => {
      var se, ye, me, Se, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Je = B.value.map((lo) => te(lo).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + S.value.length + He.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var dn = te(c.value + "-" + f.value.index + "-" + p.value).day(), Na = nt.find((lo) => lo.index === "" + dn), zi = (se = (ye = He.value.datePickerWeekDict) == null ? void 0 : ye[Na.index].name) != null ? se : "", yv = (me = (Se = He.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? me : "", bv = Ca(p.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + bv + " " + zi.slice(0, 3) : zi.slice(0, 3) + ", " + yv.slice(0, 3) + " " + p.value;
    }), j = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(j.value)), F = R(() => {
      var se, ye, me, Se, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Re = p.value ? Ca(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (me = (Se = f.value) == null ? void 0 : Se.index) != null ? me : "",
        date: Re
      };
    }), E = R(() => z.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), H = R(() => c.value === g.value), Y = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), X = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: me
        } = se.touches[0];
        n = ye, r = me;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", G = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: me
        } = se.touches[0], Se = ye - n, ke = me - r;
        t = Z(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(Q.value || t !== "x")) {
        var se = j.value === "month" ? C : D;
        Kt(() => {
          se.value.forwardRef(a), Ai();
        });
      }
    }, ae = (se, ye) => {
      var me = ye === "month" ? $ : B;
      if (me.value = v.value ? [se, se] : [me.value[0], se], v.value = !v.value, v.value) {
        var Se = te(me.value[0]).isAfter(me.value[1]), ke = Se ? [me.value[1], me.value[0]] : [...me.value];
        k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var me = ye === "month" ? P : S, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = me.value.map((Je) => te(Je).format(Se)), Re = ke.findIndex((Je) => Je === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : H.value ? se === "month" ? ye.index < f.value.index : Y.value ? ye < L(p.value) : f.value.index > y.value.index : c.value > g.value, he = (se) => {
      var {
        readonly: ye,
        range: me,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        V.value = ge("day", se);
        var Je = g.value + "-" + y.value.index + "-" + se, dn = te(Je).format("YYYY-MM-DD");
        me ? ae(dn, "day") : Se ? oe(dn, "day") : (k(Re, dn), k(ke, dn));
      }
    }, Fe = (se) => {
      var {
        type: ye,
        readonly: me,
        range: Se,
        multiple: ke,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": dn
      } = e;
      if (V.value = ge("month", se), ye === "month" && !me) {
        var Na = g.value + "-" + se.index;
        Se ? ae(Na, "month") : ke ? oe(Na, "month") : (k(dn, Na), k(Re, Na));
      } else
        y.value = se, k(Je, L(g.value), L(y.value.index));
      d.value = !1;
    }, en = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, k(e.onPreview, L(g.value), L(y.value.index));
    }, on = (se, ye) => {
      var me = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + me);
      else {
        var Se = L(y.value.index) + me;
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), y.value = Vt.find((ke) => L(ke.index) === Se);
      }
      k(e.onPreview, L(g.value), L(y.value.index));
    }, Le = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, un = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, pv = (se, ye) => {
      var me = ye === "month" ? $ : B, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((dn) => te(dn).format(Se)).slice(0, 2), Re = me.value.some((dn) => un(dn));
      if (!Re) {
        me.value = ke;
        var Je = te(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && Je && (me.value = [me.value[1], me.value[0]]);
      }
    }, hv = (se, ye) => {
      var me = ye === "month" ? P : S, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Se))));
      me.value = ke.filter((Re) => Re !== "Invalid Date");
    }, gv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!un(ye)) {
        var [me, Se, ke] = ye.split("-"), Re = Vt.find((Je) => Je.index === Se);
        f.value = Re, c.value = me, p.value = ke, y.value = Re, g.value = me;
      }
    }, Ai = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!Le() || un(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, pv(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          hv(se, e.type);
        } else
          gv(se);
    }, {
      immediate: !0
    }), ie(j, Ai), {
      n: Th,
      classes: Oh,
      monthPanelEl: C,
      dayPanelEl: D,
      reverse: V,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: b,
      getDateTitle: w,
      getPanelType: j,
      getChoose: z,
      getPreview: M,
      componentProps: O,
      slotProps: F,
      formatRange: E,
      clickEl: X,
      handleTouchstart: N,
      handleTouchmove: G,
      handleTouchend: J,
      getChooseDay: he,
      getChooseMonth: Fe,
      getChooseYear: en,
      checkPreview: on
    };
  }
});
Hu.render = Ph;
const Rr = Hu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var PS = Rr;
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qo.apply(this, arguments);
}
function Vh(e) {
  return ["left", "center", "right"].includes(e);
}
var Eh = qo({
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
  onBeforeClose: U(),
  onConfirm: U(),
  onCancel: U(),
  "onUpdate:show": U()
}, Ke(mt, [
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
  n: Mh,
  classes: Ih
} = ne("dialog");
function Bh(e, n) {
  var r = le("var-button"), a = le("var-popup");
  return h(), pe(
    a,
    {
      class: m(e.n("popup")),
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
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Ko({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("title"))
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
            class: m(e.n("message")),
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
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (h(), pe(
            r,
            {
              key: 0,
              class: m(e.classes(e.n("button"), e.n("cancel-button"))),
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
          )) : ee("v-if", !0), e.confirmButton ? (h(), pe(
            r,
            {
              key: 1,
              class: m(e.classes(e.n("button"), e.n("confirm-button"))),
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
var ju = _({
  name: "VarDialog",
  components: {
    VarPopup: fn,
    VarButton: Xe
  },
  inheritAttrs: !1,
  props: Eh,
  setup(e) {
    var n = I(!1), r = I(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (k(s), !!i) {
        if (u != null) {
          u("close", a);
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
        i("confirm", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (k(s), i != null) {
        i("cancel", a);
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
      n: Mh,
      classes: Ih,
      pack: He,
      dt: Gt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ce
    };
  }
});
ju.render = Bh;
const ur = ju;
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
var xn, Ft = {};
function Nh(e) {
  return e === void 0 && (e = {}), Ge(e) ? Yt({}, Ft, {
    message: e
  }) : Yt({}, Ft, e);
}
function ka(e) {
  return ct() ? new Promise((n) => {
    ka.close();
    var r = Nh(e), a = Me(r);
    a.teleport = "body", xn = a;
    var {
      unmountInstance: t
    } = _a(ur, a, {
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
        k(a.onClosed), t(), xn === a && (xn = null);
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
  Ft = e;
}
function Ah() {
  Ft = {};
}
function zh() {
  if (xn != null) {
    var e = xn;
    xn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ka, {
  setDefaultOptions: Dh,
  resetDefaultOptions: Ah,
  close: zh
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
ka.install = function(e) {
  e.component(ur.name, ur);
};
ka.Component = ur;
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
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ya.apply(this, arguments);
}
var {
  n: Rh,
  classes: Uh
} = ne("divider");
function Yh(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (h(), T(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Wu = _({
  name: "VarDivider",
  props: Lh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Me({
      withText: !1
    }), t = R(() => go(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (go(i) || i === 0)
        return Ya({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Ya({}, d, {
        height: "calc(80% - " + ce(f) + ")"
      }) : Ya({}, d, {
        width: "calc(100% - " + ce(f) + ")",
        left: v > 0 ? ce(f) : ce(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return tn(() => {
      l();
    }), Wt(() => {
      l();
    }), Ya({
      n: Rh,
      classes: Uh
    }, $v(a), {
      style: o,
      isInset: t
    });
  }
});
Wu.render = Yh;
const Ur = Wu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var ES = Ur, Fh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Et(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Fh[n];
  });
}
var zn = "top", hr = "bottom", $a = "right", dr = "left", ao = "auto", to = [zn, hr, $a, dr], oo = "start", st = "end", Hh = "clippingParents", Gu = "viewport", xa = "popper", jh = "reference", fl = /* @__PURE__ */ to.reduce(function(e, n) {
  return e.concat([n + "-" + oo, n + "-" + st]);
}, []), qu = /* @__PURE__ */ [].concat(to, [ao]).reduce(function(e, n) {
  return e.concat([n, n + "-" + oo, n + "-" + st]);
}, []), Wh = "beforeRead", Gh = "read", qh = "afterRead", Kh = "beforeMain", Xh = "main", Zh = "afterMain", Jh = "beforeWrite", Qh = "write", _h = "afterWrite", Xo = [Wh, Gh, qh, Kh, Xh, Zh, Jh, Qh, _h];
function Ln(e) {
  return e.split("-")[0];
}
var xh = {
  start: "end",
  end: "start"
};
function cl(e) {
  return e.replace(/start|end/g, function(n) {
    return xh[n];
  });
}
function gn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ta(e) {
  var n = gn(e).Element;
  return e instanceof n || e instanceof Element;
}
function cn(e) {
  var n = gn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Pi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = gn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function br(e) {
  return ((Ta(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var at = Math.max, ml = Math.min, Ga = Math.round;
function Zo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ku() {
  return !/^((?!chrome|android).)*safari/i.test(Zo());
}
function qa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Ga(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ga(a.height) / e.offsetHeight || 1);
  var l = Ta(e) ? gn(e) : window, i = l.visualViewport, s = !Ku() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Vi(e) {
  var n = gn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ei(e) {
  return qa(br(e)).left + Vi(e).scrollLeft;
}
function eg(e, n) {
  var r = gn(e), a = br(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = Ku();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Ei(e),
    y: s
  };
}
function $n(e) {
  return gn(e).getComputedStyle(e);
}
function ng(e) {
  var n, r = br(e), a = Vi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = at(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = at(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ei(e), s = -a.scrollTop;
  return $n(t || r).direction === "rtl" && (i += at(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Mn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function io(e) {
  return Mn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    br(e)
  );
}
function Mi(e) {
  var n = $n(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Xu(e) {
  return ["html", "body", "#document"].indexOf(Mn(e)) >= 0 ? e.ownerDocument.body : cn(e) && Mi(e) ? e : Xu(io(e));
}
function tt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Xu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = gn(a), l = t ? [o].concat(o.visualViewport || [], Mi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(tt(io(l)))
  );
}
function rg(e) {
  return ["table", "td", "th"].indexOf(Mn(e)) >= 0;
}
function pl(e) {
  return !cn(e) || // https://github.com/popperjs/popper-core/issues/837
  $n(e).position === "fixed" ? null : e.offsetParent;
}
function ag(e) {
  var n = /firefox/i.test(Zo()), r = /Trident/i.test(Zo());
  if (r && cn(e)) {
    var a = $n(e);
    if (a.position === "fixed")
      return null;
  }
  var t = io(e);
  for (Pi(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(Mn(t)) < 0; ) {
    var o = $n(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ii(e) {
  for (var n = gn(e), r = pl(e); r && rg(r) && $n(r).position === "static"; )
    r = pl(r);
  return r && (Mn(r) === "html" || Mn(r) === "body" && $n(r).position === "static") ? n : r || ag(e) || n;
}
function tg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Pi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Jo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, n) {
  var r = qa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function hl(e, n, r) {
  return n === Gu ? Jo(eg(e, r)) : Ta(n) ? og(n, r) : Jo(ng(br(e)));
}
function ig(e) {
  var n = tt(io(e)), r = ["absolute", "fixed"].indexOf($n(e).position) >= 0, a = r && cn(e) ? Ii(e) : e;
  return Ta(a) ? n.filter(function(t) {
    return Ta(t) && tg(t, a) && Mn(t) !== "body";
  }) : [];
}
function lg(e, n, r, a) {
  var t = n === "clippingParents" ? ig(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = hl(e, u, a);
    return s.top = at(d.top, s.top), s.right = ml(d.right, s.right), s.bottom = ml(d.bottom, s.bottom), s.left = at(d.left, s.left), s;
  }, hl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ut(e) {
  return e.split("-")[1];
}
function sg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Ln(a) : null, o = a ? ut(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case zn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case hr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case $a:
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
  var u = t ? sg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case oo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case st:
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
function Ju(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Hh : i, u = r.rootBoundary, d = u === void 0 ? Gu : u, v = r.elementContext, f = v === void 0 ? xa : v, c = r.altBoundary, p = c === void 0 ? !1 : c, y = r.padding, g = y === void 0 ? 0 : y, V = dg(typeof g != "number" ? g : vg(g, to)), P = f === xa ? jh : xa, S = e.rects.popper, $ = e.elements[p ? P : f], B = lg(Ta($) ? $ : $.contextElement || br(e.elements.popper), s, d, l), C = qa(e.elements.reference), D = Zu({
    reference: C,
    element: S,
    strategy: "absolute",
    placement: t
  }), O = Jo(Object.assign({}, S, D)), z = f === xa ? O : C, M = {
    top: B.top - z.top + V.top,
    bottom: z.bottom - B.bottom + V.bottom,
    left: B.left - z.left + V.left,
    right: z.right - B.right + V.right
  }, b = e.modifiersData.offset;
  if (f === xa && b) {
    var w = b[t];
    Object.keys(M).forEach(function(j) {
      var Q = [$a, hr].indexOf(j) >= 0 ? 1 : -1, F = [zn, hr].indexOf(j) >= 0 ? "y" : "x";
      M[j] += w[F] * Q;
    });
  }
  return M;
}
function fg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? qu : s, d = ut(a), v = d ? i ? fl : fl.filter(function(p) {
    return ut(p) === d;
  }) : to, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, y) {
    return p[y] = Ju(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Ln(y)], p;
  }, {});
  return Object.keys(c).sort(function(p, y) {
    return c[p] - c[y];
  });
}
function cg(e) {
  if (Ln(e) === ao)
    return [];
  var n = Et(e);
  return [cl(e), n, cl(n)];
}
function mg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, g = n.options.placement, V = Ln(g), P = V === g, S = s || (P || !p ? [Et(g)] : cg(g)), $ = [g].concat(S).reduce(function(ae, oe) {
      return ae.concat(Ln(oe) === ao ? fg(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : oe);
    }, []), B = n.rects.reference, C = n.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, z = $[0], M = 0; M < $.length; M++) {
      var b = $[M], w = Ln(b), j = ut(b) === oo, Q = [zn, hr].indexOf(w) >= 0, F = Q ? "width" : "height", E = Ju(n, {
        placement: b,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), H = Q ? j ? $a : dr : j ? hr : zn;
      B[F] > C[F] && (H = Et(H));
      var Y = Et(H), X = [];
      if (o && X.push(E[w] <= 0), i && X.push(E[H] <= 0, E[Y] <= 0), X.every(function(ae) {
        return ae;
      })) {
        z = b, O = !1;
        break;
      }
      D.set(b, X);
    }
    if (O)
      for (var N = p ? 3 : 1, Z = function(oe) {
        var ge = $.find(function(he) {
          var Fe = D.get(he);
          if (Fe)
            return Fe.slice(0, oe).every(function(en) {
              return en;
            });
        });
        if (ge)
          return z = ge, "break";
      }, G = N; G > 0; G--) {
        var J = Z(G);
        if (J === "break")
          break;
      }
    n.placement !== z && (n.modifiersData[a]._skip = !0, n.placement = z, n.reset = !0);
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
  var a = Ln(e), t = [dr, zn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [dr, $a].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function gg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = qu.reduce(function(d, v) {
    return d[v] = hg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
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
function Cg(e) {
  return e === gn(e) || !cn(e) ? Vi(e) : bg(e);
}
function wg(e) {
  var n = e.getBoundingClientRect(), r = Ga(n.width) / e.offsetWidth || 1, a = Ga(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Sg(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && wg(n), o = br(n), l = qa(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Mn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Mi(o)) && (i = Cg(n)), cn(n) ? (s = qa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ei(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function kg(e) {
  var n = qa(e), r = e.offsetWidth, a = e.offsetHeight;
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
function Tg(e) {
  var n = $g(e);
  return Xo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Og(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Xn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Cr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Pg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', gl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), gl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Xn(Cr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Xn(Cr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Xo.indexOf(n.phase) < 0 && console.error(Xn(Cr, n.name, '"phase"', "either " + Xo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Xn(Cr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Xn(Cr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Xn(Cr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Xn(Cr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + gl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Xn(Pg, String(n.name), a, a));
      });
    });
  });
}
function Eg(e, n) {
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
var yl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ig = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", bl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Cl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Bg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? bl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(V) {
        var P = typeof V == "function" ? V(d.options) : V;
        y(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Ta(i) ? tt(i) : i.contextElement ? tt(i.contextElement) : [],
          popper: tt(s)
        };
        var S = Tg(Mg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(b) {
          return b.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Eg([].concat(S, d.options.modifiers), function(b) {
            var w = b.name;
            return w;
          });
          if (Vg($), Ln(d.options.placement) === ao) {
            var B = d.orderedModifiers.find(function(b) {
              var w = b.name;
              return w === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var C = $n(s), D = C.marginTop, O = C.marginRight, z = C.marginBottom, M = C.marginLeft;
          [D, O, z, M].some(function(b) {
            return parseFloat(b);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var V = d.elements, P = V.reference, S = V.popper;
          if (!Cl(P, S)) {
            process.env.NODE_ENV !== "production" && console.error(yl);
            return;
          }
          d.rects = {
            reference: Sg(P, Ii(S), d.options.strategy === "fixed"),
            popper: kg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
            return d.modifiersData[b.name] = Object.assign({}, b.data);
          });
          for (var $ = 0, B = 0; B < d.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Ig);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, B = -1;
              continue;
            }
            var C = d.orderedModifiers[B], D = C.fn, O = C.options, z = O === void 0 ? {} : O, M = C.name;
            typeof D == "function" && (d = D({
              state: d,
              options: z,
              name: M,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Og(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Cl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(yl), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var V = g.name, P = g.options, S = P === void 0 ? {} : P, $ = g.effect;
        if (typeof $ == "function") {
          var B = $({
            state: d,
            name: V,
            instance: c,
            options: S
          }), C = function() {
          };
          v.push(B || C);
        }
      });
    }
    function y() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return c;
  };
}
var kt = {
  passive: !0
};
function Ng(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = gn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, kt);
  }), i && s.addEventListener("resize", r.update, kt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, kt);
    }), i && s.removeEventListener("resize", r.update, kt);
  };
}
const Dg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ng,
  data: {}
};
function Ag(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Zu({
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
    x: Ga(n * t) / t || 0,
    y: Ga(r * t) / t || 0
  };
}
function wl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, c = f === void 0 ? 0 : f, p = l.y, y = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = g.x, y = g.y;
  var V = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), S = dr, $ = zn, B = window;
  if (u) {
    var C = Ii(r), D = "clientHeight", O = "clientWidth";
    if (C === gn(r) && (C = br(r), $n(C).position !== "static" && i === "absolute" && (D = "scrollHeight", O = "scrollWidth")), C = C, t === zn || (t === dr || t === $a) && o === st) {
      $ = hr;
      var z = v && C === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[D]
      );
      y -= z - a.height, y *= s ? 1 : -1;
    }
    if (t === dr || (t === zn || t === hr) && o === st) {
      S = $a;
      var M = v && C === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[O]
      );
      c -= M - a.width, c *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: i
  }, u && Lg), w = d === !0 ? Rg({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = w.x, y = w.y, s) {
    var j;
    return Object.assign({}, b, (j = {}, j[$] = P ? "0" : "", j[S] = V ? "0" : "", j.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, b, (n = {}, n[$] = P ? y + "px" : "", n[S] = V ? c + "px" : "", n.transform = "", n));
}
function Ug(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = $n(n.elements.popper).transitionProperty || "";
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, wl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, wl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Yg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ug,
  data: {}
};
function Fg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !cn(o) || !Mn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
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
      var t = n.elements[a], o = n.attributes[a] || {}, l = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !cn(t) || !Mn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const jg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fg,
  effect: Hg,
  requires: ["computeStyles"]
};
var Wg = [Dg, zg, Yg, jg], Gg = /* @__PURE__ */ Bg({
  defaultModifiers: Wg
});
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
function Sl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function kl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
function Qu(e) {
  var n = I(null), r = I(null), a = I(!1), t = I({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = pt(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: C,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: De(C),
      height: De(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, $());
  }, v = /* @__PURE__ */ function() {
    var C = kl(function* () {
      e.trigger === "hover" && (s = !1, yield Vn(), !i && B());
    });
    return function() {
      return C.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, c = /* @__PURE__ */ function() {
    var C = kl(function* () {
      e.trigger === "hover" && (i = !1, yield Vn(), !s && B());
    });
    return function() {
      return C.apply(this, arguments);
    };
  }(), p = () => {
    $();
  }, y = () => {
    a.value = !1, k(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, V = () => {
    u();
    var C = {
      x: De(e.offsetX),
      y: De(e.offsetY)
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
  }, P = () => {
    var {
      placement: C,
      skidding: D,
      distance: O
    } = V(), z = [Ht({}, pg, {
      enabled: a.value
    }), Ht({}, yg, {
      options: {
        offset: [D, O]
      }
    })];
    return {
      placement: C,
      modifiers: z
    };
  }, S = () => {
    l.setOptions(P());
  }, $ = () => {
    var {
      disabled: C
    } = e;
    C || (a.value = !0, k(e["onUpdate:show"], !0));
  }, B = () => {
    a.value = !1, k(e["onUpdate:show"], !1);
  };
  return us(n, "click", g), ie(() => e.show, (C) => {
    a.value = C ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, S), ie(() => e.offsetY, S), ie(() => e.placement, S), ie(() => a.value, (C) => {
    C ? (S(), k(e.onOpen)) : k(e.onClose);
  }), ie(() => e.disabled, B), Xa(() => {
    l = Gg(n.value, r.value, P());
  }), Pa(() => {
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
    handlePopoverMouseleave: c,
    resize: S,
    open: $,
    close: B
  };
}
function qg(e) {
  return ["click", "hover"].includes(e);
}
function Kg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Xg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Zg = {
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
    validator: qg
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Kg
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
  n: Jg,
  classes: Qg
} = ne("tooltip");
function _g(e, n) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
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
    [W(e.$slots, "default"), (h(), pe(
      Va,
      {
        to: e.teleport
      },
      [x(
        Be,
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
              class: m(e.n("tooltip")),
              style: q({
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
            [A(
              "div",
              {
                style: q({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
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
          ), [[Ea, e.show]])]),
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
var _u = _({
  name: "VarTooltip",
  props: Zg,
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
      close: c,
      // expose
      resize: p
    } = Qu(e);
    return {
      toSizeUnit: ce,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Jg,
      classes: Qg,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: p,
      open: f,
      close: c
    };
  }
});
_u.render = _g;
const vr = _u;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var MS = vr;
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
var {
  n: ny,
  classes: ry
} = ne("ellipsis"), ay = {
  key: 0
};
function ty(e, n) {
  var r = le("var-tooltip");
  return h(), pe(
    r,
    si(xl(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          ay,
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
          class: m(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
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
var xu = _({
  name: "VarEllipsis",
  components: {
    VarTooltip: vr
  },
  props: ey,
  setup(e) {
    var n = I(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Qo({
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
xu.render = ty;
const Yr = xu;
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
  type: {
    type: String,
    default: "primary",
    validator: Ds
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
  zIndex: {
    type: [String, Number],
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function uy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ja(e);
}
var {
  classes: $l,
  n: yn
} = ne("fab");
const Fr = _({
  name: "VarFab",
  inheritAttrs: !1,
  props: sy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = I(!1), o = I(null), {
      disabled: l
    } = Xt(), i = R({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f, k(e["onUpdate:active"], f);
      }
    }), s = (f, c) => {
      f.stopPropagation(), !(e.trigger !== "click" || e.disabled) && (i.value = c, k(i.value ? e.onOpen : e.onClose));
    }, u = (f) => {
      e.trigger !== "hover" || e.disabled || (i.value = f, k(i.value ? e.onOpen : e.onClose));
    }, d = () => {
      e.trigger !== "click" || e.disabled || i.value !== !1 && (i.value = !1, k(e.onClose));
    }, v = () => {
      var f = ds(r.default == null ? void 0 : r.default());
      return x("div", Ee({
        class: $l(yn(), yn("--position-" + e.position), yn("--direction-" + e.direction)),
        style: {
          zIndex: L(e.zIndex),
          top: ce(e.top),
          bottom: ce(e.bottom),
          left: ce(e.left),
          right: ce(e.right)
        },
        ref: o,
        onClick: (c) => s(c, !i.value),
        onMouseleave: () => u(!1),
        onMouseenter: () => u(!0)
      }, a), [x(Be, {
        name: yn("--active-transition")
      }, {
        default: () => [r.trigger ? r.trigger == null ? void 0 : r.trigger() : x(Xe, {
          "var-fab-cover": !0,
          class: yn("trigger"),
          type: e.type,
          color: e.color,
          disabled: e.disabled,
          round: !0
        }, {
          default: () => [x($e, {
            "var-fab-cover": !0,
            class: $l([i.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
            name: i.value ? e.activeIcon : e.inactiveIcon,
            size: i.value ? e.inactiveIconSize : e.activeIconSize,
            transition: 200,
            animationClass: yn("--trigger-icon-animation")
          }, null)]
        })]
      }), x(Be, {
        name: yn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(x("div", {
          class: yn("actions"),
          onClick: (c) => c.stopPropagation()
        }, [f.map((c) => x("div", {
          class: yn("action")
        }, [c]))]), [[Ea, i.value && f.length]])]
      })]);
    };
    return ie(() => e.active, (f) => {
      t.value = f;
    }, {
      immediate: !0
    }), ie(() => e.trigger, () => {
      i.value = !1;
    }), us(o, "click", d), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var c;
        return x(Va, {
          to: f,
          disabled: l.value
        }, uy(c = v()) ? c : {
          default: () => [c]
        });
      }
      return v();
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var BS = Fr;
function dy(e) {
  return ["start", "end"].includes(e);
}
var vy = {
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
    validator: dy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Tl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Tl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Tl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: cy
} = ne("form");
function my(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var ed = _({
  name: "VarForm",
  props: vy,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = ym(), o = (d, v) => {
      setTimeout(() => {
        var f = Ba(v), c = f === window ? 0 : Wi(f), p = Wi(v) - c - De(e.scrollToErrorOffsetY);
        ot(f, {
          top: p,
          animation: yo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = fy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: V
          } = g;
          return V();
        }));
        if (e.scrollToError) {
          var [, f] = Ev(v, (g) => g === !1, e.scrollToError), c = f > -1;
          if (c) {
            var p, y = (p = a[f].instance.proxy) == null ? void 0 : p.$el;
            o(f, y);
          }
          return !c;
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
      n: cy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
ed.render = my;
const Rn = ed;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
Rn.useValidation = pn;
Rn.useForm = hn;
var NS = Rn;
function py(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var hy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: py,
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
  n: gy,
  classes: yy
} = ne("image"), by = ["alt", "title", "lazy-error", "lazy-loading"], Cy = ["alt", "title", "src"];
function wy(e, n) {
  var r = Ae("lazy"), a = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((h(), T(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
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
      by
    )), [[r, e.src]]) : (h(), T(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
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
      Cy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var nd = _({
  name: "VarImage",
  directives: {
    Lazy: it,
    Ripple: ze
  },
  props: hy,
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
      n: gy,
      classes: yy,
      toSizeUnit: ce,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
nd.render = wy;
const Hr = nd;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var DS = Hr, rd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), ad = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Sy() {
  var {
    childProviders: e,
    bindChildren: n
  } = Tn(rd), {
    length: r
  } = In(ad);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var td = {
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
function Ol(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ky(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var $y = 250, Ty = 20, {
  n: Oy,
  classes: Py
} = ne("swipe"), Vy = ["onClick"];
function Ey(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
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
    }, () => [e.indicator && e.length ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), T(
        Pe,
        null,
        Ne(e.length, (r, a) => (h(), T(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: q({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Vy
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
var od = _({
  name: "VarSwipe",
  props: td,
  setup(e) {
    var n = I(null), r = I(0), a = R(() => e.vertical), t = I(0), o = I(0), l = I(!1), i = I(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Sy(), v = !1, f = -1, c, p, y, g, V, P = (N) => s.find((Z) => {
      var {
        index: G
      } = Z;
      return G.value === N;
    }), S = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, $ = (N) => {
      var Z = xe(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: G
      } = e;
      return Z <= -1 ? G ? -1 : 0 : Z >= d.value ? G ? d.value : d.value - 1 : Z;
    }, B = (N) => {
      var {
        loop: Z
      } = e;
      return N === -1 ? Z ? d.value - 1 : 0 : N === d.value ? Z ? 0 : d.value - 1 : N;
    }, C = (N) => {
      var {
        loop: Z
      } = e;
      return N < 0 ? Z ? d.value - 1 : 0 : N > d.value - 1 ? Z ? 0 : d.value - 1 : N;
    }, D = (N) => {
      var Z = o.value >= r.value, G = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      l.value = !0, (Z || G) && (l.value = !0, o.value = G ? J : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Kt(() => {
        l.value = !1, k(N);
      });
    }, O = () => {
      i.value = C(L(e.initialIndex));
    }, z = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (M(), f = window.setTimeout(() => {
        E(), z();
      }, L(N)));
    }, M = () => {
      f && clearTimeout(f);
    }, b = (N, Z) => {
      if (N > Z && N > 10)
        return "horizontal";
      if (Z > N && Z > 10)
        return "vertical";
    }, w = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0];
        c = Z, p = G, y = performance.now(), v = !0, M(), D(() => {
          l.value = !0;
        });
      }
    }, j = (N) => {
      var {
        touchable: Z,
        vertical: G
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: J,
          clientY: ae
        } = N.touches[0], oe = Math.abs(J - c), ge = Math.abs(ae - p), he = b(oe, ge), Fe = G ? "vertical" : "horizontal";
        if (he === Fe) {
          N.preventDefault();
          var en = g !== void 0 ? J - g : 0, on = V !== void 0 ? ae - V : 0;
          g = J, V = ae, o.value += G ? on : en, S();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: Z
        } = e, G = N ? V < p : g < c, J = Math.abs(N ? p - V : c - g), ae = performance.now() - y <= $y && J >= Ty, oe = ae ? $(G ? i.value + 1 : i.value - 1) : $();
        v = !1, l.value = !1, g = void 0, V = void 0, o.value = oe * -r.value;
        var ge = i.value;
        i.value = B(oe), z(), ge !== i.value && k(Z, i.value);
      }
    }, F = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), z(), setTimeout(() => {
        l.value = !1;
      }));
    }, E = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = C(J + 1), (N == null ? void 0 : N.event) !== !1 && k(G, i.value), D(() => {
          if (J === d.value - 1 && Z) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, H = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = C(J - 1), (N == null ? void 0 : N.event) !== !1 && k(G, i.value), D(() => {
          if (J === 0 && Z) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, Y = (N, Z) => {
      if (!(d.value <= 1 || N === i.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var G = N > i.value ? E : H, J = Math.abs(N - i.value);
        Array.from({
          length: J
        }).forEach((ae, oe) => {
          G({
            event: oe === J - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), ie(() => d.value, /* @__PURE__ */ ky(function* () {
      yield Vn(), O(), F();
    })), Za(F), gr(M), Pa(M), wa(window, "resize", F), {
      n: Oy,
      classes: Py,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: w,
      handleTouchmove: j,
      handleTouchend: Q,
      next: E,
      prev: H,
      to: Y,
      resize: F,
      toNumber: L
    };
  }
});
od.render = Ey;
const Un = od;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var AS = Un;
function My() {
  var {
    bindParent: e,
    parentProvider: n
  } = On(rd), {
    index: r
  } = Bn(ad);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Iy
} = ne("swipe-item");
function By(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
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
var id = _({
  name: "VarSwipeItem",
  setup() {
    var e = I(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = My(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Iy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
id.render = By;
const Yn = id;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var zS = Yn;
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
var Ny = _o({
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
}, Ke(td, ["loop", "indicator", "onChange"]), Ke(mt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Pl,
  classes: Dy
} = ne("image-preview"), Vl = 12, El = 200, Ay = 350, Ml = 200, zy = ["src", "alt"];
function Ly(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
  return h(), pe(
    o,
    {
      class: m(e.n("popup")),
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
      default: ve(() => [x(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(h(!0), T(
            Pe,
            null,
            Ne(e.images, (l) => (h(), pe(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [A(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
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
                      class: m(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    zy
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
            }, () => [e.indicator && e.images.length > 1 ? (h(), T(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : ee("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), pe(
        t,
        {
          key: 0,
          class: m(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : ee("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("extra"))
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
var ld = _({
  name: "VarImagePreview",
  components: {
    VarSwipe: Un,
    VarSwipeItem: Yn,
    VarPopup: fn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ny,
  setup(e) {
    var n = I(!1), r = R(() => {
      var {
        images: M,
        current: b
      } = e, w = M.findIndex((j) => j === b);
      return w >= 0 ? w : 0;
    }), a = I(1), t = I(0), o = I(0), l = I(void 0), i = I(void 0), s = I(!0), u = null, d = null, v = null, f = (M, b) => {
      var {
        clientX: w,
        clientY: j
      } = M, {
        clientX: Q,
        clientY: F
      } = b;
      return Math.abs(Math.sqrt(Math.pow(Q - w, 2) + Math.pow(F - j, 2)));
    }, c = (M, b) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: Date.now(),
      target: b
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Ml);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (M) => d ? f(d, M) <= Vl && M.timestamp - d.timestamp <= El && d.target === M.target : !1, V = (M) => !M || !u || !d ? !1 : f(u, d) <= Vl && Date.now() - d.timestamp < Ay && (M === u.target || M.parentNode === u.target), P = (M) => {
      v = window.setTimeout(() => {
        V(M.target) && z(), u = null;
      }, El);
    }, S = (M) => {
      v && window.clearTimeout(v);
      var {
        touches: b
      } = M, w = c(b[0], M.currentTarget);
      if (u = w, g(w)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = w;
    }, $ = (M) => {
      var {
        offsetWidth: b,
        offsetHeight: w
      } = M, {
        naturalWidth: j,
        naturalHeight: Q
      } = M.querySelector("." + Pl("image"));
      return {
        width: b,
        height: w,
        imageRadio: Q / j,
        rootRadio: w / b,
        zoom: L(e.zoom)
      };
    }, B = (M) => {
      var {
        zoom: b,
        imageRadio: w,
        rootRadio: j,
        width: Q,
        height: F
      } = $(M);
      if (!w)
        return 0;
      var E = w > j ? F / w : Q;
      return Math.max(0, (b * E - Q) / 2) / b;
    }, C = (M) => {
      var {
        zoom: b,
        imageRadio: w,
        rootRadio: j,
        width: Q,
        height: F
      } = $(M);
      if (!w)
        return 0;
      var E = w > j ? F : Q * w;
      return Math.max(0, (b * E - F) / 2) / b;
    }, D = (M, b, w) => M + b >= w ? w : M + b <= -w ? -w : M + b, O = (M) => {
      if (d) {
        var b = M.currentTarget, {
          touches: w
        } = M, j = c(w[0], b);
        if (a.value > 1) {
          var Q = j.clientX - d.clientX, F = j.clientY - d.clientY, E = B(b), H = C(b);
          t.value = D(t.value, Q, E), o.value = D(o.value, F, H);
        }
        d = j;
      }
    }, z = () => {
      if (a.value > 1) {
        y(), setTimeout(() => k(e["onUpdate:show"], !1), Ml);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (M) => {
      n.value = M;
    }, {
      immediate: !0
    }), {
      n: Pl,
      classes: Dy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: S,
      handleTouchmove: O,
      handleTouchend: P,
      close: z
    };
  }
});
ld.render = Ly;
const fr = ld;
var er;
function jn(e) {
  if (ct()) {
    jn.close();
    var n = Ge(e) ? {
      images: [e]
    } : Ce(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", er = r;
    var {
      unmountInstance: a
    } = _a(fr, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), er === r && (er = null);
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
jn.close = () => {
  if (er != null) {
    var e = er;
    er = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
fr.install = function(e) {
  e.component(fr.name, fr);
};
jn.install = function(e) {
  e.component(fr.name, fr);
};
jn.Component = fr;
var LS = fr, Mt = {
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
function Il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ry,
  classes: Uy
} = ne("sticky");
function Yy(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
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
        class: m(e.n("wrapper")),
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
var sd = _({
  name: "VarSticky",
  props: Mt,
  setup(e) {
    var n = I(null), r = I(null), a = I(!1), t = I("0px"), o = I("0px"), l = I("auto"), i = I("auto"), s = I("auto"), u = I("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => De(e.offsetTop)), c, p = () => {
      var {
        cssMode: S,
        disabled: $
      } = e;
      if (!$) {
        var B = 0;
        if (c !== window) {
          var {
            top: C
          } = c.getBoundingClientRect();
          B = C;
        }
        var D = r.value, O = n.value, {
          top: z,
          left: M
        } = O.getBoundingClientRect(), b = z - B;
        return b <= f.value ? (S || (l.value = O.offsetWidth + "px", i.value = O.offsetHeight + "px", t.value = B + f.value + "px", o.value = M + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: b,
          isFixed: !1
        });
      }
    }, y = () => {
      if (c) {
        var S = p();
        S && k(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var S = Bl(function* () {
        a.value = !1, yield Uv(), p();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var S = Bl(function* () {
        yield Vn(), c = Ba(n.value), c !== window && c.addEventListener("scroll", y), y();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), P = () => {
      c !== window && c.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, g), tn(V), Pa(P), gr(P), wa(window, "scroll", y), {
      n: Ry,
      classes: Uy,
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
sd.render = Yy;
const Fn = sd;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var RS = Fn, ud = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), dd = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Fy() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(ud), {
    length: r
  } = In(dd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Hy() {
  var {
    parentProvider: e,
    bindParent: n
  } = On(ud), {
    index: r
  } = Bn(dd);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var jy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Wy,
  classes: Gy
} = ne("index-anchor");
function qy(e, n) {
  return h(), pe(
    Qa(e.sticky ? e.n("$-sticky") : e.Transition),
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
        Ee({
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
var vd = _({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Fn
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Hy(), t = I(0), o = I(!1), l = R(() => e.index), i = I(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, p = (g) => {
      o.value = g;
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(y), {
      n: Wy,
      classes: Gy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Be
    };
  }
});
vd.render = qy;
const jr = vd;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var US = jr, Ky = {
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
function Nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $t(e) {
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
  n: Xy,
  classes: Zy
} = ne("index-bar"), Jy = ["onClick"];
function Qy(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), A(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), T(
        Pe,
        null,
        Ne(e.anchorNameList, (r) => (h(), T(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
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
var fd = _({
  name: "VarIndexBar",
  props: Ky,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Fy(), t = I(""), o = I(null), l = I([]), i = I(), s = R(() => e.sticky), u = R(() => e.cssMode), d = R(() => De(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, c = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(c);
    var p = (C, D) => {
      var O = ui(C) ? C.name.value : C;
      O === i.value || O === void 0 || (i.value = O, (D == null ? void 0 : D.event) !== !1 && k(e.onChange, O));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: C
      } = f.getBoundingClientRect(), {
        scrollTop: D
      } = f, {
        top: O
      } = o.value.getBoundingClientRect();
      return D - C + O;
    }, g = () => {
      var C = qt(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, O = y();
      r.forEach((z, M) => {
        var b = z.ownTop.value, w = C - b + d.value - O, j = M === r.length - 1 ? D : r[M + 1].ownTop.value - z.ownTop.value;
        w >= 0 && w < j && t.value === "" && (M && !e.cssMode && r[M - 1].setDisabled(!0), z.setDisabled(!1), p(z));
      });
    }, V = /* @__PURE__ */ function() {
      var C = $t(function* (D) {
        var {
          anchorName: O,
          manualCall: z = !1,
          options: M
        } = D;
        if (z && k(e.onClick, O), O !== i.value) {
          var b = r.find((F) => {
            var {
              name: E
            } = F;
            return O === E.value;
          });
          if (b) {
            var w = y(), j = b.ownTop.value - d.value + w, Q = fi(f);
            t.value = O, p(O, M), yield ot(f, {
              left: Q,
              top: j,
              animation: rs,
              duration: L(e.duration)
            }), Kt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return C.apply(this, arguments);
      };
    }(), P = /* @__PURE__ */ function() {
      var C = $t(function* () {
        yield Vn(), f = Ba(o.value);
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", g);
    }, $ = () => {
      f.removeEventListener("scroll", g);
    }, B = (C, D) => {
      kn(() => V({
        anchorName: C,
        options: D
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ $t(function* () {
      yield Vn(), r.forEach((C) => {
        var {
          name: D,
          setOwnTop: O
        } = C;
        D.value && l.value.push(D.value), O();
      });
    })), tn(/* @__PURE__ */ $t(function* () {
      yield P(), S();
    })), ft($), gr($), {
      n: Xy,
      classes: Zy,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: B,
      anchorClick: V
    };
  }
});
fd.render = Qy;
const Wr = fd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var YS = Wr;
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
  onFocus: U(),
  onBlur: U(),
  onClick: U(),
  onClear: U(),
  onInput: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: fo,
  classes: eb
} = ne("input"), nb = ["id", "disabled", "type", "value", "maxlength", "rows"], rb = ["id", "disabled", "type", "value", "maxlength"], ab = ["for"];
function tb(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), T(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : ee("v-if", !0), e.textarea ? (h(), T(
          "textarea",
          {
            key: 1,
            class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
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
          nb
        )) : (h(), T(
          "input",
          {
            key: 2,
            class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
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
          rb
        )), A(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: q({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          re(e.placeholder),
          15,
          ab
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), pe(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
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
    ), e.line ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
    )) : ee("v-if", !0), x(
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
var cd = _({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: xy,
  setup(e) {
    var n = I("var-input-" + Gn().uid), r = I(null), a = I(!1), t = R(() => e.type === "number" ? "text" : e.type), o = R(() => {
      var {
        maxlength: E,
        modelValue: H
      } = e;
      return E ? Dn(H) ? "0 / " + E : String(H).length + "/" + E : "";
    }), {
      bindForm: l,
      form: i
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), f = (E) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: Y,
          modelValue: X
        } = e;
        u(H, E, Y, X);
      });
    }, c = () => {
      var {
        hint: E,
        modelValue: H
      } = e;
      if (!E && !Dn(H))
        return fo("--placeholder-hidden");
      if (E && (!Dn(H) || a.value))
        return fo("--placeholder-hint");
    }, p = (E) => {
      a.value = !0, k(e.onFocus, E), f("onFocus");
    }, y = (E) => {
      a.value = !1, k(e.onBlur, E), f("onBlur");
    }, g = (E) => {
      var H = E.target, {
        value: Y
      } = H;
      return e.type === "number" && (Y = D(Y)), Y = z(O(Y)), H.value = Y, Y;
    }, V = (E) => {
      Object.assign(E.target, {
        composing: !0
      });
    }, P = (E) => {
      var H = E.target;
      H.composing && (H.composing = !1, H.dispatchEvent(new Event("input")));
    }, S = (E) => {
      var {
        composing: H
      } = E.target;
      if (!H) {
        var Y = g(E);
        k(e["onUpdate:modelValue"], Y), k(e.onInput, Y, E), f("onInput");
      }
    }, $ = (E) => {
      var H = g(E);
      k(e.onChange, H, E), f("onChange");
    }, B = () => {
      var {
        disabled: E,
        readonly: H,
        clearable: Y,
        onClear: X
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || E || H || !Y || (k(e["onUpdate:modelValue"], ""), k(X, ""), f("onClear"));
    }, C = (E) => {
      var {
        disabled: H,
        onClick: Y
      } = e;
      i != null && i.disabled.value || H || (k(Y, E), f("onClick"));
    }, D = (E) => {
      var H = E.indexOf("-"), Y = E.indexOf(".");
      return H > -1 && (E = H === 0 ? "-" + E.replace(/-/g, "") : E.replace(/-/g, "")), Y > -1 && (E = E.slice(0, Y + 1) + E.slice(Y).replace(/\./g, "")), E.replace(/[^-0-9.]/g, "");
    }, O = (E) => e.modelModifiers.trim ? E.trim() : E, z = (E) => e.maxlength ? E.slice(0, L(e.maxlength)) : E, M = (E) => {
      var {
        disabled: H,
        readonly: Y
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || H || Y || E.stopPropagation();
    }, b = () => {
      k(e["onUpdate:modelValue"], ""), v();
    }, w = () => d(e.rules, e.modelValue), j = () => {
      var E;
      (E = r.value) == null || E.focus();
    }, Q = () => {
      r.value.blur();
    }, F = {
      reset: b,
      validate: w,
      resetValidation: v
    };
    return k(l, F), tn(() => {
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
      n: fo,
      classes: eb,
      isEmpty: Dn,
      computePlaceholderState: c,
      handleFocus: p,
      handleBlur: y,
      handleInput: S,
      handleChange: $,
      handleClear: B,
      handleClick: C,
      handleTouchstart: M,
      handleCompositionStart: V,
      handleCompositionEnd: P,
      validate: w,
      resetValidation: v,
      reset: b,
      focus: j,
      blur: Q
    };
  }
});
cd.render = tb;
const cr = cd;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var FS = cr;
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
  onClick: U()
}, {
  n: sb,
  classes: ub
} = ne("link");
function db(e, n) {
  return h(), pe(
    Qa(e.tag),
    Ee(e.linkProps, {
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
var md = _({
  name: "VarLink",
  props: lb,
  setup(e) {
    var n = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = R(() => {
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
      n: sb,
      classes: ub,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ce
    };
  }
});
md.render = db;
const Gr = md;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var HS = Gr, vb = {
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
function Dl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Dl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Dl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: cb,
  classes: mb
} = ne("list");
function pb(e, n) {
  var r = le("var-loading"), a = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: m(e.n("loading"))
      },
      [A(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        re(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), x(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [we((h(), T(
      "div",
      {
        class: m(e.n("error")),
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
    )), [[a]])]) : ee("v-if", !0), A(
      "div",
      {
        class: m(e.n("detector")),
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
var pd = _({
  name: "VarList",
  directives: {
    Ripple: ze
  },
  components: {
    VarLoading: wn
  },
  props: vb,
  setup(e) {
    var n = I(null), r = I(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = fb(function* () {
        yield Ve();
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
    return tn(() => {
      a = Ba(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Pa(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: Gt,
      isNumber: xe,
      load: t,
      check: l,
      n: cb,
      classes: mb
    };
  }
});
pd.render = pb;
const qr = pd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var jS = qr, hb = {
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
  n: Al
} = ne("loading-bar");
const yb = _({
  name: "VarLoadingBar",
  props: hb,
  setup(e) {
    return () => x("div", {
      class: gb(Al(), [e.error, Al("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ce(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ce(e.top)
      }
    }, null);
  }
});
var hd, zl, gd = {}, bb = {
  value: 0,
  opacity: 0,
  error: !1
}, qe = Me(bb), Cb = (e) => {
  Object.assign(qe, e);
}, wb = (e) => {
  Object.assign(qe, e), gd = e;
}, Sb = () => {
  Object.keys(gd).forEach((e) => {
    qe[e] !== void 0 && (qe[e] = void 0);
  });
}, yd = () => {
  hd = window.setTimeout(() => {
    if (!(qe.value >= 95)) {
      var e = Math.random();
      qe.value < 70 && (e = Math.round(5 * Math.random())), qe.value += e, yd();
    }
  }, 200);
}, kb = () => {
  zl || (zl = !0, _a(yb, qe)), (!qe.error || qe.value === 100) && (qe.value = 0), setTimeout(() => {
    qe.opacity = 1;
  }, 200), yd();
}, $b = () => {
  qe.value = 100, setTimeout(() => {
    qe.opacity = 0, setTimeout(() => {
      qe.error = !1;
    }, 250);
  }, 300), window.clearTimeout(hd);
}, Tb = () => {
  qe.error = !0, jt.start(), setTimeout(jt.finish, 300);
}, jt = {
  start: kb,
  finish: $b,
  error: Tb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Cb,
  setDefaultOptions: wb,
  resetDefaultOptions: Sb
}, WS = jt;
const xo = jt;
function Ob(e) {
  return ["click", "hover"].includes(e);
}
function Pb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Vb = {
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
    validator: Ob
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Eb,
  classes: Mb
} = ne("menu");
function Ib(e, n) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
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
    [W(e.$slots, "default"), (h(), pe(
      Va,
      {
        to: e.teleport
      },
      [x(
        Be,
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
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Pn(() => {
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
          ), [[Ea, e.show]])]),
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
var bd = _({
  name: "VarMenu",
  props: Vb,
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
      close: c,
      // expose
      resize: p
    } = Qu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: ce,
      n: Eb,
      classes: Mb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: p,
      open: f,
      close: c
    };
  }
});
bd.render = Ib;
const Hn = bd;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var GS = Hn, Cd = Symbol("SELECT_BIND_OPTION_KEY"), wd = Symbol("SELECT_COUNT_OPTION_KEY");
function Bb() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(Cd), {
    length: r
  } = In(wd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Nb() {
  var {
    bindParent: e,
    parentProvider: n
  } = On(Cd), {
    index: r
  } = Bn(wd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Db = {
  label: {},
  value: {}
}, {
  n: Ab,
  classes: zb
} = ne("option");
function Lb(e, n) {
  var r = le("var-checkbox"), a = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
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
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: q({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), pe(
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
    )) : ee("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
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
var Sd = _({
  name: "VarOption",
  directives: {
    Ripple: ze
  },
  components: {
    VarCheckbox: lr
  },
  props: Db,
  setup(e) {
    var n = I(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = Nb(), {
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), c = (y) => {
      n.value = y;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return ie([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), l(p), {
      n: Ab,
      classes: zb,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Sd.render = Lb;
const Kr = Sd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var qS = Kr, Rb = {
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
function Ub(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ja(e);
}
var {
  n: Ll
} = ne("overlay");
const Xr = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Rb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = pt(() => e.show, 1), {
      disabled: o
    } = Xt(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    Zt(() => e.show, () => e.lockScroll);
    var i = () => x("div", Ee({
      class: Ll(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [k(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return x(Be, {
        name: Ll("--fade")
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
        return x(Va, {
          to: u,
          disabled: o.value
        }, Ub(d = s()) ? d : {
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
var KS = Xr, Yb = {
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
  n: Fb,
  classes: Hb
} = ne("pagination"), jb = ["item-mode", "onClick"];
function Wb(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), l = Ae("ripple");
  return h(), T(
    "ul",
    {
      class: m(e.n())
    },
    [we((h(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [W(e.$slots, "prev", {}, () => [x(r, {
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
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [x(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleValue, i)),
          onKeydown: n[3] || (n[3] = Li((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
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
          class: m(e.n("simple-line"))
        },
        null,
        2
        /* CLASS */
      )])],
      2
      /* CLASS */
    )) : (h(!0), T(
      Pe,
      {
        key: 1
      },
      Ne(e.pageList, (i, s) => we((h(), T(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          re(i),
          1
          /* TEXT */
        )],
        10,
        jb
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((h(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [W(e.$slots, "next", {}, () => [x(r, {
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
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [x(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), T(
            Pe,
            null,
            Ne(e.sizeOption, (i, s) => we((h(), pe(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
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
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
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
            ), x(
              r,
              {
                class: m(e.n("size--open-icon")),
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        re(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), x(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.inputValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.inputValue, i)),
          onKeydown: n[9] || (n[9] = Li((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (h(), T(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var kd = _({
  name: "VarPagination",
  components: {
    VarMenu: Hn,
    VarIcon: $e,
    VarCell: ir,
    VarInput: cr
  },
  directives: {
    Ripple: ze
  },
  props: Yb,
  setup(e) {
    var n = I(!1), r = I(""), a = I("1"), t = I(!1), o = I(!1), l = I(L(e.current) || 1), i = I(L(e.size) || 10), s = I([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var $ = i.value * (l.value - 1) + 1, B = Math.min(i.value * l.value, L(e.total));
      return [$, B];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), c = ($, B) => xe($) ? !1 : B === 1 ? t.value : o.value, p = ($, B) => xe($) ? "basic" : B === 1 ? "head" : "tail", y = ($, B) => {
      $ === l.value || e.disabled || (xe($) ? l.value = $ : $ === "prev" ? l.value > 1 && (l.value -= 1) : $ === "next" ? l.value < d.value && (l.value += 1) : $ === "..." && (B === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, V = ($) => {
      i.value = $, n.value = !1;
    }, P = ($) => {
      var B = /^[1-9][0-9]*$/;
      return B.test($);
    }, S = ($, B, C) => {
      if (C.target.blur(), P(B)) {
        var D = L(B);
        D > d.value && (D = d.value, a.value = "" + D), D !== l.value && (l.value = D);
      }
      $ === "quick" && (r.value = ""), $ === "simple" && !P(B) && (a.value = "" + l.value);
    };
    return ie([() => e.current, () => e.size], ($) => {
      var [B, C] = $;
      l.value = L(B) || 1, i.value = L(C || 10);
    }), ie([l, i, d], ($, B) => {
      var [C, D, O] = $, [z, M] = B, b = [], {
        maxPagerCount: w,
        total: j,
        onChange: Q
      } = e, F = Math.ceil(L(j) / L(M)), E = O - (w - u.value) - 1;
      if (a.value = "" + C, O - 2 > w) {
        if (z === void 0 || O !== F)
          for (var H = 2; H < w + 2; H++)
            b.push(H);
        if (C <= w && C < E) {
          b = [];
          for (var Y = 1; Y < w + 1; Y++)
            b.push(Y + 1);
          t.value = !0, o.value = !1;
        }
        if (C > w && C < E) {
          b = [];
          for (var X = 1; X < w + 1; X++)
            b.push(C + X - u.value);
          t.value = C === 2 && w === 1, o.value = !1;
        }
        if (C >= E) {
          b = [];
          for (var N = 1; N < w + 1; N++)
            b.push(O - (w - N) - 1);
          t.value = !1, o.value = !0;
        }
        b = [1, "...", ...b, "...", O];
      } else
        for (var Z = 1; Z <= O; Z++)
          b.push(Z);
      s.value = b, z !== void 0 && O > 0 && k(Q, C, D), k(e["onUpdate:current"], C), k(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Fb,
      classes: Hb,
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
      isHideEllipsis: c,
      clickItem: y,
      showMenu: g,
      clickSize: V,
      setPage: S,
      toNumber: L
    };
  }
});
kd.render = Wb;
const Zr = kd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var XS = Zr, Gb = {
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
  n: qb,
  classes: Kb
} = ne("paper");
function Xb(e, n) {
  var r = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
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
var $d = _({
  name: "VarPaper",
  directives: {
    Ripple: ze
  },
  props: Gb,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: qb,
      classes: Kb,
      toSizeUnit: ce,
      handleClick: n
    };
  }
});
$d.render = Xb;
const Jr = $d;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var ZS = Jr;
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
var Zb = ei({
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
}, Ke(mt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Jb,
  classes: Qb
} = ne("picker"), Rl = 300, _b = 15, Ul = 0, xb = ["onTouchstart", "onTouchmove", "onTouchend"], e0 = ["onTransitionend"];
function n0(e, n) {
  var r = le("var-button");
  return h(), pe(
    Qa(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
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
        Ee({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("toolbar"))
          },
          [W(e.$slots, "cancel", {}, () => [x(
            r,
            {
              class: m(e.n("cancel-button")),
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
              class: m(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), W(e.$slots, "confirm", {}, () => [x(
            r,
            {
              class: m(e.n("confirm-button")),
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
        )) : ee("v-if", !0), A(
          "div",
          {
            class: m(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), T(
            Pe,
            null,
            Ne(e.scrollColumns, (a) => (h(), T(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), T(
                  Pe,
                  null,
                  Ne(a.column.texts, (t) => (h(), T(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: q({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
                      "div",
                      {
                        class: m(e.n("text"))
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
                e0
              )],
              42,
              xb
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: m(e.n("picked")),
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
              class: m(e.n("mask")),
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
var Td = _({
  name: "VarPicker",
  components: {
    VarButton: Xe,
    VarPopup: fn
  },
  inheritAttrs: !1,
  props: Zb,
  setup(e) {
    var n = I([]), r = R(() => De(e.optionHeight)), a = R(() => De(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (b, w) => {
      w.scrollEl = b;
    }, s = (b) => {
      k(e["onUpdate:show"], b);
    }, u = (b) => {
      var w = r.value + t.value, j = t.value - b.column.texts.length * r.value;
      b.translate >= w && (b.translate = w), b.translate <= j && (b.translate = j);
    }, d = (b, w) => {
      var {
        length: j
      } = b.column.texts;
      return w = w >= j ? j - 1 : w, w = w <= 0 ? 0 : w, w;
    }, v = (b) => {
      var w = Math.round((t.value - b.translate) / r.value);
      return d(b, w);
    }, f = () => {
      var b = n.value.map((j) => j.column.texts[j.index]), w = n.value.map((j) => j.index);
      return {
        texts: b,
        indexes: w
      };
    }, c = function(b, w, j, Q) {
      Q === void 0 && (Q = !1);
      var F = t.value - d(b, w) * r.value;
      F === b.translate && (b.scrolling = !1, !Q && D(b)), b.translate = F, b.duration = j;
    }, p = (b, w, j) => {
      b.translate += Math.abs(w / j) / 3e-3 * (w < 0 ? -1 : 1);
    }, y = (b, w) => {
      w.touching = !0, w.scrolling = !1, w.duration = 0, w.translate = so(w.scrollEl);
    }, g = (b, w) => {
      if (w.touching) {
        var {
          clientY: j
        } = b.touches[0], Q = w.prevY !== void 0 ? j - w.prevY : 0;
        w.prevY = j, w.translate += Q, u(w);
        var F = performance.now();
        F - w.momentumTime > Rl && (w.momentumTime = F, w.momentumPrevY = w.translate);
      }
    }, V = (b, w) => {
      w.touching = !1, w.scrolling = !0, w.prevY = void 0;
      var j = w.translate - w.momentumPrevY, Q = performance.now() - w.momentumTime, F = Math.abs(j) >= _b && Q <= Rl;
      F && p(w, j, Q), w.index = v(w), c(w, w.index, F ? 1e3 : 200);
    }, P = (b) => {
      b.scrolling = !1, D(b);
    }, S = (b) => b.map((w, j) => {
      var Q, F = Ce(w) ? {
        texts: w
      } : w, E = {
        id: Ul++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = F.initialIndex) != null ? Q : 0,
        columnIndex: j,
        duration: 0,
        momentumTime: 0,
        column: F,
        scrollEl: null,
        scrolling: !1
      };
      return c(E, E.index, 0, !0), E;
    }), $ = (b) => {
      var w = [];
      return B(w, b, 0, !0), w;
    }, B = function(b, w, j, Q) {
      if (Q === void 0 && (Q = !1), Ce(w) && w.length) {
        var F, E = Q && (F = e.cascadeInitialIndexes[b.length]) != null ? F : 0, H = {
          id: Ul++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: E,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: w.map((Y) => Y[e.textKey])
          },
          columns: w,
          scrollEl: null,
          scrolling: !1
        };
        b.push(H), c(H, H.index, 0, !0), B(b, H.columns[H.index].children, j + 1, Q);
      }
    }, C = (b) => {
      n.value.splice(n.value.indexOf(b) + 1), B(n.value, b.columns[b.index].children, b.columnIndex + 1);
    }, D = (b) => {
      var {
        cascade: w,
        onChange: j
      } = e;
      w && C(b);
      var Q = n.value.some((Y) => Y.scrolling);
      if (!Q) {
        var {
          texts: F,
          indexes: E
        } = f(), H = E.every((Y, X) => Y === l[X]);
        H || (l = [...E], k(j, F, E));
      }
    }, O = () => {
      if (e.cascade) {
        var b = n.value.find((w) => w.scrolling);
        b && (b.translate = so(b.scrollEl), b.index = v(b), c(b, b.index, 0, !0), b.scrolling = !1, C(b));
      } else
        n.value.forEach((w) => {
          w.translate = so(w.scrollEl), w.index = v(w), c(w, w.index, 0);
        });
    }, z = () => {
      O();
      var {
        texts: b,
        indexes: w
      } = f();
      l = [...w], k(e.onConfirm, b, w);
    }, M = () => {
      O();
      var {
        texts: b,
        indexes: w
      } = f();
      l = [...w], k(e.onCancel, b, w);
    };
    return ie(() => e.columns, (b) => {
      n.value = e.cascade ? $(Ri(b)) : S(Ri(b));
      var {
        indexes: w
      } = f();
      l = [...w];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Jb,
      classes: Qb,
      pack: He,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Be,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
      handleTouchend: V,
      handleTransitionend: P,
      confirm: z,
      cancel: M,
      dt: Gt
    };
  }
});
Td.render = n0;
const mr = Td;
var nn;
function Oa(e) {
  return new Promise((n) => {
    Oa.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = _a(mr, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        k(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), nn === a && (nn = null);
      },
      onRouteChange: () => {
        t(), nn === a && (nn = null);
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
Oa.Component = mr;
Oa.install = function(e) {
  e.component(mr.name, mr);
};
Oa.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
var JS = mr;
function r0(e) {
  return ["linear", "circle"].includes(e);
}
var a0 = {
  mode: {
    type: String,
    default: "linear",
    validator: r0
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
  n: t0,
  classes: o0
} = ne("progress"), i0 = ["viewBox"], l0 = ["cx", "cy", "r", "stroke-width"], s0 = ["cx", "cy", "r", "stroke-width"];
function u0(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [A(
        "div",
        {
          class: m(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: q({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), A(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
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
      ), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.linearProps.roundValue),
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
        class: m(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), T(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
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
          l0
        )) : ee("v-if", !0), A(
          "circle",
          {
            class: m(e.n("circle-certain")),
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
          s0
        )],
        14,
        i0
      )), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.circleProps.roundValue),
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
var Od = _({
  name: "VarProgress",
  props: a0,
  setup(e) {
    var n = R(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = R(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + De(a) + " " + De(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: t0,
      classes: o0,
      toSizeUnit: ce,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
Od.render = u0;
const Qr = Od;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var QS = Qr, d0 = {
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
function Yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function v0(e) {
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
var {
  n: Fl,
  classes: f0
} = ne("pull-refresh"), Hl = 150;
function c0(e, n) {
  var r = le("var-icon");
  return h(), T(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
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
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: q(e.controlStyle)
      },
      [x(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
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
var Pd = _({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: d0,
  setup(e) {
    var n, r, a = I(0), t = I(null), o = I(null), l = I(0), i = I(-999), s = I("arrow-down"), u = I("default"), d = I(!1), v = 0, f = 0, c = I(!0), p = R(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = R(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: V.value ? e.successBgColor : e.bgColor,
      color: V.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * a.value)), V = R(() => u.value === "success"), P = () => new Promise((M) => {
      window.setTimeout(() => {
        c.value = !0, M();
      }, Hl);
    }), S = (M) => {
      var b = "classList" in n ? n : document.body;
      b.classList[M](Fl() + "--lock");
    }, $ = (M) => {
      v = M.touches[0].clientY, f = 0;
    }, B = (M) => {
      if (p.value) {
        var b = qt(n);
        if (!(b > 0)) {
          var w = b === 0, j = M.touches[0];
          f = j.clientY - v, w && f >= 0 && M.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = M.touches[0].clientY), w && i.value > a.value && S("add");
          var Q = (M.touches[0].clientY - l.value) / 2 + a.value;
          i.value = Q >= g.value ? g.value : Q, i.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, C = /* @__PURE__ */ function() {
      var M = v0(function* () {
        p.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, k(e["onUpdate:modelValue"], !0), k(e.onRefresh), S("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, S("remove");
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
      n = e.target ? ts(e.target, "PullRefresh") : Ba(t.value);
    }, z = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return ie(() => e.modelValue, (M) => {
      M === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, z();
      }, L(e.successDuration)));
    }), tn(() => {
      O(), D();
    }), wa(t, "touchmove", B), {
      n: Fl,
      classes: f0,
      iconHasChanged: c,
      ICON_TRANSITION: Hl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: $,
      touchMove: B,
      touchEnd: C,
      iconName: s,
      controlStyle: y,
      isSuccess: V
    };
  }
});
Pd.render = c0;
const _r = Pd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var _S = _r, m0 = {
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
}, Vd = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ed = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function p0() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(Vd), {
    length: r
  } = In(Ed);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function h0() {
  var {
    bindParent: e,
    parentProvider: n
  } = On(Vd), {
    index: r
  } = Bn(Ed);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: g0,
  classes: y0
} = ne("radio");
function b0(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [we((h(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [x(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [x(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
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
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), x(
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
var Md = _({
  name: "VarRadio",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: m0,
  setup(e) {
    var n = I(!1), r = R(() => n.value === e.checkedValue), a = I(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = h0(), {
      form: l,
      bindForm: i
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), f = ($) => {
      Ve(() => {
        var {
          validateTrigger: B,
          rules: C,
          modelValue: D
        } = e;
        u(B, $, C, D);
      });
    }, c = ($) => {
      var {
        checkedValue: B,
        onChange: C
      } = e;
      t && n.value === B || (n.value = $, k(e["onUpdate:modelValue"], n.value), k(C, n.value), t == null || t.onToggle(B), f("onChange"));
    }, p = ($) => {
      var {
        disabled: B,
        readonly: C,
        uncheckedValue: D,
        checkedValue: O,
        onClick: z
      } = e;
      l != null && l.disabled.value || B || (k(z, $), !(l != null && l.readonly.value || C) && (a.value = !0, c(r.value ? D : O)));
    }, y = ($) => {
      var {
        checkedValue: B,
        uncheckedValue: C
      } = e;
      n.value = $ === B ? B : C;
    }, g = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, V = () => d(e.rules, e.modelValue), P = ($) => {
      var {
        uncheckedValue: B,
        checkedValue: C
      } = e, D = ![B, C].includes($);
      D && ($ = r.value ? B : C), c($);
    };
    ie(() => e.modelValue, ($) => {
      n.value = $;
    }, {
      immediate: !0
    });
    var S = {
      sync: y,
      validate: V,
      resetValidation: v,
      reset: g
    };
    return k(o, S), k(i, S), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: g0,
      classes: y0,
      handleClick: p,
      toggle: P,
      reset: g,
      validate: V,
      resetValidation: v
    };
  }
});
Md.render = b0;
const xr = Md;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var xS = xr;
function C0(e) {
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
    validator: C0
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
  n: S0,
  classes: k0
} = ne("radio-group");
function $0(e, n) {
  var r = le("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), x(
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
var Id = _({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: w0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = p0(), {
      bindForm: t
    } = hn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = pn(), u = R(() => o.value), d = (g) => {
      Ve(() => {
        var {
          validateTrigger: V,
          rules: P,
          modelValue: S
        } = e;
        l(V, g, P, S);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: V
      } = g;
      return V(e.modelValue);
    }), f = (g) => {
      k(e["onUpdate:modelValue"], g), k(e.onChange, g), d("onChange");
    }, c = () => i(e.rules, e.modelValue), p = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var y = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, y), a(y), {
      errorMessage: o,
      n: S0,
      classes: k0,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
Id.render = $0;
const ea = Id;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ek = ea, T0 = {
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
  n: et
} = ne("rate"), O0 = ["onClick"];
function P0(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(h(!0), T(
        Pe,
        null,
        Ne(e.toNumber(e.count), (o) => we((h(), T(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
            class: m(e.getClass(o)),
            onClick: (l) => e.handleClick(o, l)
          },
          [x(
            r,
            {
              class: m(e.n("content-icon")),
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
          O0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), x(
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
var Bd = _({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: T0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = pn(), i = (g) => {
      var {
        count: V,
        gap: P
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(V) ? ce(P) : 0
      };
    }, s = (g) => {
      var {
        name: V,
        color: P
      } = u(g);
      return {
        [et("content")]: !0,
        [et("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [et("--error")]: a.value,
        [et("--primary")]: V !== e.emptyIcon && !P
      };
    }, u = (g) => {
      var {
        modelValue: V,
        disabled: P,
        disabledColor: S,
        color: $,
        half: B,
        emptyColor: C,
        icon: D,
        halfIcon: O,
        emptyIcon: z
      } = e, M = $;
      return (P || n != null && n.disabled.value) && (M = S), g <= L(V) ? {
        color: M,
        name: D
      } : B && g <= L(V) + 0.5 ? {
        color: M,
        name: O
      } : {
        color: P || n != null && n.disabled.value ? S : C,
        name: z
      };
    }, d = (g, V) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = V.target;
        V.offsetX <= Math.floor(P / 2) && (g -= 0.5);
      }
      k(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, V) => {
      var {
        readonly: P,
        disabled: S,
        onChange: $
      } = e;
      P || S || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, V), k($, g), f());
    }, p = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, y = {
      reset: p,
      validate: v,
      resetValidation: l
    };
    return k(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: i,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: p,
      validate: v,
      resetValidation: l,
      toSizeUnit: ce,
      toNumber: L,
      n: et
    };
  }
});
Bd.render = P0;
const na = Bd;
na.install = function(e) {
  e.component(na.name, na);
};
var nk = na;
function V0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var E0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: V0
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
}, M0 = (e) => (Ma(""), e = e(), Ia(), e), I0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, B0 = /* @__PURE__ */ M0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), N0 = [B0];
function D0(e, n) {
  return h(), T("svg", I0, N0);
}
var Nd = _({});
Nd.render = D0;
const A0 = Nd;
var z0 = (e) => (Ma(""), e = e(), Ia(), e), L0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, R0 = /* @__PURE__ */ z0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), U0 = [R0];
function Y0(e, n) {
  return h(), T("svg", L0, U0);
}
var Dd = _({});
Dd.render = Y0;
const F0 = Dd;
var H0 = (e) => (Ma(""), e = e(), Ia(), e), j0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, W0 = /* @__PURE__ */ H0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), G0 = [W0];
function q0(e, n) {
  return h(), T("svg", j0, G0);
}
var Ad = _({});
Ad.render = q0;
const K0 = Ad;
var {
  n: X0,
  classes: Z0
} = ne("result");
function J0(e, n) {
  return h(), T(
    Pe,
    null,
    [A(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-tip"))),
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
        class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
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
        class: m(e.n("success-circle")),
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
        class: m(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: m(e.n("success-cover-right")),
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
var zd = _({
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
      classes: Z0,
      toNumber: L
    };
  }
});
zd.render = J0;
const Q0 = zd;
var _0 = (e) => (Ma(""), e = e(), Ia(), e), x0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, e1 = /* @__PURE__ */ _0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), n1 = [e1];
function r1(e, n) {
  return h(), T("svg", x0, n1);
}
var Ld = _({});
Ld.render = r1;
const a1 = Ld;
var t1 = (e) => (Ma(""), e = e(), Ia(), e), o1 = {
  viewBox: "-4 -4 32 32"
}, i1 = /* @__PURE__ */ t1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), l1 = [i1];
function s1(e, n) {
  return h(), T("svg", o1, l1);
}
var Rd = _({});
Rd.render = s1;
const u1 = Rd;
var {
  n: d1,
  classes: v1
} = ne("result");
function f1(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), pe(
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
    )) : ee("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ud = _({
  name: "VarResult",
  components: {
    Info: A0,
    Success: Q0,
    Warning: K0,
    Error: F0,
    Question: a1,
    Empty: u1
  },
  props: E0,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ce(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ce(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: d1,
      classes: v1,
      toNumber: L,
      toPxNum: De,
      toSizeUnit: ce,
      circleSize: n,
      borderSize: r
    };
  }
});
Ud.render = f1;
const ra = Ud;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var rk = ra;
function c1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function m1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var p1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: c1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: m1
  },
  onClick: U()
}, {
  n: h1,
  classes: g1
} = ne("row");
function y1(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
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
var Yd = _({
  name: "VarRow",
  props: p1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = zm(), t = R(() => {
      var s = De(e.gutter);
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
      n: h1,
      classes: g1,
      average: t,
      handleClick: l,
      padStartFlex: It
    };
  }
});
Yd.render = y1;
const aa = Yd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ak = aa;
function b1(e) {
  return ["left", "right", "center"].includes(e);
}
var C1 = {
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
    validator: b1
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
  n: co,
  classes: w1
} = ne("select"), S1 = {
  key: 1
};
function k1(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), o = le("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [x(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
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
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [W(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [A(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: q({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? ee("v-if", !0) : W(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), T(
                  Pe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), T(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(h(!0), T(
                      Pe,
                      null,
                      Ne(e.labels, (l) => (h(), pe(
                        r,
                        {
                          class: m(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: l,
                          onClick: n[0] || (n[0] = Pn(() => {
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
                  )) : (h(), T(
                    "div",
                    {
                      key: 1,
                      class: m(e.n("values"))
                    },
                    re(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (h(), T(
                  "span",
                  S1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), W(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [x(
                a,
                {
                  class: m(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
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
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
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
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), pe(
          a,
          {
            key: 0,
            class: m(e.n("clear-icon")),
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
    ), e.line ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
    )) : ee("v-if", !0), x(
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
var Fd = _({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Hn,
    VarChip: sr,
    VarFormDetails: je
  },
  props: C1,
  setup(e) {
    var n = I(null), r = I(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = I(""), l = I([]), i = R(() => Dn(e.modelValue)), s = I("0px"), u = I(0), {
      bindForm: d,
      form: v
    } = hn(), {
      length: f,
      options: c,
      bindOptions: p
    } = Bb(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: V,
      // expose
      resetValidation: P
    } = pn(), S = I(null), $ = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        l.value = ae.map(D);
      }
      !G && !Dn(J) && (o.value = D(J)), !G && Dn(J) && (o.value = "");
    }, B = (G) => {
      Ve(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: oe
        } = e;
        g(J, G, ae, oe);
      });
    }, C = (G) => {
      var {
        value: J,
        label: ae
      } = G;
      return J.value != null ? J.value : ae.value;
    }, D = (G) => {
      var J, ae, oe = c.find((ge) => {
        var {
          value: he
        } = ge;
        return he.value === G;
      });
      return oe || (oe = c.find((ge) => {
        var {
          label: he
        } = ge;
        return he.value === G;
      })), (J = (ae = oe) == null ? void 0 : ae.label.value) != null ? J : "";
    }, O = () => {
      var {
        hint: G,
        modelValue: J
      } = e;
      if (!G && !Dn(J))
        return co("--placeholder-hidden");
      if (G && (!Dn(J) || r.value))
        return co("--placeholder-hint");
    }, z = () => n.value && window.getComputedStyle(n.value).width || "0px", M = () => {
      var {
        disabled: G,
        readonly: J,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (s.value = z(), u.value = De(e.offsetY), r.value = !0, k(ae), B("onFocus"));
    }, b = () => {
      var {
        disabled: G,
        readonly: J,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (k(ae), B("onBlur"));
    }, w = (G) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var he = oe ? c.filter((Fe) => {
          var {
            selected: en
          } = Fe;
          return en.value;
        }).map(C) : C(G);
        k(e["onUpdate:modelValue"], he), k(ge, he), B("onChange"), !oe && (r.value = !1);
      }
    }, j = () => {
      var {
        disabled: G,
        readonly: J,
        multiple: ae,
        clearable: oe,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || J || !oe)) {
        var he = ae ? [] : void 0;
        k(e["onUpdate:modelValue"], he), k(ge, he), B("onClear");
      }
    }, Q = (G) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || (k(ae, G), B("onClick"));
    }, F = (G) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var he = oe, Fe = c.find((on) => {
          var {
            label: Le
          } = on;
          return Le.value === G;
        }), en = he.filter((on) => {
          var Le;
          return on !== ((Le = Fe.value.value) != null ? Le : Fe.label.value);
        });
        k(e["onUpdate:modelValue"], en), k(ge, en), B("onClose");
      }
    }, E = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        c.forEach((oe) => oe.sync(ae.includes(C(oe))));
      } else
        c.forEach((oe) => oe.sync(J === C(oe)));
      $();
    }, H = () => {
      s.value = z(), u.value = De(e.offsetY), r.value = !0;
    }, Y = () => {
      r.value = !1;
    }, X = () => V(e.rules, e.modelValue), N = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G && !Ce(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, E, {
      deep: !0
    }), ie(() => f.value, E);
    var Z = {
      wrapWidth: R(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: w,
      reset: N,
      validate: X,
      resetValidation: P
    };
    return p(Z), k(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: S,
      n: co,
      classes: w1,
      computePlaceholderState: O,
      handleFocus: M,
      handleBlur: b,
      handleClear: j,
      handleClick: Q,
      handleClose: F,
      reset: N,
      validate: X,
      resetValidation: P,
      focus: H,
      blur: Y
    };
  }
});
Fd.render = k1;
const ta = Fd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var tk = ta, $1 = {
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
  n: T1,
  classes: O1
} = ne("skeleton");
function P1(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), T(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
          "div",
          {
            class: m(e.n("--animation"))
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
          class: m(e.n("article"))
        },
        [e.avatar ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
            "div",
            {
              class: m(e.n("--animation"))
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
            class: m(e.n("section"))
          },
          [e.title ? (h(), T(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
              /* CLASS */
            )],
            6
            /* CLASS, STYLE */
          )) : ee("v-if", !0), (h(!0), T(
            Pe,
            null,
            Ne(e.toNumber(e.rows), (r, a) => (h(), T(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("--animation"))
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
        class: m(e.n("fullscreen")),
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
        "div",
        {
          class: m(e.n("--animation"))
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
var Hd = _({
  name: "VarSkeleton",
  props: $1,
  setup() {
    return {
      n: T1,
      classes: O1,
      toSizeUnit: ce,
      toNumber: L
    };
  }
});
Hd.render = P1;
const oa = Hd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var ok = oa;
function V1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var E1 = {
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
    validator: V1
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
  n: jl,
  classes: M1
} = ne("slider"), I1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function B1(e, n) {
  var r = le("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("track"))
        },
        [A(
          "div",
          {
            class: m(e.n("track-background")),
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
            class: m(e.n("track-fill")),
            style: q(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), T(
        Pe,
        null,
        Ne(e.thumbList, (a) => (h(), T(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: q({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Pn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Pn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [W(e.$slots, "button", {
            currentValue: a.text
          }, () => [A(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
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
              re(a.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          I1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), x(
      r,
      {
        "error-message": e.errorMessage,
        class: m(e.n("form")),
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
var jd = _({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: E1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = pn(), i = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = I(null), v = I(0), f = I(!1), c = Me({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), p = R(() => L(e.max) - L(e.min)), y = R(() => v.value / p.value * L(e.step)), g = R(() => {
      var {
        modelValue: Y,
        range: X
      } = e, N = [];
      return X && Ce(Y) ? N = [{
        value: B(Y[0]),
        enumValue: Ie.First,
        text: C(Y[0])
      }, {
        value: B(Y[1]),
        enumValue: Ie.Second,
        text: C(Y[1])
      }] : xe(Y) && (N = [{
        value: B(Y),
        enumValue: Ie.First,
        text: C(Y)
      }]), N;
    }), V = R(() => {
      var {
        activeColor: Y,
        range: X,
        modelValue: N
      } = e, Z = X && Ce(N) ? B(Math.min(N[0], N[1])) : 0, G = X && Ce(N) ? B(Math.max(N[0], N[1])) - Z : B(N);
      return {
        width: G + "%",
        left: Z + "%",
        background: Y
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), S = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), $ = (Y) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[Y].active, B = (Y) => {
      var {
        min: X,
        max: N
      } = e;
      return Y < L(X) ? 0 : Y > L(N) ? 100 : (Y - L(X)) / p.value * 100;
    }, C = (Y) => {
      if (!xe(Y))
        return 0;
      var X = Y;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var N = parseInt("" + X, 10) === X;
      return N ? X : L(X.toPrecision(5));
    }, D = (Y, X) => {
      var N = [], {
        step: Z,
        range: G,
        modelValue: J,
        onChange: ae,
        min: oe
      } = e, ge = L(Z), he = Math.round(Y / y.value), Fe = he * ge + L(oe), en = c[X].percentValue * ge + L(oe);
      if (c[X].percentValue = he, G && Ce(J) && (N = X === Ie.First ? [Fe, J[1]] : [J[0], Fe]), en !== Fe) {
        var on = G ? N.map((Le) => C(Le)) : C(Fe);
        k(ae, on), k(e["onUpdate:modelValue"], on), u();
      }
    }, O = (Y) => {
      if (!e.range)
        return Ie.First;
      var X = c[Ie.First].percentValue * y.value, N = c[Ie.Second].percentValue * y.value, Z = Math.abs(Y - X), G = Math.abs(Y - N);
      return Z <= G ? Ie.First : Ie.Second;
    }, z = (Y, X) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || S.value) && (k(e.onStart), f.value = !0, c[X].startPosition = Y.touches[0].clientX);
    }, M = (Y, X) => {
      if (!(P.value || S.value || !f.value)) {
        var N = Y.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, X);
      }
    }, b = (Y) => {
      var {
        range: X,
        modelValue: N,
        onEnd: Z,
        step: G,
        min: J
      } = e;
      if (!(P.value || S.value)) {
        var ae = [];
        c[Y].currentLeft = c[Y].percentValue * y.value, c[Y].active = !1;
        var oe = c[Y].percentValue * L(G) + L(J);
        X && Ce(N) && (ae = Y === Ie.First ? [oe, N[1]] : [N[0], oe]), k(Z, X ? ae : oe), f.value = !1;
      }
    }, w = (Y) => {
      if (!(P.value || S.value) && !Y.target.closest("." + jl("thumb"))) {
        var X = Y.clientX - Bv(Y.currentTarget), N = O(X);
        D(X, N), b(N);
      }
    }, j = () => {
      var Y = L(e.step);
      return isNaN(Y) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : Y < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: Y,
        modelValue: X
      } = e;
      return Y && !Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !Y && Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : Y && Ce(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(Y, X) {
      Y === void 0 && (Y = e.modelValue), X === void 0 && (X = L(e.step));
      var N = (Z) => {
        var {
          min: G,
          max: J
        } = e;
        return Z < L(G) ? 0 : Z > L(J) ? p.value / X : (Z - L(G)) / X;
      };
      e.range && Ce(Y) ? (c[Ie.First].percentValue = N(Y[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * y.value, c[Ie.Second].percentValue = N(Y[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * y.value) : xe(Y) && (c[Ie.First].currentLeft = N(Y) * y.value);
    }, E = () => {
      var Y = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], Y), l();
    }, H = {
      reset: E,
      validate: i,
      resetValidation: l
    };
    return k(n, H), ie([() => e.modelValue, () => e.step], (Y) => {
      var [X, N] = Y;
      !j() || !Q() || f.value || F(X, L(N));
    }), ie(v, () => F()), tn(() => {
      !j() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: jl,
      classes: M1,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: V,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: Qe,
      toNumber: L,
      showLabel: $,
      start: z,
      move: M,
      end: b,
      click: w
    };
  }
});
jd.render = B1;
const ia = jd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ik = ia;
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
function N1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function D1(e) {
  return Bi.includes(e);
}
var Wd = {
  type: {
    type: String,
    validator: D1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: N1
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
  loadingType: Ke(nr, "type"),
  loadingSize: Ke(nr, "size"),
  loadingRadius: Ke(nr, "radius"),
  loadingColor: ni({}, Ke(nr, "color"), {
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
  n: A1,
  classes: z1
} = ne("snackbar"), L1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function R1(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return we((h(), T(
    "div",
    {
      class: m(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
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
          class: m(e.n("action"))
        },
        [e.iconName ? (h(), pe(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ee("v-if", !0), e.type === "loading" ? (h(), pe(
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
        )) : ee("v-if", !0), W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Ea, e.show]]);
}
var Gd = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: wn,
    VarIcon: $e
  },
  props: Wd,
  setup(e) {
    var n = I(null), {
      zIndex: r
    } = pt(() => e.show, 1);
    Zt(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? L1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), tn(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Bi,
      n: A1,
      classes: z1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Gd.render = R1;
const qd = Gd;
var {
  n: U1
} = ne("snackbar");
function Y1(e, n) {
  var r = le("var-snackbar-core");
  return h(), pe(
    Va,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [x(
      Be,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [x(
          r,
          Ee(e.$props, {
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
var Kd = _({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: qd
  },
  props: Wd,
  setup() {
    var {
      disabled: e
    } = Xt();
    return {
      n: U1,
      disabled: e
    };
  }
});
Kd.render = Y1;
const la = Kd;
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
function F1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ja(e);
}
var Bi = ["loading", "success", "warning", "info", "error"], Wl = 0, ri = !1, Xd, Ka = !1, Zd = {
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
}, mn = Me([]), Ni = Zd, H1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, j1 = {
  setup() {
    return () => {
      var e = mn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ka && (a.position = "top");
        var l = Ka ? "relative" : "absolute", i = dt({
          position: l
        }, Z1(a.position));
        return x(qd, Ee(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return x(Tv, Ee(H1, {
        style: {
          zIndex: sn.zIndex
        },
        onAfterEnter: W1,
        onAfterLeave: G1
      }), F1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Wn = function(e) {
  var n = K1(e), r = Me(dt({}, Ni, n));
  r.show = !0, ri || (ri = !0, Xd = _a(j1).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: Wl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ka)
    q1(t);
  else {
    var o = "update-" + Wl;
    X1(r, o);
  }
  return {
    clear() {
      !Ka && mn.length ? mn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Bi.forEach((e) => {
  Wn[e] = (n) => (ui(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Wn(n));
});
Wn.install = function(e) {
  e.component(la.name, la);
};
Wn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ka && (mn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ka = e);
};
Wn.clear = function() {
  mn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wn.setDefaultOptions = function(e) {
  Ni = e;
};
Wn.resetDefaultOptions = function() {
  Ni = Zd;
};
Wn.Component = la;
function W1(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function G1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && (k(Xd), mn = Me([]), ri = !1);
}
function q1(e) {
  mn.push(e);
}
function K1(e) {
  return e === void 0 && (e = {}), Ge(e) ? {
    content: e
  } : e;
}
function X1(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = dt({}, r.reactiveSnackOptions, e), r._update = n;
}
function Z1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
la.install = function(e) {
  e.component(la.name, la);
};
var lk = la;
const ai = Wn;
var Jd = (e) => ["mini", "small", "normal", "large"].includes(e), J1 = (e) => Jd(e) || Ce(e) || xe(e) || Ge(e), Q1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), _1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), x1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: J1
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
    validator: Q1
  },
  align: {
    type: String,
    validator: _1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function eC(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = ln(e) + " " + n + " " + ln(e) + " 0" : i = ln(e) + " 0" : t === "space-around" ? i = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? i = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === l ? i = ln(e) + " 0 " + ln(e) + " " + ln(n) : i = ln(e) + " " + ln(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: mo,
  classes: nC
} = ne("space");
const sa = _({
  name: "VarSpace",
  props: x1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(ce) : [ce(t), ce(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = k(r.default)) != null ? t : [], f = Jd(d), [c, p] = a(d, f);
      v = ds(v);
      var y = v.length - 1, g = v.map((V, P) => {
        var S = eC(c, p, {
          direction: u,
          justify: l,
          index: P,
          lastIndex: y
        });
        return x("div", {
          style: {
            margin: S
          }
        }, [V]);
      });
      return x("div", {
        class: nC(mo(), mo("$--box"), [o, mo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: It(l),
          alignItems: It(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + c + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var sk = sa, rC = {
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
}, Qd = Symbol("STEPS_BIND_STEP_KEY"), _d = Symbol("STEPS_COUNT_STEP_KEY");
function aC() {
  var {
    bindChildren: e,
    childProviders: n
  } = Tn(Qd), {
    length: r
  } = In(_d);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function tC() {
  var {
    parentProvider: e,
    bindParent: n
  } = On(Qd), {
    index: r
  } = Bn(_d);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: oC,
  classes: iC
} = ne("step"), lC = {
  key: 3
};
function sC(e, n) {
  var r = le("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: q({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), pe(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (h(), pe(
            r,
            {
              key: 1,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (h(), pe(
            r,
            {
              key: 2,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (h(), T(
            "span",
            lC,
            re(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
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
      ), e.isLastChild ? ee("v-if", !0) : (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
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
var xd = _({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: rC,
  setup() {
    var e = I(null), n = I(""), r = I(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = tC(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), c = R(() => a.value !== -1 && l.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = (V) => {
      d.value === "horizontal" && (e.value = V);
    };
    return o(p), ie(i, (V) => {
      if (r.value = V - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: oC,
      classes: iC,
      main: e,
      index: a,
      isActive: c,
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
xd.render = sC;
const ua = xd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var uk = ua;
function uC(e) {
  return ["horizontal", "vertical"].includes(e);
}
var dC = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: uC
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: vC
} = ne("steps");
function fC(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ev = _({
  name: "VarSteps",
  props: dC,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = aC(), i = (u) => {
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
      n: vC
    };
  }
});
ev.render = fC;
const da = ev;
da.install = function(e) {
  e.component(da.name, da);
};
var dk = da, cC = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: mC
} = ne("style-provider"), pC = _({
  name: "VarStyleProvider",
  props: cC,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => _l(e.tag, {
      class: mC(),
      style: ss(e.styleVars)
    }, k(r.default));
  }
});
const va = pC;
var po = [];
function vt(e) {
  po.forEach((r) => document.documentElement.style.removeProperty(r)), po.length = 0;
  var n = ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), po.push(a);
  });
}
vt.Component = va;
va.install = function(e) {
  e.component(va.name, va);
};
vt.install = function(e) {
  e.component(va.name, va);
};
var vk = va, hC = {
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
  n: gC,
  classes: yC
} = ne("switch");
function bC(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: q(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), we((h(), T(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), pe(
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
        )],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), x(
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
var nv = _({
  name: "VarSwitch",
  components: {
    VarLoading: wn,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: hC,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = pn(), i = () => o(e.rules, e.modelValue), s = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = R(() => {
      var {
        size: p,
        modelValue: y,
        color: g,
        closeColor: V,
        loadingColor: P,
        activeValue: S
      } = e;
      return {
        handle: {
          width: Qe(p),
          height: Qe(p),
          backgroundColor: y === S ? g : V,
          color: P
        },
        ripple: {
          left: y === S ? Qe(p, 0.5) : "-" + Qe(p, 0.5),
          color: y === S ? g : V || "#999",
          width: Qe(p, 2),
          height: Qe(p, 2)
        },
        track: {
          height: Qe(p, 0.72),
          width: Qe(p, 1.9),
          borderRadius: Qe(p, 2 / 3),
          filter: y === S || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === S ? g : V
        },
        switch: {
          height: Qe(p, 1.2),
          width: Qe(p, 2)
        }
      };
    }), d = R(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Qe(p, 0.4);
    }), v = (p) => {
      var {
        onClick: y,
        onChange: g,
        disabled: V,
        loading: P,
        readonly: S,
        modelValue: $,
        activeValue: B,
        inactiveValue: C,
        "onUpdate:modelValue": D
      } = e;
      if (k(y, p), !(V || P || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var O = $ === B ? C : B;
        k(g, O), k(D, O), s();
      }
    }, f = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, c = {
      reset: f,
      validate: i,
      resetValidation: l
    };
    return k(n, c), {
      n: gC,
      classes: yC,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
nv.render = bC;
const fa = nv;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var fk = fa, CC = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, rv = Symbol("TABS_BIND_TAB_KEY");
function wC() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = mi(rv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function SC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ci(rv);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Tt,
  classes: kC
} = ne("tab");
function $C(e, n) {
  var r = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
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
var av = _({
  name: "VarTab",
  directives: {
    Ripple: ze
  },
  props: CC,
  setup(e) {
    var n = I(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = SC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
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
        disabled: S,
        name: $
      } = e;
      return S ? f.value : u.value === $ || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, V = () => {
      var {
        disabled: S,
        name: $
      } = e;
      return S ? Tt("$-tab--disabled") : u.value === $ || u.value === (o == null ? void 0 : o.value) ? Tt("$-tab--active") : Tt("$-tab--inactive");
    }, P = (S) => {
      var {
        disabled: $,
        name: B,
        onClick: C
      } = e;
      $ || (k(C, B ?? o.value, S), s(y));
    };
    return ie(() => e.name, p), ie(() => e.disabled, p), {
      n: Tt,
      classes: kC,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: V,
      handleClick: P
    };
  }
});
av.render = $C;
const ca = av;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var ck = ca, tv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function TC() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = mi(tv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function OC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ci(tv);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var PC = {
  name: {
    type: [String, Number]
  }
}, {
  n: VC,
  classes: EC
} = ne("tab-item");
function MC(e, n) {
  var r = le("var-swipe-item");
  return h(), pe(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? W(e.$slots, "default", {
        key: 0
      }) : ee("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var ov = _({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Yn
  },
  props: PC,
  setup(e) {
    var n = I(!1), r = I(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = OC(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: VC,
      classes: EC,
      current: n,
      initSlot: r
    };
  }
});
ov.render = MC;
const ma = ov;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var mk = ma, IC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: BC,
  classes: NC
} = ne("table");
function DC(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("main"))
      },
      [A(
        "table",
        {
          class: m(e.n("table")),
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
    ), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var iv = _({
  name: "VarTable",
  props: IC,
  setup() {
    return {
      toSizeUnit: ce,
      n: BC,
      classes: NC
    };
  }
});
iv.render = DC;
const pa = iv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var pk = pa;
function Gl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var AC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Gl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Gl
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
  stickyCssMode: Ke(Mt, "cssMode"),
  stickyZIndex: Ke(Mt, "zIndex"),
  offsetTop: Ke(Mt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
function Kl(e) {
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
  n: zC,
  classes: LC
} = ne("tabs");
function RC(e, n) {
  return h(), pe(
    Qa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [W(e.$slots, "default"), A(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
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
var lv = _({
  name: "VarTabs",
  components: {
    VarSticky: Fn
  },
  inheritAttrs: !1,
  props: AC,
  setup(e) {
    var n = I("0px"), r = I("0px"), a = I("0px"), t = I("0px"), o = I(!1), l = I(null), i = R(() => e.active), s = R(() => e.activeColor), u = R(() => e.inactiveColor), d = R(() => e.disabledColor), v = R(() => e.itemDirection), f = I(null), {
      tabList: c,
      bindTabList: p,
      length: y
    } = wC(), g = (M) => {
      var b, w = (b = M.name.value) != null ? b : M.index.value, {
        active: j,
        onChange: Q,
        onClick: F
      } = e;
      k(e["onUpdate:active"], w), k(F, w), w !== j && k(Q, w);
    }, V = () => c.find((M) => {
      var {
        name: b
      } = M;
      return e.active === b.value;
    }), P = (M) => c.find((b) => {
      var {
        index: w
      } = b;
      return (M ?? e.active) === w.value;
    }), S = () => {
      if (y.value !== 0) {
        var {
          active: M
        } = e;
        if (xe(M)) {
          var b = M > y.value - 1 ? y.value - 1 : 0;
          return k(e["onUpdate:active"], b), P(b);
        }
      }
    }, $ = () => {
      o.value = c.length >= 5;
    }, B = (M) => {
      var {
        element: b
      } = M, w = b.value;
      w && (e.layoutDirection === "horizontal" ? (n.value = w.offsetWidth + "px", a.value = w.offsetLeft + "px") : (r.value = w.offsetHeight + "px", t.value = w.offsetTop + "px"));
    }, C = (M) => {
      var {
        element: b
      } = M;
      if (o.value) {
        var w = l.value, j = b.value;
        if (e.layoutDirection === "horizontal") {
          var Q = j.offsetLeft + j.offsetWidth / 2 - w.offsetWidth / 2;
          ot(w, {
            left: Q,
            animation: yo
          });
        } else {
          var F = j.offsetTop + j.offsetHeight / 2 - w.offsetHeight / 2;
          ot(w, {
            top: F,
            animation: yo
          });
        }
      }
    }, D = () => {
      var M = V() || P() || S();
      !M || M.disabled.value || ($(), B(M), C(M));
    }, O = /* @__PURE__ */ function() {
      var M = Kl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), z = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: g
    };
    return p(z), ie(() => y.value, /* @__PURE__ */ Kl(function* () {
      yield Vn(), D();
    })), ie(() => e.active, D), wa(window, "resize", D), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: Be,
      toSizeUnit: ce,
      n: zC,
      classes: LC,
      resize: D,
      resizeSticky: O
    };
  }
});
lv.render = RC;
const ha = lv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var hk = ha, UC = {
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
function Xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function YC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Xl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Xl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: FC
} = ne("tabs-items");
function HC(e, n) {
  var r = le("var-swipe");
  return h(), pe(
    r,
    {
      class: m(e.n()),
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
var sv = _({
  name: "VarTabsItems",
  components: {
    VarSwipe: Un
  },
  props: UC,
  setup(e) {
    var n = I(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = TC(), o = (f) => r.find((c) => {
      var {
        name: p
      } = c;
      return f === p.value;
    }), l = (f) => r.find((c) => {
      var {
        index: p
      } = c;
      return f === p.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var c, p = i(f);
      p && (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (f) => {
      var c, p = r.find((g) => {
        var {
          index: V
        } = g;
        return V.value === f;
      }), y = (c = p.name.value) != null ? c : p.index.value;
      k(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ YC(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: FC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
sv.render = HC;
const ga = sv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var gk = ga;
const jC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, WC = {
  "--badge-default-color": "#555"
}, GC = {
  "--button-default-color": "#303030"
}, qC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, KC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, XC = {
  "--checkbox-unchecked-color": "#fff"
}, ZC = {
  "--chip-default-color": "#555"
}, JC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, QC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, _C = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, xC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, ew = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, nw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, rw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, aw = {
  "--popup-content-background-color": "#1e1e1e"
}, tw = {
  "--pull-refresh-background": "#303030"
}, ow = {
  "--radio-unchecked-color": "#fff"
}, iw = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, lw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, sw = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, uw = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, dw = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, vw = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, fw = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, cw = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, mw = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, pw = {
  "--tabs-background": "#1e1e1e"
}, hw = {
  "--app-bar-color": "#272727"
}, gw = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, yw = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, bw = {
  "--menu-background-color": "#272727"
}, Cw = {
  "--breadcrumb-inactive-color": "#aaa"
}, ww = {
  "--paper-background": "#303030"
}, Sw = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ti.apply(this, arguments);
}
const kw = ti({
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
}, GC, KC, qC, cw, QC, sw, pw, vw, aw, _C, jC, ZC, WC, mw, JC, tw, dw, uw, nw, fw, ew, lw, ow, XC, xC, rw, hw, gw, yw, bw, iw, Cw, ww, Sw);
var $w = {
  dark: kw
}, yk = null;
const oi = $w;
var vn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Zl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Tw(e) {
  return ["ampm", "24hr"].includes(e);
}
var Ow = {
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
    validator: Tw
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
}, uv = (e, n) => e === "24hr" || n === "am", Di = (e, n, r) => {
  var a = vn.findIndex((o) => L(o) === L(r)), t = uv(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, rn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, dv = (e) => {
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
  } = Di(t, o, l), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: p,
      minute: y
    } = rn(i);
    f = p === v && a > y;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: V
    } = rn(s);
    f = g === v && a < V;
  }
  if (i && s) {
    var {
      hour: P,
      minute: S
    } = rn(i), {
      hour: $,
      minute: B
    } = rn(s);
    f = $ === v && a < B || P === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, vv = (e) => {
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
  } = Di(t, o, l), c = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: g,
      second: V
    } = rn(s);
    c = y === f && g < i || g === i && a > V;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: S,
      second: $
    } = rn(u);
    c = P === f && S > i || S === i && a > $;
  }
  if (s && u) {
    var {
      hour: B,
      minute: C,
      second: D
    } = rn(s), {
      hour: O,
      minute: z,
      second: M
    } = rn(u);
    c = B === f && C < i || O === f && z > i || B === f && C === i && a > D || O === f && z === i && a < M;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: Pw,
  classes: Vw
} = ne("time-picker");
function Ew(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n("clock"))
    },
    [A(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), T(
      Pe,
      null,
      Ne(e.timeScales, (r, a) => (h(), T(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        re(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), T(
        Pe,
        null,
        Ne(e.hours24, (r, a) => (h(), T(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var fv = _({
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
    } = n, a = I(null), t = I([]), o = I([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? vn : Zl), u = (g, V) => {
      var P;
      g = (P = g) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? dv : vv, $ = {
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
      return V && e.type === "minute" && Reflect.deleteProperty($, "minute"), S($);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? _e[i.value] : s.value[i.value];
      return s.value === Zl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, V) => V ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (uv(e.format, e.ampm))
          return t.value.includes(g);
        var V = vn.findIndex((P) => P === g);
        return o.value.includes(V);
      }
      return u(g, !0);
    }, c = (g, V, P) => {
      var S = 2 * Math.PI / 12 * g - Math.PI / 2, $ = 50 * (1 + Math.cos(S)), B = 50 * (1 + Math.sin(S)), C = () => v(g, P) ? f(V) ? {
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
      } = C();
      return {
        left: $ + "%",
        top: B + "%",
        backgroundColor: D,
        color: O
      };
    }, p = () => {
      var {
        width: g,
        height: V
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: V
      };
    }, y = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? vn : _e;
        return Ca(g[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (g, V) => {
      var [P, S] = g, [$, B] = V, C = P === $ && S === B;
      if (!(C || e.type !== "hour" || i.value === void 0)) {
        var D = S ? _e[i.value] : y(), O = e.useSeconds ? ":" + e.time.second : "", z = D + ":" + e.time.minute + O;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), ie(() => e.rad, (g, V) => {
      if (!(e.type === "hour" || g === void 0 || V === void 0)) {
        var P = g / 6 >= 0 ? g / 6 : g / 6 + 60, S = V / 6 >= 0 ? V / 6 : V / 6 + 60;
        if (P !== S) {
          var $, {
            hourStr: B
          } = Di(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var C = te().minute(P).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            $ = B + ":" + C + D;
          }
          if (e.type === "second") {
            var O = te().second(P).format("ss"), z = e.useSeconds ? ":" + O : "";
            $ = B + ":" + e.time.minute + z;
          }
          r("update", $);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [V, P, S] = g;
      if (t.value = [], V && !P) {
        var {
          hour: $
        } = rn(V), B = vn.filter((H) => L(H) > $), C = _e.filter((H) => L(H) > $);
        t.value = [...B, ...C];
      }
      if (!V && P) {
        var {
          hour: D
        } = rn(P), O = vn.filter((H) => L(H) < D), z = _e.filter((H) => L(H) < D);
        t.value = [...O, ...z];
      }
      if (V && P) {
        var {
          hour: M
        } = rn(V), {
          hour: b
        } = rn(P), w = vn.filter((H) => L(H) < b || L(H) > M), j = _e.filter((H) => L(H) < b || L(H) > M);
        t.value = [...w, ...j];
      }
      if (S != null && S.hours) {
        var {
          hours: Q
        } = S, F = vn.filter((H) => !Q(L(H))), E = _e.filter((H) => !Q(L(H)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...F, ...E])];
      }
      o.value = t.value.map((H) => _e.findIndex((Y) => H === Y)).filter((H) => H >= 0);
    }, {
      immediate: !0
    }), {
      n: Pw,
      classes: Vw,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: c,
      activeItemIndex: i
    };
  }
});
fv.render = Ew;
const Mw = fv;
var {
  n: Iw,
  classes: Bw
} = ne("time-picker"), Nw = (e) => (Ma(""), e = e(), Ia(), e), Dw = /* @__PURE__ */ Nw(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), Aw = {
  key: 0
};
function zw(e, n) {
  var r = le("clock");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), Dw, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", Aw, ":")) : ee("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
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
    ), A(
      "div",
      {
        class: m(e.n("body"))
      },
      [A(
        "div",
        {
          class: m(e.n("clock-container")),
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
        [x(
          Be,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), pe(
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
var cv = _({
  name: "VarTimePicker",
  components: {
    Clock: Mw
  },
  props: Ow,
  setup(e) {
    var n = I(null), r = I(null), a = I(null), t = I(!1), o = I(!1), l = I(!1), i = I(!1), s = I(!1), u = I(void 0), d = I(0), v = I(0), f = I("hour"), c = I("am"), p = I(!1), y = I(!1), g = I({
      hour: "00",
      minute: "00",
      second: "00"
    }), V = Me({
      x: 0,
      y: 0
    }), P = Me({
      x: [],
      y: []
    }), S = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), $ = (N) => {
      k(e["onUpdate:modelValue"], N), k(e.onChange, N);
    }, B = (N) => N * 57.29577951308232, C = (N) => {
      i.value = !1, y.value = !1, f.value = N;
    }, D = (N) => {
      var {
        disableHour: Z
      } = a.value, G = vn.findIndex((oe) => L(oe) === L(g.value.hour)), J = N === "am" ? vn : _e, ae = [...J.slice(G), ...J.slice(0, G)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !Z.includes(oe)));
    }, O = (N) => {
      if (!e.readonly) {
        c.value = N;
        var Z = D(N);
        if (Z) {
          var G = e.useSeconds ? ":" + g.value.second : "", J = Ca(Z, 2, "0") + ":" + g.value.minute + G;
          $(J);
        }
      }
    }, z = (N, Z) => {
      var G = N >= P.x[0] && N <= P.x[1], J = Z >= P.y[0] && Z <= P.y[1];
      return G && J;
    }, M = (N) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: J,
        second: ae
      } = rn(N);
      return {
        hour: te().hour(G).format(Z),
        minute: te().minute(J).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, b = (N) => {
      var Z = N / 30;
      return Z >= 0 ? Z : Z + 12;
    }, w = () => {
      var {
        width: N,
        height: Z
      } = a.value.getSize(), G = V.x - N / 2 - 8, J = V.x + N / 2 + 8, ae = V.y - Z / 2 - 8, oe = V.y + Z / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: J,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, j = (N, Z, G) => {
      var {
        disableHour: J
      } = a.value;
      l.value = z(N, Z);
      var ae = Math.round(G / 30) * 30 + 90, oe = b(ae), ge = t.value ? vn[oe] : _e[oe];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? z(N, Z) : !1), t.value === l.value) {
        var he = t.value || c.value === "pm" ? _e[oe] : vn[oe];
        p.value = J.includes(he), !p.value && (u.value = ae, i.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      y.value = dv(ae), !y.value && (d.value = G, s.value = !0);
    }, F = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      vv(ae) || (v.value = G);
    }, E = () => {
      var {
        left: N,
        top: Z,
        width: G,
        height: J
      } = n.value.getBoundingClientRect();
      if (V.x = N + G / 2, V.y = Z + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: ge,
          rangeYMax: he
        } = w();
        P.x = [ae, oe], P.y = [ge, he];
      }
    }, H = (N) => {
      if (N.preventDefault(), !e.readonly) {
        E();
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0], J = Z - V.x, ae = G - V.y, oe = Math.round(B(Math.atan2(ae, J)));
        f.value === "hour" ? j(Z, G, oe) : f.value === "minute" ? Q(oe) : F(oe);
      }
    }, Y = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: Z,
          minute: G,
          second: J
        } = rn(N), ae = te().hour(Z).format("hh"), oe = te().hour(Z).format("HH"), ge = te().minute(G).format("mm"), he = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : L(ae)) * 30, d.value = L(ge) * 6, v.value = L(he) * 6, g.value = M(N), e.format !== "24hr" && (c.value = Ca("" + Z, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: Iw,
      classes: Bw,
      getRad: S,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: H,
      checkPanel: C,
      checkAmpm: O,
      end: Y,
      update: $,
      changePreventUpdate: X
    };
  }
});
cv.render = zw;
const ya = cv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var bk = ya, Lw = {
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
function Jl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ql(e) {
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
  n: Rw,
  classes: Uw
} = ne("uploader"), Yw = 0, Fw = ["onClick"], Hw = ["onClick"], jw = ["src", "alt"], Ww = ["multiple", "accept", "capture", "disabled"], Gw = ["src"];
function qw(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), o = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(h(!0), T(
        Pe,
        null,
        Ne(e.files, (l) => we((h(), T(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [l.state === "loading", e.n("--loading")])),
            key: l.id,
            onClick: (i) => e.preview(l)
          },
          [A(
            "div",
            {
              class: m(e.n("file-name"))
            },
            re(l.name || l.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), T(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Pn((i) => e.handleRemove(l), ["stop"])
            },
            [x(
              r,
              {
                class: m(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            Hw
          )) : ee("v-if", !0), l.cover ? (h(), T(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: q({
                objectFit: l.fit
              }),
              src: l.cover,
              alt: l.name
            },
            null,
            14,
            jw
          )) : ee("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          Fw
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            type: "file",
            class: m(e.n("action-input")),
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
          Ww
        ), W(e.$slots, "default", {}, () => [x(
          r,
          {
            class: m(e.n("action-icon")),
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
      }]]) : ee("v-if", !0)],
      2
      /* CLASS */
    ), x(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), x(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (l) => e.showPreview = l),
        onClosed: n[3] || (n[3] = (l) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var l, i;
          return [e.currentPreview && e.isHTMLSupportVideo((l = e.currentPreview) == null ? void 0 : l.url) ? (h(), T(
            "video",
            {
              key: 0,
              class: m(e.n("preview-video")),
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
            Gw
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
var mv = _({
  name: "VarUploader",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarPopup: fn,
    VarFormDetails: je
  },
  props: Lw,
  setup(e) {
    var n = I(null), r = I(!1), a = I(null), t = R(() => {
      var {
        maxlength: F,
        modelValue: {
          length: E
        }
      } = e;
      return xe(F) ? E + " / " + F : "";
    }), {
      form: o,
      bindForm: l
    } = hn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = pn(), v = R(() => {
      var {
        modelValue: F,
        hideList: E
      } = e;
      return E ? [] : F;
    }), f = (F) => {
      var {
        disabled: E,
        readonly: H,
        previewed: Y
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || E || H || !Y)) {
        var {
          url: X
        } = F;
        if (Ge(X) && Yi(X)) {
          jn(X);
          return;
        }
        Ge(X) && Fi(X) && (a.value = F, r.value = !0);
      }
    }, c = (F) => ({
      id: Yw++,
      url: "",
      cover: "",
      name: F.name,
      file: F
    }), p = (F) => {
      var E = F.target, {
        files: H
      } = E;
      return Array.from(H);
    }, y = (F) => new Promise((E) => {
      var H = new FileReader();
      H.onload = () => {
        var Y = H.result;
        F.file.type.startsWith("image") && (F.cover = Y), F.url = Y, E(F);
      }, H.readAsDataURL(F.file);
    }), g = (F) => F.map(y), V = (F) => {
      var {
        onBeforeRead: E
      } = e;
      return F.map((H) => new Promise((Y) => {
        E || Y({
          valid: !0,
          varFile: H
        });
        var X = k(E, Me(H));
        X = Ce(X) ? X : [X], Promise.all(X).then((N) => {
          Y({
            valid: !N.some((Z) => !Z),
            varFile: H
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var F = Ql(function* (E) {
        var {
          maxsize: H,
          maxlength: Y,
          modelValue: X,
          onOversize: N,
          onAfterRead: Z,
          readonly: G,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          var ae = (Le) => Le.filter((un) => un.file.size > L(H) ? (k(N, Me(un)), !1) : !0), oe = (Le) => {
            var un = Math.min(Le.length, L(Y) - X.length);
            return Le.slice(0, un);
          }, ge = p(E), he = ge.map(c);
          he = H != null ? ae(he) : he, he = Y != null ? oe(he) : he;
          var Fe = yield Promise.all(g(he)), en = yield Promise.all(V(Fe)), on = en.filter((Le) => {
            var {
              valid: un
            } = Le;
            return un;
          }).map((Le) => {
            var {
              varFile: un
            } = Le;
            return un;
          });
          k(e["onUpdate:modelValue"], [...X, ...on]), E.target.value = "", on.forEach((Le) => k(Z, Me(Le)));
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var F = Ql(function* (E) {
        var {
          disabled: H,
          readonly: Y,
          modelValue: X,
          onBeforeRemove: N,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || Y)) {
          if (N) {
            var G = k(N, Me(E));
            if (G = Ce(G) ? G : [G], (yield Promise.all(G)).some((ae) => !ae))
              return;
          }
          var J = X.filter((ae) => ae !== E);
          k(Z, Me(E)), M("onRemove"), k(e["onUpdate:modelValue"], J);
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), $ = () => e.modelValue.filter((F) => F.state === "success"), B = () => e.modelValue.filter((F) => F.state === "error"), C = () => e.modelValue.filter((F) => F.state === "loading"), D = () => {
      n.value.click();
    }, O = () => {
      a.value = null, r.value = !1, jn.close();
    }, z = {
      getSuccess: $,
      getError: B,
      getLoading: C
    }, M = (F) => {
      Ve(() => {
        var {
          validateTrigger: E,
          rules: H,
          modelValue: Y
        } = e;
        s(E, F, H, Y, z);
      });
    }, b = !1, w = () => u(e.rules, e.modelValue, z), j = () => {
      b = !0, k(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: w,
      resetValidation: d,
      reset: j
    };
    return k(l, Q), ie(() => e.modelValue, () => {
      !b && M("onChange"), b = !1;
    }, {
      deep: !0
    }), {
      n: Rw,
      classes: Uw,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: Fi,
      isHTMLSupportImage: Yi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: S,
      getSuccess: $,
      getError: B,
      getLoading: C,
      validate: w,
      resetValidation: d,
      reset: j,
      chooseFile: D,
      closePreview: O
    };
  }
});
mv.render = qw;
const ba = mv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Ck = ba;
const Kw = "2.8.6";
function Xw(e) {
  Sa.install && e.use(Sa), wr.install && e.use(wr), Sr.install && e.use(Sr), kr.install && e.use(kr), $r.install && e.use($r), or.install && e.use(or), Tr.install && e.use(Tr), Or.install && e.use(Or), Pr.install && e.use(Pr), Vr.install && e.use(Vr), Xe.install && e.use(Xe), Er.install && e.use(Er), Mr.install && e.use(Mr), ir.install && e.use(ir), lr.install && e.use(lr), Ir.install && e.use(Ir), sr.install && e.use(sr), Br.install && e.use(Br), Nr.install && e.use(Nr), Dr.install && e.use(Dr), sn.install && e.use(sn), Ar.install && e.use(Ar), zr.install && e.use(zr), Rr.install && e.use(Rr), ka.install && e.use(ka), Ur.install && e.use(Ur), Yr.install && e.use(Yr), Fr.install && e.use(Fr), Rn.install && e.use(Rn), je.install && e.use(je), At.install && e.use(At), $e.install && e.use($e), Hr.install && e.use(Hr), jn.install && e.use(jn), jr.install && e.use(jr), Wr.install && e.use(Wr), cr.install && e.use(cr), it.install && e.use(it), Gr.install && e.use(Gr), qr.install && e.use(qr), wn.install && e.use(wn), xo.install && e.use(xo), $o.install && e.use($o), Hn.install && e.use(Hn), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Oa.install && e.use(Oa), fn.install && e.use(fn), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), ze.install && e.use(ze), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), ai.install && e.use(ai), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), Fn.install && e.use(Fn), vt.install && e.use(vt), Un.install && e.use(Un), Yn.install && e.use(Yn), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), oi.install && e.use(oi), ya.install && e.use(ya), vr.install && e.use(vr), ba.install && e.use(ba);
}
const wk = {
  version: Kw,
  install: Xw,
  ActionSheet: Sa,
  AppBar: wr,
  Avatar: Sr,
  AvatarGroup: kr,
  BackTop: $r,
  Badge: or,
  BottomNavigation: Tr,
  BottomNavigationItem: Or,
  Breadcrumb: Pr,
  Breadcrumbs: Vr,
  Button: Xe,
  ButtonGroup: Er,
  Card: Mr,
  Cell: ir,
  Checkbox: lr,
  CheckboxGroup: Ir,
  Chip: sr,
  Col: Br,
  Collapse: Nr,
  CollapseItem: Dr,
  Context: sn,
  Countdown: Ar,
  Counter: zr,
  DatePicker: Rr,
  Dialog: ka,
  Divider: Ur,
  Ellipsis: Yr,
  Fab: Fr,
  Form: Rn,
  FormDetails: je,
  Hover: At,
  Icon: $e,
  Image: Hr,
  ImagePreview: jn,
  IndexAnchor: jr,
  IndexBar: Wr,
  Input: cr,
  Lazy: it,
  Link: Gr,
  List: qr,
  Loading: wn,
  LoadingBar: xo,
  Locale: $o,
  Menu: Hn,
  Option: Kr,
  Overlay: Xr,
  Pagination: Zr,
  Paper: Jr,
  Picker: Oa,
  Popup: fn,
  Progress: Qr,
  PullRefresh: _r,
  Radio: xr,
  RadioGroup: ea,
  Rate: na,
  Result: ra,
  Ripple: ze,
  Row: aa,
  Select: ta,
  Skeleton: oa,
  Slider: ia,
  Snackbar: ai,
  Space: sa,
  Step: ua,
  Steps: da,
  Sticky: Fn,
  StyleProvider: vt,
  Swipe: Un,
  SwipeItem: Yn,
  Switch: fa,
  Tab: ca,
  TabItem: ma,
  Table: pa,
  Tabs: ha,
  TabsItems: ga,
  Themes: oi,
  TimePicker: ya,
  Tooltip: vr,
  Uploader: ba
};
export {
  Sa as ActionSheet,
  wr as AppBar,
  Sr as Avatar,
  kr as AvatarGroup,
  $r as BackTop,
  or as Badge,
  Tr as BottomNavigation,
  Or as BottomNavigationItem,
  Pr as Breadcrumb,
  Vr as Breadcrumbs,
  Xe as Button,
  Er as ButtonGroup,
  Mr as Card,
  ir as Cell,
  lr as Checkbox,
  Ir as CheckboxGroup,
  sr as Chip,
  Br as Col,
  Nr as Collapse,
  Dr as CollapseItem,
  sn as Context,
  Ar as Countdown,
  zr as Counter,
  Rr as DatePicker,
  ka as Dialog,
  Ur as Divider,
  Yr as Ellipsis,
  Fr as Fab,
  Rn as Form,
  je as FormDetails,
  At as Hover,
  $e as Icon,
  Hr as Image,
  jn as ImagePreview,
  jr as IndexAnchor,
  Wr as IndexBar,
  cr as Input,
  it as Lazy,
  Gr as Link,
  qr as List,
  wn as Loading,
  xo as LoadingBar,
  $o as Locale,
  Hn as Menu,
  Kr as Option,
  Xr as Overlay,
  Po as PIXEL,
  Zr as Pagination,
  Jr as Paper,
  Oa as Picker,
  fn as Popup,
  Qr as Progress,
  _r as PullRefresh,
  xr as Radio,
  ea as RadioGroup,
  na as Rate,
  ra as Result,
  ze as Ripple,
  aa as Row,
  Bi as SNACKBAR_TYPE,
  ta as Select,
  oa as Skeleton,
  ia as Slider,
  ai as Snackbar,
  sa as Space,
  ua as Step,
  da as Steps,
  Fn as Sticky,
  vt as StyleProvider,
  Un as Swipe,
  Yn as SwipeItem,
  fa as Switch,
  ca as Tab,
  ma as TabItem,
  pa as Table,
  ha as Tabs,
  ga as TabsItems,
  oi as Themes,
  ya as TimePicker,
  vr as Tooltip,
  ba as Uploader,
  nS as _ActionSheetComponent,
  rS as _AppBarComponent,
  tS as _AvatarComponent,
  oS as _AvatarGroupComponent,
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
  CS as _CheckboxGroupComponent,
  wS as _ChipComponent,
  SS as _ColComponent,
  kS as _CollapseComponent,
  $S as _CollapseItemComponent,
  Jw as _ContextComponent,
  TS as _CountdownComponent,
  OS as _CounterComponent,
  PS as _DatePickerComponent,
  VS as _DialogComponent,
  ES as _DividerComponent,
  IS as _EllipsisComponent,
  BS as _FabComponent,
  NS as _FormComponent,
  yS as _FormDetailsComponent,
  lS as _HoverComponent,
  xw as _IconComponent,
  DS as _ImageComponent,
  LS as _ImagePreviewComponent,
  US as _IndexAnchorComponent,
  YS as _IndexBarComponent,
  FS as _InputComponent,
  aS as _LazyComponent,
  HS as _LinkComponent,
  jS as _ListComponent,
  WS as _LoadingBarComponent,
  iS as _LoadingComponent,
  eS as _LocaleComponent,
  GS as _MenuComponent,
  qS as _OptionComponent,
  KS as _OverlayComponent,
  XS as _PaginationComponent,
  ZS as _PaperComponent,
  JS as _PickerComponent,
  _w as _PopupComponent,
  QS as _ProgressComponent,
  _S as _PullRefreshComponent,
  xS as _RadioComponent,
  ek as _RadioGroupComponent,
  nk as _RateComponent,
  rk as _ResultComponent,
  Qw as _RippleComponent,
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
  MS as _TooltipComponent,
  Ck as _UploaderComponent,
  lf as actionSheetProps,
  gi as add,
  gf as appBarProps,
  Hf as avatarGroupProps,
  zf as avatarProps,
  pc as backTopProps,
  wc as badgeProps,
  Ic as bottomNavigationItemProps,
  Tc as bottomNavigationProps,
  Lc as breadcrumbProps,
  jc as breadcrumbsProps,
  rc as buttonProps,
  em as cardProps,
  im as cellProps,
  km as checkboxGroupProps,
  pm as checkboxProps,
  Em as chipProps,
  Am as colProps,
  Gm as collapseItemProps,
  Fm as collapseProps,
  Zm as countdownProps,
  Gp as counterProps,
  fh as datePickerProps,
  wk as default,
  Ue as defaultLazyOptions,
  Eh as dialogProps,
  Lh as dividerProps,
  bs as enUS,
  dm as formDetailsProps,
  vy as formProps,
  gs as iconProps,
  $s as imageCache,
  Ny as imagePreviewProps,
  hy as imageProps,
  jy as indexAnchorProps,
  Ky as indexBarProps,
  xy as inputProps,
  Xw as install,
  lb as linkProps,
  vb as listProps,
  hb as loadingBarProps,
  nr as loadingProps,
  Vb as menuProps,
  ws as merge,
  Db as optionProps,
  Rb as overlayProps,
  He as pack,
  Cs as packs,
  Yb as paginationProps,
  Gb as paperProps,
  Zb as pickerProps,
  mt as popupProps,
  a0 as progressProps,
  d0 as pullRefreshProps,
  w0 as radioGroupProps,
  m0 as radioProps,
  T0 as rateProps,
  E0 as resultProps,
  p1 as rowProps,
  C1 as selectProps,
  $1 as skeletonProps,
  E1 as sliderProps,
  Wd as snackbarProps,
  x1 as spaceProps,
  rC as stepProps,
  dC as stepsProps,
  Mt as stickyProps,
  cC as styleProviderProps,
  td as swipeProps,
  hC as switchProps,
  PC as tabItemProps,
  CC as tabProps,
  IC as tableProps,
  UC as tabsItemsProps,
  AC as tabsProps,
  Ow as timePickerProps,
  Zg as tooltipProps,
  Lw as uploaderProps,
  yi as use,
  hi as useLocale,
  Kw as version,
  pi as zhCN
};
