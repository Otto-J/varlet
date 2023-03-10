import { reactive as Ie, onMounted as Ga, nextTick as Ve, onActivated as qa, isRef as pv, watch as oe, onBeforeUnmount as vt, onDeactivated as cr, unref as go, inject as li, getCurrentInstance as Yn, computed as U, provide as si, isVNode as Xa, Comment as hv, Fragment as Oe, ref as E, createApp as gv, onUnmounted as Ta, h as _l, onBeforeMount as yv, defineComponent as x, createVNode as ee, Teleport as Pa, Transition as Be, withDirectives as we, vShow as dr, mergeProps as Me, openBlock as h, createBlock as pe, resolveDynamicComponent as Ka, normalizeClass as m, normalizeStyle as q, resolveComponent as le, resolveDirective as Ae, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as re, createElementBlock as T, renderList as Ne, createCommentVNode as _, onUpdated as Gt, createTextVNode as be, pushScopeId as Oa, popScopeId as Va, withModifiers as Tn, normalizeProps as ui, guardReactiveProps as xl, vModelText as bv, toRefs as wv, withKeys as zi, toRaw as Li, TransitionGroup as Cv } from "vue";
var es = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, GC = Ie(es);
const un = Ie(es), Ge = (e) => typeof e == "string", yo = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", di = (e) => Object.prototype.toString.call(e) === "[object Object]", Sv = (e) => typeof e == "object" && e !== null, vi = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), kv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, In = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ge(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : yo(e) ? Number(e) : e, Ra = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, fi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, ft = () => typeof window < "u", Ri = (e) => [...new Set(e)], ns = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), $v = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Tv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Ui = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Fi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Pv = (e) => {
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
      this.has(r) && Ra(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, bo = (e) => e, Yi = (e) => Math.pow(e, 3), rs = (e) => e < 0.5 ? Yi(e * 2) / 2 : 1 - Yi((1 - e) * 2) / 2, qt = (e, n) => e ?? n, as = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ya = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Hi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ov(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Hi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Vv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ji(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Xt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function ci(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Mv(e) {
  return wo.apply(this, arguments);
}
function wo() {
  return wo = Ov(function* (e) {
    yield Pn();
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
  }), wo.apply(this, arguments);
}
function uo(e) {
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
function ts(e, n) {
  if (Ge(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Sv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var os = (e) => Ge(e) && e.endsWith("rem"), Ev = (e) => Ge(e) && e.endsWith("px") || xe(e), Bv = (e) => Ge(e) && e.endsWith("%"), is = (e) => Ge(e) && e.endsWith("vw"), ls = (e) => Ge(e) && e.endsWith("vh"), Nv = (e) => Ge(e) && e.startsWith("calc("), Dv = (e) => Ge(e) && e.startsWith("var("), De = (e) => {
  if (xe(e))
    return e;
  if (Ev(e))
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
    return Bv(e) || is(e) || ls(e) || os(e) || Nv(e) || Dv(e) ? e : De(e) + "px";
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
function Wi(e) {
  var n = as();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Kt(e) {
  kn(() => {
    kn(e);
  });
}
function Pn() {
  return new Promise((e) => {
    kn(() => {
      kn(e);
    });
  });
}
function Av() {
  return new Promise((e) => {
    kn(e);
  });
}
function tt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = Xt(e), s = ci(e);
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
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + $v(a);
    return n[o] = t, n;
  }, {});
}
function zv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Bt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tn(e) {
  let n = !1;
  Ga(() => {
    e(), Ve(() => {
      n = !0;
    });
  }), qa(() => {
    n && e();
  });
}
function ba(e, n, r, a = {}) {
  if (!ft())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const c = go(f);
    c && (c.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const c = go(f);
    c && (c.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  pv(e) && (d = oe(() => e.value, (f, c) => {
    u(c), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return tn(() => {
    s(e);
  }), vt(() => {
    u(e);
  }), cr(() => {
    u(e);
  }), v;
}
function us(e, n, r) {
  if (!ft())
    return;
  ba(document, n, (t) => {
    const o = go(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Lv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Rv(e) {
  const n = Yn();
  return e in n.provides;
}
function mr(e) {
  if (!Rv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = li(e), { childInstances: r, collect: a, clear: t } = n, o = Lv(n, ["childInstances", "collect", "clear"]), l = Yn();
  return {
    index: U(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Ga(() => {
        Ve().then(() => {
          a(l, u);
        });
      }), vt(() => {
        Ve().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function Uv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Xa(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function pr(e) {
  const n = Yn(), r = Ie([]), a = [], t = U(() => r.length), o = () => {
    const u = Uv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Ra(r, u), Ra(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      si(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
var Fv = ["collect", "clear"];
function Gi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qi(e) {
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
function Yv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
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
function Xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Hv(e) {
  var n = gv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Za(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => _l(e, Nt({}, n, r));
    }
  }, {
    unmount: t
  } = Hv(a);
  return {
    unmountInstance: t
  };
}
function ds(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== hv) {
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
function jv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Xa(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function ct(e) {
  var n = Ie([]), r = Yn(), a = () => {
    var i = jv(r.subTree);
    n.sort((s, u) => i.indexOf(s.vnode) - i.indexOf(u.vnode));
  }, t = (i) => {
    n.push(i), a();
  }, o = (i) => {
    Ra(n, i);
  };
  si(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var l = U(() => n.length);
  return {
    length: l
  };
}
function mt(e) {
  if (!vs(e))
    return {
      index: null
    };
  var n = li(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Yn();
  Ga(() => {
    Ve().then(() => r(o));
  }), Ta(() => {
    Ve().then(() => a(o));
  });
  var l = U(() => t.indexOf(o));
  return {
    index: l
  };
}
function Ja(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Ra(n, o);
  }, t = (o) => {
    si(e, Nt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function Qa(e) {
  if (!vs(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = li(e), {
    collect: r,
    clear: a
  } = n, t = Yv(n, Fv), o = (l) => {
    Ga(() => r(l)), vt(() => a(l));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function vs(e) {
  var n = Yn();
  return e in n.provides;
}
function hn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = qi(function* (o, l, i) {
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
    var t = qi(function* (o, l, i, s, u) {
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
function Wv(e) {
  ba(window, "hashchange", e), ba(window, "popstate", e);
}
function Zt() {
  var e = E(!1);
  return qa(() => {
    e.value = !1;
  }), cr(() => {
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
function R(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
var {
  n: fs
} = ne("ripple"), Xi = 250;
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
      } = qv(this, e), s = document.createElement("div");
      s.classList.add(fs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Gv(this), this.appendChild(s), window.setTimeout(() => {
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
  zv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Xv(e, n) {
  var r, a, t;
  e._ripple = Dt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : un.touchmoveForbid,
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
function Kv(e) {
  e.removeEventListener("touchstart", cs), e.removeEventListener("touchmove", ms), e.removeEventListener("dragstart", Co), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Zv(e, n) {
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : un.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Dt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ps = {
  mounted: Xv,
  unmounted: Kv,
  updated: Zv,
  install(e) {
    e.directive("ripple", this);
  }
}, qC = ps;
const ze = ps;
function Jv(e) {
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
function hs() {
  var e = Object.keys(un.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function yt(e) {
  un.locks[e] = 1, hs();
}
function bt(e) {
  delete un.locks[e], hs();
}
function Jt(e, n) {
  var {
    uid: r
  } = Yn();
  n && oe(n, (a) => {
    a === !1 ? bt(r) : a === !0 && e() === !0 && yt(r);
  }), oe(e, (a) => {
    n && n() === !1 || (a === !0 ? yt(r) : bt(r));
  }), yv(() => {
    n && n() === !1 || e() === !0 && yt(r);
  }), Ta(() => {
    n && n() === !1 || e() === !0 && bt(r);
  }), qa(() => {
    n && n() === !1 || e() === !0 && yt(r);
  }), cr(() => {
    n && n() === !1 || e() === !0 && bt(r);
  });
}
function ht(e, n) {
  var r = E(un.zIndex);
  return oe(e, (a) => {
    a && (un.zIndex += n, r.value = un.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function Qv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xa(e);
}
var {
  n: Mn,
  classes: vo
} = ne("popup");
const cn = x({
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
    } = Zt(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    Jt(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), Wv(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ee("div", {
        class: vo(Mn("overlay"), d),
        style: So({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => ee("div", Me({
      class: vo(Mn("content"), Mn("--" + e.position), [e.defaultStyle, Mn("--content-background-color")], [e.defaultStyle, Mn("$-elevation--3")]),
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
      return ee(Be, {
        name: Mn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(ee("div", {
          class: vo(Mn("$--box"), Mn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && i(), ee(Be, {
          name: p || Mn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[dr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ee(Pa, {
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
cn.install = function(e) {
  e.component(cn.name, cn);
};
var XC = cn, gs = {
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
function Ki(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function _v(e) {
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
var {
  n: xv,
  classes: ef
} = ne("icon");
function nf(e, n) {
  return h(), pe(
    Ka(e.isURL(e.name) ? "img" : "i"),
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
var ys = x({
  name: "VarIcon",
  props: gs,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = _v(function* (o, l) {
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
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: xv,
      classes: ef,
      nextName: n,
      animateInProgress: r,
      isURL: kv,
      toNumber: L,
      toSizeUnit: ce
    };
  }
});
ys.render = nf;
const $e = ys;
$e.install = function(e) {
  e.component($e.name, $e);
};
var KC = $e;
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
var rf = ko({
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
}, Xe(pt, [
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
const mi = {
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
function pi() {
  var e = {}, n = E({}), r = (o, l) => {
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
    e[o] = $o({}, e[o], l), a(o);
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
  packs: ws,
  pack: He,
  add: hi,
  use: gi,
  merge: Cs
} = pi();
hi("zh-CN", mi);
gi("zh-CN");
var ZC = {
  zhCN: mi,
  enUS: bs,
  packs: ws,
  pack: He,
  add: hi,
  use: gi,
  merge: Cs,
  useLocale: pi
};
const To = {
  zhCN: mi,
  enUS: bs,
  packs: ws,
  pack: He,
  add: hi,
  use: gi,
  merge: Cs,
  useLocale: pi
};
var {
  n: af,
  classes: tf
} = ne("action-sheet"), of = ["onClick"];
function lf(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Ae("ripple");
  return h(), pe(
    a,
    Me({
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
        Me({
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
          Oe,
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
            )) : _("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              re(o.name),
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
var Ss = x({
  name: "VarActionSheet",
  directives: {
    Ripple: ze
  },
  components: {
    VarPopup: cn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: rf,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return oe(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: af,
      classes: tf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
      dt: qt,
      handleSelect: r
    };
  }
});
Ss.render = lf;
const xn = Ss;
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
var Xn, yi = {};
function sf(e) {
  return e === void 0 && (e = {}), Po({}, yi, e);
}
function wa(e) {
  return ft() ? new Promise((n) => {
    wa.close();
    var r = Ie(sf(e));
    r.teleport = "body", Xn = r;
    var {
      unmountInstance: a
    } = Za(xn, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), Xn === r && (Xn = null);
      },
      onRouteChange: () => {
        a(), Xn === r && (Xn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function uf(e) {
  yi = e;
}
function df() {
  yi = {};
}
function vf() {
  if (Xn != null) {
    var e = Xn;
    Xn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
wa.Component = xn;
xn.install = function(e) {
  e.component(xn.name, xn);
};
wa.install = function(e) {
  e.component(xn.name, xn);
};
Object.assign(wa, {
  setDefaultOptions: uf,
  resetDefaultOptions: df,
  close: vf
});
var JC = xn;
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
} = ne("app-bar");
function hf(e, n) {
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
        )) : _("v-if", !0)],
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
      )) : _("v-if", !0), A(
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
        )) : _("v-if", !0), W(e.$slots, "right")],
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
var ks = x({
  name: "VarAppBar",
  props: cf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
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
    return tn(o), Gt(o), {
      n: mf,
      classes: pf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
ks.render = hf;
const br = ks;
br.install = function(e) {
  e.component(br.name, br);
};
var QC = br;
function Zi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qt(e) {
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
var gf = "background-image", yf = "lazy-loading", bf = "lazy-error", Ji = "lazy-attempt", wf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Vo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ua = [], At = [], $s = Pv(100), Ue = {
  loading: Vo,
  error: Vo,
  attempt: 3,
  throttleWait: 300,
  events: wf
}, bi = fi(gt, Ue.throttleWait);
function _t(e, n) {
  e._lazy.arg === gf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Cf(e) {
  e._lazy.loading && _t(e, e._lazy.loading), gt();
}
function Sf(e) {
  e._lazy.error && _t(e, e._lazy.error), e._lazy.state = "error", Ci(e), gt();
}
function Ts(e, n) {
  _t(e, n), e._lazy.state = "success", Ci(e), gt();
}
function kf(e) {
  var n;
  At.includes(e) || (At.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, bi, {
      passive: !0
    });
  }));
}
function $f() {
  At.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, bi);
    });
  }), At.length = 0;
}
function Tf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(yf)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(bf)) != null ? a : Ue.error,
    attempt: e.getAttribute(Ji) ? Number(e.getAttribute(Ji)) : Ue.attempt
  };
  e._lazy = Oo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), _t(e, Vo), k(Ue.filter, e._lazy);
}
function Pf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, $s.add(n), Ts(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Sf(e) : Ps(e);
  });
}
function Ps(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if ($s.has(n)) {
      Ts(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Cf(e), Pf(e, n);
  }
}
function wi(e) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Qt(function* (e) {
    (yield Mv(e)) && Ps(e);
  }), Mo.apply(this, arguments);
}
function gt() {
  Ua.forEach((e) => wi(e));
}
function Of(e) {
  return Io.apply(this, arguments);
}
function Io() {
  return Io = Qt(function* (e) {
    !Ua.includes(e) && Ua.push(e), Iv(e).forEach(kf), yield wi(e);
  }), Io.apply(this, arguments);
}
function Ci(e) {
  Ra(Ua, e), Ua.length === 0 && $f();
}
function Vf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Os(e, n) {
  return Eo.apply(this, arguments);
}
function Eo() {
  return Eo = Qt(function* (e, n) {
    Tf(e, n), yield Of(e);
  }), Eo.apply(this, arguments);
}
function Mf(e, n) {
  return Bo.apply(this, arguments);
}
function Bo() {
  return Bo = Qt(function* (e, n) {
    if (!Vf(e, n)) {
      Ua.includes(e) && (yield wi(e));
      return;
    }
    yield Os(e, n);
  }), Bo.apply(this, arguments);
}
function If(e) {
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
  mounted: Os,
  unmounted: Ci,
  updated: Mf,
  install(e, n) {
    If(n), bi = fi(gt, Ue.throttleWait), e.directive("lazy", this);
  }
}, _C = Vs;
const ot = Vs;
function Ef(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Ms = (e) => ["mini", "small", "normal", "large"].includes(e);
function Is(e) {
  return Ms(e) || xe(e) || Ge(e);
}
var Bf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Is,
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
    validator: Ef,
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
  n: Nf,
  classes: Df
} = ne("avatar"), Af = ["src", "lazy-loading", "lazy-error"], zf = ["src"];
function Lf(e, n) {
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
      Oe,
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
        Af
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
        zf
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
var Es = x({
  name: "VarAvatar",
  directives: {
    Lazy: ot
  },
  props: Bf,
  setup(e) {
    var n = E(null), r = E(null), a = E(1), t = () => {
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
    return tn(t), Gt(t), {
      internalSizeValidator: Ms,
      sizeValidator: Is,
      toSizeUnit: ce,
      n: Nf,
      classes: Df,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Es.render = Lf;
const wr = Es;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var xC = wr, Rf = {
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
} = ne("avatar-group");
function Yf(e, n) {
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
var Bs = x({
  name: "VarAvatarGroup",
  props: Rf,
  setup(e) {
    var n = U(() => e.offset == null ? {} : {
      "--avatar-group-offset": ce(e.offset)
    });
    return {
      n: Uf,
      classes: Ff,
      toSizeUnit: ce,
      rootStyles: n
    };
  }
});
Bs.render = Yf;
const Cr = Bs;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var eS = Cr;
function Hf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function jf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Jn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Hf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: jf
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
  n: Wf,
  classes: Gf
} = ne("loading"), qf = (e) => (Oa(""), e = e(), Va(), e), Xf = /* @__PURE__ */ qf(() => /* @__PURE__ */ A(
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
)), Kf = [Xf];
function Zf(e, n) {
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (h(), T(
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
          Kf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (h(!0), T(
        Oe,
        null,
        Ne(e.loadingTypeDict, (r, a) => (h(), T(
          Oe,
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
              Oe,
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
          )) : _("v-if", !0)],
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ns = x({
  name: "VarLoading",
  props: Jn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = U(() => k(r.default) ? e.loading : !0);
    return {
      n: Wf,
      classes: Gf,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Ns.render = Zf;
const Cn = Ns;
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
var nS = Cn;
function Ds(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function Jf(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ns(t)] = o, r;
  }, {}) : {};
}
function Qf(e) {
  var {
    value: n
  } = e._hover, r = Jf(e);
  Object.keys(n).forEach((a) => {
    var t = ns(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Si(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function _f(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function As(e) {
  _f(e), Si(e, e._hover.rawStyle);
}
function zs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, vi(e)) {
    e(this._hover.hovering);
    return;
  }
  Si(this, e);
}
function Ls() {
  if (this._hover.hovering = !1, vi(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  As(this);
}
function Rs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Ds(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, Qf(e), e.addEventListener("mouseenter", zs), e.addEventListener("mouseleave", Ls));
}
function Us(e, n) {
  Ds(n.arg) || (As(e), e.removeEventListener("mouseenter", zs), e.removeEventListener("mouseleave", Ls));
}
function xf(e, n) {
  Us(e, n);
}
function ec(e, n) {
  return !vi(n.value) && e._hover.hovering;
}
function nc(e, n) {
  Rs(e, n), ec(e, n) && Si(e, n.value);
}
var Fs = {
  mounted: Rs,
  unmounted: Us,
  beforeUpdate: xf,
  updated: nc,
  install(e) {
    e.directive("hover", this);
  }
}, rS = Fs;
const zt = Fs;
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
function Ys(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function rc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function ac(e) {
  return ["button", "reset", "submit"].includes(e);
}
var tc = {
  type: {
    type: String,
    validator: Ys
  },
  nativeType: {
    type: String,
    default: "button",
    validator: ac
  },
  size: {
    type: String,
    validator: rc
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
  loadingType: Xe(Jn, "type"),
  loadingSize: Xe(Jn, "size"),
  loadingColor: No({}, Xe(Jn, "color"), {
    default: "currentColor"
  }),
  onClick: R(),
  onTouchstart: R()
}, Hs = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function oc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = pr(Hs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function ic() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = mr(Hs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: lc,
  classes: sc
} = ne("button"), uc = ["type", "disabled"];
function dc(e, n) {
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
    )) : _("v-if", !0), A(
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
    uc
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }], [t, e.handleHover, "desktop"]]);
}
var js = x({
  name: "VarButton",
  components: {
    VarLoading: Cn
  },
  directives: {
    Ripple: ze,
    Hover: zt
  },
  props: tc,
  setup(e) {
    var n = E(!1), r = E(!1), {
      buttonGroup: a
    } = ic(), t = U(() => {
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
      n: lc,
      classes: sc,
      pending: n,
      states: t,
      hovering: r,
      handleHover: s,
      handleClick: l,
      handleTouchstart: i
    };
  }
});
js.render = dc;
const Ke = js;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
var aS = Ke, vc = {
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
  n: fc,
  classes: cc
} = ne("back-top");
function mc(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), pe(
    Pa,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Me({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Tn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [W(e.$slots, "default", {}, () => [ee(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [ee(r, {
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
var Ws = x({
  name: "VarBackTop",
  components: {
    VarButton: Ke,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: vc,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = ci(t);
      tt(t, {
        left: v,
        duration: e.duration,
        animation: rs
      });
    }, l = fi(() => {
      n.value = Xt(t) >= De(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ts(e.target, "BackTop") : Ma(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Ga(() => {
      i(), s(), a.value = !1;
    }), qa(s), vt(u), cr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ce,
      n: fc,
      classes: cc,
      handleClick: o
    };
  }
});
Ws.render = mc;
const Sr = Ws;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var tS = Sr;
function pc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function hc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var gc = {
  type: {
    type: String,
    default: "default",
    validator: pc
  },
  position: {
    type: String,
    default: "right-top",
    validator: hc
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
  n: yc,
  classes: bc
} = ne("badge");
function wc(e, n) {
  var r = le("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "default"), ee(
      Be,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [we(A(
          "span",
          Me({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (h(), pe(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-badge-cover": "",
              name: e.icon
            },
            null,
            8,
            ["class", "name"]
          )) : _("v-if", !0), W(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), T(
            "span",
            {
              key: 0,
              class: m(e.n("value"))
            },
            re(e.value),
            3
            /* TEXT, CLASS */
          )) : _("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[dr, !e.hidden]])]),
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
var Gs = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: gc,
  setup(e) {
    var n = U(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: yc,
      classes: bc,
      value: n
    };
  }
});
Gs.render = wc;
const er = Gs;
er.install = function(e) {
  e.component(er.name, er);
};
var oS = er, Cc = {
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
}, qs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Xs = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Sc() {
  var {
    childProviders: e,
    bindChildren: n
  } = Ja(qs), {
    length: r
  } = ct(Xs);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: kc,
  classes: $c
} = ne("bottom-navigation"), {
  n: xt
} = ne("bottom-navigation-item"), Qi = xt("--right-half-space"), _i = xt("--left-half-space"), xi = xt("--right-space"), Tc = {
  type: "primary"
};
function Pc(e, n) {
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
      Me({
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
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Ks = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ke
  },
  props: Cc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = U(() => e.active), o = U(() => e.activeColor), l = U(() => e.inactiveColor), i = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Sc(), v = () => {
      s.value === 0 || f() || c() || p();
    }, f = () => u.find((P) => {
      var {
        name: z
      } = P;
      return t.value === z.value;
    }), c = () => u.find((P) => {
      var {
        index: z
      } = P;
      return t.value === z.value;
    }), p = () => {
      xe(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, y = (P) => {
      t.value !== P && (e.onBeforeChange ? g(P) : V(P));
    }, g = (P) => {
      var z = k(e.onBeforeChange, P);
      z = Ce(z) ? z : [z], Promise.all(z).then((I) => {
        I.some((b) => !b) || V(P);
      });
    }, V = (P) => {
      k(e["onUpdate:active"], P), k(e.onChange, P);
    }, O = () => {
      var P = B();
      P.forEach((z) => {
        z.classList.remove(Qi, _i, xi);
      });
    }, S = (P) => {
      var z = B(), I = z.length, b = P % 2 === 0;
      z.forEach((C, j) => {
        $(b, C, j, I);
      });
    }, $ = (P, z, I, b) => {
      var C = I === b - 1;
      if (!P && C) {
        z.classList.add(xi);
        return;
      }
      var j = I === b / 2 - 1, Q = I === b / 2;
      j ? z.classList.add(Qi) : Q && z.classList.add(_i);
    }, B = () => Array.from(a.value.querySelectorAll("." + xt())), w = () => {
      k(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(N), oe(() => s.value, v), oe(() => e.fabProps, (P) => {
      i.value = Do({}, Tc, P);
    }, {
      immediate: !0,
      deep: !0
    }), tn(() => {
      r.fab && S(s.value);
    }), Gt(() => {
      O(), r.fab && S(s.value);
    }), {
      n: kc,
      classes: $c,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: w,
      fabProps: i
    };
  }
});
Ks.render = Pc;
const kr = Ks;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var iS = kr, Oc = {
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
function Vc() {
  var {
    parentProvider: e,
    bindParent: n
  } = Qa(qs), {
    index: r
  } = mt(Xs);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Mc,
  classes: Ic
} = ne("bottom-navigation-item"), Ec = {
  type: "danger",
  dot: !0
};
function Bc(e, n) {
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
    )) : _("v-if", !0), W(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), pe(
      a,
      Me({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : _("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (h(), T(
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
var Zs = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: er,
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: Oc,
  setup(e) {
    var n = U(() => e.name), r = U(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Vc(), {
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
    return l(d), oe(() => r.value, (c) => {
      a.value = c === !0 ? Ec : r.value;
    }, {
      immediate: !0
    }), {
      n: Mc,
      classes: Ic,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Zs.render = Bc;
const $r = Zs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var lS = $r, Nc = {
  separator: {
    type: String
  },
  onClick: R()
}, Js = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Dc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = pr(Js);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Ac() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = mr(Js);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: zc,
  classes: Lc
} = ne("breadcrumb");
function Rc(e, n) {
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
    ), e.isLast ? _("v-if", !0) : W(e.$slots, "separator", {
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
var Qs = x({
  name: "VarBreadcrumb",
  props: Nc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Ac(), t = U(() => n.value === r.length.value - 1), o = U(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: zc,
      classes: Lc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Qs.render = Rc;
const Tr = Qs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var sS = Tr, Uc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Fc
} = ne("breadcrumbs");
function Yc(e, n) {
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
var _s = x({
  name: "VarBreadcrumbs",
  props: Uc,
  setup(e) {
    var n = U(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Dc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Fc
    };
  }
});
_s.render = Yc;
const Pr = _s;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var uS = Pr;
function Hc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function jc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Wc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Gc = {
  type: {
    type: String,
    default: "default",
    validator: Hc
  },
  size: {
    type: String,
    default: "normal",
    validator: jc
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
    validator: Wc
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
  n: qc,
  classes: Xc
} = ne("button-group");
function Kc(e, n) {
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
var xs = x({
  name: "VarButtonGroup",
  props: Gc,
  setup(e) {
    var {
      bindButtons: n
    } = oc(), r = {
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return n(r), {
      n: qc,
      classes: Xc
    };
  }
});
xs.render = Kc;
const Or = xs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var dS = Or;
function Zc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Jc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Zc,
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
function el(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function nl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        el(o, a, t, l, i, "next", s);
      }
      function i(s) {
        el(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Qc,
  classes: _c
} = ne("card"), xc = 500, em = ["src", "alt"];
function nm(e, n) {
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
        em
      )) : _("v-if", !0)]), A(
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
        )) : _("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
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
        )) : _("v-if", !0)],
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
        [W(e.$slots, "close-button", {}, () => [ee(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Tn(e.close, ["stop"])
          },
          {
            default: ve(() => [ee(
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
      )) : _("v-if", !0)],
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
var eu = x({
  name: "VarCard",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarButton: Ke
  },
  props: Jc,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), l = E("100%"), i = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = U(() => e.layout === "row"), p = E(!1), y = E(!1), {
      zIndex: g
    } = ht(() => e.floating, 1);
    Jt(() => e.floating, () => !c.value);
    var V = "auto", O = "auto", S = null, $ = E(null), B = /* @__PURE__ */ function() {
      var z = nl(function* () {
        clearTimeout($.value), clearTimeout(S), $.value = null, $.value = setTimeout(/* @__PURE__ */ nl(function* () {
          var {
            width: I,
            height: b,
            left: C,
            top: j
          } = n.value.getBoundingClientRect();
          a.value = ce(I), t.value = ce(b), o.value = a.value, l.value = t.value, i.value = ce(j), s.value = ce(C), u.value = "fixed", V = i.value, O = s.value, p.value = !0, yield Pn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? xc : 0);
      });
      return function() {
        return z.apply(this, arguments);
      };
    }(), w = () => {
      clearTimeout(S), clearTimeout($.value), $.value = null, o.value = a.value, l.value = t.value, i.value = V, s.value = O, v.value = "0px", f.value = "0", p.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", V = "auto", O = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      k(e["onUpdate:floating"], !1);
    }, P = (z) => {
      k(e.onClick, z);
    };
    return oe(() => e.floating, (z) => {
      c.value || Ve(() => {
        z ? B() : w();
      });
    }, {
      immediate: !0
    }), {
      n: Qc,
      classes: _c,
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
      close: N,
      showFloatingButtons: p,
      floated: y,
      handleClick: P
    };
  }
});
eu.render = nm;
const Vr = eu;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var vS = Vr, rm = {
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
  n: am,
  classes: tm
} = ne("cell");
function om(e, n) {
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
      [ee(
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
    )) : _("v-if", !0)]), A(
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
      )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
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
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var nu = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: rm,
  setup(e) {
    var n = U(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ce(e.borderOffset),
      "--cell-border-right": ce(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: am,
      classes: tm,
      toSizeUnit: ce,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
nu.render = om;
const nr = nu;
nr.install = function(e) {
  e.component(nr.name, nr);
};
var fS = nr, im = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: lm
} = ne("form-details"), sm = {
  key: 0
}, um = {
  key: 0
};
function dm(e, n) {
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
          [ee(
            Be,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                sm,
                re(e.errorMessage),
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
        ), A(
          "div",
          {
            class: m(e.n("extra-message"))
          },
          [ee(
            Be,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                um,
                re(e.extraMessage),
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
var ru = x({
  name: "VarFormDetails",
  props: im,
  setup: () => ({
    n: lm
  })
});
ru.render = dm;
const je = ru;
je.install = function(e) {
  e.component(je.name, je);
};
var cS = je, vm = {
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
}, au = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function fm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = pr(au);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function cm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = mr(au);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
var tu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function gn() {
  var {
    bindParent: e,
    parentProvider: n
  } = Qa(tu), r = Yn(), a = e ? (t) => {
    e(Ao({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function mm() {
  var {
    bindChildren: e,
    childProviders: n
  } = Ja(tu);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: pm,
  classes: hm
} = ne("checkbox");
function gm(e, n) {
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
        }, () => [ee(
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
        }, () => [ee(
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
    ), ee(
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
var ou = x({
  name: "VarCheckbox",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: vm,
  setup(e) {
    var n = E(!1), r = U(() => n.value === e.checkedValue), a = U(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = cm(), {
      form: i,
      bindForm: s
    } = gn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = hn(), c = (w) => {
      Ve(() => {
        var {
          validateTrigger: N,
          rules: P,
          modelValue: z
        } = e;
        d(N, w, P, z);
      });
    }, p = (w) => {
      n.value = w;
      var {
        checkedValue: N,
        onChange: P
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(P, n.value), c("onChange"), w === N ? o == null || o.onChecked(N) : o == null || o.onUnchecked(N);
    }, y = (w) => {
      var {
        disabled: N,
        readonly: P,
        checkedValue: z,
        uncheckedValue: I,
        onClick: b
      } = e;
      if (!(i != null && i.disabled.value || N) && (k(b, w), !(i != null && i.readonly.value || P))) {
        t.value = !0;
        var C = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && C || p(r.value ? I : z);
      }
    }, g = (w) => {
      var {
        checkedValue: N,
        uncheckedValue: P
      } = e;
      n.value = w.includes(N) ? N : P;
    }, V = () => {
      t.value = !1;
    }, O = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, S = (w) => {
      var {
        checkedValue: N,
        uncheckedValue: P
      } = e, z = ![N, P].includes(w);
      z && (w = r.value ? P : N), p(w);
    }, $ = () => v(e.rules, e.modelValue);
    oe(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var B = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: $,
      resetValidation: f,
      reset: O,
      resetWithAnimation: V
    };
    return k(l, B), k(s, B), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: pm,
      classes: hm,
      handleClick: y,
      toggle: S,
      reset: O,
      validate: $,
      resetValidation: f
    };
  }
});
ou.render = gm;
const rr = ou;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var mS = rr;
function ym(e) {
  return ["horizontal", "vertical"].includes(e);
}
var bm = {
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
    validator: ym
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
  n: wm,
  classes: Cm
} = ne("checkbox-group");
function Sm(e, n) {
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
    ), ee(
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
var iu = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: bm,
  setup(e) {
    var n = U(() => e.max), r = U(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = fm(), {
      bindForm: l
    } = gn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = hn(), v = U(() => i.value), f = (N) => {
      Ve(() => {
        var {
          validateTrigger: P,
          rules: z,
          modelValue: I
        } = e;
        s(P, N, z, I);
      });
    }, c = (N) => {
      k(e["onUpdate:modelValue"], N), k(e.onChange, N), f("onChange");
    }, p = (N) => {
      var {
        modelValue: P
      } = e;
      P.includes(N) || c([...P, N]);
    }, y = (N) => {
      var {
        modelValue: P
      } = e;
      P.includes(N) && c(P.filter((z) => z !== N));
    }, g = () => t.forEach((N) => {
      var {
        sync: P
      } = N;
      return P(e.modelValue);
    }), V = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, O = () => {
      var N = t.map((z) => {
        var {
          checkedValue: I
        } = z;
        return I.value;
      }), P = Ri(N);
      return V(), k(e["onUpdate:modelValue"], P), P;
    }, S = () => {
      var N = t.filter((z) => {
        var {
          checked: I
        } = z;
        return !I.value;
      }).map((z) => {
        var {
          checkedValue: I
        } = z;
        return I.value;
      }), P = Ri(N);
      return V(), k(e["onUpdate:modelValue"], P), P;
    }, $ = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, B = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, g, {
      deep: !0
    }), oe(() => a.value, g);
    var w = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: B,
      resetValidation: d,
      reset: $,
      errorMessage: v
    };
    return o(w), k(l, w), {
      errorMessage: i,
      n: wm,
      classes: Cm,
      checkAll: O,
      inverseAll: S,
      reset: $,
      validate: B,
      resetValidation: d
    };
  }
});
iu.render = Sm;
const Mr = iu;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var pS = Mr;
function km(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function $m(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Tm = {
  type: {
    type: String,
    default: "default",
    validator: km
  },
  size: {
    type: String,
    default: "normal",
    validator: $m
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Xe(gs, "name"),
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
  n: Hn,
  classes: Pm
} = ne("chip");
function Om(e, n) {
  var r = le("var-icon");
  return h(), pe(
    Be,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Me({
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
          [ee(
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
var lu = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Tm,
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
      } = e, u = Hn(o ? "$--flex" : "$--inline-flex"), d = i ? Hn("plain") + " " + Hn("plain-" + l) : Hn("--" + l), v = s ? Hn("--round") : null;
      return [Hn("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: Hn,
      classes: Pm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
lu.render = Om;
const ar = lu;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var hS = ar;
function Vm(e) {
  return ["row", "column"].includes(e);
}
function Mm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Im(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Em = {
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
    validator: Vm
  },
  justify: {
    type: String,
    validator: Mm
  },
  align: {
    type: String,
    validator: Im
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
}, su = Symbol("ROW_BIND_COL_KEY");
function Bm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = pr(su);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Nm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = mr(su);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: wt,
  classes: Dm
} = ne("col");
function Am(e, n) {
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
var uu = x({
  name: "VarCol",
  props: Em,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = U(() => L(e.span)), a = U(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Nm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (di(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(wt("--span-" + u + "-" + c)), f && v.push(wt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(wt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return oe([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: wt,
      classes: Dm,
      padding: n,
      toNumber: L,
      toSizeUnit: ce,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Bt
    };
  }
});
uu.render = Am;
const Ir = uu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var gS = Ir, du = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function zm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = pr(du);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Lm = {
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
  n: Rm
} = ne("collapse");
function Um(e, n) {
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
var vu = x({
  name: "VarCollapse",
  props: Lm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = zm(), t = U(() => e.modelValue), o = U(() => e.offset), l = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (c, p) => l() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, p) => {
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
    return a(f), oe(() => n.value, () => Ve().then(v)), oe(() => e.modelValue, () => Ve().then(v)), {
      n: Rm
    };
  }
});
vu.render = Um;
const Er = vu;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var yS = Er;
function Fm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = mr(du);
  if (!r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var Ym = {
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
  n: Hm,
  classes: jm
} = ne("collapse-item");
function Wm(e, n) {
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
        [W(e.$slots, "icon", {}, () => [ee(
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
    ), [[dr, e.show]])],
    2
    /* CLASS */
  );
}
var fu = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Ym,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Fm(), t = !0, o = E(null), l = E(!1), i = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = U(() => e.name), f = (S, $) => {
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
    }, O = {
      index: n,
      name: v,
      init: f
    };
    return a(O), oe(i, (S) => {
      S ? p() : g();
    }), {
      n: Hm,
      start: y,
      classes: jm,
      show: l,
      isShow: i,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: V
    };
  }
});
fu.render = Wm;
const Br = fu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var bS = Br, Gm = {
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
  n: qm
} = ne("countdown"), zo = 1e3, Lo = 60 * zo, Ro = 60 * Lo, rl = 24 * Ro;
function Xm(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", ui(xl(e.timeData)), () => [be(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var cu = x({
  name: "VarCountdown",
  props: Gm,
  setup(e) {
    var n = E(""), r = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (p, y) => {
      var g = Object.values(y), V = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (V.forEach(($, B) => {
        p.includes($) ? p = p.replace($, ya("" + g[B], 2, "0")) : g[B + 1] += g[B] * O[B];
      }), p.includes("S")) {
        var S = ya("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", S) : p.includes("SS") ? p = p.replace("SS", S.slice(0, 2)) : p = p.replace("S", S.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / rl), g = Math.floor(p % rl / Ro), V = Math.floor(p % Ro / Lo), O = Math.floor(p % Lo / zo), S = Math.floor(p % zo), $ = {
        days: y,
        hours: g,
        minutes: V,
        seconds: O,
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
      t = !1, Wi(o);
    }, c = () => {
      a = 0, t = !1, Wi(o), d();
    };
    return oe(() => e.time, () => {
      c(), e.autoStart && v();
    }, {
      immediate: !0
    }), qa(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), cr(() => {
      i = t, f();
    }), Ta(f), {
      showTime: n,
      timeData: r,
      n: qm,
      start: v,
      pause: f,
      reset: c
    };
  }
});
cu.render = Xm;
const Nr = cu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var wS = Nr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ba = 9e15, hr = 1e9, Uo = "0123456789abcdef", Lt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Rt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Fo = {
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
  minE: -Ba,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ba,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, mu, En, fe = !0, eo = "[DecimalError] ", vr = eo + "Invalid argument: ", pu = eo + "Precision limit exceeded", hu = eo + "crypto unavailable", gu = "[object Decimal]", Ze = Math.floor, Fe = Math.pow, Km = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Zm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Jm = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, yu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Sn = 1e7, de = 7, Qm = 9007199254740991, _m = Lt.length - 1, Yo = Rt.length - 1, X = { toStringTag: gu };
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
    throw Error(vr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = xm(a, ku(a, r)), a.precision = e, a.rounding = n, ue(En == 2 || En == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Fe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = We(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Fe(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Pe(u.plus(d).times(i), u.plus(s), l + 2, 1), We(i.d).slice(0, l) === (r = We(a.d)).slice(0, l))
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
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
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
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / ro(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Fa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Fa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / ro(5, e)), t = Fa(o, 2, t, t, !0);
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
  return a !== -1 ? a === 0 ? n.isNeg() ? wn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? wn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = wn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = wn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Yo)
      return l = wn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Yo)
      return l = wn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(i / de), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), fe = !0, ue(l, d.precision = v, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
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
  if (fe = !1, i = v + c, l = Qn(u, i), a = n ? Ut(d, i + 10) : Qn(e, i), s = Pe(l, a, i, 1), it(s.d, t = v, f))
    do
      if (i += 10, l = Qn(u, i), a = n ? Ut(d, i + 10) : Qn(e, i), s = Pe(l, a, i, 1), !o) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (it(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
X.minus = X.sub = function(e) {
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
  return u[0] ? (e.d = u, e.e = no(u, r), fe ? ue(e, i, s) : e) : new p(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return Ho(this);
};
X.naturalLogarithm = X.ln = function() {
  return Qn(this);
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
  return e.d = u, e.e = no(u, a), fe ? ue(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(vr + e);
  return r.d ? (n = bu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = np(a, ku(a, r)), a.precision = e, a.rounding = n, ue(En > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (fe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = We(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(l, o, r + 2, 1)).times(0.5), We(o.d).slice(0, r) === (n = We(a.d)).slice(0, r))
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
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(En == 2 || En == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
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
  return n ? ++r : o.shift(), e.d = o, e.e = no(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return ki(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, hr), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = On(a, !0) : (an(e, 0, hr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = On(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = On(t) : (an(e, 0, hr), n === void 0 ? n = o.rounding : an(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = On(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, p = c.d, y = c.constructor;
  if (!p)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = bu(p) - c.e - 1, l = o % de, n.d[0] = Fe(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(vr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (fe = !1, i = new y(We(p)), d = y.precision, y.precision = o = p.length * de * 2; v = Pe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return ki(this, 16, e, n);
};
X.toNearest = function(e, n) {
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
  return e.d[0] ? (fe = !1, r = Pe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return ki(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Fe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Qm)
    return t = wu(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Fe(+i, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + We(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (fe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Ho(e.times(Qn(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), it(t.d, a, o) && (n = a + 10, t = ue(Ho(e.times(Qn(i, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, fe = !0, s.rounding = o, ue(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = On(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, hr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = On(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, hr), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = On(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, r = On(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Wn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += Wn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(vr + e);
}
function it(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Fe(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Fe(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Fe(10, n - 3) - 1, l;
}
function Ot(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Uo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function xm(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / ro(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Fa(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, p, y, g, V, O, S, $, B, w, N, P, z, I, b, C, j = a.constructor, Q = a.s == t.s ? 1 : -1, Y = a.d, M = t.d;
    if (!Y || !Y[0] || !M || !M[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (Y ? M && Y[0] == M[0] : !M) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Y && Y[0] == 0 || !M ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Sn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), b = M.length, z = Y.length, V = new j(Q), O = V.d = [], v = 0; M[v] == (Y[v] || 0); v++)
      ;
    if (M[v] > (Y[v] || 0) && d--, o == null ? (w = o = j.precision, l = j.rounding) : i ? w = o + (a.e - t.e) + 1 : w = o, w < 0)
      O.push(1), p = !0;
    else {
      if (w = w / c + 2 | 0, v = 0, b == 1) {
        for (f = 0, M = M[0], w++; (v < z || f) && w--; v++)
          N = f * s + (Y[v] || 0), O[v] = N / M | 0, f = N % M | 0;
        p = f || v < z;
      } else {
        for (f = s / (M[0] + 1) | 0, f > 1 && (M = e(M, f, s), Y = e(Y, f, s), b = M.length, z = Y.length), P = b, S = Y.slice(0, b), $ = S.length; $ < b; )
          S[$++] = 0;
        C = M.slice(), C.unshift(0), I = M[0], M[1] >= s / 2 && ++I;
        do
          f = 0, u = n(M, S, b, $), u < 0 ? (B = S[0], b != $ && (B = B * s + (S[1] || 0)), f = B / I | 0, f > 1 ? (f >= s && (f = s - 1), y = e(M, f, s), g = y.length, $ = S.length, u = n(y, S, g, $), u == 1 && (f--, r(y, b < g ? C : M, g, s))) : (f == 0 && (u = f = 1), y = M.slice()), g = y.length, g < $ && y.unshift(0), r(S, y, $, s), u == -1 && ($ = S.length, u = n(M, S, b, $), u < 1 && (f++, r(S, b < $ ? C : M, $, s))), $ = S.length) : u === 0 && (f++, S = [0]), O[v++] = f, u && S[0] ? S[$++] = Y[P] || 0 : (S = [Y[P]], $ = 1);
        while ((P++ < z || S[0] !== void 0) && w--);
        p = S[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (c == 1)
      V.e = d, mu = p;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
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
        o += de, l = n, d = v[f = 0], s = d / Fe(10, t - l - 1) % 10 | 0;
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
        o %= de, l = o - de + t, s = l < 0 ? 0 : d / Fe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Fe(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Fe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Fe(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Fe(10, de - o), v[f] = l > 0 ? (d / Fe(10, t - l) % Fe(10, l) | 0) * i : 0), u)
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
function On(e, n, r) {
  if (!e.isFinite())
    return Su(e);
  var a, t = e.e, o = We(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Wn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Wn(-t - 1) + o, r && (a = r - l) > 0 && (o += Wn(a))) : t >= l ? (o += Wn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Wn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Wn(a))), o;
}
function no(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Ut(e, n, r) {
  if (n > _m)
    throw fe = !0, r && (e.precision = r), Error(pu);
  return ue(new e(Lt), n, 1, !0);
}
function wn(e, n, r) {
  if (n > Yo)
    throw Error(pu);
  return ue(new e(Rt), n, r, !0);
}
function bu(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Wn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function wu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), tl(o.d, l) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), tl(n.d, l);
  }
  return fe = !0, o;
}
function al(e) {
  return e.d[e.d.length - 1] & 1;
}
function Cu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Ho(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = p) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Fe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Pe(o, r, s, 1)), We(i.d).slice(0, s) === We(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && it(l.d, s - a, c, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = p, c, fe = !0);
      else
        return f.precision = p, l;
    }
    l = i;
  }
}
function Qn(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, c = 1, p = 10, y = e, g = y.d, V = y.constructor, O = V.rounding, S = V.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new V(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (fe = !1, d = S) : d = n, V.precision = d += p, r = We(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), c++;
    o = y.e, a > 1 ? (y = new V("0." + r), o++) : y = new V(a + "." + r.slice(1));
  } else
    return u = Ut(V, d + 2, S).times(o + ""), y = Qn(new V(a + "." + r.slice(1)), d - p).plus(u), V.precision = S, n == null ? ue(y, S, O, fe = !0) : y;
  for (v = y, s = l = y = Pe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Pe(l, new V(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Ut(V, d + 2, S).times(o + ""))), s = Pe(s, new V(c), d, 1), n == null)
        if (it(s.d, d - p, O, i))
          V.precision = d += p, u = l = y = Pe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = i = 1;
        else
          return ue(s, V.precision = S, O, fe = !0);
      else
        return V.precision = S, s;
    s = u, t += 2;
  }
}
function Su(e) {
  return String(e.s * e.s / 0);
}
function jo(e, n) {
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
function ep(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), yu.test(n))
      return jo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Zm.test(n))
    r = 16, n = n.toLowerCase();
  else if (Km.test(n))
    r = 2;
  else if (Jm.test(n))
    r = 8;
  else
    throw Error(vr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = wu(a, new a(r), o, o * 2)), u = Ot(n, r, Sn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = no(u, d), e.d = u, fe = !1, l && (e = Pe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Fe(2, s) : _n.pow(2, s))), fe = !0, e);
}
function np(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Fa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / ro(5, r)), n = Fa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Fa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Pe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Pe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return fe = !0, l.d.length = d + 1, l;
}
function ro(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function ku(e, n) {
  var r, a = n.s < 0, t = wn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return En = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    En = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return En = al(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    En = al(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function ki(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (an(r, 1, hr), a === void 0 ? a = c.rounding : an(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Su(e);
  else {
    for (d = On(e), l = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - l, f.d = Ot(On(f), 10, t), f.e = f.d.length), v = Ot(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = mu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Uo.charAt(v[l]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ot(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Uo.charAt(v[l]);
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
function tl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function rp(e) {
  return new this(e).abs();
}
function ap(e) {
  return new this(e).acos();
}
function tp(e) {
  return new this(e).acosh();
}
function op(e, n) {
  return new this(e).plus(n);
}
function ip(e) {
  return new this(e).asin();
}
function lp(e) {
  return new this(e).asinh();
}
function sp(e) {
  return new this(e).atan();
}
function up(e) {
  return new this(e).atanh();
}
function dp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = wn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? wn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = wn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = wn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function vp(e) {
  return new this(e).cbrt();
}
function fp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function cp(e, n, r) {
  return new this(e).clamp(n, r);
}
function mp(e) {
  if (!e || typeof e != "object")
    throw Error(eo + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    hr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ba,
    0,
    "toExpPos",
    0,
    Ba,
    "maxE",
    0,
    Ba,
    "minE",
    -Ba,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Fo[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(vr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Fo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(hu);
      else
        this[r] = !1;
    else
      throw Error(vr + r + ": " + a);
  return this;
}
function pp(e) {
  return new this(e).cos();
}
function hp(e) {
  return new this(e).cosh();
}
function $u(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, ol(o)) {
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
      return jo(u, o.toString());
    } else if (s !== "string")
      throw Error(vr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), yu.test(o) ? jo(u, o) : ep(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = mp, t.clone = $u, t.isDecimal = ol, t.abs = rp, t.acos = ap, t.acosh = tp, t.add = op, t.asin = ip, t.asinh = lp, t.atan = sp, t.atanh = up, t.atan2 = dp, t.cbrt = vp, t.ceil = fp, t.clamp = cp, t.cos = pp, t.cosh = hp, t.div = gp, t.exp = yp, t.floor = bp, t.hypot = wp, t.ln = Cp, t.log = Sp, t.log10 = $p, t.log2 = kp, t.max = Tp, t.min = Pp, t.mod = Op, t.mul = Vp, t.pow = Mp, t.random = Ip, t.round = Ep, t.sign = Bp, t.sin = Np, t.sinh = Dp, t.sqrt = Ap, t.sub = zp, t.sum = Lp, t.tan = Rp, t.tanh = Up, t.trunc = Fp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function gp(e, n) {
  return new this(e).div(n);
}
function yp(e) {
  return new this(e).exp();
}
function bp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function wp() {
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
function ol(e) {
  return e instanceof _n || e && e.toStringTag === gu || !1;
}
function Cp(e) {
  return new this(e).ln();
}
function Sp(e, n) {
  return new this(e).log(n);
}
function kp(e) {
  return new this(e).log(2);
}
function $p(e) {
  return new this(e).log(10);
}
function Tp() {
  return Cu(this, arguments, "lt");
}
function Pp() {
  return Cu(this, arguments, "gt");
}
function Op(e, n) {
  return new this(e).mod(n);
}
function Vp(e, n) {
  return new this(e).mul(n);
}
function Mp(e, n) {
  return new this(e).pow(n);
}
function Ip(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : an(e, 1, hr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(hu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= de, a && e && (t = Fe(10, de - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
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
function Ep(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Bp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Np(e) {
  return new this(e).sin();
}
function Dp(e) {
  return new this(e).sinh();
}
function Ap(e) {
  return new this(e).sqrt();
}
function zp(e, n) {
  return new this(e).sub(n);
}
function Lp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Rp(e) {
  return new this(e).tan();
}
function Up(e) {
  return new this(e).tanh();
}
function Fp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var _n = X.constructor = $u(Fo);
Lt = new _n(Lt);
Rt = new _n(Rt);
var Yp = {
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
  n: Hp,
  classes: jp
} = ne("counter"), il = 100, ll = 600, Wp = ["inputmode", "readonly", "disabled"];
function Gp(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Me({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [we(ee(
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
        Wp
      ), [[bv, e.inputValue]]), we(ee(
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
    ), ee(
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
var Tu = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  inheritAttrs: !1,
  props: Yp,
  setup(e) {
    var n = E(""), r, a, t, o, {
      bindForm: l,
      form: i
    } = gn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = hn(), {
      readonly: f,
      disabled: c
    } = i ?? {}, p = () => d(e.rules, e.modelValue), y = (M) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: F,
          modelValue: K
        } = e;
        u(H, M, F, K);
      });
    }, g = () => {
      var {
        min: M
      } = e;
      k(e["onUpdate:modelValue"], M != null ? L(M) : 0), v();
    }, V = {
      reset: g,
      validate: p,
      resetValidation: v
    }, O = U(() => {
      var {
        max: M,
        modelValue: H
      } = e;
      return M != null && L(H) >= L(M);
    }), S = U(() => {
      var {
        min: M,
        modelValue: H
      } = e;
      return M != null && L(H) <= L(M);
    }), $ = (M) => {
      var {
        decimalLength: H,
        max: F,
        min: K
      } = e, D = L(M);
      return F != null && D > L(F) && (D = L(F)), K != null && D < L(K) && (D = L(K)), M = String(D), H != null && (M = D.toFixed(L(H))), M;
    }, B = (M) => {
      var {
        lazyChange: H,
        onBeforeChange: F
      } = e, {
        value: K
      } = M.target, D = $(K);
      H ? k(F, L(D), Y) : Q(D), y("onInputChange");
    }, w = () => {
      var {
        disabled: M,
        readonly: H,
        disableDecrement: F,
        decrementButton: K,
        lazyChange: D,
        step: Z,
        modelValue: G,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || M || H || F || !K) && !S.value) {
        var ie = new _n(L(G)).minus(new _n(L(Z))).toString(), ge = $(ie), he = L(ge);
        k(J, he), D ? k(ae, he, Y) : (Q(ge), y("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: M,
        readonly: H,
        disableIncrement: F,
        incrementButton: K,
        lazyChange: D,
        step: Z,
        modelValue: G,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || M || H || F || !K) && !O.value) {
        var ie = new _n(L(G)).plus(new _n(L(Z))).toString(), ge = $(ie), he = L(ge);
        k(J, he), D ? k(ae, he, Y) : (Q(ge), y("onIncrement"));
      }
    }, P = () => {
      var {
        press: M,
        lazyChange: H
      } = e;
      !M || H || (o = window.setTimeout(() => {
        j();
      }, ll));
    }, z = () => {
      var {
        press: M,
        lazyChange: H
      } = e;
      !M || H || (t = window.setTimeout(() => {
        C();
      }, ll));
    }, I = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, b = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, C = () => {
      r = window.setTimeout(() => {
        N(), C();
      }, il);
    }, j = () => {
      a = window.setTimeout(() => {
        w(), j();
      }, il);
    }, Q = (M) => {
      n.value = M;
      var H = L(M);
      k(e["onUpdate:modelValue"], H);
    }, Y = (M) => {
      Q($(String(M))), y("onLazyChange");
    };
    return k(l, V), oe(() => e.modelValue, (M) => {
      Q($(String(M))), k(e.onChange, L(M));
    }), Q($(String(e.modelValue))), {
      n: Hp,
      classes: jp,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: O,
      isMin: S,
      validate: p,
      reset: g,
      resetValidation: v,
      handleChange: B,
      decrement: w,
      increment: N,
      pressDecrement: P,
      pressIncrement: z,
      releaseDecrement: I,
      releaseIncrement: b,
      toSizeUnit: ce,
      toNumber: L
    };
  }
});
Tu.render = Gp;
const Dr = Tu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var CS = Dr, Pu = 60, Ou = Pu * 60, Vu = Ou * 24, qp = Vu * 7, Ya = 1e3, fo = Pu * Ya, sl = Ou * Ya, Xp = Vu * Ya, Kp = qp * Ya, $i = "millisecond", Na = "second", Da = "minute", Aa = "hour", Gn = "day", Vt = "week", bn = "month", Mu = "quarter", qn = "year", za = "date", Zp = "YYYY-MM-DDTHH:mm:ssZ", ul = "Invalid Date", Jp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Qp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const _p = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Wo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, xp = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Wo(t, 2, "0") + ":" + Wo(o, 2, "0");
}, eh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, bn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), bn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, nh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, rh = function(n) {
  var r = {
    M: bn,
    y: qn,
    w: Vt,
    d: Gn,
    D: za,
    h: Aa,
    m: Da,
    s: Na,
    ms: $i,
    Q: Mu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, ah = function(n) {
  return n === void 0;
};
const th = {
  s: Wo,
  z: xp,
  m: eh,
  a: nh,
  p: rh,
  u: ah
};
var nt = "en", Ar = {};
Ar[nt] = _p;
var Ti = function(n) {
  return n instanceof ao;
}, Ft = function e(n, r, a) {
  var t;
  if (!n)
    return nt;
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
  return !a && t && (nt = t), t || !a && nt;
}, te = function(n, r) {
  if (Ti(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new ao(a);
}, oh = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = th;
Te.l = Ft;
Te.i = Ti;
Te.w = oh;
var ih = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Jp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, ao = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Ft(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = ih(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== ul;
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
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(V, O) {
      var S = Te.w(o.$u ? Date.UTC(o.$y, O, V) : new Date(o.$y, O, V), o);
      return l ? S : S.endOf(Gn);
    }, u = function(V, O) {
      var S = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Te.w(o.toDate()[V].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : $).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case qn:
        return l ? s(1, 0) : s(31, 11);
      case bn:
        return l ? s(1, v) : s(0, v + 1);
      case Vt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(l ? f - y : f + (6 - y), v);
      }
      case Gn:
      case za:
        return u(c + "Hours", 0);
      case Aa:
        return u(c + "Minutes", 1);
      case Da:
        return u(c + "Seconds", 2);
      case Na:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Gn] = i + "Date", o[za] = i + "Date", o[bn] = i + "Month", o[qn] = i + "FullYear", o[Aa] = i + "Hours", o[Da] = i + "Minutes", o[Na] = i + "Seconds", o[$i] = i + "Milliseconds", o)[l], u = l === Gn ? this.$D + (t - this.$W) : t;
    if (l === bn || l === qn) {
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
      var c = te(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (i === bn)
      return this.set(bn, this.$M + a);
    if (i === qn)
      return this.set(qn, this.$y + a);
    if (i === Gn)
      return s(1);
    if (i === Vt)
      return s(7);
    var u = (l = {}, l[Da] = fo, l[Aa] = sl, l[Na] = Ya, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || ul;
    var l = a || Zp, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, p = function(S, $, B, w) {
      return S && (S[$] || S(t, l)) || B[$].slice(0, w);
    }, y = function(S) {
      return Te.s(s % 12 || 12, S, "0");
    }, g = c || function(O, S, $) {
      var B = O < 12 ? "AM" : "PM";
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
    return l.replace(Qp, function(O, S) {
      return S || V[O] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * fo, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[qn] = v / 12, l[bn] = v, l[Mu] = v / 3, l[Vt] = (d - u) / Kp, l[Gn] = (d - u) / Xp, l[Aa] = d / sl, l[Da] = d / fo, l[Na] = d / Ya, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(bn).$D;
  }, n.$locale = function() {
    return Ar[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Ft(a, t, !0);
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
}(), Iu = ao.prototype;
te.prototype = Iu;
[["$ms", $i], ["$s", Na], ["$m", Da], ["$H", Aa], ["$W", Gn], ["$M", bn], ["$y", qn], ["$D", za]].forEach(function(e) {
  Iu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, ao, te), e.$i = !0), te;
};
te.locale = Ft;
te.isDayjs = Ti;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Ar[nt];
te.Ls = Ar;
te.p = {};
const Eu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Bu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function lh(e) {
  return ["date", "month"].includes(e);
}
var Mt = [{
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
}], sh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: lh
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
  n: uh
} = ne("picker-header");
function dh(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [ee(
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
        default: ve(() => [ee(r, {
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
      [ee(
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
    ), ee(
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
        default: ve(() => [ee(r, {
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
var Nu = x({
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
    } = n, a = E(!1), t = E(0), o = U(() => {
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
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: uh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Nu.render = dh;
const Du = Nu;
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
te.extend(Eu);
te.extend(Bu);
var {
  n: Ct,
  classes: vh
} = ne("month-picker"), {
  n: St
} = ne("date-picker");
function fh(e, n) {
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
      [ee(
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
      ), ee(
        Be,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("ul", {
            key: e.panelKey
          }, [(h(!0), T(
            Oe,
            null,
            Ne(e.MONTH_LIST, (t) => (h(), T("li", {
              key: t.index
            }, [ee(
              a,
              Me({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Go({}, e.buttonProps(t.index)), {
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
var Au = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ke,
    PanelHeader: Du
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
    } = n, [a, t] = e.current.split("-"), o = E(!1), l = E(0), i = E(null), s = Ie({
      left: !1,
      right: !1
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), v = (O) => {
      var S, $;
      return (S = ($ = He.value.datePickerMonthDict) == null ? void 0 : $[O].abbr) != null ? S : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: $,
          max: B
        }
      } = e, w = !0, N = !0, P = S + "-" + O;
      return B && (w = te(P).isSameOrBefore(te(B), "month")), $ && (N = te(P).isSameOrAfter(te($), "month")), w && N;
    }, c = (O) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: $,
          chooseRangeMonth: B
        },
        componentProps: {
          type: w,
          range: N
        }
      } = e;
      if (N) {
        if (!B.length)
          return !1;
        var P = te(O).isSameOrBefore(te(B[1]), "month"), z = te(O).isSameOrAfter(te(B[0]), "month");
        return P && z;
      }
      return w === "month" ? S.includes(O) : $.some((I) => I.includes(O));
    }, p = (O) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: $
        },
        componentProps: {
          allowedDates: B,
          color: w,
          multiple: N,
          range: P
        }
      } = e, z = $ + "-" + O, I = () => P || N ? c(z) : (S == null ? void 0 : S.index) === O && u.value, b = () => f(O) ? B ? !B(z) : !1 : !0, C = b(), j = () => C ? !0 : P || N ? !c(z) : !u.value || (S == null ? void 0 : S.index) !== O, Q = () => d.value && t === O && e.componentProps.showCurrent ? (P || N || u.value) && C ? !0 : P || N ? !c(z) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, Y = () => C ? "" : Q() ? w ?? "" : I() ? "" : St() + "-color-cover", M = Y().startsWith(St());
      return {
        outline: Q(),
        text: j(),
        color: j() ? "" : w,
        textColor: M ? "" : Y(),
        [St() + "-color-cover"]: M,
        class: vh(Ct("button"), [C, Ct("button--disabled")])
      };
    }, y = (O, S) => {
      var $ = S.currentTarget;
      $.classList.contains(Ct("button--disabled")) || r("choose-month", O);
    }, g = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, r("check-preview", "year", O);
    }, V = (O) => {
      i.value.checkDate(O);
    };
    return oe(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: S,
          max: $
        }
      } = e;
      $ && (s.right = !te("" + (L(O) + 1)).isSameOrBefore(te($), "year")), S && (s.left = !te("" + (L(O) - 1)).isSameOrAfter(te(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Ct,
      nDate: St,
      pack: He,
      MONTH_LIST: Mt,
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
Au.render = fh;
const ch = Au;
var {
  n: dl,
  classes: mh
} = ne("year-picker"), ph = ["onClick"];
function hh(e, n) {
  return h(), T(
    "ul",
    {
      class: m(e.n())
    },
    [(h(!0), T(
      Oe,
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
        ph
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var zu = x({
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
      var o = document.querySelector("." + dl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: dl,
      classes: mh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
zu.render = hh;
const gh = zu;
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
te.extend(Eu);
te.extend(Bu);
var {
  n: Ea,
  classes: yh
} = ne("day-picker"), {
  n: kt
} = ne("date-picker");
function bh(e, n) {
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
      [ee(
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
      ), ee(
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
              Oe,
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
              Oe,
              null,
              Ne(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [ee(
                a,
                Me({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, qo({}, e.buttonProps(t)), {
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
var Lu = x({
  name: "DayPickerPanel",
  components: {
    VarButton: Ke,
    PanelHeader: Du
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
    } = n, [a, t, o] = e.current.split("-"), l = E([]), i = E(!1), s = E(0), u = E(null), d = Ie({
      left: !1,
      right: !1
    }), v = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = U(() => {
      var P;
      return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
    }), c = U(() => {
      var P = et.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? et : et.slice(P).concat(et.slice(0, P));
    }), p = (P) => {
      var z, I;
      return (z = (I = He.value.datePickerWeekDict) == null ? void 0 : I[P].abbr) != null ? z : "";
    }, y = (P) => P > 0 ? P : "", g = () => {
      var {
        preview: {
          previewMonth: P,
          previewYear: z
        }
      } = e, I = te(z + "-" + P.index).daysInMonth(), b = te(z + "-" + P.index + "-01").day(), C = c.value.findIndex((j) => j.index === "" + b);
      l.value = [...Array(C).fill(-1), ...Array.from(Array(I + 1).keys())].filter((j) => j);
    }, V = () => {
      var {
        preview: {
          previewYear: P,
          previewMonth: z
        },
        componentProps: {
          max: I,
          min: b
        }
      } = e;
      if (I) {
        var C = P + "-" + (L(z.index) + 1);
        d.right = !te(C).isSameOrBefore(te(I), "month");
      }
      if (b) {
        var j = P + "-" + (L(z.index) - 1);
        d.left = !te(j).isSameOrAfter(te(b), "month");
      }
    }, O = (P) => {
      var {
        preview: {
          previewYear: z,
          previewMonth: I
        },
        componentProps: {
          min: b,
          max: C
        }
      } = e, j = !0, Q = !0, Y = z + "-" + I.index + "-" + P;
      return C && (j = te(Y).isSameOrBefore(te(C), "day")), b && (Q = te(Y).isSameOrAfter(te(b), "day")), j && Q;
    }, S = (P) => {
      var {
        choose: {
          chooseDays: z,
          chooseRangeDay: I
        },
        componentProps: {
          range: b
        }
      } = e;
      if (b) {
        if (!I.length)
          return !1;
        var C = te(P).isSameOrBefore(te(I[1]), "day"), j = te(P).isSameOrAfter(te(I[0]), "day");
        return C && j;
      }
      return z.includes(P);
    }, $ = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ea("button")
        };
      var {
        choose: {
          chooseDay: z
        },
        preview: {
          previewYear: I,
          previewMonth: b
        },
        componentProps: {
          allowedDates: C,
          color: j,
          multiple: Q,
          range: Y
        }
      } = e, M = I + "-" + b.index + "-" + P, H = () => Y || Q ? S(M) : L(z) === P && f.value, F = () => O(P) ? C ? !C(M) : !1 : !0, K = F(), D = () => K ? !0 : Y || Q ? !S(M) : !f.value || L(z) !== P, Z = () => v.value && L(o) === P && e.componentProps.showCurrent ? (Y || Q || f.value) && K ? !0 : Y || Q ? !S(M) : f.value ? z !== o : !0 : !1, G = () => K ? "" : Z() ? j ?? "" : H() ? "" : kt() + "-color-cover", J = G().startsWith(kt());
      return {
        text: D(),
        outline: Z(),
        textColor: J ? "" : G(),
        [kt() + "-color-cover"]: J,
        class: yh(Ea("button"), Ea("button--usable"), [K, Ea("button--disabled")])
      };
    }, B = (P) => {
      i.value = P === "prev", s.value += P === "prev" ? -1 : 1, r("check-preview", "month", P);
    }, w = (P, z) => {
      var I = z.currentTarget;
      I.classList.contains(Ea("button--disabled")) || r("choose-day", P);
    }, N = (P) => {
      u.value.checkDate(P);
    };
    return tn(() => {
      g(), V();
    }), oe(() => e.preview, () => {
      g(), V();
    }), {
      n: Ea,
      nDate: kt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: y,
      getDayAbbr: p,
      checkDate: B,
      chooseDay: w,
      buttonProps: $
    };
  }
});
Lu.render = bh;
const wh = Lu;
var {
  n: Ch,
  classes: Sh
} = ne("date-picker");
function kh(e, n) {
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
        [ee(
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
              )]) : W(e.$slots, "date", ui(Me({
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
      [ee(
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
var Ru = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: ch,
    YearPickerPanel: gh,
    DayPickerPanel: wh
  },
  props: sh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Mt.find((se) => se.index === i), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), p = E(), y = E(s), g = E(l), V = E(!1), O = E([]), S = E([]), $ = E([]), B = E([]), w = E(null), N = E(null), P = Ie({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), z = U(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: O.value,
      chooseDays: S.value,
      chooseRangeMonth: $.value,
      chooseRangeDay: B.value
    })), I = U(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), b = U(() => {
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
      return se ? "" + O.value.length + He.value.datePickerSelected : me;
    }), C = U(() => {
      var se, ye, me, Se, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Je = B.value.map((so) => te(so).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + S.value.length + He.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var vn = te(c.value + "-" + f.value.index + "-" + p.value).day(), Ia = et.find((so) => so.index === "" + vn), Ai = (se = (ye = He.value.datePickerWeekDict) == null ? void 0 : ye[Ia.index].name) != null ? se : "", cv = (me = (Se = He.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? me : "", mv = ya(p.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + mv + " " + Ai.slice(0, 3) : Ai.slice(0, 3) + ", " + cv.slice(0, 3) + " " + p.value;
    }), j = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = U(() => !e.touchable || ["", "year"].includes(j.value)), Y = U(() => {
      var se, ye, me, Se, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Re = p.value ? ya(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (me = (Se = f.value) == null ? void 0 : Se.index) != null ? me : "",
        date: Re
      };
    }), M = U(() => z.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), H = U(() => c.value === g.value), F = U(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), K = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, D = (se) => {
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
        var se = j.value === "month" ? w : N;
        Kt(() => {
          se.value.forwardRef(a), Di();
        });
      }
    }, ae = (se, ye) => {
      var me = ye === "month" ? $ : B;
      if (me.value = v.value ? [se, se] : [me.value[0], se], v.value = !v.value, v.value) {
        var Se = te(me.value[0]).isAfter(me.value[1]), ke = Se ? [me.value[1], me.value[0]] : [...me.value];
        k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
      }
    }, ie = (se, ye) => {
      var me = ye === "month" ? O : S, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = me.value.map((Je) => te(Je).format(Se)), Re = ke.findIndex((Je) => Je === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : H.value ? se === "month" ? ye.index < f.value.index : F.value ? ye < L(p.value) : f.value.index > y.value.index : c.value > g.value, he = (se) => {
      var {
        readonly: ye,
        range: me,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        V.value = ge("day", se);
        var Je = g.value + "-" + y.value.index + "-" + se, vn = te(Je).format("YYYY-MM-DD");
        me ? ae(vn, "day") : Se ? ie(vn, "day") : (k(Re, vn), k(ke, vn));
      }
    }, Ye = (se) => {
      var {
        type: ye,
        readonly: me,
        range: Se,
        multiple: ke,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": vn
      } = e;
      if (V.value = ge("month", se), ye === "month" && !me) {
        var Ia = g.value + "-" + se.index;
        Se ? ae(Ia, "month") : ke ? ie(Ia, "month") : (k(vn, Ia), k(Re, Ia));
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
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), y.value = Mt.find((ke) => L(ke.index) === Se);
      }
      k(e.onPreview, L(g.value), L(y.value.index));
    }, Le = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, dn = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, dv = (se, ye) => {
      var me = ye === "month" ? $ : B, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((vn) => te(vn).format(Se)).slice(0, 2), Re = me.value.some((vn) => dn(vn));
      if (!Re) {
        me.value = ke;
        var Je = te(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && Je && (me.value = [me.value[1], me.value[0]]);
      }
    }, vv = (se, ye) => {
      var me = ye === "month" ? O : S, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Se))));
      me.value = ke.filter((Re) => Re !== "Invalid Date");
    }, fv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!dn(ye)) {
        var [me, Se, ke] = ye.split("-"), Re = Mt.find((Je) => Je.index === Se);
        f.value = Re, c.value = me, p.value = ke, y.value = Re, g.value = me;
      }
    }, Di = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (se) => {
      if (!(!Le() || dn(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, dv(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          vv(se, e.type);
        } else
          fv(se);
    }, {
      immediate: !0
    }), oe(j, Di), {
      n: Ch,
      classes: Sh,
      monthPanelEl: w,
      dayPanelEl: N,
      reverse: V,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: b,
      getDateTitle: C,
      getPanelType: j,
      getChoose: z,
      getPreview: I,
      componentProps: P,
      slotProps: Y,
      formatRange: M,
      clickEl: K,
      handleTouchstart: D,
      handleTouchmove: G,
      handleTouchend: J,
      getChooseDay: he,
      getChooseMonth: Ye,
      getChooseYear: en,
      checkPreview: on
    };
  }
});
Ru.render = kh;
const zr = Ru;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var SS = zr;
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
function $h(e) {
  return ["left", "center", "right"].includes(e);
}
var Th = Xo({
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
    validator: $h
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
}, Xe(pt, [
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
  n: Ph,
  classes: Oh
} = ne("dialog");
function Vh(e, n) {
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
        Me({
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
          )) : _("v-if", !0), e.confirmButton ? (h(), pe(
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
var Uu = x({
  name: "VarDialog",
  components: {
    VarPopup: cn,
    VarButton: Ke
  },
  inheritAttrs: !1,
  props: Th,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
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
    return oe(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), oe(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Ph,
      classes: Oh,
      pack: He,
      dt: qt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ce
    };
  }
});
Uu.render = Vh;
const tr = Uu;
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
var Kn, Ht = {};
function Mh(e) {
  return e === void 0 && (e = {}), Ge(e) ? Yt({}, Ht, {
    message: e
  }) : Yt({}, Ht, e);
}
function Ca(e) {
  return ft() ? new Promise((n) => {
    Ca.close();
    var r = Mh(e), a = Ie(r);
    a.teleport = "body", Kn = a;
    var {
      unmountInstance: t
    } = Za(tr, a, {
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
        k(a.onClosed), t(), Kn === a && (Kn = null);
      },
      onRouteChange: () => {
        t(), Kn === a && (Kn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function Ih(e) {
  Ht = e;
}
function Eh() {
  Ht = {};
}
function Bh() {
  if (Kn != null) {
    var e = Kn;
    Kn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Ca, {
  setDefaultOptions: Ih,
  resetDefaultOptions: Eh,
  close: Bh
});
tr.install = function(e) {
  e.component(tr.name, tr);
};
Ca.install = function(e) {
  e.component(tr.name, tr);
};
Ca.Component = tr;
var kS = tr, Nh = {
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
  n: Dh,
  classes: Ah
} = ne("divider");
function zh(e, n) {
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
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Fu = x({
  name: "VarDivider",
  props: Nh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ie({
      withText: !1
    }), t = U(() => yo(e.inset) ? e.inset : !0), o = U(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (yo(i) || i === 0)
        return La({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? La({}, d, {
        height: "calc(80% - " + ce(f) + ")"
      }) : La({}, d, {
        width: "calc(100% - " + ce(f) + ")",
        left: v > 0 ? ce(f) : ce(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return tn(() => {
      l();
    }), Gt(() => {
      l();
    }), La({
      n: Dh,
      classes: Ah
    }, wv(a), {
      style: o,
      isInset: t
    });
  }
});
Fu.render = zh;
const Lr = Fu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var $S = Lr, Lh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function It(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Lh[n];
  });
}
var Bn = "top", fr = "bottom", Sa = "right", or = "left", to = "auto", oo = [Bn, fr, Sa, or], io = "start", lt = "end", Rh = "clippingParents", Yu = "viewport", _a = "popper", Uh = "reference", vl = /* @__PURE__ */ oo.reduce(function(e, n) {
  return e.concat([n + "-" + io, n + "-" + lt]);
}, []), Hu = /* @__PURE__ */ [].concat(oo, [to]).reduce(function(e, n) {
  return e.concat([n, n + "-" + io, n + "-" + lt]);
}, []), Fh = "beforeRead", Yh = "read", Hh = "afterRead", jh = "beforeMain", Wh = "main", Gh = "afterMain", qh = "beforeWrite", Xh = "write", Kh = "afterWrite", Zo = [Fh, Yh, Hh, jh, Wh, Gh, qh, Xh, Kh];
function Nn(e) {
  return e.split("-")[0];
}
var Zh = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(n) {
    return Zh[n];
  });
}
function yn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function ka(e) {
  var n = yn(e).Element;
  return e instanceof n || e instanceof Element;
}
function mn(e) {
  var n = yn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Pi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = yn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gr(e) {
  return ((ka(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var rt = Math.max, cl = Math.min, Ha = Math.round;
function Jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ju() {
  return !/^((?!chrome|android).)*safari/i.test(Jo());
}
function ja(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && mn(e) && (t = e.offsetWidth > 0 && Ha(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ha(a.height) / e.offsetHeight || 1);
  var l = ka(e) ? yn(e) : window, i = l.visualViewport, s = !ju() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Oi(e) {
  var n = yn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Vi(e) {
  return ja(gr(e)).left + Oi(e).scrollLeft;
}
function Jh(e, n) {
  var r = yn(e), a = gr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ju();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Vi(e),
    y: s
  };
}
function $n(e) {
  return yn(e).getComputedStyle(e);
}
function Qh(e) {
  var n, r = gr(e), a = Oi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = rt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = rt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Vi(e), s = -a.scrollTop;
  return $n(t || r).direction === "rtl" && (i += rt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function lo(e) {
  return Vn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gr(e)
  );
}
function Mi(e) {
  var n = $n(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Wu(e) {
  return ["html", "body", "#document"].indexOf(Vn(e)) >= 0 ? e.ownerDocument.body : mn(e) && Mi(e) ? e : Wu(lo(e));
}
function at(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Wu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = yn(a), l = t ? [o].concat(o.visualViewport || [], Mi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(at(lo(l)))
  );
}
function _h(e) {
  return ["table", "td", "th"].indexOf(Vn(e)) >= 0;
}
function ml(e) {
  return !mn(e) || // https://github.com/popperjs/popper-core/issues/837
  $n(e).position === "fixed" ? null : e.offsetParent;
}
function xh(e) {
  var n = /firefox/i.test(Jo()), r = /Trident/i.test(Jo());
  if (r && mn(e)) {
    var a = $n(e);
    if (a.position === "fixed")
      return null;
  }
  var t = lo(e);
  for (Pi(t) && (t = t.host); mn(t) && ["html", "body"].indexOf(Vn(t)) < 0; ) {
    var o = $n(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ii(e) {
  for (var n = yn(e), r = ml(e); r && _h(r) && $n(r).position === "static"; )
    r = ml(r);
  return r && (Vn(r) === "html" || Vn(r) === "body" && $n(r).position === "static") ? n : r || xh(e) || n;
}
function eg(e, n) {
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
function Qo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ng(e, n) {
  var r = ja(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function pl(e, n, r) {
  return n === Yu ? Qo(Jh(e, r)) : ka(n) ? ng(n, r) : Qo(Qh(gr(e)));
}
function rg(e) {
  var n = at(lo(e)), r = ["absolute", "fixed"].indexOf($n(e).position) >= 0, a = r && mn(e) ? Ii(e) : e;
  return ka(a) ? n.filter(function(t) {
    return ka(t) && eg(t, a) && Vn(t) !== "body";
  }) : [];
}
function ag(e, n, r, a) {
  var t = n === "clippingParents" ? rg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = pl(e, u, a);
    return s.top = rt(d.top, s.top), s.right = cl(d.right, s.right), s.bottom = cl(d.bottom, s.bottom), s.left = rt(d.left, s.left), s;
  }, pl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function st(e) {
  return e.split("-")[1];
}
function tg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Nn(a) : null, o = a ? st(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Bn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case fr:
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
    case or:
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
  var u = t ? tg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case io:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case lt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function og() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ig(e) {
  return Object.assign({}, og(), e);
}
function lg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function qu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Rh : i, u = r.rootBoundary, d = u === void 0 ? Yu : u, v = r.elementContext, f = v === void 0 ? _a : v, c = r.altBoundary, p = c === void 0 ? !1 : c, y = r.padding, g = y === void 0 ? 0 : y, V = ig(typeof g != "number" ? g : lg(g, oo)), O = f === _a ? Uh : _a, S = e.rects.popper, $ = e.elements[p ? O : f], B = ag(ka($) ? $ : $.contextElement || gr(e.elements.popper), s, d, l), w = ja(e.elements.reference), N = Gu({
    reference: w,
    element: S,
    strategy: "absolute",
    placement: t
  }), P = Qo(Object.assign({}, S, N)), z = f === _a ? P : w, I = {
    top: B.top - z.top + V.top,
    bottom: z.bottom - B.bottom + V.bottom,
    left: B.left - z.left + V.left,
    right: z.right - B.right + V.right
  }, b = e.modifiersData.offset;
  if (f === _a && b) {
    var C = b[t];
    Object.keys(I).forEach(function(j) {
      var Q = [Sa, fr].indexOf(j) >= 0 ? 1 : -1, Y = [Bn, fr].indexOf(j) >= 0 ? "y" : "x";
      I[j] += C[Y] * Q;
    });
  }
  return I;
}
function sg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Hu : s, d = st(a), v = d ? i ? vl : vl.filter(function(p) {
    return st(p) === d;
  }) : oo, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, y) {
    return p[y] = qu(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Nn(y)], p;
  }, {});
  return Object.keys(c).sort(function(p, y) {
    return c[p] - c[y];
  });
}
function ug(e) {
  if (Nn(e) === to)
    return [];
  var n = It(e);
  return [fl(e), n, fl(n)];
}
function dg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, g = n.options.placement, V = Nn(g), O = V === g, S = s || (O || !p ? [It(g)] : ug(g)), $ = [g].concat(S).reduce(function(ae, ie) {
      return ae.concat(Nn(ie) === to ? sg(n, {
        placement: ie,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : ie);
    }, []), B = n.rects.reference, w = n.rects.popper, N = /* @__PURE__ */ new Map(), P = !0, z = $[0], I = 0; I < $.length; I++) {
      var b = $[I], C = Nn(b), j = st(b) === io, Q = [Bn, fr].indexOf(C) >= 0, Y = Q ? "width" : "height", M = qu(n, {
        placement: b,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), H = Q ? j ? Sa : or : j ? fr : Bn;
      B[Y] > w[Y] && (H = It(H));
      var F = It(H), K = [];
      if (o && K.push(M[C] <= 0), i && K.push(M[H] <= 0, M[F] <= 0), K.every(function(ae) {
        return ae;
      })) {
        z = b, P = !1;
        break;
      }
      N.set(b, K);
    }
    if (P)
      for (var D = p ? 3 : 1, Z = function(ie) {
        var ge = $.find(function(he) {
          var Ye = N.get(he);
          if (Ye)
            return Ye.slice(0, ie).every(function(en) {
              return en;
            });
        });
        if (ge)
          return z = ge, "break";
      }, G = D; G > 0; G--) {
        var J = Z(G);
        if (J === "break")
          break;
      }
    n.placement !== z && (n.modifiersData[a]._skip = !0, n.placement = z, n.reset = !0);
  }
}
const vg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: dg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function fg(e, n, r) {
  var a = Nn(e), t = [or, Bn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [or, Sa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function cg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = Hu.reduce(function(d, v) {
    return d[v] = fg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cg
};
function pg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hg(e) {
  return e === yn(e) || !mn(e) ? Oi(e) : pg(e);
}
function gg(e) {
  var n = e.getBoundingClientRect(), r = Ha(n.width) / e.offsetWidth || 1, a = Ha(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function yg(e, n, r) {
  r === void 0 && (r = !1);
  var a = mn(n), t = mn(n) && gg(n), o = gr(n), l = ja(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Vn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Mi(o)) && (i = hg(n)), mn(n) ? (s = ja(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Vi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function bg(e) {
  var n = ja(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function wg(e) {
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
function Cg(e) {
  var n = wg(e);
  return Zo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Sg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function jn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var yr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', kg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', hl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $g(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), hl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(jn(yr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(jn(yr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Zo.indexOf(n.phase) < 0 && console.error(jn(yr, n.name, '"phase"', "either " + Zo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(jn(yr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(jn(yr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(jn(yr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(jn(yr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + hl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(jn(kg, String(n.name), a, a));
      });
    });
  });
}
function Tg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Pg(e) {
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
var gl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Og = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", yl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Vg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? yl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yl, o),
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
        var O = typeof V == "function" ? V(d.options) : V;
        y(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: ka(i) ? at(i) : i.contextElement ? at(i.contextElement) : [],
          popper: at(s)
        };
        var S = Cg(Pg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(b) {
          return b.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Tg([].concat(S, d.options.modifiers), function(b) {
            var C = b.name;
            return C;
          });
          if ($g($), Nn(d.options.placement) === to) {
            var B = d.orderedModifiers.find(function(b) {
              var C = b.name;
              return C === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = $n(s), N = w.marginTop, P = w.marginRight, z = w.marginBottom, I = w.marginLeft;
          [N, P, z, I].some(function(b) {
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
          var V = d.elements, O = V.reference, S = V.popper;
          if (!bl(O, S)) {
            process.env.NODE_ENV !== "production" && console.error(gl);
            return;
          }
          d.rects = {
            reference: yg(O, Ii(S), d.options.strategy === "fixed"),
            popper: bg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
            return d.modifiersData[b.name] = Object.assign({}, b.data);
          });
          for (var $ = 0, B = 0; B < d.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Og);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, B = -1;
              continue;
            }
            var w = d.orderedModifiers[B], N = w.fn, P = w.options, z = P === void 0 ? {} : P, I = w.name;
            typeof N == "function" && (d = N({
              state: d,
              options: z,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Sg(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!bl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(gl), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var V = g.name, O = g.options, S = O === void 0 ? {} : O, $ = g.effect;
        if (typeof $ == "function") {
          var B = $({
            state: d,
            name: V,
            instance: c,
            options: S
          }), w = function() {
          };
          v.push(B || w);
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
var $t = {
  passive: !0
};
function Mg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = yn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, $t);
  }), i && s.addEventListener("resize", r.update, $t), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, $t);
    }), i && s.removeEventListener("resize", r.update, $t);
  };
}
const Ig = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Mg,
  data: {}
};
function Eg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Gu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Bg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Eg,
  data: {}
};
var Ng = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Dg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ha(n * t) / t || 0,
    y: Ha(r * t) / t || 0
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
  var V = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), S = or, $ = Bn, B = window;
  if (u) {
    var w = Ii(r), N = "clientHeight", P = "clientWidth";
    if (w === yn(r) && (w = gr(r), $n(w).position !== "static" && i === "absolute" && (N = "scrollHeight", P = "scrollWidth")), w = w, t === Bn || (t === or || t === Sa) && o === lt) {
      $ = fr;
      var z = v && w === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[N]
      );
      y -= z - a.height, y *= s ? 1 : -1;
    }
    if (t === or || (t === Bn || t === fr) && o === lt) {
      S = Sa;
      var I = v && w === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[P]
      );
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: i
  }, u && Ng), C = d === !0 ? Dg({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = C.x, y = C.y, s) {
    var j;
    return Object.assign({}, b, (j = {}, j[$] = O ? "0" : "", j[S] = V ? "0" : "", j.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, b, (n = {}, n[$] = O ? y + "px" : "", n[S] = V ? c + "px" : "", n.transform = "", n));
}
function Ag(e) {
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
    placement: Nn(n.placement),
    variation: st(n.placement),
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
const zg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ag,
  data: {}
};
function Lg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !mn(o) || !Vn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Rg(e) {
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
      !mn(t) || !Vn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Ug = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lg,
  effect: Rg,
  requires: ["computeStyles"]
};
var Fg = [Ig, Bg, zg, Ug], Yg = /* @__PURE__ */ Vg({
  defaultModifiers: Fg
});
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
function Cl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
function Xu(e) {
  var n = E(null), r = E(null), a = E(!1), t = E({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = ht(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: w,
      height: N
    } = window.getComputedStyle(n.value);
    t.value = {
      width: De(w),
      height: De(N)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, $());
  }, v = /* @__PURE__ */ function() {
    var w = Sl(function* () {
      e.trigger === "hover" && (s = !1, yield Pn(), !i && B());
    });
    return function() {
      return w.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, c = /* @__PURE__ */ function() {
    var w = Sl(function* () {
      e.trigger === "hover" && (i = !1, yield Pn(), !s && B());
    });
    return function() {
      return w.apply(this, arguments);
    };
  }(), p = () => {
    $();
  }, y = () => {
    a.value = !1, k(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, V = () => {
    u();
    var w = {
      x: De(e.offsetX),
      y: De(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: w.x,
          distance: w.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: w.x,
          distance: w.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: w.x,
          distance: w.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: w.x,
          distance: -w.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: w.x,
          distance: -w.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: w.x,
          distance: -w.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: w.y,
          distance: w.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: w.y,
          distance: -w.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: w.y,
          distance: -w.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: w.x,
          distance: -w.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: w.x,
          distance: w.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: w.y,
          distance: w.x
        };
    }
  }, O = () => {
    var {
      placement: w,
      skidding: N,
      distance: P
    } = V(), z = [jt({}, vg, {
      enabled: a.value
    }), jt({}, mg, {
      options: {
        offset: [N, P]
      }
    })];
    return {
      placement: w,
      modifiers: z
    };
  }, S = () => {
    l.setOptions(O());
  }, $ = () => {
    var {
      disabled: w
    } = e;
    w || (a.value = !0, k(e["onUpdate:show"], !0));
  }, B = () => {
    a.value = !1, k(e["onUpdate:show"], !1);
  };
  return us(n, "click", g), oe(() => e.show, (w) => {
    a.value = w ?? !1;
  }, {
    immediate: !0
  }), oe(() => e.offsetX, S), oe(() => e.offsetY, S), oe(() => e.placement, S), oe(() => a.value, (w) => {
    w ? (S(), k(e.onOpen)) : k(e.onClose);
  }), oe(() => e.disabled, B), Ga(() => {
    var w, N = e.reference ? (w = n.value) == null ? void 0 : w.querySelector(e.reference) : n.value;
    l = Yg(N ?? n.value, r.value, O());
  }), Ta(() => {
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
function Hg(e) {
  return ["click", "hover"].includes(e);
}
function jg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Wg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Gg = {
  type: {
    type: String,
    default: "default",
    validator: Wg
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
    validator: Hg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: jg
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
  n: qg,
  classes: Xg
} = ne("tooltip");
function Kg(e, n) {
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
      Pa,
      {
        to: e.teleport
      },
      [ee(
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
              onClick: n[0] || (n[0] = Tn(() => {
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
          ), [[dr, e.show]])]),
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
var Ku = x({
  name: "VarTooltip",
  props: Gg,
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
    } = Xu(e);
    return {
      toSizeUnit: ce,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: qg,
      classes: Xg,
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
Ku.render = Kg;
const ir = Ku;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var TS = ir;
function Zg(e) {
  return ["click"].includes(e);
}
var Jg = {
  expandTrigger: {
    type: String,
    validator: Zg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
  n: Qg,
  classes: _g
} = ne("ellipsis"), xg = {
  key: 0
};
function ey(e, n) {
  var r = le("var-tooltip");
  return h(), pe(
    r,
    ui(xl(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          xg,
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
var Zu = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: ir
  },
  props: Jg,
  setup(e) {
    var n = E(!1), r = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : _o({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: Qg,
      classes: _g,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Zu.render = ey;
const Rr = Zu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var PS = Rr;
function ny(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function ry(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function ay(e) {
  return ["click", "hover"].includes(e);
}
var ty = {
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
    validator: Ys
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: ny
  },
  direction: {
    type: String,
    default: "top",
    validator: ry
  },
  trigger: {
    type: String,
    default: "click",
    validator: ay
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
function kl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xa(e);
}
var {
  classes: $l,
  n: ln
} = ne("fab");
const Ur = x({
  name: "VarFab",
  inheritAttrs: !1,
  props: ty,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = E(!1), o = E(null), {
      disabled: l
    } = Zt(), i = U({
      get() {
        return t.value;
      },
      set(c) {
        t.value = c, k(e["onUpdate:active"], c);
      }
    }), s = (c, p, y) => {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (y === 0) {
          k(e.onClick, i.value, c);
          return;
        }
        i.value = p, k(e.onClick, i.value, c), k(i.value ? e.onOpen : e.onClose);
      }
    }, u = (c, p) => {
      e.trigger !== "hover" || e.disabled || p === 0 || (i.value = c, k(i.value ? e.onOpen : e.onClose));
    }, d = () => {
      e.trigger !== "click" || e.disabled || i.value !== !1 && (i.value = !1, k(e.onClose));
    }, v = () => r.trigger ? e.show ? r.trigger({
      active: i.value
    }) : null : we(ee(Ke, {
      "var-fab-cover": !0,
      class: ln("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0
    }, {
      default: () => [ee($e, {
        "var-fab-cover": !0,
        class: $l([i.value, ln("trigger-active-icon"), ln("trigger-inactive-icon")]),
        name: i.value ? e.activeIcon : e.inactiveIcon,
        size: i.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: ln("--trigger-icon-animation")
      }, null)]
    }), [[dr, e.show]]), f = () => {
      var c, p, y = ds((p = r.default == null ? void 0 : r.default()) != null ? p : []);
      return ee("div", Me({
        class: $l(ln(), ln("--position-" + e.position), ln("--direction-" + e.direction), [e.fixed, ln("--fixed"), ln("--absolute")]),
        style: {
          zIndex: L(e.zIndex),
          top: ce(e.top),
          bottom: ce(e.bottom),
          left: ce(e.left),
          right: ce(e.right)
        },
        ref: o,
        onClick: (g) => s(g, !i.value, y.length),
        onMouseleave: () => u(!1, y.length),
        onMouseenter: () => u(!0, y.length)
      }, a), [ee(Be, {
        name: ln("--active-transition")
      }, kl(c = v()) ? c : {
        default: () => [c]
      }), ee(Be, {
        name: ln("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(ee("div", {
          class: ln("actions"),
          onClick: (g) => g.stopPropagation()
        }, [y.map((g) => ee("div", {
          class: ln("action")
        }, [g]))]), [[dr, e.show && i.value && y.length]])]
      })]);
    };
    return oe(() => e.active, (c) => {
      t.value = c;
    }, {
      immediate: !0
    }), oe(() => e.trigger, () => {
      i.value = !1;
    }), oe(() => e.disabled, () => {
      i.value = !1;
    }), us(o, "click", d), () => {
      var {
        teleport: c
      } = e;
      if (c) {
        var p;
        return ee(Pa, {
          to: c,
          disabled: l.value
        }, kl(p = f()) ? p : {
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
var OS = Ur;
function oy(e) {
  return ["start", "end"].includes(e);
}
var iy = {
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
    validator: oy
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
function ly(e) {
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
  n: sy
} = ne("form");
function uy(e, n) {
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
var Ju = x({
  name: "VarForm",
  props: iy,
  setup(e) {
    var n = U(() => e.disabled), r = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = mm(), o = (d, v) => {
      setTimeout(() => {
        var f = Ma(v), c = f === window ? 0 : ji(f), p = ji(v) - c - De(e.scrollToErrorOffsetY);
        tt(f, {
          top: p,
          animation: bo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = ly(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: V
          } = g;
          return V();
        }));
        if (e.scrollToError) {
          var [, f] = Tv(v, (g) => g === !1, e.scrollToError), c = f > -1;
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
      n: sy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Ju.render = uy;
const Dn = Ju;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
Dn.useValidation = hn;
Dn.useForm = gn;
var VS = Dn;
function dy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var vy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: dy,
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
  n: fy,
  classes: cy
} = ne("image"), my = ["alt", "title", "lazy-error", "lazy-loading"], py = ["alt", "title", "src"];
function hy(e, n) {
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
      my
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
      py
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Qu = x({
  name: "VarImage",
  directives: {
    Lazy: ot,
    Ripple: ze
  },
  props: vy,
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
      n: fy,
      classes: cy,
      toSizeUnit: ce,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Qu.render = hy;
const Fr = Qu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var MS = Fr, _u = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), xu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function gy() {
  var {
    childProviders: e,
    bindChildren: n
  } = Ja(_u), {
    length: r
  } = ct(xu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var ed = {
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
function Pl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var by = 250, wy = 20, {
  n: Cy,
  classes: Sy
} = ne("swipe"), ky = ["onClick"];
function $y(e, n) {
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
        Oe,
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
          ky
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
var nd = x({
  name: "VarSwipe",
  props: ed,
  setup(e) {
    var n = E(null), r = E(0), a = U(() => e.vertical), t = E(0), o = E(0), l = E(!1), i = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = gy(), v = !1, f = -1, c, p, y, g, V, O = (D) => s.find((Z) => {
      var {
        index: G
      } = Z;
      return G.value === D;
    }), S = () => {
      e.loop && (o.value >= 0 && O(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && O(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (O(d.value - 1).setTranslate(0), O(0).setTranslate(0)));
    }, $ = (D) => {
      var Z = xe(D) ? D : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: G
      } = e;
      return Z <= -1 ? G ? -1 : 0 : Z >= d.value ? G ? d.value : d.value - 1 : Z;
    }, B = (D) => {
      var {
        loop: Z
      } = e;
      return D === -1 ? Z ? d.value - 1 : 0 : D === d.value ? Z ? 0 : d.value - 1 : D;
    }, w = (D) => {
      var {
        loop: Z
      } = e;
      return D < 0 ? Z ? d.value - 1 : 0 : D > d.value - 1 ? Z ? 0 : d.value - 1 : D;
    }, N = (D) => {
      var Z = o.value >= r.value, G = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      l.value = !0, (Z || G) && (l.value = !0, o.value = G ? J : ae, O(0).setTranslate(0), O(d.value - 1).setTranslate(0)), Kt(() => {
        l.value = !1, k(D);
      });
    }, P = () => {
      i.value = w(L(e.initialIndex));
    }, z = () => {
      var {
        autoplay: D
      } = e;
      !D || d.value <= 1 || (I(), f = window.setTimeout(() => {
        M(), z();
      }, L(D)));
    }, I = () => {
      f && clearTimeout(f);
    }, b = (D, Z) => {
      if (D > Z && D > 10)
        return "horizontal";
      if (Z > D && Z > 10)
        return "vertical";
    }, C = (D) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: G
        } = D.touches[0];
        c = Z, p = G, y = performance.now(), v = !0, I(), N(() => {
          l.value = !0;
        });
      }
    }, j = (D) => {
      var {
        touchable: Z,
        vertical: G
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: J,
          clientY: ae
        } = D.touches[0], ie = Math.abs(J - c), ge = Math.abs(ae - p), he = b(ie, ge), Ye = G ? "vertical" : "horizontal";
        if (he === Ye) {
          D.preventDefault();
          var en = g !== void 0 ? J - g : 0, on = V !== void 0 ? ae - V : 0;
          g = J, V = ae, o.value += G ? on : en, S();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: D,
          onChange: Z
        } = e, G = D ? V < p : g < c, J = Math.abs(D ? p - V : c - g), ae = performance.now() - y <= by && J >= wy, ie = ae ? $(G ? i.value + 1 : i.value - 1) : $();
        v = !1, l.value = !1, g = void 0, V = void 0, o.value = ie * -r.value;
        var ge = i.value;
        i.value = B(ie), z(), ge !== i.value && k(Z, i.value);
      }
    }, Y = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((D) => {
        D.setTranslate(0);
      }), z(), setTimeout(() => {
        l.value = !1;
      }));
    }, M = (D) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = w(J + 1), (D == null ? void 0 : D.event) !== !1 && k(G, i.value), N(() => {
          if (J === d.value - 1 && Z) {
            O(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, H = (D) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = w(J - 1), (D == null ? void 0 : D.event) !== !1 && k(G, i.value), N(() => {
          if (J === 0 && Z) {
            O(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, F = (D, Z) => {
      if (!(d.value <= 1 || D === i.value)) {
        D = D < 0 ? 0 : D, D = D >= d.value ? d.value : D;
        var G = D > i.value ? M : H, J = Math.abs(D - i.value);
        Array.from({
          length: J
        }).forEach((ae, ie) => {
          G({
            event: ie === J - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, K = {
      size: r,
      vertical: a
    };
    return u(K), oe(() => d.value, /* @__PURE__ */ yy(function* () {
      yield Pn(), P(), Y();
    })), qa(Y), cr(I), Ta(I), ba(window, "resize", Y), {
      n: Cy,
      classes: Sy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: C,
      handleTouchmove: j,
      handleTouchend: Q,
      next: M,
      prev: H,
      to: F,
      resize: Y,
      toNumber: L
    };
  }
});
nd.render = $y;
const An = nd;
An.install = function(e) {
  e.component(An.name, An);
};
var IS = An;
function Ty() {
  var {
    bindParent: e,
    parentProvider: n
  } = Qa(_u), {
    index: r
  } = mt(xu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Py
} = ne("swipe-item");
function Oy(e, n) {
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
var rd = x({
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Ty(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Py,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
rd.render = Oy;
const zn = rd;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var ES = zn;
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xo.apply(this, arguments);
}
var Vy = xo({
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
}, Xe(ed, ["loop", "indicator", "onChange"]), Xe(pt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Ol,
  classes: My
} = ne("image-preview"), Vl = 12, Ml = 200, Iy = 350, Il = 200, Ey = ["src", "alt"];
function By(e, n) {
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
      default: ve(() => [ee(
        a,
        Me({
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
            Oe,
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
                    Ey
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
            )) : _("v-if", !0)])];
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
      )) : _("v-if", !0)]), A(
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
var ad = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: An,
    VarSwipeItem: zn,
    VarPopup: cn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Vy,
  setup(e) {
    var n = E(!1), r = U(() => {
      var {
        images: I,
        current: b
      } = e, C = I.findIndex((j) => j === b);
      return C >= 0 ? C : 0;
    }), a = E(1), t = E(0), o = E(0), l = E(void 0), i = E(void 0), s = E(!0), u = null, d = null, v = null, f = (I, b) => {
      var {
        clientX: C,
        clientY: j
      } = I, {
        clientX: Q,
        clientY: Y
      } = b;
      return Math.abs(Math.sqrt(Math.pow(Q - C, 2) + Math.pow(Y - j, 2)));
    }, c = (I, b) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: b
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Il);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (I) => d ? f(d, I) <= Vl && I.timestamp - d.timestamp <= Ml && d.target === I.target : !1, V = (I) => !I || !u || !d ? !1 : f(u, d) <= Vl && Date.now() - d.timestamp < Iy && (I === u.target || I.parentNode === u.target), O = (I) => {
      v = window.setTimeout(() => {
        V(I.target) && z(), u = null;
      }, Ml);
    }, S = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: b
      } = I, C = c(b[0], I.currentTarget);
      if (u = C, g(C)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = C;
    }, $ = (I) => {
      var {
        offsetWidth: b,
        offsetHeight: C
      } = I, {
        naturalWidth: j,
        naturalHeight: Q
      } = I.querySelector("." + Ol("image"));
      return {
        width: b,
        height: C,
        imageRadio: Q / j,
        rootRadio: C / b,
        zoom: L(e.zoom)
      };
    }, B = (I) => {
      var {
        zoom: b,
        imageRadio: C,
        rootRadio: j,
        width: Q,
        height: Y
      } = $(I);
      if (!C)
        return 0;
      var M = C > j ? Y / C : Q;
      return Math.max(0, (b * M - Q) / 2) / b;
    }, w = (I) => {
      var {
        zoom: b,
        imageRadio: C,
        rootRadio: j,
        width: Q,
        height: Y
      } = $(I);
      if (!C)
        return 0;
      var M = C > j ? Y : Q * C;
      return Math.max(0, (b * M - Y) / 2) / b;
    }, N = (I, b, C) => I + b >= C ? C : I + b <= -C ? -C : I + b, P = (I) => {
      if (d) {
        var b = I.currentTarget, {
          touches: C
        } = I, j = c(C[0], b);
        if (a.value > 1) {
          var Q = j.clientX - d.clientX, Y = j.clientY - d.clientY, M = B(b), H = w(b);
          t.value = N(t.value, Q, M), o.value = N(o.value, Y, H);
        }
        d = j;
      }
    }, z = () => {
      if (a.value > 1) {
        y(), setTimeout(() => k(e["onUpdate:show"], !1), Il);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Ol,
      classes: My,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: S,
      handleTouchmove: P,
      handleTouchend: O,
      close: z
    };
  }
});
ad.render = By;
const lr = ad;
var Zn;
function Un(e) {
  if (ft()) {
    Un.close();
    var n = Ge(e) ? {
      images: [e]
    } : Ce(e) ? {
      images: e
    } : e, r = Ie(n);
    r.teleport = "body", Zn = r;
    var {
      unmountInstance: a
    } = Za(lr, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), Zn === r && (Zn = null);
      },
      onRouteChange: () => {
        a(), Zn === r && (Zn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Un.close = () => {
  if (Zn != null) {
    var e = Zn;
    Zn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
lr.install = function(e) {
  e.component(lr.name, lr);
};
Un.install = function(e) {
  e.component(lr.name, lr);
};
Un.Component = lr;
var BS = lr, Et = {
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
function El(e, n, r, a, t, o, l) {
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
        El(o, a, t, l, i, "next", s);
      }
      function i(s) {
        El(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ny,
  classes: Dy
} = ne("sticky");
function Ay(e, n) {
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
var td = x({
  name: "VarSticky",
  props: Et,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), o = E("0px"), l = E("auto"), i = E("auto"), s = E("auto"), u = E("auto"), d = U(() => !e.disabled && e.cssMode), v = U(() => !e.disabled && !e.cssMode && a.value), f = U(() => De(e.offsetTop)), c, p = () => {
      var {
        cssMode: S,
        disabled: $
      } = e;
      if (!$) {
        var B = 0;
        if (c !== window) {
          var {
            top: w
          } = c.getBoundingClientRect();
          B = w;
        }
        var N = r.value, P = n.value, {
          top: z,
          left: I
        } = P.getBoundingClientRect(), b = z - B;
        return b <= f.value ? (S || (l.value = P.offsetWidth + "px", i.value = P.offsetHeight + "px", t.value = B + f.value + "px", o.value = I + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
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
        a.value = !1, yield Av(), p();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var S = Bl(function* () {
        yield Pn(), c = Ma(n.value), c !== window && c.addEventListener("scroll", y), y();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), O = () => {
      c !== window && c.removeEventListener("scroll", y);
    };
    return oe(() => e.disabled, g), tn(V), Ta(O), cr(O), ba(window, "scroll", y), {
      n: Ny,
      classes: Dy,
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
td.render = Ay;
const Ln = td;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var NS = Ln, od = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), id = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function zy() {
  var {
    bindChildren: e,
    childProviders: n
  } = Ja(od), {
    length: r
  } = ct(id);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Ly() {
  var {
    parentProvider: e,
    bindParent: n
  } = Qa(od), {
    index: r
  } = mt(id);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Ry = {
  index: {
    type: [Number, String]
  }
}, {
  n: Uy,
  classes: Fy
} = ne("index-anchor");
function Yy(e, n) {
  return h(), pe(
    Ka(e.sticky ? e.n("$-sticky") : e.Transition),
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
        Me({
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
var ld = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Ln
  },
  inheritAttrs: !1,
  props: Ry,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Ly(), t = E(0), o = E(!1), l = U(() => e.index), i = E(null), {
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
      n: Uy,
      classes: Fy,
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
ld.render = Yy;
const Yr = ld;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var DS = Yr, Hy = {
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
function Nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tt(e) {
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
  n: jy,
  classes: Wy
} = ne("index-bar"), Gy = ["onClick"];
function qy(e, n) {
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
        Oe,
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
          Gy
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
var sd = x({
  name: "VarIndexBar",
  props: Hy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = zy(), t = E(""), o = E(null), l = E([]), i = E(), s = U(() => e.sticky), u = U(() => e.cssMode), d = U(() => De(e.stickyOffsetTop)), v = U(() => e.zIndex), f = null, c = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(c);
    var p = (w, N) => {
      var P = di(w) ? w.name.value : w;
      P === i.value || P === void 0 || (i.value = P, (N == null ? void 0 : N.event) !== !1 && k(e.onChange, P));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: w
      } = f.getBoundingClientRect(), {
        scrollTop: N
      } = f, {
        top: P
      } = o.value.getBoundingClientRect();
      return N - w + P;
    }, g = () => {
      var w = Xt(f), N = f === window ? document.body.scrollHeight : f.scrollHeight, P = y();
      r.forEach((z, I) => {
        var b = z.ownTop.value, C = w - b + d.value - P, j = I === r.length - 1 ? N : r[I + 1].ownTop.value - z.ownTop.value;
        C >= 0 && C < j && t.value === "" && (I && !e.cssMode && r[I - 1].setDisabled(!0), z.setDisabled(!1), p(z));
      });
    }, V = /* @__PURE__ */ function() {
      var w = Tt(function* (N) {
        var {
          anchorName: P,
          manualCall: z = !1,
          options: I
        } = N;
        if (z && k(e.onClick, P), P !== i.value) {
          var b = r.find((Y) => {
            var {
              name: M
            } = Y;
            return P === M.value;
          });
          if (b) {
            var C = y(), j = b.ownTop.value - d.value + C, Q = ci(f);
            t.value = P, p(P, I), yield tt(f, {
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
      return function(P) {
        return w.apply(this, arguments);
      };
    }(), O = /* @__PURE__ */ function() {
      var w = Tt(function* () {
        yield Pn(), f = Ma(o.value);
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", g);
    }, $ = () => {
      f.removeEventListener("scroll", g);
    }, B = (w, N) => {
      kn(() => V({
        anchorName: w,
        options: N
      }));
    };
    return oe(() => n.value, /* @__PURE__ */ Tt(function* () {
      yield Pn(), r.forEach((w) => {
        var {
          name: N,
          setOwnTop: P
        } = w;
        N.value && l.value.push(N.value), P();
      });
    })), tn(/* @__PURE__ */ Tt(function* () {
      yield O(), S();
    })), vt($), cr($), {
      n: jy,
      classes: Wy,
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
sd.render = qy;
const Hr = sd;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var AS = Hr;
function Xy(e) {
  return ["text", "password", "number"].includes(e);
}
var Ky = {
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
    validator: Xy
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
  n: co,
  classes: Zy
} = ne("input"), Jy = ["id", "disabled", "type", "value", "maxlength", "rows"], Qy = ["id", "disabled", "type", "value", "maxlength"], _y = ["for"];
function xy(e, n) {
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
        )) : _("v-if", !0), e.textarea ? (h(), T(
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
          Jy
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
          Qy
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
          _y
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
        )) : _("v-if", !0)])],
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
    )) : _("v-if", !0), ee(
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
var ud = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: Ky,
  setup(e) {
    var n = E("var-input-" + Yn().uid), r = E(null), a = E(!1), t = U(() => e.type === "number" ? "text" : e.type), o = U(() => {
      var {
        maxlength: M,
        modelValue: H
      } = e;
      return M ? In(H) ? "0 / " + M : String(H).length + "/" + M : "";
    }), {
      bindForm: l,
      form: i
    } = gn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = hn(), f = (M) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: F,
          modelValue: K
        } = e;
        u(H, M, F, K);
      });
    }, c = () => {
      var {
        hint: M,
        modelValue: H
      } = e;
      if (!M && !In(H))
        return co("--placeholder-hidden");
      if (M && (!In(H) || a.value))
        return co("--placeholder-hint");
    }, p = (M) => {
      a.value = !0, k(e.onFocus, M), f("onFocus");
    }, y = (M) => {
      a.value = !1, k(e.onBlur, M), f("onBlur");
    }, g = (M) => {
      var H = M.target, {
        value: F
      } = H;
      return e.type === "number" && (F = N(F)), F = z(P(F)), H.value = F, F;
    }, V = (M) => {
      Object.assign(M.target, {
        composing: !0
      });
    }, O = (M) => {
      var H = M.target;
      H.composing && (H.composing = !1, H.dispatchEvent(new Event("input")));
    }, S = (M) => {
      var {
        composing: H
      } = M.target;
      if (!H) {
        var F = g(M);
        k(e["onUpdate:modelValue"], F), k(e.onInput, F, M), f("onInput");
      }
    }, $ = (M) => {
      var H = g(M);
      k(e.onChange, H, M), f("onChange");
    }, B = () => {
      var {
        disabled: M,
        readonly: H,
        clearable: F,
        onClear: K
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || M || H || !F || (k(e["onUpdate:modelValue"], ""), k(K, ""), f("onClear"));
    }, w = (M) => {
      var {
        disabled: H,
        onClick: F
      } = e;
      i != null && i.disabled.value || H || (k(F, M), f("onClick"));
    }, N = (M) => {
      var H = M.indexOf("-"), F = M.indexOf(".");
      return H > -1 && (M = H === 0 ? "-" + M.replace(/-/g, "") : M.replace(/-/g, "")), F > -1 && (M = M.slice(0, F + 1) + M.slice(F).replace(/\./g, "")), M.replace(/[^-0-9.]/g, "");
    }, P = (M) => e.modelModifiers.trim ? M.trim() : M, z = (M) => e.maxlength ? M.slice(0, L(e.maxlength)) : M, I = (M) => {
      var {
        disabled: H,
        readonly: F
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || H || F || M.stopPropagation();
    }, b = () => {
      k(e["onUpdate:modelValue"], ""), v();
    }, C = () => d(e.rules, e.modelValue), j = () => {
      var M;
      (M = r.value) == null || M.focus();
    }, Q = () => {
      r.value.blur();
    }, Y = {
      reset: b,
      validate: C,
      resetValidation: v
    };
    return k(l, Y), tn(() => {
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
      n: co,
      classes: Zy,
      isEmpty: In,
      computePlaceholderState: c,
      handleFocus: p,
      handleBlur: y,
      handleInput: S,
      handleChange: $,
      handleClear: B,
      handleClick: w,
      handleTouchstart: I,
      handleCompositionStart: V,
      handleCompositionEnd: O,
      validate: C,
      resetValidation: v,
      reset: b,
      focus: j,
      blur: Q
    };
  }
});
ud.render = xy;
const sr = ud;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var zS = sr;
function eb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function nb(e) {
  return ["always", "hover", "none"].includes(e);
}
var rb = {
  type: {
    type: String,
    default: "default",
    validator: eb
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
    validator: nb
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
  n: ab,
  classes: tb
} = ne("link");
function ob(e, n) {
  return h(), pe(
    Ka(e.tag),
    Me(e.linkProps, {
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
var dd = x({
  name: "VarLink",
  props: rb,
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
      o || k(l, t);
    };
    return {
      n: ab,
      classes: tb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ce
    };
  }
});
dd.render = ob;
const jr = dd;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var LS = jr, ib = {
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
function Dl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function lb(e) {
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
  n: sb,
  classes: ub
} = ne("list");
function db(e, n) {
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
      ), ee(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : _("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? W(e.$slots, "error", {
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
    )), [[a]])]) : _("v-if", !0), A(
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
var vd = x({
  name: "VarList",
  directives: {
    Ripple: ze
  },
  components: {
    VarLoading: Cn
  },
  props: ib,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = lb(function* () {
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
      a = Ma(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Ta(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: qt,
      isNumber: xe,
      load: t,
      check: l,
      n: sb,
      classes: ub
    };
  }
});
vd.render = db;
const Wr = vd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var RS = Wr, vb = {
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
  classes: fb,
  n: Al
} = ne("loading-bar");
const cb = x({
  name: "VarLoadingBar",
  props: vb,
  setup(e) {
    return () => ee("div", {
      class: fb(Al(), [e.error, Al("--error")]),
      style: {
        zIndex: un.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ce(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ce(e.top)
      }
    }, null);
  }
});
var fd, zl, cd = {}, mb = {
  value: 0,
  opacity: 0,
  error: !1
}, qe = Ie(mb), pb = (e) => {
  Object.assign(qe, e);
}, hb = (e) => {
  Object.assign(qe, e), cd = e;
}, gb = () => {
  Object.keys(cd).forEach((e) => {
    qe[e] !== void 0 && (qe[e] = void 0);
  });
}, md = () => {
  fd = window.setTimeout(() => {
    if (!(qe.value >= 95)) {
      var e = Math.random();
      qe.value < 70 && (e = Math.round(5 * Math.random())), qe.value += e, md();
    }
  }, 200);
}, yb = () => {
  zl || (zl = !0, Za(cb, qe)), (!qe.error || qe.value === 100) && (qe.value = 0), setTimeout(() => {
    qe.opacity = 1;
  }, 200), md();
}, bb = () => {
  qe.value = 100, setTimeout(() => {
    qe.opacity = 0, setTimeout(() => {
      qe.error = !1;
    }, 250);
  }, 300), window.clearTimeout(fd);
}, wb = () => {
  qe.error = !0, Wt.start(), setTimeout(Wt.finish, 300);
}, Wt = {
  start: yb,
  finish: bb,
  error: wb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: pb,
  setDefaultOptions: hb,
  resetDefaultOptions: gb
}, US = Wt;
const ei = Wt;
function Cb(e) {
  return ["click", "hover"].includes(e);
}
function Sb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var kb = {
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
    validator: Cb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Sb
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
  n: $b,
  classes: Tb
} = ne("menu");
function Pb(e, n) {
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
      Pa,
      {
        to: e.teleport
      },
      [ee(
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
              onClick: n[0] || (n[0] = Tn(() => {
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
          ), [[dr, e.show]])]),
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
var pd = x({
  name: "VarMenu",
  props: kb,
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
    } = Xu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: ce,
      n: $b,
      classes: Tb,
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
pd.render = Pb;
const Rn = pd;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var FS = Rn, hd = Symbol("SELECT_BIND_OPTION_KEY"), gd = Symbol("SELECT_COUNT_OPTION_KEY");
function Ob() {
  var {
    bindChildren: e,
    childProviders: n
  } = Ja(hd), {
    length: r
  } = ct(gd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Vb() {
  var {
    bindParent: e,
    parentProvider: n
  } = Qa(hd), {
    index: r
  } = mt(gd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Mb = {
  label: {},
  value: {}
}, {
  n: Ib,
  classes: Eb
} = ne("option");
function Bb(e, n) {
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
        onClick: n[1] || (n[1] = Tn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : _("v-if", !0), A(
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
var yd = x({
  name: "VarOption",
  directives: {
    Ripple: ze
  },
  components: {
    VarCheckbox: rr
  },
  props: Mb,
  setup(e) {
    var n = E(!1), r = U(() => n.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: l
    } = Vb(), {
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      onSelect: d,
      computeLabel: v
    } = o, f = () => {
      n.value = !n.value, d(y);
    }, c = () => d(y), p = (g) => {
      n.value = g;
    }, y = {
      label: a,
      value: t,
      selected: r,
      sync: p
    };
    return oe([() => e.label, () => e.value], v), l(y), {
      n: Ib,
      classes: Eb,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: c
    };
  }
});
yd.render = Bb;
const Gr = yd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var YS = Gr, Nb = {
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
function Db(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xa(e);
}
var {
  n: Ll
} = ne("overlay");
const qr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Nb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ht(() => e.show, 1), {
      disabled: o
    } = Zt(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    Jt(() => e.show, () => e.lockScroll);
    var i = () => ee("div", Me({
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
      return ee(Be, {
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
        return ee(Pa, {
          to: u,
          disabled: o.value
        }, Db(d = s()) ? d : {
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
var HS = qr, Ab = {
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
  n: zb,
  classes: Lb
} = ne("pagination"), Rb = ["item-mode", "onClick"];
function Ub(e, n) {
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
      [W(e.$slots, "prev", {}, () => [ee(r, {
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
      [ee(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleValue, i)),
          onKeydown: n[3] || (n[3] = zi((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
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
      Oe,
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
        Rb
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
      [W(e.$slots, "next", {}, () => [ee(r, {
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
      [ee(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), T(
            Oe,
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
            ), ee(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        re(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), ee(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.inputValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.inputValue, i)),
          onKeydown: n[9] || (n[9] = zi((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (h(), T(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var bd = x({
  name: "VarPagination",
  components: {
    VarMenu: Rn,
    VarIcon: $e,
    VarCell: nr,
    VarInput: sr
  },
  directives: {
    Ripple: ze
  },
  props: Ab,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), l = E(L(e.current) || 1), i = E(L(e.size) || 10), s = E([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(L(e.total) / L(i.value))), v = U(() => {
      var $ = i.value * (l.value - 1) + 1, B = Math.min(i.value * l.value, L(e.total));
      return [$, B];
    }), f = U(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), c = ($, B) => xe($) ? !1 : B === 1 ? t.value : o.value, p = ($, B) => xe($) ? "basic" : B === 1 ? "head" : "tail", y = ($, B) => {
      $ === l.value || e.disabled || (xe($) ? l.value = $ : $ === "prev" ? l.value > 1 && (l.value -= 1) : $ === "next" ? l.value < d.value && (l.value += 1) : $ === "..." && (B === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, V = ($) => {
      i.value = $, n.value = !1;
    }, O = ($) => {
      var B = /^[1-9][0-9]*$/;
      return B.test($);
    }, S = ($, B, w) => {
      if (w.target.blur(), O(B)) {
        var N = L(B);
        N > d.value && (N = d.value, a.value = "" + N), N !== l.value && (l.value = N);
      }
      $ === "quick" && (r.value = ""), $ === "simple" && !O(B) && (a.value = "" + l.value);
    };
    return oe([() => e.current, () => e.size], ($) => {
      var [B, w] = $;
      l.value = L(B) || 1, i.value = L(w || 10);
    }), oe([l, i, d], ($, B) => {
      var [w, N, P] = $, [z, I] = B, b = [], {
        maxPagerCount: C,
        total: j,
        onChange: Q
      } = e, Y = Math.ceil(L(j) / L(I)), M = P - (C - u.value) - 1;
      if (a.value = "" + w, P - 2 > C) {
        if (z === void 0 || P !== Y)
          for (var H = 2; H < C + 2; H++)
            b.push(H);
        if (w <= C && w < M) {
          b = [];
          for (var F = 1; F < C + 1; F++)
            b.push(F + 1);
          t.value = !0, o.value = !1;
        }
        if (w > C && w < M) {
          b = [];
          for (var K = 1; K < C + 1; K++)
            b.push(w + K - u.value);
          t.value = w === 2 && C === 1, o.value = !1;
        }
        if (w >= M) {
          b = [];
          for (var D = 1; D < C + 1; D++)
            b.push(P - (C - D) - 1);
          t.value = !1, o.value = !0;
        }
        b = [1, "...", ...b, "...", P];
      } else
        for (var Z = 1; Z <= P; Z++)
          b.push(Z);
      s.value = b, z !== void 0 && P > 0 && k(Q, w, N), k(e["onUpdate:current"], w), k(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: zb,
      classes: Lb,
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
bd.render = Ub;
const Xr = bd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var jS = Xr, Fb = {
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
  n: Yb,
  classes: Hb
} = ne("paper");
function jb(e, n) {
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
var wd = x({
  name: "VarPaper",
  directives: {
    Ripple: ze
  },
  props: Fb,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: Yb,
      classes: Hb,
      toSizeUnit: ce,
      handleClick: n
    };
  }
});
wd.render = jb;
const Kr = wd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var WS = Kr;
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
var Wb = ni({
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
}, Xe(pt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Gb,
  classes: qb
} = ne("picker"), Rl = 300, Xb = 15, Ul = 0, Kb = ["onTouchstart", "onTouchmove", "onTouchend"], Zb = ["onTransitionend"];
function Jb(e, n) {
  var r = le("var-button");
  return h(), pe(
    Ka(e.dynamic ? e.n("$-popup") : e.Transition),
    Me(e.dynamic ? {
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
        Me({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("toolbar"))
          },
          [W(e.$slots, "cancel", {}, () => [ee(
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
          )]), W(e.$slots, "confirm", {}, () => [ee(
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
        )) : _("v-if", !0), A(
          "div",
          {
            class: m(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), T(
            Oe,
            null,
            Ne(e.scrollColumns, (a) => (h(), T(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Tn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                  Oe,
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
                Zb
              )],
              42,
              Kb
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
var Cd = x({
  name: "VarPicker",
  components: {
    VarButton: Ke,
    VarPopup: cn
  },
  inheritAttrs: !1,
  props: Wb,
  setup(e) {
    var n = E([]), r = U(() => De(e.optionHeight)), a = U(() => De(e.optionCount)), t = U(() => a.value * r.value / 2 - r.value / 2), o = U(() => a.value * r.value), l = [], i = (b, C) => {
      C.scrollEl = b;
    }, s = (b) => {
      k(e["onUpdate:show"], b);
    }, u = (b) => {
      var C = r.value + t.value, j = t.value - b.column.texts.length * r.value;
      b.translate >= C && (b.translate = C), b.translate <= j && (b.translate = j);
    }, d = (b, C) => {
      var {
        length: j
      } = b.column.texts;
      return C = C >= j ? j - 1 : C, C = C <= 0 ? 0 : C, C;
    }, v = (b) => {
      var C = Math.round((t.value - b.translate) / r.value);
      return d(b, C);
    }, f = () => {
      var b = n.value.map((j) => j.column.texts[j.index]), C = n.value.map((j) => j.index);
      return {
        texts: b,
        indexes: C
      };
    }, c = function(b, C, j, Q) {
      Q === void 0 && (Q = !1);
      var Y = t.value - d(b, C) * r.value;
      Y === b.translate && (b.scrolling = !1, !Q && N(b)), b.translate = Y, b.duration = j;
    }, p = (b, C, j) => {
      b.translate += Math.abs(C / j) / 3e-3 * (C < 0 ? -1 : 1);
    }, y = (b, C) => {
      C.touching = !0, C.scrolling = !1, C.duration = 0, C.translate = uo(C.scrollEl);
    }, g = (b, C) => {
      if (C.touching) {
        var {
          clientY: j
        } = b.touches[0], Q = C.prevY !== void 0 ? j - C.prevY : 0;
        C.prevY = j, C.translate += Q, u(C);
        var Y = performance.now();
        Y - C.momentumTime > Rl && (C.momentumTime = Y, C.momentumPrevY = C.translate);
      }
    }, V = (b, C) => {
      C.touching = !1, C.scrolling = !0, C.prevY = void 0;
      var j = C.translate - C.momentumPrevY, Q = performance.now() - C.momentumTime, Y = Math.abs(j) >= Xb && Q <= Rl;
      Y && p(C, j, Q), C.index = v(C), c(C, C.index, Y ? 1e3 : 200);
    }, O = (b) => {
      b.scrolling = !1, N(b);
    }, S = (b) => b.map((C, j) => {
      var Q, Y = Ce(C) ? {
        texts: C
      } : C, M = {
        id: Ul++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = Y.initialIndex) != null ? Q : 0,
        columnIndex: j,
        duration: 0,
        momentumTime: 0,
        column: Y,
        scrollEl: null,
        scrolling: !1
      };
      return c(M, M.index, 0, !0), M;
    }), $ = (b) => {
      var C = [];
      return B(C, b, 0, !0), C;
    }, B = function(b, C, j, Q) {
      if (Q === void 0 && (Q = !1), Ce(C) && C.length) {
        var Y, M = Q && (Y = e.cascadeInitialIndexes[b.length]) != null ? Y : 0, H = {
          id: Ul++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: M,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: C.map((F) => F[e.textKey])
          },
          columns: C,
          scrollEl: null,
          scrolling: !1
        };
        b.push(H), c(H, H.index, 0, !0), B(b, H.columns[H.index].children, j + 1, Q);
      }
    }, w = (b) => {
      n.value.splice(n.value.indexOf(b) + 1), B(n.value, b.columns[b.index].children, b.columnIndex + 1);
    }, N = (b) => {
      var {
        cascade: C,
        onChange: j
      } = e;
      C && w(b);
      var Q = n.value.some((F) => F.scrolling);
      if (!Q) {
        var {
          texts: Y,
          indexes: M
        } = f(), H = M.every((F, K) => F === l[K]);
        H || (l = [...M], k(j, Y, M));
      }
    }, P = () => {
      if (e.cascade) {
        var b = n.value.find((C) => C.scrolling);
        b && (b.translate = uo(b.scrollEl), b.index = v(b), c(b, b.index, 0, !0), b.scrolling = !1, w(b));
      } else
        n.value.forEach((C) => {
          C.translate = uo(C.scrollEl), C.index = v(C), c(C, C.index, 0);
        });
    }, z = () => {
      P();
      var {
        texts: b,
        indexes: C
      } = f();
      l = [...C], k(e.onConfirm, b, C);
    }, I = () => {
      P();
      var {
        texts: b,
        indexes: C
      } = f();
      l = [...C], k(e.onCancel, b, C);
    };
    return oe(() => e.columns, (b) => {
      n.value = e.cascade ? $(Li(b)) : S(Li(b));
      var {
        indexes: C
      } = f();
      l = [...C];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Gb,
      classes: qb,
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
      handleTransitionend: O,
      confirm: z,
      cancel: I,
      dt: qt
    };
  }
});
Cd.render = Jb;
const ur = Cd;
var nn;
function $a(e) {
  return new Promise((n) => {
    $a.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ie(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Za(ur, a, {
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
ur.install = function(e) {
  e.component(ur.name, ur);
};
$a.Component = ur;
$a.install = function(e) {
  e.component(ur.name, ur);
};
$a.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
var GS = ur;
function Qb(e) {
  return ["linear", "circle"].includes(e);
}
var _b = {
  mode: {
    type: String,
    default: "linear",
    validator: Qb
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
  n: xb,
  classes: e0
} = ne("progress"), n0 = ["viewBox"], r0 = ["cx", "cy", "r", "stroke-width"], a0 = ["cx", "cy", "r", "stroke-width"];
function t0(e, n) {
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
        )) : _("v-if", !0), A(
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (h(), T(
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
          r0
        )) : _("v-if", !0), A(
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
          a0
        )],
        14,
        n0
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
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Sd = x({
  name: "VarProgress",
  props: _b,
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
      n: xb,
      classes: e0,
      toSizeUnit: ce,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
Sd.render = t0;
const Zr = Sd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var qS = Zr, o0 = {
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
function Fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function i0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Yl,
  classes: l0
} = ne("pull-refresh"), Hl = 150;
function s0(e, n) {
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
      [ee(
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
var kd = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: o0,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), l = E(0), i = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), p = U(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = U(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: V.value ? e.successBgColor : e.bgColor,
      color: V.value ? e.successColor : e.color
    })), g = U(() => Math.abs(2 * a.value)), V = U(() => u.value === "success"), O = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, Hl);
    }), S = (I) => {
      var b = "classList" in n ? n : document.body;
      b.classList[I](Yl() + "--lock");
    }, $ = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, B = (I) => {
      if (p.value) {
        var b = Xt(n);
        if (!(b > 0)) {
          var C = b === 0, j = I.touches[0];
          f = j.clientY - v, C && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = I.touches[0].clientY), C && i.value > a.value && S("add");
          var Q = (I.touches[0].clientY - l.value) / 2 + a.value;
          i.value = Q >= g.value ? g.value : Q, i.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = O()) : s.value = "arrow-down";
        }
      }
    }, w = /* @__PURE__ */ function() {
      var I = i0(function* () {
        p.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, k(e["onUpdate:modelValue"], !0), k(e.onRefresh), S("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, S("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), N = () => {
      var {
        width: I
      } = o.value.getBoundingClientRect();
      i.value = -(I + I * 0.25), a.value = -(I + I * 0.25);
    }, P = () => {
      n = e.target ? ts(e.target, "PullRefresh") : Ma(t.value);
    }, z = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return oe(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, z();
      }, L(e.successDuration)));
    }), tn(() => {
      P(), N();
    }), ba(t, "touchmove", B), {
      n: Yl,
      classes: l0,
      iconHasChanged: c,
      ICON_TRANSITION: Hl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: $,
      touchMove: B,
      touchEnd: w,
      iconName: s,
      controlStyle: y,
      isSuccess: V
    };
  }
});
kd.render = s0;
const Jr = kd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var XS = Jr, u0 = {
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
}, $d = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function d0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = pr($d);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function v0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = mr($d);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: f0,
  classes: c0
} = ne("radio");
function m0(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Me({
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
        }, () => [ee(
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
        }, () => [ee(
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
    ), ee(
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
var Td = x({
  name: "VarRadio",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: u0,
  setup(e) {
    var n = E(!1), r = U(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = v0(), {
      form: l,
      bindForm: i
    } = gn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = hn(), f = ($) => {
      Ve(() => {
        var {
          validateTrigger: B,
          rules: w,
          modelValue: N
        } = e;
        u(B, $, w, N);
      });
    }, c = ($) => {
      var {
        checkedValue: B,
        onChange: w
      } = e;
      t && n.value === B || (n.value = $, k(e["onUpdate:modelValue"], n.value), k(w, n.value), t == null || t.onToggle(B), f("onChange"));
    }, p = ($) => {
      var {
        disabled: B,
        readonly: w,
        uncheckedValue: N,
        checkedValue: P,
        onClick: z
      } = e;
      l != null && l.disabled.value || B || (k(z, $), !(l != null && l.readonly.value || w) && (a.value = !0, c(r.value ? N : P)));
    }, y = ($) => {
      var {
        checkedValue: B,
        uncheckedValue: w
      } = e;
      n.value = $ === B ? B : w;
    }, g = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, V = () => d(e.rules, e.modelValue), O = ($) => {
      var {
        uncheckedValue: B,
        checkedValue: w
      } = e, N = ![B, w].includes($);
      N && ($ = r.value ? B : w), c($);
    };
    oe(() => e.modelValue, ($) => {
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
      n: f0,
      classes: c0,
      handleClick: p,
      toggle: O,
      reset: g,
      validate: V,
      resetValidation: v
    };
  }
});
Td.render = m0;
const Qr = Td;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var KS = Qr;
function p0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var h0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: p0
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
  n: g0,
  classes: y0
} = ne("radio-group");
function b0(e, n) {
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
    ), ee(
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
var Pd = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: h0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = d0(), {
      bindForm: t
    } = gn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = hn(), u = U(() => o.value), d = (g) => {
      Ve(() => {
        var {
          validateTrigger: V,
          rules: O,
          modelValue: S
        } = e;
        l(V, g, O, S);
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
    oe(() => e.modelValue, v), oe(() => n.value, v);
    var y = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, y), a(y), {
      errorMessage: o,
      n: g0,
      classes: y0,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
Pd.render = b0;
const _r = Pd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ZS = _r, w0 = {
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
  n: xa
} = ne("rate"), C0 = ["onClick"];
function S0(e, n) {
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
        Oe,
        null,
        Ne(e.toNumber(e.count), (o) => we((h(), T(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
            class: m(e.getClass(o)),
            onClick: (l) => e.handleClick(o, l)
          },
          [ee(
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
          C0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), ee(
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
var Od = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: w0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = gn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = hn(), i = (g) => {
      var {
        count: V,
        gap: O
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(V) ? ce(O) : 0
      };
    }, s = (g) => {
      var {
        name: V,
        color: O
      } = u(g);
      return {
        [xa("content")]: !0,
        [xa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [xa("--error")]: a.value,
        [xa("--primary")]: V !== e.emptyIcon && !O
      };
    }, u = (g) => {
      var {
        modelValue: V,
        disabled: O,
        disabledColor: S,
        color: $,
        half: B,
        emptyColor: w,
        icon: N,
        halfIcon: P,
        emptyIcon: z
      } = e, I = $;
      return (O || n != null && n.disabled.value) && (I = S), g <= L(V) ? {
        color: I,
        name: N
      } : B && g <= L(V) + 0.5 ? {
        color: I,
        name: P
      } : {
        color: O || n != null && n.disabled.value ? S : w,
        name: z
      };
    }, d = (g, V) => {
      if (e.half) {
        var {
          offsetWidth: O
        } = V.target;
        V.offsetX <= Math.floor(O / 2) && (g -= 0.5);
      }
      k(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, V) => {
      var {
        readonly: O,
        disabled: S,
        onChange: $
      } = e;
      O || S || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, V), k($, g), f());
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
      n: xa
    };
  }
});
Od.render = S0;
const xr = Od;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var JS = xr;
function k0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var $0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: k0
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
}, T0 = (e) => (Oa(""), e = e(), Va(), e), P0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, O0 = /* @__PURE__ */ T0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), V0 = [O0];
function M0(e, n) {
  return h(), T("svg", P0, V0);
}
var Vd = x({});
Vd.render = M0;
const I0 = Vd;
var E0 = (e) => (Oa(""), e = e(), Va(), e), B0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, N0 = /* @__PURE__ */ E0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), D0 = [N0];
function A0(e, n) {
  return h(), T("svg", B0, D0);
}
var Md = x({});
Md.render = A0;
const z0 = Md;
var L0 = (e) => (Oa(""), e = e(), Va(), e), R0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, U0 = /* @__PURE__ */ L0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), F0 = [U0];
function Y0(e, n) {
  return h(), T("svg", R0, F0);
}
var Id = x({});
Id.render = Y0;
const H0 = Id;
var {
  n: j0,
  classes: W0
} = ne("result");
function G0(e, n) {
  return h(), T(
    Oe,
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
var Ed = x({
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
      n: j0,
      classes: W0,
      toNumber: L
    };
  }
});
Ed.render = G0;
const q0 = Ed;
var X0 = (e) => (Oa(""), e = e(), Va(), e), K0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Z0 = /* @__PURE__ */ X0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), J0 = [Z0];
function Q0(e, n) {
  return h(), T("svg", K0, J0);
}
var Bd = x({});
Bd.render = Q0;
const _0 = Bd;
var x0 = (e) => (Oa(""), e = e(), Va(), e), e1 = {
  viewBox: "-4 -4 32 32"
}, n1 = /* @__PURE__ */ x0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), r1 = [n1];
function a1(e, n) {
  return h(), T("svg", e1, r1);
}
var Nd = x({});
Nd.render = a1;
const t1 = Nd;
var {
  n: o1,
  classes: i1
} = ne("result");
function l1(e, n) {
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
          Ka(e.type),
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
    )) : _("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Dd = x({
  name: "VarResult",
  components: {
    Info: I0,
    Success: q0,
    Warning: H0,
    Error: z0,
    Question: _0,
    Empty: t1
  },
  props: $0,
  setup(e) {
    var n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ce(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ce(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: o1,
      classes: i1,
      toNumber: L,
      toPxNum: De,
      toSizeUnit: ce,
      circleSize: n,
      borderSize: r
    };
  }
});
Dd.render = l1;
const ea = Dd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var QS = ea;
function s1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function u1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var d1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: s1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: u1
  },
  onClick: R()
}, {
  n: v1,
  classes: f1
} = ne("row");
function c1(e, n) {
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
var Ad = x({
  name: "VarRow",
  props: d1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Bm(), t = U(() => {
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
    return oe(() => a.value, o), oe(() => e.gutter, o), r(i), {
      n: v1,
      classes: f1,
      average: t,
      handleClick: l,
      padStartFlex: Bt
    };
  }
});
Ad.render = c1;
const na = Ad;
na.install = function(e) {
  e.component(na.name, na);
};
var _S = na;
function m1(e) {
  return ["left", "right", "center"].includes(e);
}
var p1 = {
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
    validator: m1
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
  n: mo,
  classes: h1
} = ne("select"), g1 = {
  key: 1
};
function y1(e, n) {
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
        [ee(
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
                [e.isEmptyModelValue ? _("v-if", !0) : W(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), T(
                  Oe,
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
                      Oe,
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
                          onClick: n[0] || (n[0] = Tn(() => {
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
                  g1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), W(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [ee(
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
        )) : _("v-if", !0)])],
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
    )) : _("v-if", !0), ee(
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
var zd = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Rn,
    VarChip: ar,
    VarFormDetails: je
  },
  props: p1,
  setup(e) {
    var n = E(null), r = E(!1), a = U(() => e.multiple), t = U(() => e.focusColor), o = E(""), l = E([]), i = U(() => In(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = gn(), {
      length: f,
      options: c,
      bindOptions: p
    } = Ob(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: V,
      // expose
      resetValidation: O
    } = hn(), S = E(null), $ = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        l.value = ae.map(N);
      }
      !G && !In(J) && (o.value = N(J)), !G && In(J) && (o.value = "");
    }, B = (G) => {
      Ve(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: ie
        } = e;
        g(J, G, ae, ie);
      });
    }, w = (G) => {
      var {
        value: J,
        label: ae
      } = G;
      return J.value != null ? J.value : ae.value;
    }, N = (G) => {
      var J, ae, ie = c.find((ge) => {
        var {
          value: he
        } = ge;
        return he.value === G;
      });
      return ie || (ie = c.find((ge) => {
        var {
          label: he
        } = ge;
        return he.value === G;
      })), (J = (ae = ie) == null ? void 0 : ae.label.value) != null ? J : "";
    }, P = () => {
      var {
        hint: G,
        modelValue: J
      } = e;
      if (!G && !In(J))
        return mo("--placeholder-hidden");
      if (G && (!In(J) || r.value))
        return mo("--placeholder-hint");
    }, z = () => n.value && window.getComputedStyle(n.value).width || "0px", I = () => {
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
    }, C = (G) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: ie,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var he = ie ? c.filter((Ye) => {
          var {
            selected: en
          } = Ye;
          return en.value;
        }).map(w) : w(G);
        k(e["onUpdate:modelValue"], he), k(ge, he), B("onChange"), !ie && (r.value = !1);
      }
    }, j = () => {
      var {
        disabled: G,
        readonly: J,
        multiple: ae,
        clearable: ie,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || J || !ie)) {
        var he = ae ? [] : void 0;
        k(e["onUpdate:modelValue"], he), k(ge, he), B("onClear");
      }
    }, Q = (G) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || (k(ae, G), B("onClick"));
    }, Y = (G) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: ie,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var he = ie, Ye = c.find((on) => {
          var {
            label: Le
          } = on;
          return Le.value === G;
        }), en = he.filter((on) => {
          var Le;
          return on !== ((Le = Ye.value.value) != null ? Le : Ye.label.value);
        });
        k(e["onUpdate:modelValue"], en), k(ge, en), B("onClose");
      }
    }, M = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        c.forEach((ie) => ie.sync(ae.includes(w(ie))));
      } else
        c.forEach((ie) => ie.sync(J === w(ie)));
      $();
    }, H = () => {
      s.value = z(), u.value = De(e.offsetY), r.value = !0;
    }, F = () => {
      r.value = !1;
    }, K = () => V(e.rules, e.modelValue), D = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    oe(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G && !Ce(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), oe(() => e.modelValue, M, {
      deep: !0
    }), oe(() => f.value, M);
    var Z = {
      wrapWidth: U(() => s.value),
      multiple: a,
      focusColor: t,
      computeLabel: $,
      onSelect: C,
      reset: D,
      validate: K,
      resetValidation: O
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
      n: mo,
      classes: h1,
      computePlaceholderState: P,
      handleFocus: I,
      handleBlur: b,
      handleClear: j,
      handleClick: Q,
      handleClose: Y,
      reset: D,
      validate: K,
      resetValidation: O,
      focus: H,
      blur: F
    };
  }
});
zd.render = y1;
const ra = zd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var xS = ra, b1 = {
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
  n: w1,
  classes: C1
} = ne("skeleton");
function S1(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (h(), T(
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), T(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), T(
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
          )) : _("v-if", !0), (h(!0), T(
            Oe,
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (h(), T(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ld = x({
  name: "VarSkeleton",
  props: b1,
  setup() {
    return {
      n: w1,
      classes: C1,
      toSizeUnit: ce,
      toNumber: L
    };
  }
});
Ld.render = S1;
const aa = Ld;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ek = aa;
function k1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var $1 = {
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
    validator: k1
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
  n: jl,
  classes: T1
} = ne("slider"), P1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function O1(e, n) {
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
        Oe,
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
            onTouchstart: Tn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Tn((t) => e.move(t, a.enumValue), ["stop"]),
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
          P1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), ee(
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
var Rd = x({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: $1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = gn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = hn(), i = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), v = E(0), f = E(!1), c = Ie({
      [Ee.First]: s(),
      [Ee.Second]: s()
    }), p = U(() => L(e.max) - L(e.min)), y = U(() => v.value / p.value * L(e.step)), g = U(() => {
      var {
        modelValue: F,
        range: K
      } = e, D = [];
      return K && Ce(F) ? D = [{
        value: B(F[0]),
        enumValue: Ee.First,
        text: w(F[0])
      }, {
        value: B(F[1]),
        enumValue: Ee.Second,
        text: w(F[1])
      }] : xe(F) && (D = [{
        value: B(F),
        enumValue: Ee.First,
        text: w(F)
      }]), D;
    }), V = U(() => {
      var {
        activeColor: F,
        range: K,
        modelValue: D
      } = e, Z = K && Ce(D) ? B(Math.min(D[0], D[1])) : 0, G = K && Ce(D) ? B(Math.max(D[0], D[1])) - Z : B(D);
      return {
        width: G + "%",
        left: Z + "%",
        background: F
      };
    }), O = U(() => e.disabled || (r == null ? void 0 : r.disabled.value)), S = U(() => e.readonly || (r == null ? void 0 : r.readonly.value)), $ = (F) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[F].active, B = (F) => {
      var {
        min: K,
        max: D
      } = e;
      return F < L(K) ? 0 : F > L(D) ? 100 : (F - L(K)) / p.value * 100;
    }, w = (F) => {
      if (!xe(F))
        return 0;
      var K = F;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var D = parseInt("" + K, 10) === K;
      return D ? K : L(K.toPrecision(5));
    }, N = (F, K) => {
      var D = [], {
        step: Z,
        range: G,
        modelValue: J,
        onChange: ae,
        min: ie
      } = e, ge = L(Z), he = Math.round(F / y.value), Ye = he * ge + L(ie), en = c[K].percentValue * ge + L(ie);
      if (c[K].percentValue = he, G && Ce(J) && (D = K === Ee.First ? [Ye, J[1]] : [J[0], Ye]), en !== Ye) {
        var on = G ? D.map((Le) => w(Le)) : w(Ye);
        k(ae, on), k(e["onUpdate:modelValue"], on), u();
      }
    }, P = (F) => {
      if (!e.range)
        return Ee.First;
      var K = c[Ee.First].percentValue * y.value, D = c[Ee.Second].percentValue * y.value, Z = Math.abs(F - K), G = Math.abs(F - D);
      return Z <= G ? Ee.First : Ee.Second;
    }, z = (F, K) => {
      v.value || (v.value = d.value.offsetWidth), !(O.value || S.value) && (k(e.onStart), f.value = !0, c[K].startPosition = F.touches[0].clientX);
    }, I = (F, K) => {
      if (!(O.value || S.value || !f.value)) {
        var D = F.touches[0].clientX - c[K].startPosition + c[K].currentLeft;
        c[K].active = !0, D <= 0 ? D = 0 : D >= v.value && (D = v.value), N(D, K);
      }
    }, b = (F) => {
      var {
        range: K,
        modelValue: D,
        onEnd: Z,
        step: G,
        min: J
      } = e;
      if (!(O.value || S.value)) {
        var ae = [];
        c[F].currentLeft = c[F].percentValue * y.value, c[F].active = !1;
        var ie = c[F].percentValue * L(G) + L(J);
        K && Ce(D) && (ae = F === Ee.First ? [ie, D[1]] : [D[0], ie]), k(Z, K ? ae : ie), f.value = !1;
      }
    }, C = (F) => {
      if (!(O.value || S.value) && !F.target.closest("." + jl("thumb"))) {
        var K = F.clientX - Vv(F.currentTarget), D = P(K);
        N(K, D), b(D);
      }
    }, j = () => {
      var F = L(e.step);
      return isNaN(F) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : F < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: F,
        modelValue: K
      } = e;
      return F && !Ce(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !F && Ce(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : F && Ce(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, Y = function(F, K) {
      F === void 0 && (F = e.modelValue), K === void 0 && (K = L(e.step));
      var D = (Z) => {
        var {
          min: G,
          max: J
        } = e;
        return Z < L(G) ? 0 : Z > L(J) ? p.value / K : (Z - L(G)) / K;
      };
      e.range && Ce(F) ? (c[Ee.First].percentValue = D(F[0]), c[Ee.First].currentLeft = c[Ee.First].percentValue * y.value, c[Ee.Second].percentValue = D(F[1]), c[Ee.Second].currentLeft = c[Ee.Second].percentValue * y.value) : xe(F) && (c[Ee.First].currentLeft = D(F) * y.value);
    }, M = () => {
      var F = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], F), l();
    }, H = {
      reset: M,
      validate: i,
      resetValidation: l
    };
    return k(n, H), oe([() => e.modelValue, () => e.step], (F) => {
      var [K, D] = F;
      !j() || !Q() || f.value || Y(K, L(D));
    }), oe(v, () => Y()), tn(() => {
      !j() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: jl,
      classes: T1,
      Thumbs: Ee,
      sliderEl: d,
      getFillStyle: V,
      isDisabled: O,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: Qe,
      toNumber: L,
      showLabel: $,
      start: z,
      move: I,
      end: b,
      click: C
    };
  }
});
Rd.render = O1;
const ta = Rd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var nk = ta;
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
function V1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function M1(e) {
  return Ei.includes(e);
}
var Ud = {
  type: {
    type: String,
    validator: M1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: V1
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
  loadingType: Xe(Jn, "type"),
  loadingSize: Xe(Jn, "size"),
  loadingRadius: Xe(Jn, "radius"),
  loadingColor: ri({}, Xe(Jn, "color"), {
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
  n: I1,
  classes: E1
} = ne("snackbar"), B1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function N1(e, n) {
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
        )) : _("v-if", !0), e.type === "loading" ? (h(), pe(
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
        )) : _("v-if", !0), W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[dr, e.show]]);
}
var Fd = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Cn,
    VarIcon: $e
  },
  props: Ud,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = ht(() => e.show, 1);
    Jt(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? B1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return oe(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), oe(() => e._update, () => {
      clearTimeout(n.value), o();
    }), tn(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Ei,
      n: I1,
      classes: E1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Fd.render = N1;
const Yd = Fd;
var {
  n: D1
} = ne("snackbar");
function A1(e, n) {
  var r = le("var-snackbar-core");
  return h(), pe(
    Pa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ee(
      Be,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [ee(
          r,
          Me(e.$props, {
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
var Hd = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Yd
  },
  props: Ud,
  setup() {
    var {
      disabled: e
    } = Zt();
    return {
      n: D1,
      disabled: e
    };
  }
});
Hd.render = A1;
const oa = Hd;
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ut.apply(this, arguments);
}
function z1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xa(e);
}
var Ei = ["loading", "success", "warning", "info", "error"], Wl = 0, ai = !1, jd, Wa = !1, Wd = {
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
}, pn = Ie([]), Bi = Wd, L1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, R1 = {
  setup() {
    return () => {
      var e = pn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Wa && (a.position = "top");
        var l = Wa ? "relative" : "absolute", i = ut({
          position: l
        }, W1(a.position));
        return ee(Yd, Me(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return ee(Cv, Me(L1, {
        style: {
          zIndex: un.zIndex
        },
        onAfterEnter: U1,
        onAfterLeave: F1
      }), z1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Fn = function(e) {
  var n = H1(e), r = Ie(ut({}, Bi, n));
  r.show = !0, ai || (ai = !0, jd = Za(R1).unmountInstance);
  var {
    length: a
  } = pn, t = {
    id: Wl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Wa)
    Y1(t);
  else {
    var o = "update-" + Wl;
    j1(r, o);
  }
  return {
    clear() {
      !Wa && pn.length ? pn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ei.forEach((e) => {
  Fn[e] = (n) => (di(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Fn(n));
});
Fn.install = function(e) {
  e.component(oa.name, oa);
};
Fn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Wa && (pn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Wa = e);
};
Fn.clear = function() {
  pn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Fn.setDefaultOptions = function(e) {
  Bi = e;
};
Fn.resetDefaultOptions = function() {
  Bi = Wd;
};
Fn.Component = oa;
function U1(e) {
  var n = e.getAttribute("data-id"), r = pn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function F1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = pn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = pn.every((t) => t.animationEnd);
  a && (k(jd), pn = Ie([]), ai = !1);
}
function Y1(e) {
  pn.push(e);
}
function H1(e) {
  return e === void 0 && (e = {}), Ge(e) ? {
    content: e
  } : e;
}
function j1(e, n) {
  var [r] = pn;
  r.reactiveSnackOptions = ut({}, r.reactiveSnackOptions, e), r._update = n;
}
function W1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
oa.install = function(e) {
  e.component(oa.name, oa);
};
var rk = oa;
const ti = Fn;
var Gd = (e) => ["mini", "small", "normal", "large"].includes(e), G1 = (e) => Gd(e) || Ce(e) || xe(e) || Ge(e), q1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), X1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), K1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: G1
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
    validator: q1
  },
  align: {
    type: String,
    validator: X1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function sn(e) {
  return "calc(" + e + " / 2)";
}
function Z1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = sn(e) + " " + n + " " + sn(e) + " 0" : i = sn(e) + " 0" : t === "space-around" ? i = sn(e) + " " + sn(n) : t === "space-between" && (o === 0 ? i = sn(e) + " " + sn(n) + " " + sn(e) + " 0" : o === l ? i = sn(e) + " 0 " + sn(e) + " " + sn(n) : i = sn(e) + " " + sn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: po,
  classes: J1
} = ne("space");
const ia = x({
  name: "VarSpace",
  props: K1,
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
      } = e, v = (t = k(r.default)) != null ? t : [], f = Gd(d), [c, p] = a(d, f);
      v = ds(v);
      var y = v.length - 1, g = v.map((V, O) => {
        var S = Z1(c, p, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: y
        });
        return ee("div", {
          style: {
            margin: S
          }
        }, [V]);
      });
      return ee("div", {
        class: J1(po(), po("$--box"), [o, po("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Bt(l),
          alignItems: Bt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + c + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ak = ia, Q1 = {
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
}, qd = Symbol("STEPS_BIND_STEP_KEY"), Xd = Symbol("STEPS_COUNT_STEP_KEY");
function _1() {
  var {
    bindChildren: e,
    childProviders: n
  } = Ja(qd), {
    length: r
  } = ct(Xd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function x1() {
  var {
    parentProvider: e,
    bindParent: n
  } = Qa(qd), {
    index: r
  } = mt(Xd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: ew,
  classes: nw
} = ne("step"), rw = {
  key: 3
};
function aw(e, n) {
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
            rw,
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
      ), e.isLastChild ? _("v-if", !0) : (h(), T(
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
var Kd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Q1,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = x1(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = U(() => l.value === a.value), c = U(() => a.value !== -1 && l.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = (V) => {
      d.value === "horizontal" && (e.value = V);
    };
    return o(p), oe(i, (V) => {
      if (r.value = V - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + O + "px";
      }
    }), {
      n: ew,
      classes: nw,
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
Kd.render = aw;
const la = Kd;
la.install = function(e) {
  e.component(la.name, la);
};
var tk = la;
function tw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ow = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: tw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: R()
}, {
  n: iw
} = ne("steps");
function lw(e, n) {
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
var Zd = x({
  name: "VarSteps",
  props: ow,
  setup(e) {
    var n = U(() => e.active), r = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
      length: o,
      bindStep: l
    } = _1(), i = (u) => {
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
      n: iw
    };
  }
});
Zd.render = lw;
const sa = Zd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ok = sa, sw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: uw
} = ne("style-provider"), dw = x({
  name: "VarStyleProvider",
  props: sw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => _l(e.tag, {
      class: uw(),
      style: ss(e.styleVars)
    }, k(r.default));
  }
});
const ua = dw;
var ho = [];
function dt(e) {
  ho.forEach((r) => document.documentElement.style.removeProperty(r)), ho.length = 0;
  var n = ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), ho.push(a);
  });
}
dt.Component = ua;
ua.install = function(e) {
  e.component(ua.name, ua);
};
dt.install = function(e) {
  e.component(ua.name, ua);
};
var ik = ua, vw = {
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
  n: fw,
  classes: cw
} = ne("switch");
function mw(e, n) {
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
          )) : _("v-if", !0)],
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
    ), ee(
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
var Jd = x({
  name: "VarSwitch",
  components: {
    VarLoading: Cn,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: vw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = gn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = hn(), i = () => o(e.rules, e.modelValue), s = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = U(() => {
      var {
        size: p,
        modelValue: y,
        color: g,
        closeColor: V,
        loadingColor: O,
        activeValue: S
      } = e;
      return {
        handle: {
          width: Qe(p),
          height: Qe(p),
          backgroundColor: y === S ? g : V,
          color: O
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
    }), d = U(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Qe(p, 0.4);
    }), v = (p) => {
      var {
        onClick: y,
        onChange: g,
        disabled: V,
        loading: O,
        readonly: S,
        modelValue: $,
        activeValue: B,
        inactiveValue: w,
        "onUpdate:modelValue": N
      } = e;
      if (k(y, p), !(V || O || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var P = $ === B ? w : B;
        k(g, P), k(N, P), s();
      }
    }, f = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, c = {
      reset: f,
      validate: i,
      resetValidation: l
    };
    return k(n, c), {
      n: fw,
      classes: cw,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Jd.render = mw;
const da = Jd;
da.install = function(e) {
  e.component(da.name, da);
};
var lk = da, pw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: R()
}, Qd = Symbol("TABS_BIND_TAB_KEY");
function hw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = pr(Qd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function gw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = mr(Qd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Pt,
  classes: yw
} = ne("tab");
function bw(e, n) {
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
var _d = x({
  name: "VarTab",
  directives: {
    Ripple: ze
  },
  props: pw,
  setup(e) {
    var n = E(null), r = U(() => e.name), a = U(() => e.disabled), t = U(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = gw(), {
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
      return S ? Pt("$-tab--disabled") : u.value === $ || u.value === (o == null ? void 0 : o.value) ? Pt("$-tab--active") : Pt("$-tab--inactive");
    }, O = (S) => {
      var {
        disabled: $,
        name: B,
        onClick: w
      } = e;
      $ || (k(w, B ?? o.value, S), s(y));
    };
    return oe(() => e.name, p), oe(() => e.disabled, p), {
      n: Pt,
      classes: yw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: V,
      handleClick: O
    };
  }
});
_d.render = bw;
const va = _d;
va.install = function(e) {
  e.component(va.name, va);
};
var sk = va, xd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function ww() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = pr(xd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Cw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = mr(xd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Sw = {
  name: {
    type: [String, Number]
  }
}, {
  n: kw,
  classes: $w
} = ne("tab-item");
function Tw(e, n) {
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
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var ev = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: zn
  },
  props: Sw,
  setup(e) {
    var n = E(!1), r = E(!1), a = U(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Cw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: kw,
      classes: $w,
      current: n,
      initSlot: r
    };
  }
});
ev.render = Tw;
const fa = ev;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var uk = fa, Pw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Ow,
  classes: Vw
} = ne("table");
function Mw(e, n) {
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var nv = x({
  name: "VarTable",
  props: Pw,
  setup() {
    return {
      toSizeUnit: ce,
      n: Ow,
      classes: Vw
    };
  }
});
nv.render = Mw;
const ca = nv;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var dk = ca;
function Gl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Iw = {
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
  stickyCssMode: Xe(Et, "cssMode"),
  stickyZIndex: Xe(Et, "zIndex"),
  offsetTop: Xe(Et, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
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
  n: Ew,
  classes: Bw
} = ne("tabs");
function Nw(e, n) {
  return h(), pe(
    Ka(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Me({
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
var rv = x({
  name: "VarTabs",
  components: {
    VarSticky: Ln
  },
  inheritAttrs: !1,
  props: Iw,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), l = E(null), i = U(() => e.active), s = U(() => e.activeColor), u = U(() => e.inactiveColor), d = U(() => e.disabledColor), v = U(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: p,
      length: y
    } = hw(), g = (I) => {
      var b, C = (b = I.name.value) != null ? b : I.index.value, {
        active: j,
        onChange: Q,
        onClick: Y
      } = e;
      k(e["onUpdate:active"], C), k(Y, C), C !== j && k(Q, C);
    }, V = () => c.find((I) => {
      var {
        name: b
      } = I;
      return e.active === b.value;
    }), O = (I) => c.find((b) => {
      var {
        index: C
      } = b;
      return (I ?? e.active) === C.value;
    }), S = () => {
      if (y.value !== 0) {
        var {
          active: I
        } = e;
        if (xe(I)) {
          var b = I > y.value - 1 ? y.value - 1 : 0;
          return k(e["onUpdate:active"], b), O(b);
        }
      }
    }, $ = () => {
      o.value = c.length >= 5;
    }, B = (I) => {
      var {
        element: b
      } = I, C = b.value;
      C && (e.layoutDirection === "horizontal" ? (n.value = C.offsetWidth + "px", a.value = C.offsetLeft + "px") : (r.value = C.offsetHeight + "px", t.value = C.offsetTop + "px"));
    }, w = (I) => {
      var {
        element: b
      } = I;
      if (o.value) {
        var C = l.value, j = b.value;
        if (e.layoutDirection === "horizontal") {
          var Q = j.offsetLeft + j.offsetWidth / 2 - C.offsetWidth / 2;
          tt(C, {
            left: Q,
            animation: bo
          });
        } else {
          var Y = j.offsetTop + j.offsetHeight / 2 - C.offsetHeight / 2;
          tt(C, {
            top: Y,
            animation: bo
          });
        }
      }
    }, N = () => {
      var I = V() || O() || S();
      !I || I.disabled.value || ($(), B(I), w(I));
    }, P = /* @__PURE__ */ function() {
      var I = Xl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), z = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: N,
      onTabClick: g
    };
    return p(z), oe(() => y.value, /* @__PURE__ */ Xl(function* () {
      yield Pn(), N();
    })), oe(() => e.active, N), ba(window, "resize", N), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: Be,
      toSizeUnit: ce,
      n: Ew,
      classes: Bw,
      resize: N,
      resizeSticky: P
    };
  }
});
rv.render = Nw;
const ma = rv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var vk = ma, Dw = {
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
function Kl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Aw(e) {
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
  n: zw
} = ne("tabs-items");
function Lw(e, n) {
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
var av = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: An
  },
  props: Dw,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = ww(), o = (f) => r.find((c) => {
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
    return a(v), oe(() => e.active, s), oe(() => t.value, /* @__PURE__ */ Aw(function* () {
      yield Pn(), s(e.active);
    })), {
      swipe: n,
      n: zw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
av.render = Lw;
const pa = av;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var fk = pa;
const Rw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Uw = {
  "--badge-default-color": "#555"
}, Fw = {
  "--button-default-color": "#303030"
}, Yw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Hw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, jw = {
  "--checkbox-unchecked-color": "#fff"
}, Ww = {
  "--chip-default-color": "#555"
}, Gw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, qw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Xw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Kw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Zw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Jw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Qw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, _w = {
  "--popup-content-background-color": "#1e1e1e"
}, xw = {
  "--pull-refresh-background": "#303030"
}, eC = {
  "--radio-unchecked-color": "#fff"
}, nC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, rC = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
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
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, sC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
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
}, pC = {
  "--breadcrumb-inactive-color": "#aaa"
}, hC = {
  "--paper-background": "#303030"
}, gC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const yC = oi({
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
}, Fw, Hw, Yw, sC, qw, aC, dC, iC, _w, Xw, Rw, Ww, Uw, uC, Gw, xw, oC, tC, Jw, lC, Zw, rC, eC, jw, Kw, Qw, vC, fC, cC, mC, nC, pC, hC, gC);
var bC = {
  dark: yC
}, ck = null;
const ii = bC;
var fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Zl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function wC(e) {
  return ["ampm", "24hr"].includes(e);
}
var CC = {
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
    validator: wC
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
}, tv = (e, n) => e === "24hr" || n === "am", Ni = (e, n, r) => {
  var a = fn.findIndex((o) => L(o) === L(r)), t = tv(e, n) ? r : _e[a];
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
}, ov = (e) => {
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
  } = Ni(t, o, l), f = !1, c = !1;
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
      hour: O,
      minute: S
    } = rn(i), {
      hour: $,
      minute: B
    } = rn(s);
    f = $ === v && a < B || O === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, iv = (e) => {
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
  } = Ni(t, o, l), c = !1, p = !1;
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
      hour: O,
      minute: S,
      second: $
    } = rn(u);
    c = O === f && S > i || S === i && a > $;
  }
  if (s && u) {
    var {
      hour: B,
      minute: w,
      second: N
    } = rn(s), {
      hour: P,
      minute: z,
      second: I
    } = rn(u);
    c = B === f && w < i || P === f && z > i || B === f && w === i && a > N || P === f && z === i && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: SC,
  classes: kC
} = ne("time-picker");
function $C(e, n) {
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
      Oe,
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
        Oe,
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var lv = x({
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
    } = n, a = E(null), t = E([]), o = E([]), l = U(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = U(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = U(() => e.type === "hour" ? fn : Zl), u = (g, V) => {
      var O;
      g = (O = g) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? ov : iv, $ = {
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
        if (tv(e.format, e.ampm))
          return t.value.includes(g);
        var V = fn.findIndex((O) => O === g);
        return o.value.includes(V);
      }
      return u(g, !0);
    }, c = (g, V, O) => {
      var S = 2 * Math.PI / 12 * g - Math.PI / 2, $ = 50 * (1 + Math.cos(S)), B = 50 * (1 + Math.sin(S)), w = () => v(g, O) ? f(V) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: N,
        color: P
      } = w();
      return {
        left: $ + "%",
        top: B + "%",
        backgroundColor: N,
        color: P
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
        var g = e.ampm === "am" ? fn : _e;
        return ya(g[i.value], 2, "0");
      }
    };
    return oe([i, () => e.isInner], (g, V) => {
      var [O, S] = g, [$, B] = V, w = O === $ && S === B;
      if (!(w || e.type !== "hour" || i.value === void 0)) {
        var N = S ? _e[i.value] : y(), P = e.useSeconds ? ":" + e.time.second : "", z = N + ":" + e.time.minute + P;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), oe(() => e.rad, (g, V) => {
      if (!(e.type === "hour" || g === void 0 || V === void 0)) {
        var O = g / 6 >= 0 ? g / 6 : g / 6 + 60, S = V / 6 >= 0 ? V / 6 : V / 6 + 60;
        if (O !== S) {
          var $, {
            hourStr: B
          } = Ni(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var w = te().minute(O).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            $ = B + ":" + w + N;
          }
          if (e.type === "second") {
            var P = te().second(O).format("ss"), z = e.useSeconds ? ":" + P : "";
            $ = B + ":" + e.time.minute + z;
          }
          r("update", $);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [V, O, S] = g;
      if (t.value = [], V && !O) {
        var {
          hour: $
        } = rn(V), B = fn.filter((H) => L(H) > $), w = _e.filter((H) => L(H) > $);
        t.value = [...B, ...w];
      }
      if (!V && O) {
        var {
          hour: N
        } = rn(O), P = fn.filter((H) => L(H) < N), z = _e.filter((H) => L(H) < N);
        t.value = [...P, ...z];
      }
      if (V && O) {
        var {
          hour: I
        } = rn(V), {
          hour: b
        } = rn(O), C = fn.filter((H) => L(H) < b || L(H) > I), j = _e.filter((H) => L(H) < b || L(H) > I);
        t.value = [...C, ...j];
      }
      if (S != null && S.hours) {
        var {
          hours: Q
        } = S, Y = fn.filter((H) => !Q(L(H))), M = _e.filter((H) => !Q(L(H)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...Y, ...M])];
      }
      o.value = t.value.map((H) => _e.findIndex((F) => H === F)).filter((H) => H >= 0);
    }, {
      immediate: !0
    }), {
      n: SC,
      classes: kC,
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
lv.render = $C;
const TC = lv;
var {
  n: PC,
  classes: OC
} = ne("time-picker"), VC = (e) => (Oa(""), e = e(), Va(), e), MC = /* @__PURE__ */ VC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), IC = {
  key: 0
};
function EC(e, n) {
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
        ), MC, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", IC, ":")) : _("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
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
      )) : _("v-if", !0)],
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
        [ee(
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
var sv = x({
  name: "VarTimePicker",
  components: {
    Clock: TC
  },
  props: CC,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), o = E(!1), l = E(!1), i = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), p = E(!1), y = E(!1), g = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), V = Ie({
      x: 0,
      y: 0
    }), O = Ie({
      x: [],
      y: []
    }), S = U(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), $ = (D) => {
      k(e["onUpdate:modelValue"], D), k(e.onChange, D);
    }, B = (D) => D * 57.29577951308232, w = (D) => {
      i.value = !1, y.value = !1, f.value = D;
    }, N = (D) => {
      var {
        disableHour: Z
      } = a.value, G = fn.findIndex((ie) => L(ie) === L(g.value.hour)), J = D === "am" ? fn : _e, ae = [...J.slice(G), ...J.slice(0, G)];
      return ae.find((ie, ge) => (o.value = ge !== 0, !Z.includes(ie)));
    }, P = (D) => {
      if (!e.readonly) {
        c.value = D;
        var Z = N(D);
        if (Z) {
          var G = e.useSeconds ? ":" + g.value.second : "", J = ya(Z, 2, "0") + ":" + g.value.minute + G;
          $(J);
        }
      }
    }, z = (D, Z) => {
      var G = D >= O.x[0] && D <= O.x[1], J = Z >= O.y[0] && Z <= O.y[1];
      return G && J;
    }, I = (D) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: J,
        second: ae
      } = rn(D);
      return {
        hour: te().hour(G).format(Z),
        minute: te().minute(J).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, b = (D) => {
      var Z = D / 30;
      return Z >= 0 ? Z : Z + 12;
    }, C = () => {
      var {
        width: D,
        height: Z
      } = a.value.getSize(), G = V.x - D / 2 - 8, J = V.x + D / 2 + 8, ae = V.y - Z / 2 - 8, ie = V.y + Z / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: J,
        rangeYMin: ae,
        rangeYMax: ie
      };
    }, j = (D, Z, G) => {
      var {
        disableHour: J
      } = a.value;
      l.value = z(D, Z);
      var ae = Math.round(G / 30) * 30 + 90, ie = b(ae), ge = t.value ? fn[ie] : _e[ie];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? z(D, Z) : !1), t.value === l.value) {
        var he = t.value || c.value === "pm" ? _e[ie] : fn[ie];
        p.value = J.includes(he), !p.value && (u.value = ae, i.value = !0);
      }
    }, Q = (D) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(D / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      y.value = ov(ae), !y.value && (d.value = G, s.value = !0);
    }, Y = (D) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(D / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
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
      iv(ae) || (v.value = G);
    }, M = () => {
      var {
        left: D,
        top: Z,
        width: G,
        height: J
      } = n.value.getBoundingClientRect();
      if (V.x = D + G / 2, V.y = Z + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: ie,
          rangeYMin: ge,
          rangeYMax: he
        } = C();
        O.x = [ae, ie], O.y = [ge, he];
      }
    }, H = (D) => {
      if (D.preventDefault(), !e.readonly) {
        M();
        var {
          clientX: Z,
          clientY: G
        } = D.touches[0], J = Z - V.x, ae = G - V.y, ie = Math.round(B(Math.atan2(ae, J)));
        f.value === "hour" ? j(Z, G, ie) : f.value === "minute" ? Q(ie) : Y(ie);
      }
    }, F = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, K = () => {
      o.value = !1;
    };
    return oe(() => e.modelValue, (D) => {
      if (D) {
        var {
          hour: Z,
          minute: G,
          second: J
        } = rn(D), ae = te().hour(Z).format("hh"), ie = te().hour(Z).format("HH"), ge = te().minute(G).format("mm"), he = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : L(ae)) * 30, d.value = L(ge) * 6, v.value = L(he) * 6, g.value = I(D), e.format !== "24hr" && (c.value = ya("" + Z, 2, "0") === ie && _e.includes(ie) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(ie);
      }
    }, {
      immediate: !0
    }), {
      n: PC,
      classes: OC,
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
      checkPanel: w,
      checkAmpm: P,
      end: F,
      update: $,
      changePreventUpdate: K
    };
  }
});
sv.render = EC;
const ha = sv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var mk = ha, BC = {
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
  n: NC,
  classes: DC
} = ne("uploader"), AC = 0, zC = ["onClick"], LC = ["onClick"], RC = ["src", "alt"], UC = ["multiple", "accept", "capture", "disabled"], FC = ["src"];
function YC(e, n) {
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
        Oe,
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
              onClick: Tn((i) => e.handleRemove(l), ["stop"])
            },
            [ee(
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
            LC
          )) : _("v-if", !0), l.cover ? (h(), T(
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
            RC
          )) : _("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          zC
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
          UC
        ), W(e.$slots, "default", {}, () => [ee(
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
      }]]) : _("v-if", !0)],
      2
      /* CLASS */
    ), ee(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), ee(
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
            FC
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
var uv = x({
  name: "VarUploader",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarPopup: cn,
    VarFormDetails: je
  },
  props: BC,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = U(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: M
        }
      } = e;
      return xe(Y) ? M + " / " + Y : "";
    }), {
      form: o,
      bindForm: l
    } = gn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = hn(), v = U(() => {
      var {
        modelValue: Y,
        hideList: M
      } = e;
      return M ? [] : Y;
    }), f = (Y) => {
      var {
        disabled: M,
        readonly: H,
        previewed: F
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || M || H || !F)) {
        var {
          url: K
        } = Y;
        if (Ge(K) && Ui(K)) {
          Un(K);
          return;
        }
        Ge(K) && Fi(K) && (a.value = Y, r.value = !0);
      }
    }, c = (Y) => ({
      id: AC++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), p = (Y) => {
      var M = Y.target, {
        files: H
      } = M;
      return Array.from(H);
    }, y = (Y) => new Promise((M) => {
      var H = new FileReader();
      H.onload = () => {
        var F = H.result;
        Y.file.type.startsWith("image") && (Y.cover = F), Y.url = F, M(Y);
      }, H.readAsDataURL(Y.file);
    }), g = (Y) => Y.map(y), V = (Y) => {
      var {
        onBeforeRead: M
      } = e;
      return Y.map((H) => new Promise((F) => {
        M || F({
          valid: !0,
          varFile: H
        });
        var K = k(M, Ie(H));
        K = Ce(K) ? K : [K], Promise.all(K).then((D) => {
          F({
            valid: !D.some((Z) => !Z),
            varFile: H
          });
        });
      }));
    }, O = /* @__PURE__ */ function() {
      var Y = Ql(function* (M) {
        var {
          maxsize: H,
          maxlength: F,
          modelValue: K,
          onOversize: D,
          onAfterRead: Z,
          readonly: G,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          var ae = (Le) => Le.filter((dn) => dn.file.size > L(H) ? (k(D, Ie(dn)), !1) : !0), ie = (Le) => {
            var dn = Math.min(Le.length, L(F) - K.length);
            return Le.slice(0, dn);
          }, ge = p(M), he = ge.map(c);
          he = H != null ? ae(he) : he, he = F != null ? ie(he) : he;
          var Ye = yield Promise.all(g(he)), en = yield Promise.all(V(Ye)), on = en.filter((Le) => {
            var {
              valid: dn
            } = Le;
            return dn;
          }).map((Le) => {
            var {
              varFile: dn
            } = Le;
            return dn;
          });
          k(e["onUpdate:modelValue"], [...K, ...on]), M.target.value = "", on.forEach((Le) => k(Z, Ie(Le)));
        }
      });
      return function(H) {
        return Y.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var Y = Ql(function* (M) {
        var {
          disabled: H,
          readonly: F,
          modelValue: K,
          onBeforeRemove: D,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || F)) {
          if (D) {
            var G = k(D, Ie(M));
            if (G = Ce(G) ? G : [G], (yield Promise.all(G)).some((ae) => !ae))
              return;
          }
          var J = K.filter((ae) => ae !== M);
          k(Z, Ie(M)), I("onRemove"), k(e["onUpdate:modelValue"], J);
        }
      });
      return function(H) {
        return Y.apply(this, arguments);
      };
    }(), $ = () => e.modelValue.filter((Y) => Y.state === "success"), B = () => e.modelValue.filter((Y) => Y.state === "error"), w = () => e.modelValue.filter((Y) => Y.state === "loading"), N = () => {
      n.value.click();
    }, P = () => {
      a.value = null, r.value = !1, Un.close();
    }, z = {
      getSuccess: $,
      getError: B,
      getLoading: w
    }, I = (Y) => {
      Ve(() => {
        var {
          validateTrigger: M,
          rules: H,
          modelValue: F
        } = e;
        s(M, Y, H, F, z);
      });
    }, b = !1, C = () => u(e.rules, e.modelValue, z), j = () => {
      b = !0, k(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: C,
      resetValidation: d,
      reset: j
    };
    return k(l, Q), oe(() => e.modelValue, () => {
      !b && I("onChange"), b = !1;
    }, {
      deep: !0
    }), {
      n: NC,
      classes: DC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: Fi,
      isHTMLSupportImage: Ui,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: O,
      handleRemove: S,
      getSuccess: $,
      getError: B,
      getLoading: w,
      validate: C,
      resetValidation: d,
      reset: j,
      chooseFile: N,
      closePreview: P
    };
  }
});
uv.render = YC;
const ga = uv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var pk = ga;
const HC = "2.8.6";
function jC(e) {
  wa.install && e.use(wa), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), er.install && e.use(er), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), Ke.install && e.use(Ke), Or.install && e.use(Or), Vr.install && e.use(Vr), nr.install && e.use(nr), rr.install && e.use(rr), Mr.install && e.use(Mr), ar.install && e.use(ar), Ir.install && e.use(Ir), Er.install && e.use(Er), Br.install && e.use(Br), un.install && e.use(un), Nr.install && e.use(Nr), Dr.install && e.use(Dr), zr.install && e.use(zr), Ca.install && e.use(Ca), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Dn.install && e.use(Dn), je.install && e.use(je), zt.install && e.use(zt), $e.install && e.use($e), Fr.install && e.use(Fr), Un.install && e.use(Un), Yr.install && e.use(Yr), Hr.install && e.use(Hr), sr.install && e.use(sr), ot.install && e.use(ot), jr.install && e.use(jr), Wr.install && e.use(Wr), Cn.install && e.use(Cn), ei.install && e.use(ei), To.install && e.use(To), Rn.install && e.use(Rn), Gr.install && e.use(Gr), qr.install && e.use(qr), Xr.install && e.use(Xr), Kr.install && e.use(Kr), $a.install && e.use($a), cn.install && e.use(cn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), ze.install && e.use(ze), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), ti.install && e.use(ti), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), Ln.install && e.use(Ln), dt.install && e.use(dt), An.install && e.use(An), zn.install && e.use(zn), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ii.install && e.use(ii), ha.install && e.use(ha), ir.install && e.use(ir), ga.install && e.use(ga);
}
const hk = {
  version: HC,
  install: jC,
  ActionSheet: wa,
  AppBar: br,
  Avatar: wr,
  AvatarGroup: Cr,
  BackTop: Sr,
  Badge: er,
  BottomNavigation: kr,
  BottomNavigationItem: $r,
  Breadcrumb: Tr,
  Breadcrumbs: Pr,
  Button: Ke,
  ButtonGroup: Or,
  Card: Vr,
  Cell: nr,
  Checkbox: rr,
  CheckboxGroup: Mr,
  Chip: ar,
  Col: Ir,
  Collapse: Er,
  CollapseItem: Br,
  Context: un,
  Countdown: Nr,
  Counter: Dr,
  DatePicker: zr,
  Dialog: Ca,
  Divider: Lr,
  Ellipsis: Rr,
  Fab: Ur,
  Form: Dn,
  FormDetails: je,
  Hover: zt,
  Icon: $e,
  Image: Fr,
  ImagePreview: Un,
  IndexAnchor: Yr,
  IndexBar: Hr,
  Input: sr,
  Lazy: ot,
  Link: jr,
  List: Wr,
  Loading: Cn,
  LoadingBar: ei,
  Locale: To,
  Menu: Rn,
  Option: Gr,
  Overlay: qr,
  Pagination: Xr,
  Paper: Kr,
  Picker: $a,
  Popup: cn,
  Progress: Zr,
  PullRefresh: Jr,
  Radio: Qr,
  RadioGroup: _r,
  Rate: xr,
  Result: ea,
  Ripple: ze,
  Row: na,
  Select: ra,
  Skeleton: aa,
  Slider: ta,
  Snackbar: ti,
  Space: ia,
  Step: la,
  Steps: sa,
  Sticky: Ln,
  StyleProvider: dt,
  Swipe: An,
  SwipeItem: zn,
  Switch: da,
  Tab: va,
  TabItem: fa,
  Table: ca,
  Tabs: ma,
  TabsItems: pa,
  Themes: ii,
  TimePicker: ha,
  Tooltip: ir,
  Uploader: ga
};
export {
  wa as ActionSheet,
  br as AppBar,
  wr as Avatar,
  Cr as AvatarGroup,
  Sr as BackTop,
  er as Badge,
  kr as BottomNavigation,
  $r as BottomNavigationItem,
  Tr as Breadcrumb,
  Pr as Breadcrumbs,
  Ke as Button,
  Or as ButtonGroup,
  Vr as Card,
  nr as Cell,
  rr as Checkbox,
  Mr as CheckboxGroup,
  ar as Chip,
  Ir as Col,
  Er as Collapse,
  Br as CollapseItem,
  un as Context,
  Nr as Countdown,
  Dr as Counter,
  zr as DatePicker,
  Ca as Dialog,
  Lr as Divider,
  Rr as Ellipsis,
  Ur as Fab,
  Dn as Form,
  je as FormDetails,
  zt as Hover,
  $e as Icon,
  Fr as Image,
  Un as ImagePreview,
  Yr as IndexAnchor,
  Hr as IndexBar,
  sr as Input,
  ot as Lazy,
  jr as Link,
  Wr as List,
  Cn as Loading,
  ei as LoadingBar,
  To as Locale,
  Rn as Menu,
  Gr as Option,
  qr as Overlay,
  Vo as PIXEL,
  Xr as Pagination,
  Kr as Paper,
  $a as Picker,
  cn as Popup,
  Zr as Progress,
  Jr as PullRefresh,
  Qr as Radio,
  _r as RadioGroup,
  xr as Rate,
  ea as Result,
  ze as Ripple,
  na as Row,
  Ei as SNACKBAR_TYPE,
  ra as Select,
  aa as Skeleton,
  ta as Slider,
  ti as Snackbar,
  ia as Space,
  la as Step,
  sa as Steps,
  Ln as Sticky,
  dt as StyleProvider,
  An as Swipe,
  zn as SwipeItem,
  da as Switch,
  va as Tab,
  fa as TabItem,
  ca as Table,
  ma as Tabs,
  pa as TabsItems,
  ii as Themes,
  ha as TimePicker,
  ir as Tooltip,
  ga as Uploader,
  JC as _ActionSheetComponent,
  QC as _AppBarComponent,
  xC as _AvatarComponent,
  eS as _AvatarGroupComponent,
  tS as _BackTopComponent,
  oS as _BadgeComponent,
  iS as _BottomNavigationComponent,
  lS as _BottomNavigationItemComponent,
  sS as _BreadcrumbComponent,
  uS as _BreadcrumbsComponent,
  aS as _ButtonComponent,
  dS as _ButtonGroupComponent,
  vS as _CardComponent,
  fS as _CellComponent,
  mS as _CheckboxComponent,
  pS as _CheckboxGroupComponent,
  hS as _ChipComponent,
  gS as _ColComponent,
  yS as _CollapseComponent,
  bS as _CollapseItemComponent,
  GC as _ContextComponent,
  wS as _CountdownComponent,
  CS as _CounterComponent,
  SS as _DatePickerComponent,
  kS as _DialogComponent,
  $S as _DividerComponent,
  PS as _EllipsisComponent,
  OS as _FabComponent,
  VS as _FormComponent,
  cS as _FormDetailsComponent,
  rS as _HoverComponent,
  KC as _IconComponent,
  MS as _ImageComponent,
  BS as _ImagePreviewComponent,
  DS as _IndexAnchorComponent,
  AS as _IndexBarComponent,
  zS as _InputComponent,
  _C as _LazyComponent,
  LS as _LinkComponent,
  RS as _ListComponent,
  US as _LoadingBarComponent,
  nS as _LoadingComponent,
  ZC as _LocaleComponent,
  FS as _MenuComponent,
  YS as _OptionComponent,
  HS as _OverlayComponent,
  jS as _PaginationComponent,
  WS as _PaperComponent,
  GS as _PickerComponent,
  XC as _PopupComponent,
  qS as _ProgressComponent,
  XS as _PullRefreshComponent,
  KS as _RadioComponent,
  ZS as _RadioGroupComponent,
  JS as _RateComponent,
  QS as _ResultComponent,
  qC as _RippleComponent,
  _S as _RowComponent,
  xS as _SelectComponent,
  ek as _SkeletonComponent,
  nk as _SliderComponent,
  rk as _SnackbarComponent,
  ak as _SpaceComponent,
  tk as _StepComponent,
  ok as _StepsComponent,
  NS as _StickyComponent,
  ik as _StyleProviderComponent,
  IS as _SwipeComponent,
  ES as _SwipeItemComponent,
  lk as _SwitchComponent,
  sk as _TabComponent,
  uk as _TabItemComponent,
  dk as _TableComponent,
  vk as _TabsComponent,
  fk as _TabsItemsComponent,
  ck as _ThemesComponent,
  mk as _TimePickerComponent,
  TS as _TooltipComponent,
  pk as _UploaderComponent,
  rf as actionSheetProps,
  hi as add,
  cf as appBarProps,
  Rf as avatarGroupProps,
  Bf as avatarProps,
  vc as backTopProps,
  gc as badgeProps,
  Oc as bottomNavigationItemProps,
  Cc as bottomNavigationProps,
  Nc as breadcrumbProps,
  Uc as breadcrumbsProps,
  tc as buttonProps,
  Jc as cardProps,
  rm as cellProps,
  bm as checkboxGroupProps,
  vm as checkboxProps,
  Tm as chipProps,
  Em as colProps,
  Ym as collapseItemProps,
  Lm as collapseProps,
  Gm as countdownProps,
  Yp as counterProps,
  sh as datePickerProps,
  hk as default,
  Ue as defaultLazyOptions,
  Th as dialogProps,
  Nh as dividerProps,
  bs as enUS,
  im as formDetailsProps,
  iy as formProps,
  gs as iconProps,
  $s as imageCache,
  Vy as imagePreviewProps,
  vy as imageProps,
  Ry as indexAnchorProps,
  Hy as indexBarProps,
  Ky as inputProps,
  jC as install,
  rb as linkProps,
  ib as listProps,
  vb as loadingBarProps,
  Jn as loadingProps,
  kb as menuProps,
  Cs as merge,
  Mb as optionProps,
  Nb as overlayProps,
  He as pack,
  ws as packs,
  Ab as paginationProps,
  Fb as paperProps,
  Wb as pickerProps,
  pt as popupProps,
  _b as progressProps,
  o0 as pullRefreshProps,
  h0 as radioGroupProps,
  u0 as radioProps,
  w0 as rateProps,
  $0 as resultProps,
  d1 as rowProps,
  p1 as selectProps,
  b1 as skeletonProps,
  $1 as sliderProps,
  Ud as snackbarProps,
  K1 as spaceProps,
  Q1 as stepProps,
  ow as stepsProps,
  Et as stickyProps,
  sw as styleProviderProps,
  ed as swipeProps,
  vw as switchProps,
  Sw as tabItemProps,
  pw as tabProps,
  Pw as tableProps,
  Dw as tabsItemsProps,
  Iw as tabsProps,
  CC as timePickerProps,
  Gg as tooltipProps,
  BC as uploaderProps,
  gi as use,
  pi as useLocale,
  HC as version,
  mi as zhCN
};
