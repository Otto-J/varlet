import { reactive as Ee, onMounted as Wa, nextTick as Ve, onActivated as Ga, isRef as mv, watch as le, onBeforeUnmount as ut, onDeactivated as hr, unref as co, inject as ai, getCurrentInstance as Wn, computed as R, provide as ti, isVNode as dt, ref as I, createApp as pv, onUnmounted as Ta, h as Zl, onBeforeMount as hv, defineComponent as x, createVNode as re, Teleport as qa, Transition as De, withDirectives as Se, vShow as Ka, mergeProps as Me, openBlock as h, createBlock as me, resolveDynamicComponent as Xa, normalizeClass as c, normalizeStyle as q, resolveComponent as ie, resolveDirective as Ae, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as ne, createElementBlock as T, Fragment as Pe, renderList as Be, createCommentVNode as _, onUpdated as Ht, createTextVNode as be, pushScopeId as Oa, popScopeId as Pa, withModifiers as On, normalizeProps as oi, guardReactiveProps as Jl, vModelText as gv, toRefs as yv, withKeys as Ai, toRaw as zi, TransitionGroup as bv, Comment as wv } from "vue";
var Ql = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, HC = Ee(Ql);
const sn = Ee(Ql), Ge = (e) => typeof e == "string", mo = (e) => typeof e == "boolean", _e = (e) => typeof e == "number", ii = (e) => Object.prototype.toString.call(e) === "[object Object]", Cv = (e) => typeof e == "object" && e !== null, li = (e) => typeof e == "function", we = (e) => Array.isArray(e), Sv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ge(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : mo(e) ? Number(e) : e, La = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, si = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, vt = () => typeof window < "u", Li = (e) => [...new Set(e)], _l = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), kv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), $v = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Ri = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ui = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Tv = (e) => {
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
      this.has(r) && La(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, po = (e) => e, Yi = (e) => Math.pow(e, 3), xl = (e) => e < 0.5 ? Yi(e * 2) / 2 : 1 - Yi((1 - e) * 2) / 2, jt = (e, n) => e ?? n, es = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ya = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Fi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ov(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Fi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Fi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Pv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Hi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Wt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function ui(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Vv(e) {
  return ho.apply(this, arguments);
}
function ho() {
  return ho = Ov(function* (e) {
    yield Pn();
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
  }), ho.apply(this, arguments);
}
function oo(e) {
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
function Ev(e) {
  for (var n = [], r = e; r !== window; )
    r = Va(r), n.push(r);
  return n;
}
function ns(e, n) {
  if (Ge(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Cv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var rs = (e) => Ge(e) && e.endsWith("rem"), Mv = (e) => Ge(e) && e.endsWith("px") || _e(e), Iv = (e) => Ge(e) && e.endsWith("%"), as = (e) => Ge(e) && e.endsWith("vw"), ts = (e) => Ge(e) && e.endsWith("vh"), Bv = (e) => Ge(e) && e.startsWith("calc("), Nv = (e) => Ge(e) && e.startsWith("var("), Ne = (e) => {
  if (_e(e))
    return e;
  if (Mv(e))
    return +e.replace("px", "");
  if (as(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ts(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (rs(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ge(e) ? L(e) : 0;
}, he = (e) => {
  if (e != null)
    return Iv(e) || as(e) || ts(e) || rs(e) || Bv(e) || Nv(e) ? e : Ne(e) + "px";
}, Je = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Sn(e) {
  var n = es();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function ji(e) {
  var n = es();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Gt(e) {
  Sn(() => {
    Sn(e);
  });
}
function Pn() {
  return new Promise((e) => {
    Sn(() => {
      Sn(e);
    });
  });
}
function Dv() {
  return new Promise((e) => {
    Sn(e);
  });
}
function rt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = Wt(e), s = ui(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Sn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Sn(d);
  });
}
function os(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + kv(a);
    return n[o] = t, n;
  }, {});
}
function Av() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Et(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tn(e) {
  let n = !1;
  Wa(() => {
    e(), Ve(() => {
      n = !0;
    });
  }), Ga(() => {
    n && e();
  });
}
function ba(e, n, r, a = {}) {
  if (!vt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let i = !1, l = !1;
  const s = (f) => {
    if (i || l)
      return;
    const m = co(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), i = !0);
  }, u = (f) => {
    if (!i || l)
      return;
    const m = co(f);
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
  return tn(() => {
    s(e);
  }), ut(() => {
    u(e);
  }), hr(() => {
    u(e);
  }), v;
}
function zv(e, n, r) {
  if (!vt())
    return;
  ba(document, n, (t) => {
    const o = co(e);
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
  const n = Wn();
  return e in n.provides;
}
function di(e) {
  if (!Rv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = ai(e), { childInstances: r, collect: a, clear: t } = n, o = Lv(n, ["childInstances", "collect", "clear"]), i = Wn();
  return {
    index: R(() => r.indexOf(i)),
    parentProvider: o,
    bindParent: (u) => {
      Wa(() => {
        Ve().then(() => {
          a(i, u);
        });
      }), ut(() => {
        Ve().then(() => {
          t(i, u);
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
      dt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function vi(e) {
  const n = Wn(), r = Ee([]), a = [], t = R(() => r.length), o = () => {
    const u = Uv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, i = (u, d) => {
    r.push(u), a.push(d), o();
  }, l = (u, d) => {
    La(r, u), La(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      ti(e, Object.assign({
        childInstances: r,
        collect: i,
        clear: l
      }, u));
    }
  };
}
var Yv = ["collect", "clear"];
function Wi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Wi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Wi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Fv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mt.apply(this, arguments);
}
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Hv(e) {
  var n = pv(e), r = document.createElement("div");
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
      return () => Zl(e, Mt({}, n, r));
    }
  }, {
    unmount: t
  } = Hv(a);
  return {
    unmountInstance: t
  };
}
function jv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      dt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function Mn(e) {
  var n = Ee([]), r = Wn(), a = () => {
    var l = jv(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    La(n, l);
  };
  ti(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var i = R(() => n.length);
  return {
    length: i
  };
}
function In(e) {
  if (!is(e))
    return {
      index: null
    };
  var n = ai(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Wn();
  Wa(() => {
    Ve().then(() => r(o));
  }), Ta(() => {
    Ve().then(() => a(o));
  });
  var i = R(() => t.indexOf(o));
  return {
    index: i
  };
}
function $n(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    La(n, o);
  }, t = (o) => {
    ti(e, Mt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function Tn(e) {
  if (!is(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = ai(e), {
    collect: r,
    clear: a
  } = n, t = Fv(n, Yv), o = (i) => {
    Wa(() => r(i)), ut(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function is(e) {
  var n = Wn();
  return e in n.provides;
}
function pn() {
  var e = I(""), n = /* @__PURE__ */ function() {
    var t = Gi(function* (o, i, l) {
      if (!we(o) || !o.length)
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
    var t = Gi(function* (o, i, l, s, u) {
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
  ba(window, "hashchange", e), ba(window, "popstate", e);
}
function fi() {
  var e = I(!1);
  return Ga(() => {
    e.value = !1;
  }), hr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return i.map((s) => {
      if (we(s)) {
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
function $(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (we(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, It.apply(this, arguments);
}
var {
  n: ls
} = ee("ripple"), qi = 250;
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
function ss(e) {
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
      s.classList.add(ls()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Gv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function go() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + ls());
    if (r.length) {
      var a = r[r.length - 1], t = qi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, qi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function us() {
  var e = this._ripple;
  Av() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Kv(e, n) {
  var r, a, t;
  e._ripple = It({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: go.bind(e)
  }), e.addEventListener("touchstart", ss, {
    passive: !0
  }), e.addEventListener("touchmove", us, {
    passive: !0
  }), e.addEventListener("dragstart", go, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Xv(e) {
  e.removeEventListener("touchstart", ss), e.removeEventListener("touchmove", us), e.removeEventListener("dragstart", go), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Zv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = It({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ds = {
  mounted: Kv,
  unmounted: Xv,
  updated: Zv,
  install(e) {
    e.directive("ripple", this);
  }
}, jC = ds;
const ze = ds;
function Jv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var ft = {
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  // internal for Dialog
  onRouteChange: Y()
};
function vs() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function pt(e) {
  sn.locks[e] = 1, vs();
}
function ht(e) {
  delete sn.locks[e], vs();
}
function qt(e, n) {
  var {
    uid: r
  } = Wn();
  n && le(n, (a) => {
    a === !1 ? ht(r) : a === !0 && e() === !0 && pt(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? pt(r) : ht(r));
  }), hv(() => {
    n && n() === !1 || e() === !0 && pt(r);
  }), Ta(() => {
    n && n() === !1 || e() === !0 && ht(r);
  }), Ga(() => {
    n && n() === !1 || e() === !0 && pt(r);
  }), hr(() => {
    n && n() === !1 || e() === !0 && ht(r);
  });
}
function ct(e, n) {
  var r = I(sn.zIndex);
  return le(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function yo() {
  return yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yo.apply(this, arguments);
}
function Qv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !dt(e);
}
var {
  n: Bn,
  classes: io
} = ee("popup");
const fn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: ft,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ct(() => e.show, 3), {
      disabled: o
    } = fi(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    qt(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), Wv(() => $(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: io(Bn("overlay"), d),
        style: yo({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Me({
      class: io(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: p,
        position: y
      } = e;
      return re(De, {
        name: Bn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(re("div", {
          class: io(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), re(De, {
          name: p || Bn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Ka, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(qa, {
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
fn.install = function(e) {
  e.component(fn.name, fn);
};
var WC = fn, fs = {
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
  onClick: Y()
};
function Ki(e, n, r, a, t, o, i) {
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
        Ki(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ki(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: xv,
  classes: ef
} = ee("icon");
function nf(e, n) {
  return h(), me(
    Xa(e.isURL(e.name) ? "img" : "i"),
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
var cs = x({
  name: "VarIcon",
  props: fs,
  setup(e) {
    var n = I(""), r = I(!1), a = /* @__PURE__ */ function() {
      var t = _v(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || L(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ve(), setTimeout(() => {
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
      isURL: Sv,
      toNumber: L,
      toSizeUnit: he
    };
  }
});
cs.render = nf;
const $e = cs;
$e.install = function(e) {
  e.component($e.name, $e);
};
var GC = $e;
function bo() {
  return bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bo.apply(this, arguments);
}
var rf = bo({
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
  onSelect: Y(),
  "onUpdate:show": Y()
}, Ke(ft, [
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
const ci = {
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
}, ms = {
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
function mi() {
  var e = {}, n = I({}), r = (o, i) => {
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
    e[o] = wo({}, e[o], i), a(o);
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
  packs: ps,
  pack: He,
  add: pi,
  use: hi,
  merge: hs
} = mi();
pi("zh-CN", ci);
hi("zh-CN");
var qC = {
  zhCN: ci,
  enUS: ms,
  packs: ps,
  pack: He,
  add: pi,
  use: hi,
  merge: hs,
  useLocale: mi
};
const Co = {
  zhCN: ci,
  enUS: ms,
  packs: ps,
  pack: He,
  add: pi,
  use: hi,
  merge: hs,
  useLocale: mi
};
var {
  n: af,
  classes: tf
} = ee("action-sheet"), of = ["onClick"];
function lf(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Ae("ripple");
  return h(), me(
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
            class: c(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(h(!0), T(
          Pe,
          null,
          Be(e.actions, (o) => Se((h(), T(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (h(), me(
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
            )) : _("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ne(o.name),
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
var gs = x({
  name: "VarActionSheet",
  directives: {
    Ripple: ze
  },
  components: {
    VarPopup: fn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: rf,
  setup(e) {
    var n = I(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        $(i, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: af,
      classes: tf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
      dt: jt,
      handleSelect: r
    };
  }
});
gs.render = lf;
const ar = gs;
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
var Qn, gi = {};
function sf(e) {
  return e === void 0 && (e = {}), So({}, gi, e);
}
function wa(e) {
  return vt() ? new Promise((n) => {
    wa.close();
    var r = Ee(sf(e));
    r.teleport = "body", Qn = r;
    var {
      unmountInstance: a
    } = Za(ar, r, {
      onSelect: (t) => {
        $(r.onSelect, t), n(t);
      },
      onClose: () => {
        $(r.onClose), n("close");
      },
      onClosed: () => {
        $(r.onClosed), a(), Qn === r && (Qn = null);
      },
      onRouteChange: () => {
        a(), Qn === r && (Qn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function uf(e) {
  gi = e;
}
function df() {
  gi = {};
}
function vf() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
wa.Component = ar;
ar.install = function(e) {
  e.component(ar.name, ar);
};
wa.install = function(e) {
  e.component(ar.name, ar);
};
Object.assign(wa, {
  setDefaultOptions: uf,
  resetDefaultOptions: df,
  close: vf
});
var KC = ar;
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
} = ee("app-bar");
function hf(e, n) {
  return h(), T(
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
        [W(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            ne(e.title),
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
          class: c(e.n("title"))
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            ne(e.title),
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
var ys = x({
  name: "VarAppBar",
  props: cf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(), t = I(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, i = R(() => {
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
    return tn(o), Ht(o), {
      n: mf,
      classes: pf,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
ys.render = hf;
const wr = ys;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var XC = wr;
function Xi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Xi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Xi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
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
var gf = "background-image", yf = "lazy-loading", bf = "lazy-error", Zi = "lazy-attempt", wf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], $o = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ra = [], Bt = [], bs = Tv(100), Ue = {
  loading: $o,
  error: $o,
  attempt: 3,
  throttleWait: 300,
  events: wf
}, yi = si(mt, Ue.throttleWait);
function Xt(e, n) {
  e._lazy.arg === gf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Cf(e) {
  e._lazy.loading && Xt(e, e._lazy.loading), mt();
}
function Sf(e) {
  e._lazy.error && Xt(e, e._lazy.error), e._lazy.state = "error", wi(e), mt();
}
function ws(e, n) {
  Xt(e, n), e._lazy.state = "success", wi(e), mt();
}
function kf(e) {
  var n;
  Bt.includes(e) || (Bt.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, yi, {
      passive: !0
    });
  }));
}
function $f() {
  Bt.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, yi);
    });
  }), Bt.length = 0;
}
function Tf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(yf)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(bf)) != null ? a : Ue.error,
    attempt: e.getAttribute(Zi) ? Number(e.getAttribute(Zi)) : Ue.attempt
  };
  e._lazy = ko({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Xt(e, $o), $(Ue.filter, e._lazy);
}
function Of(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, bs.add(n), ws(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Sf(e) : Cs(e);
  });
}
function Cs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (bs.has(n)) {
      ws(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Cf(e), Of(e, n);
  }
}
function bi(e) {
  return To.apply(this, arguments);
}
function To() {
  return To = Kt(function* (e) {
    (yield Vv(e)) && Cs(e);
  }), To.apply(this, arguments);
}
function mt() {
  Ra.forEach((e) => bi(e));
}
function Pf(e) {
  return Oo.apply(this, arguments);
}
function Oo() {
  return Oo = Kt(function* (e) {
    !Ra.includes(e) && Ra.push(e), Ev(e).forEach(kf), yield bi(e);
  }), Oo.apply(this, arguments);
}
function wi(e) {
  La(Ra, e), Ra.length === 0 && $f();
}
function Vf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Ss(e, n) {
  return Po.apply(this, arguments);
}
function Po() {
  return Po = Kt(function* (e, n) {
    Tf(e, n), yield Pf(e);
  }), Po.apply(this, arguments);
}
function Ef(e, n) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Kt(function* (e, n) {
    if (!Vf(e, n)) {
      Ra.includes(e) && (yield bi(e));
      return;
    }
    yield Ss(e, n);
  }), Vo.apply(this, arguments);
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
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = i;
}
var ks = {
  mounted: Ss,
  unmounted: wi,
  updated: Ef,
  install(e, n) {
    Mf(n), yi = si(mt, Ue.throttleWait), e.directive("lazy", this);
  }
}, ZC = ks;
const at = ks;
function If(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var $s = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ts(e) {
  return $s(e) || _e(e) || Ge(e);
}
var Bf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ts,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: Nf,
  classes: Df
} = ee("avatar"), Af = ["src", "lazy-loading", "lazy-error"], zf = ["src"];
function Lf(e, n) {
  var r = Ae("lazy");
  return h(), T(
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
    [e.src ? (h(), T(
      Pe,
      {
        key: 0
      },
      [e.lazy ? Se((h(), T(
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
        Af
      )), [[r, e.src]]) : (h(), T(
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
        zf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), T(
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
var Os = x({
  name: "VarAvatar",
  directives: {
    Lazy: at
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
      d ? (u._lazy.state === "success" && $(v, s), u._lazy.state === "error" && $(f, s)) : $(v, s);
    }, i = (s) => {
      $(e.onError, s);
    }, l = (s) => {
      $(e.onClick, s);
    };
    return tn(t), Ht(t), {
      internalSizeValidator: $s,
      sizeValidator: Ts,
      toSizeUnit: he,
      n: Nf,
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
Os.render = Lf;
const Cr = Os;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var JC = Cr, Rf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Uf,
  classes: Yf
} = ee("avatar-group");
function Ff(e, n) {
  return h(), T(
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
var Ps = x({
  name: "VarAvatarGroup",
  props: Rf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: Uf,
      classes: Yf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
Ps.render = Ff;
const Sr = Ps;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var QC = Sr;
function Hf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function jf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var er = {
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
} = ee("loading"), qf = (e) => (Oa(""), e = e(), Pa(), e), Kf = /* @__PURE__ */ qf(() => /* @__PURE__ */ A(
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
)), Xf = [Kf];
function Zf(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (h(), T(
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
    )) : _("v-if", !0), e.isShow ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), T(
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
          Xf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (h(!0), T(
        Pe,
        null,
        Be(e.loadingTypeDict, (r, a) => (h(), T(
          Pe,
          {
            key: a
          },
          [e.type === a ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), T(
              Pe,
              null,
              Be(r, (t) => (h(), T(
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
      )), e.$slots.description || e.description ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [W(e.$slots, "description", {}, () => [be(
          ne(e.description),
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
var Vs = x({
  name: "VarLoading",
  props: er,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => $(r.default) ? e.loading : !0);
    return {
      n: Wf,
      classes: Gf,
      multiplySizeUnit: Je,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Vs.render = Zf;
const wn = Vs;
wn.install = function(e) {
  e.component(wn.name, wn);
};
var _C = wn;
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Eo.apply(this, arguments);
}
function Jf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Qf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function _f(e) {
  return ["button", "reset", "submit"].includes(e);
}
var xf = {
  type: {
    type: String,
    validator: Jf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: _f
  },
  size: {
    type: String,
    validator: Qf
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
  loadingType: Ke(er, "type"),
  loadingSize: Ke(er, "size"),
  loadingColor: Eo({}, Ke(er, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, Es = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), Ms = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function ec() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(Es), {
    length: r
  } = Mn(Ms);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function nc() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(Es), {
    index: r
  } = In(Ms);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
function Is(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function rc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[_l(t)] = o, r;
  }, {}) : {};
}
function ac(e) {
  var {
    value: n
  } = e._hover, r = rc(e);
  Object.keys(n).forEach((a) => {
    var t = _l(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ci(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function tc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Bs(e) {
  tc(e), Ci(e, e._hover.rawStyle);
}
function Ns() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, li(e)) {
    e(this._hover.hovering);
    return;
  }
  Ci(this, e);
}
function Ds() {
  if (this._hover.hovering = !1, li(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Bs(this);
}
function As(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Is(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, ac(e), e.addEventListener("mouseenter", Ns), e.addEventListener("mouseleave", Ds));
}
function zs(e, n) {
  Is(n.arg) || (Bs(e), e.removeEventListener("mouseenter", Ns), e.removeEventListener("mouseleave", Ds));
}
function oc(e, n) {
  zs(e, n);
}
function ic(e, n) {
  return !li(n.value) && e._hover.hovering;
}
function lc(e, n) {
  As(e, n), ic(e, n) && Ci(e, n.value);
}
var Ls = {
  mounted: As,
  unmounted: zs,
  beforeUpdate: oc,
  updated: lc,
  install(e) {
    e.directive("hover", this);
  }
}, xC = Ls;
const Nt = Ls;
var {
  n: sc,
  classes: uc
} = ee("button"), dc = ["type", "disabled"];
function vc(e, n) {
  var r = ie("var-loading"), a = Ae("ripple"), t = Ae("hover");
  return Se((h(), T(
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
    [e.loading || e.pending ? (h(), me(
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
    )) : _("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), A(
      "div",
      {
        class: c(e.classes(e.n("overlay"), [e.hovering, e.n("--hovering")]))
      },
      null,
      2
      /* CLASS */
    )],
    46,
    dc
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }], [t, e.handleHover, "desktop"]]);
}
var Rs = x({
  name: "VarButton",
  components: {
    VarLoading: wn
  },
  directives: {
    Ripple: ze,
    Hover: Nt
  },
  props: xf,
  setup(e) {
    var n = I(!1), r = I(!1), {
      buttonGroup: a
    } = nc(), t = R(() => {
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
        mode: m
      } = a;
      return {
        elevation: 0,
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    }), o = (u) => {
      e.autoLoading && (n.value = !0, u = we(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || n.value || o($(f, u));
    }, l = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || o($(f, u));
    }, s = (u) => {
      r.value = u;
    };
    return {
      n: sc,
      classes: uc,
      pending: n,
      states: t,
      hovering: r,
      handleHover: s,
      handleClick: i,
      handleTouchstart: l
    };
  }
});
Rs.render = vc;
const xe = Rs;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var eS = xe, fc = {
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
  onClick: Y()
}, {
  n: cc,
  classes: mc
} = ee("back-top");
function pc(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), me(
    qa,
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
        onClick: n[0] || (n[0] = On(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [W(e.$slots, "default", {}, () => [re(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [re(r, {
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
var Us = x({
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: fc,
  setup(e) {
    var n = I(!1), r = I(null), a = I(!0), t, o = (d) => {
      $(e.onClick, d);
      var v = ui(t);
      rt(t, {
        left: v,
        duration: e.duration,
        animation: xl
      });
    }, i = si(() => {
      n.value = Wt(t) >= Ne(e.visibilityHeight);
    }, 200), l = () => {
      t = e.target ? ns(e.target, "BackTop") : Va(r.value);
    }, s = () => {
      t.addEventListener("scroll", i);
    }, u = () => {
      t.removeEventListener("scroll", i);
    };
    return Wa(() => {
      l(), s(), a.value = !1;
    }), Ga(s), ut(u), hr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: cc,
      classes: mc,
      handleClick: o
    };
  }
});
Us.render = pc;
const kr = Us;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var nS = kr;
function hc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var yc = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: hc
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
    validator: gc
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Gn,
  classes: bc
} = ee("badge"), wc = {
  key: 1
};
function Cc(e, n) {
  var r = ie("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [Se(A(
          "span",
          Me(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (h(), me(
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
            wc,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Ka, !e.hidden]])]),
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
var Ys = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: yc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = R(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Gn("position") + " " + Gn("--" + l), v = s ? Gn("dot") : null, f = o(), m = u ? Gn("icon") : null;
      return [Gn("--" + i), d, v, f, m];
    }), t = R(() => {
      var {
        dot: i,
        value: l,
        maxValue: s
      } = e;
      return i ? "" : l !== void 0 && s !== void 0 && L(l) > s ? s + "+" : l;
    }), o = () => {
      var {
        position: i,
        dot: l
      } = e;
      if (l) {
        if (i.includes("right"))
          return Gn("dot--right");
        if (i.includes("left"))
          return Gn("dot--left");
      }
    };
    return {
      n: Gn,
      classes: bc,
      values: t,
      contentClass: a
    };
  }
});
Ys.render = Cc;
const tr = Ys;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var rS = tr, Sc = {
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
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, Fs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Hs = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function kc() {
  var {
    childProviders: e,
    bindChildren: n
  } = $n(Fs), {
    length: r
  } = Mn(Hs);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mo.apply(this, arguments);
}
var {
  n: $c,
  classes: Tc
} = ee("bottom-navigation"), {
  n: Zt
} = ee("bottom-navigation-item"), Ji = Zt("--right-half-space"), Qi = Zt("--left-half-space"), _i = Zt("--right-space"), Oc = {
  type: "primary"
};
function Pc(e, n) {
  var r = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (h(), me(
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
var js = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: Sc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(null), t = R(() => e.active), o = R(() => e.activeColor), i = R(() => e.inactiveColor), l = I({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = kc(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((O) => {
      var {
        name: z
      } = O;
      return t.value === z.value;
    }), m = () => u.find((O) => {
      var {
        index: z
      } = O;
      return t.value === z.value;
    }), p = () => {
      _e(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, y = (O) => {
      t.value !== O && (e.onBeforeChange ? g(O) : V(O));
    }, g = (O) => {
      var z = $(e.onBeforeChange, O);
      z = we(z) ? z : [z], Promise.all(z).then((M) => {
        M.some((b) => !b) || V(O);
      });
    }, V = (O) => {
      $(e["onUpdate:active"], O), $(e.onChange, O);
    }, P = () => {
      var O = B();
      O.forEach((z) => {
        z.classList.remove(Ji, Qi, _i);
      });
    }, w = (O) => {
      var z = B(), M = z.length, b = O % 2 === 0;
      z.forEach((k, j) => {
        C(b, k, j, M);
      });
    }, C = (O, z, M, b) => {
      var k = M === b - 1;
      if (!O && k) {
        z.classList.add(_i);
        return;
      }
      var j = M === b / 2 - 1, Q = M === b / 2;
      j ? z.classList.add(Ji) : Q && z.classList.add(Qi);
    }, B = () => Array.from(a.value.querySelectorAll("." + Zt())), S = () => {
      $(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: y
    };
    return d(D), le(() => s.value, v), le(() => e.fabProps, (O) => {
      l.value = Mo({}, Oc, O);
    }, {
      immediate: !0,
      deep: !0
    }), tn(() => {
      r.fab && w(s.value);
    }), Ht(() => {
      P(), r.fab && w(s.value);
    }), {
      n: $c,
      classes: Tc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
      fabProps: l
    };
  }
});
js.render = Pc;
const $r = js;
$r.install = function(e) {
  e.component($r.name, $r);
};
var aS = $r, Vc = {
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
  onClick: Y()
};
function Ec() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(Fs), {
    index: r
  } = In(Hs);
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
} = ee("bottom-navigation-item"), Bc = {
  type: "danger",
  dot: !0
};
function Nc(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Ae("ripple");
  return Se((h(), T(
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
    [e.icon && !e.$slots.icon ? (h(), me(
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
    )) : _("v-if", !0), W(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), me(
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
        class: c(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (h(), T(
        Pe,
        {
          key: 0
        },
        [be(
          ne(e.label),
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
var Ws = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: tr,
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: Vc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = I({}), {
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
      $(e.onClick, p), $(o.onToggle, p);
    };
    return i(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Bc : r.value;
    }, {
      immediate: !0
    }), {
      n: Mc,
      classes: Ic,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Ws.render = Nc;
const Tr = Ws;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var tS = Tr, Dc = {
  separator: {
    type: String
  },
  onClick: Y()
}, Gs = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Ac() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = vi(Gs);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function zc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = di(Gs);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Lc,
  classes: Rc
} = ee("breadcrumb");
function Uc(e, n) {
  return h(), T(
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
    ), e.isLast ? _("v-if", !0) : W(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
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
var qs = x({
  name: "VarBreadcrumb",
  props: Dc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = zc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), i = (l) => {
      t.value || $(e.onClick, l);
    };
    return a(null), {
      n: Lc,
      classes: Rc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
qs.render = Uc;
const Or = qs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var oS = Or, Yc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Fc
} = ee("breadcrumbs");
function Hc(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ks = x({
  name: "VarBreadcrumbs",
  props: Yc,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Ac(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Fc
    };
  }
});
Ks.render = Hc;
const Pr = Ks;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var iS = Pr;
function jc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Wc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Gc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var qc = {
  type: {
    type: String,
    default: "default",
    validator: jc
  },
  size: {
    type: String,
    default: "normal",
    validator: Wc
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
    validator: Gc
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
  classes: Xc
} = ee("button-group");
function Zc(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Xs = x({
  name: "VarButtonGroup",
  props: qc,
  setup(e) {
    var {
      bindButtons: n
    } = ec(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: Kc,
      classes: Xc
    };
  }
});
Xs.render = Zc;
const Vr = Xs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var lS = Vr;
function Jc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Qc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Jc,
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
  onClick: Y(),
  "onUpdate:floating": Y()
};
function xi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function el(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        xi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        xi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: _c,
  classes: xc
} = ee("card"), em = 500, nm = ["src", "alt"];
function rm(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Ae("ripple");
  return Se((h(), T(
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
      [W(e.$slots, "image", {}, () => [e.src ? (h(), T(
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
        nm
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), T(
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
        [W(e.$slots, "close-button", {}, () => [re(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: On(e.close, ["stop"])
          },
          {
            default: ve(() => [re(
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
      )) : _("v-if", !0)],
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
var Zs = x({
  name: "VarCard",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: Qc,
  setup(e) {
    var n = I(null), r = I(null), a = I("auto"), t = I("auto"), o = I("100%"), i = I("100%"), l = I("auto"), s = I("auto"), u = I(void 0), d = I("hidden"), v = I("0px"), f = I("0"), m = R(() => e.layout === "row"), p = I(!1), y = I(!1), {
      zIndex: g
    } = ct(() => e.floating, 1);
    qt(() => e.floating, () => !m.value);
    var V = "auto", P = "auto", w = null, C = I(null), B = /* @__PURE__ */ function() {
      var z = el(function* () {
        clearTimeout(C.value), clearTimeout(w), C.value = null, C.value = setTimeout(/* @__PURE__ */ el(function* () {
          var {
            width: M,
            height: b,
            left: k,
            top: j
          } = n.value.getBoundingClientRect();
          a.value = he(M), t.value = he(b), o.value = a.value, i.value = t.value, l.value = he(j), s.value = he(k), u.value = "fixed", V = l.value, P = s.value, p.value = !0, yield Pn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? em : 0);
      });
      return function() {
        return z.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(w), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = V, s.value = P, v.value = "0px", f.value = "0", p.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", V = "auto", P = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      $(e["onUpdate:floating"], !1);
    }, O = (z) => {
      $(e.onClick, z);
    };
    return le(() => e.floating, (z) => {
      m.value || Ve(() => {
        z ? B() : S();
      });
    }, {
      immediate: !0
    }), {
      n: _c,
      classes: xc,
      toSizeUnit: he,
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
      handleClick: O
    };
  }
});
Zs.render = rm;
const Er = Zs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var sS = Er, am = {
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
  onClick: Y()
}, {
  n: tm,
  classes: om
} = ee("cell");
function im(e, n) {
  var r = ie("var-icon"), a = Ae("ripple");
  return Se((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [re(
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
        class: c(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
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
var Js = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: am,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: tm,
      classes: om,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Js.render = im;
const or = Js;
or.install = function(e) {
  e.component(or.name, or);
};
var uS = or, lm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: sm
} = ee("form-details"), um = {
  key: 0
}, dm = {
  key: 0
};
function vm(e, n) {
  return h(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), T(
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
          [re(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                um,
                ne(e.errorMessage),
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
            class: c(e.n("extra-message"))
          },
          [re(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                dm,
                ne(e.extraMessage),
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
var Qs = x({
  name: "VarFormDetails",
  props: lm,
  setup: () => ({
    n: sm
  })
});
Qs.render = vm;
const je = Qs;
je.install = function(e) {
  e.component(je.name, je);
};
var dS = je, fm = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, _s = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), xs = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function cm() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(_s), {
    length: r
  } = Mn(xs);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function mm() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(_s), {
    index: r
  } = In(xs);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var eu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function hn() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(eu), r = Wn(), a = e ? (t) => {
    e(Io({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function pm() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(eu);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: hm,
  classes: gm
} = ee("checkbox");
function ym(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ae("ripple");
  return h(), T(
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
      [Se((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
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
        }, () => [re(
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
    ), re(
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
var nu = x({
  name: "VarCheckbox",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: fm,
  setup(e) {
    var n = I(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = I(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = mm(), {
      form: l,
      bindForm: s
    } = hn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = pn(), m = (S) => {
      Ve(() => {
        var {
          validateTrigger: D,
          rules: O,
          modelValue: z
        } = e;
        d(D, S, O, z);
      });
    }, p = (S) => {
      n.value = S;
      var {
        checkedValue: D,
        onChange: O
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(O, n.value), m("onChange"), S === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, y = (S) => {
      var {
        disabled: D,
        readonly: O,
        checkedValue: z,
        uncheckedValue: M,
        onClick: b
      } = e;
      if (!(l != null && l.disabled.value || D) && ($(b, S), !(l != null && l.readonly.value || O))) {
        t.value = !0;
        var k = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && k || p(r.value ? M : z);
      }
    }, g = (S) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e;
      n.value = S.includes(D) ? D : O;
    }, V = () => {
      t.value = !1;
    }, P = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, w = (S) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e, z = ![D, O].includes(S);
      z && (S = r.value ? O : D), p(S);
    }, C = () => v(e.rules, e.modelValue);
    le(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var B = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: C,
      resetValidation: f,
      reset: P,
      resetWithAnimation: V
    };
    return $(i, B), $(s, B), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: hm,
      classes: gm,
      handleClick: y,
      toggle: w,
      reset: P,
      validate: C,
      resetValidation: f
    };
  }
});
nu.render = ym;
const ir = nu;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var vS = ir;
function bm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var wm = {
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
    validator: bm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Cm,
  classes: Sm
} = ee("checkbox-group");
function km(e, n) {
  var r = ie("var-form-details");
  return h(), T(
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
    ), re(
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
var ru = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: wm,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = cm(), {
      bindForm: i
    } = hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = pn(), v = R(() => l.value), f = (D) => {
      Ve(() => {
        var {
          validateTrigger: O,
          rules: z,
          modelValue: M
        } = e;
        s(O, D, z, M);
      });
    }, m = (D) => {
      $(e["onUpdate:modelValue"], D), $(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) || m([...O, D]);
    }, y = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) && m(O.filter((z) => z !== D));
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
      }), O = Li(D);
      return V(), $(e["onUpdate:modelValue"], O), O;
    }, w = () => {
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
      }), O = Li(D);
      return V(), $(e["onUpdate:modelValue"], O), O;
    }, C = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, B = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: B,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(S), $(i, S), {
      errorMessage: l,
      n: Cm,
      classes: Sm,
      checkAll: P,
      inverseAll: w,
      reset: C,
      validate: B,
      resetValidation: d
    };
  }
});
ru.render = km;
const Mr = ru;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var fS = Mr;
function $m(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Tm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Om = {
  type: {
    type: String,
    default: "default",
    validator: $m
  },
  size: {
    type: String,
    default: "normal",
    validator: Tm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ke(fs, "name"),
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
  onClose: Y()
}, {
  n: qn,
  classes: Pm
} = ee("chip");
function Vm(e, n) {
  var r = ie("var-icon");
  return h(), me(
    De,
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
            class: c(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (h(), T(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [re(
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
var au = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Om,
  setup(e) {
    var n = R(() => {
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
    }), r = R(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = qn(o ? "$--flex" : "$--inline-flex"), d = l ? qn("plain") + " " + qn("plain-" + i) : qn("--" + i), v = s ? qn("--round") : null;
      return [qn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: qn,
      classes: Pm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
au.render = Vm;
const lr = au;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var cS = lr;
function Em(e) {
  return ["row", "column"].includes(e);
}
function Mm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Im(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Bm = {
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
  onClick: Y()
}, tu = Symbol("ROW_BIND_COL_KEY"), ou = Symbol("ROW_COUNT_COL_KEY");
function Nm() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(tu), {
    length: r
  } = Mn(ou);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Dm() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(tu), {
    index: r
  } = In(ou);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: gt,
  classes: Am
} = ee("col");
function zm(e, n) {
  return h(), T(
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
var iu = x({
  name: "VarCol",
  props: Bm,
  setup(e) {
    var n = I({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Dm(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ii(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(gt("--span-" + u + "-" + m)), f && v.push(gt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(gt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, i), {
      n: gt,
      classes: Am,
      padding: n,
      toNumber: L,
      toSizeUnit: he,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Et
    };
  }
});
iu.render = zm;
const Ir = iu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var mS = Ir, lu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), su = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Lm() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(lu), {
    length: r
  } = Mn(su);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Rm = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Um
} = ee("collapse");
function Ym(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var uu = x({
  name: "VarCollapse",
  props: Rm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Lm(), t = R(() => e.modelValue), o = R(() => e.offset), i = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, p) => i() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((y) => y !== m) : null, s = (m, p) => {
      var y = l(m, p);
      $(e["onUpdate:modelValue"], y), $(e.onChange, y);
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
    return a(f), le(() => n.value, () => Ve().then(v)), le(() => e.modelValue, () => Ve().then(v)), {
      n: Um
    };
  }
});
uu.render = Ym;
const Br = uu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var pS = Br;
function Fm() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(lu), {
    index: r
  } = In(su);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Hm = {
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
  n: jm,
  classes: Wm
} = ee("collapse-item");
function Gm(e, n) {
  var r = ie("var-icon");
  return h(), T(
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
          ne(e.title),
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
        [W(e.$slots, "icon", {}, () => [re(
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
    ), Se(A(
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
    ), [[Ka, e.show]])],
    2
    /* CLASS */
  );
}
var du = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Hm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Fm(), t = !0, o = I(null), i = I(!1), l = I(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = R(() => e.name), f = (w, C) => {
      s.value === void 0 || w && we(s.value) || C === l.value || (l.value = C, m(!0));
    }, m = (w) => {
      e.disabled || w || d(e.name || n.value, !l.value);
    }, p = () => {
      o.value && (o.value.style.height = "", i.value = !0, Ve(() => {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = 0 + "px", Sn(() => {
          o.value.style.height = w + "px", t && Gt(() => {
            t && V();
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
        o.value.style.height = w + "px", Sn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, V = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), le(l, (w) => {
      w ? p() : g();
    }), {
      n: jm,
      start: y,
      classes: Wm,
      show: i,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: V
    };
  }
});
du.render = Gm;
const Nr = du;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var hS = Nr, qm = {
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
  onEnd: Y(),
  onChange: Y()
}, {
  n: Km
} = ee("countdown"), Bo = 1e3, No = 60 * Bo, Do = 60 * No, nl = 24 * Do;
function Xm(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default", oi(Jl(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var vu = x({
  name: "VarCountdown",
  props: qm,
  setup(e) {
    var n = I(""), r = I({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l, s = (p, y) => {
      var g = Object.values(y), V = ["DD", "HH", "mm", "ss"], P = [24, 60, 60, 1e3];
      if (V.forEach((C, B) => {
        p.includes(C) ? p = p.replace(C, ya("" + g[B], 2, "0")) : g[B + 1] += g[B] * P[B];
      }), p.includes("S")) {
        var w = ya("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", w) : p.includes("SS") ? p = p.replace("SS", w.slice(0, 2)) : p = p.replace("S", w.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / nl), g = Math.floor(p % nl / Do), V = Math.floor(p % Do / No), P = Math.floor(p % No / Bo), w = Math.floor(p % Bo), C = {
        days: y,
        hours: g,
        minutes: V,
        seconds: P,
        milliseconds: w
      };
      r.value = C, $(e.onChange, r.value), n.value = s(e.format, C);
    }, d = () => {
      var {
        time: p,
        onEnd: y
      } = e, g = performance.now();
      if (a || (a = g + L(p)), i = a - g, i < 0 && (i = 0), u(i), i === 0) {
        $(y);
        return;
      }
      t && (o = Sn(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (i || L(e.time)), d());
    }, f = () => {
      t = !1, ji(o);
    }, m = () => {
      a = 0, t = !1, ji(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Ga(() => {
      l != null && (t = l, t === !0 && v(!0));
    }), hr(() => {
      l = t, f();
    }), Ta(f), {
      showTime: n,
      timeData: r,
      n: Km,
      start: v,
      pause: f,
      reset: m
    };
  }
});
vu.render = Xm;
const Dr = vu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var gS = Dr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ia = 9e15, gr = 1e9, Ao = "0123456789abcdef", Dt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", At = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", zo = {
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
  minE: -Ia,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ia,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, fu, Dn, fe = !0, Jt = "[DecimalError] ", mr = Jt + "Invalid argument: ", cu = Jt + "Precision limit exceeded", mu = Jt + "crypto unavailable", pu = "[object Decimal]", Xe = Math.floor, Ye = Math.pow, Zm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Jm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Qm = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, hu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Cn = 1e7, de = 7, _m = 9007199254740991, xm = Dt.length - 1, Lo = At.length - 1, K = { toStringTag: pu };
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
    throw Error(mr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
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
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = ep(a, Cu(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = We(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Oe(u.plus(d).times(l), u.plus(s), i + 2, 1), We(l.d).slice(0, i) === (r = We(a.d)).slice(0, i))
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
  return fe = !0, ue(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Xe(this.e / de)) * de, e = n[e], e)
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
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / _t(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ua(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ua(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / _t(5, e)), t = Ua(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? bn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? bn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = bn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
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
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = bn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Lo)
      return i = bn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Lo)
      return i = bn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), fe = !0, ue(i, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Xe(this.e / de) > this.d.length - 2;
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
  if (fe = !1, l = v + m, i = nr(u, l), a = n ? zt(d, l + 10) : nr(e, l), s = Oe(i, a, l, 1), tt(s.d, t = v, f))
    do
      if (l += 10, i = nr(u, l), a = n ? zt(d, l + 10) : nr(e, l), s = Oe(i, a, l, 1), !o) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (tt(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
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
    return fe ? ue(e, l, s) : e;
  }
  if (r = Xe(e.e / de), d = Xe(m.e / de), u = u.slice(), o = d - r, o) {
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
        u[t] = Cn - 1;
      --u[t], u[a] += Cn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Qt(u, r), fe ? ue(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Ro(this);
};
K.naturalLogarithm = K.ln = function() {
  return nr(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, l, s) : e;
  if (o = Xe(v.e / de), a = Xe(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / de), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Cn | 0, u[t] %= Cn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Qt(u, a), fe ? ue(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mr + e);
  return r.d ? (n = gu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = rp(a, Cu(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = We(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(i, o, r + 2, 1)).times(0.5), We(o.d).slice(0, r) === (n = We(a.d)).slice(0, r))
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
  return fe = !0, ue(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Xe(d.e / de) + Xe(e.e / de), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + m[a] * f[t - a - 1] + n, o[t--] = l % Cn | 0, n = l / Cn | 0;
    o[t] = (o[t] + n) % Cn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Qt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Si(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, gr), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Vn(a, !0) : (an(e, 0, gr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = Vn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Vn(t) : (an(e, 0, gr), n === void 0 ? n = o.rounding : an(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Vn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.d, y = m.constructor;
  if (!p)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = gu(p) - m.e - 1, i = o % de, n.d[0] = Ye(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(mr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new y(We(p)), d = y.precision, y.precision = o = p.length * de * 2; v = Oe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Oe(u, a, o, 1).minus(m).abs().cmp(Oe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Si(this, 16, e, n);
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
  return Si(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Ye(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Xe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= _m)
    return t = yu(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Ye(+l, u), n = r == 0 || !isFinite(r) ? Xe(u * (Math.log("0." + We(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Ro(e.times(nr(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), tt(t.d, a, o) && (n = a + 10, t = ue(Ro(e.times(nr(l, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Vn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, gr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = Vn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, gr), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = Vn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = Vn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Xn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += Xn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(mr + e);
}
function tt(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, i;
}
function $t(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Ao.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function ep(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / _t(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ua(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Oe = function() {
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
    var u, d, v, f, m, p, y, g, V, P, w, C, B, S, D, O, z, M, b, k, j = a.constructor, Q = a.s == t.s ? 1 : -1, F = a.d, E = t.d;
    if (!F || !F[0] || !E || !E[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (F ? E && F[0] == E[0] : !E) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !E ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Cn, m = de, d = Xe(a.e / m) - Xe(t.e / m)), b = E.length, z = F.length, V = new j(Q), P = V.d = [], v = 0; E[v] == (F[v] || 0); v++)
      ;
    if (E[v] > (F[v] || 0) && d--, o == null ? (S = o = j.precision, i = j.rounding) : l ? S = o + (a.e - t.e) + 1 : S = o, S < 0)
      P.push(1), p = !0;
    else {
      if (S = S / m + 2 | 0, v = 0, b == 1) {
        for (f = 0, E = E[0], S++; (v < z || f) && S--; v++)
          D = f * s + (F[v] || 0), P[v] = D / E | 0, f = D % E | 0;
        p = f || v < z;
      } else {
        for (f = s / (E[0] + 1) | 0, f > 1 && (E = e(E, f, s), F = e(F, f, s), b = E.length, z = F.length), O = b, w = F.slice(0, b), C = w.length; C < b; )
          w[C++] = 0;
        k = E.slice(), k.unshift(0), M = E[0], E[1] >= s / 2 && ++M;
        do
          f = 0, u = n(E, w, b, C), u < 0 ? (B = w[0], b != C && (B = B * s + (w[1] || 0)), f = B / M | 0, f > 1 ? (f >= s && (f = s - 1), y = e(E, f, s), g = y.length, C = w.length, u = n(y, w, g, C), u == 1 && (f--, r(y, b < g ? k : E, g, s))) : (f == 0 && (u = f = 1), y = E.slice()), g = y.length, g < C && y.unshift(0), r(w, y, C, s), u == -1 && (C = w.length, u = n(E, w, b, C), u < 1 && (f++, r(w, b < C ? k : E, C, s))), C = w.length) : u === 0 && (f++, w = [0]), P[v++] = f, u && w[0] ? w[C++] = F[O] || 0 : (w = [F[O]], C = 1);
        while ((O++ < z || w[0] !== void 0) && S--);
        p = w[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (m == 1)
      V.e = d, fu = p;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      V.e = v + d * m - 1, ue(V, l ? o + V.e + 1 : o, i, p);
    }
    return V;
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
        o += de, i = n, d = v[f = 0], s = d / Ye(10, t - i - 1) % 10 | 0;
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
        o %= de, i = o - de + t, s = i < 0 ? 0 : d / Ye(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Ye(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / Ye(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Ye(10, de - o), v[f] = i > 0 ? (d / Ye(10, t - i) % Ye(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Cn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Cn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Vn(e, n, r) {
  if (!e.isFinite())
    return wu(e);
  var a, t = e.e, o = We(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Xn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Xn(-t - 1) + o, r && (a = r - i) > 0 && (o += Xn(a))) : t >= i ? (o += Xn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Xn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Xn(a))), o;
}
function Qt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function zt(e, n, r) {
  if (n > xm)
    throw fe = !0, r && (e.precision = r), Error(cu);
  return ue(new e(Dt), n, 1, !0);
}
function bn(e, n, r) {
  if (n > Lo)
    throw Error(cu);
  return ue(new e(At), n, r, !0);
}
function gu(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Xn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function yu(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), al(o.d, i) && (t = !0)), r = Xe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), al(n.d, i);
  }
  return fe = !0, o;
}
function rl(e) {
  return e.d[e.d.length - 1] & 1;
}
function bu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Ro(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Oe(o, r, s, 1)), We(l.d).slice(0, s) === We(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && tt(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = p, m, fe = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function nr(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, p = 10, y = e, g = y.d, V = y.constructor, P = V.rounding, w = V.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new V(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (fe = !1, d = w) : d = n, V.precision = d += p, r = We(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new V("0." + r), o++) : y = new V(a + "." + r.slice(1));
  } else
    return u = zt(V, d + 2, w).times(o + ""), y = nr(new V(a + "." + r.slice(1)), d - p).plus(u), V.precision = w, n == null ? ue(y, w, P, fe = !0) : y;
  for (v = y, s = i = y = Oe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Oe(i, new V(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(zt(V, d + 2, w).times(o + ""))), s = Oe(s, new V(m), d, 1), n == null)
        if (tt(s.d, d - p, P, l))
          V.precision = d += p, u = i = y = Oe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = l = 1;
        else
          return ue(s, V.precision = w, P, fe = !0);
      else
        return V.precision = w, s;
    s = u, t += 2;
  }
}
function wu(e) {
  return String(e.s * e.s / 0);
}
function Uo(e, n) {
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
function np(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), hu.test(n))
      return Uo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Jm.test(n))
    r = 16, n = n.toLowerCase();
  else if (Zm.test(n))
    r = 2;
  else if (Qm.test(n))
    r = 8;
  else
    throw Error(mr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = yu(a, new a(r), o, o * 2)), u = $t(n, r, Cn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Qt(u, d), e.d = u, fe = !1, i && (e = Oe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : rr.pow(2, s))), fe = !0, e);
}
function rp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ua(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / _t(5, r)), n = Ua(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Ua(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = Oe(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = Oe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return fe = !0, i.d.length = d + 1, i;
}
function _t(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Cu(e, n) {
  var r, a = n.s < 0, t = bn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = rl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = rl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Si(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (an(r, 1, gr), a === void 0 ? a = m.rounding : an(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = wu(e);
  else {
    for (d = Vn(e), i = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = $t(Vn(f), 10, t), f.e = f.d.length), v = $t(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = fu), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += Ao.charAt(v[i]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = $t(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += Ao.charAt(v[i]);
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
function al(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function ap(e) {
  return new this(e).abs();
}
function tp(e) {
  return new this(e).acos();
}
function op(e) {
  return new this(e).acosh();
}
function ip(e, n) {
  return new this(e).plus(n);
}
function lp(e) {
  return new this(e).asin();
}
function sp(e) {
  return new this(e).asinh();
}
function up(e) {
  return new this(e).atan();
}
function dp(e) {
  return new this(e).atanh();
}
function vp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = bn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? bn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = bn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = bn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function fp(e) {
  return new this(e).cbrt();
}
function cp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function mp(e, n, r) {
  return new this(e).clamp(n, r);
}
function pp(e) {
  if (!e || typeof e != "object")
    throw Error(Jt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    gr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ia,
    0,
    "toExpPos",
    0,
    Ia,
    "maxE",
    0,
    Ia,
    "minE",
    -Ia,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = zo[r]), (a = e[r]) !== void 0)
      if (Xe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(mr + r + ": " + a);
  if (r = "crypto", t && (this[r] = zo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(mu);
      else
        this[r] = !1;
    else
      throw Error(mr + r + ": " + a);
  return this;
}
function hp(e) {
  return new this(e).cos();
}
function gp(e) {
  return new this(e).cosh();
}
function Su(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, tl(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        fe ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Uo(u, o.toString());
    } else if (s !== "string")
      throw Error(mr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), hu.test(o) ? Uo(u, o) : np(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = pp, t.clone = Su, t.isDecimal = tl, t.abs = ap, t.acos = tp, t.acosh = op, t.add = ip, t.asin = lp, t.asinh = sp, t.atan = up, t.atanh = dp, t.atan2 = vp, t.cbrt = fp, t.ceil = cp, t.clamp = mp, t.cos = hp, t.cosh = gp, t.div = yp, t.exp = bp, t.floor = wp, t.hypot = Cp, t.ln = Sp, t.log = kp, t.log10 = Tp, t.log2 = $p, t.max = Op, t.min = Pp, t.mod = Vp, t.mul = Ep, t.pow = Mp, t.random = Ip, t.round = Bp, t.sign = Np, t.sin = Dp, t.sinh = Ap, t.sqrt = zp, t.sub = Lp, t.sum = Rp, t.tan = Up, t.tanh = Yp, t.trunc = Fp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function yp(e, n) {
  return new this(e).div(n);
}
function bp(e) {
  return new this(e).exp();
}
function wp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Cp() {
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
function tl(e) {
  return e instanceof rr || e && e.toStringTag === pu || !1;
}
function Sp(e) {
  return new this(e).ln();
}
function kp(e, n) {
  return new this(e).log(n);
}
function $p(e) {
  return new this(e).log(2);
}
function Tp(e) {
  return new this(e).log(10);
}
function Op() {
  return bu(this, arguments, "lt");
}
function Pp() {
  return bu(this, arguments, "gt");
}
function Vp(e, n) {
  return new this(e).mod(n);
}
function Ep(e, n) {
  return new this(e).mul(n);
}
function Mp(e, n) {
  return new this(e).pow(n);
}
function Ip(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : an(e, 1, gr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(mu);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= de, a && e && (t = Ye(10, de - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
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
function Bp(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Np(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Dp(e) {
  return new this(e).sin();
}
function Ap(e) {
  return new this(e).sinh();
}
function zp(e) {
  return new this(e).sqrt();
}
function Lp(e, n) {
  return new this(e).sub(n);
}
function Rp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Up(e) {
  return new this(e).tan();
}
function Yp(e) {
  return new this(e).tanh();
}
function Fp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var rr = K.constructor = Su(zo);
Dt = new rr(Dt);
At = new rr(At);
var Hp = {
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
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: jp,
  classes: Wp
} = ee("counter"), ol = 100, il = 600, Gp = ["inputmode", "readonly", "disabled"];
function qp(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Me({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
      }]]), Se(A(
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
        Gp
      ), [[gv, e.inputValue]]), Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
    ), re(
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
var ku = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  inheritAttrs: !1,
  props: Hp,
  setup(e) {
    var n = I(""), r, a, t, o, {
      bindForm: i,
      form: l
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), {
      readonly: f,
      disabled: m
    } = l ?? {}, p = () => d(e.rules, e.modelValue), y = (E) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: U,
          modelValue: X
        } = e;
        u(H, E, U, X);
      });
    }, g = () => {
      var {
        min: E
      } = e;
      $(e["onUpdate:modelValue"], E != null ? L(E) : 0), v();
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
    }), w = R(() => {
      var {
        min: E,
        modelValue: H
      } = e;
      return E != null && L(H) <= L(E);
    }), C = (E) => {
      var {
        decimalLength: H,
        max: U,
        min: X
      } = e, N = L(E);
      return U != null && N > L(U) && (N = L(U)), X != null && N < L(X) && (N = L(X)), E = String(N), H != null && (E = N.toFixed(L(H))), E;
    }, B = (E) => {
      var {
        lazyChange: H,
        onBeforeChange: U
      } = e, {
        value: X
      } = E.target, N = C(X);
      H ? $(U, L(N), F) : Q(N), y("onInputChange");
    }, S = () => {
      var {
        disabled: E,
        readonly: H,
        disableDecrement: U,
        decrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(m != null && m.value || f != null && f.value || E || H || U || !X) && !w.value) {
        var oe = new rr(L(G)).minus(new rr(L(Z))).toString(), ge = C(oe), pe = L(ge);
        $(J, pe), N ? $(ae, pe, F) : (Q(ge), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: E,
        readonly: H,
        disableIncrement: U,
        incrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(m != null && m.value || f != null && f.value || E || H || U || !X) && !P.value) {
        var oe = new rr(L(G)).plus(new rr(L(Z))).toString(), ge = C(oe), pe = L(ge);
        $(J, pe), N ? $(ae, pe, F) : (Q(ge), y("onIncrement"));
      }
    }, O = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (o = window.setTimeout(() => {
        j();
      }, il));
    }, z = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (t = window.setTimeout(() => {
        k();
      }, il));
    }, M = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, b = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, k = () => {
      r = window.setTimeout(() => {
        D(), k();
      }, ol);
    }, j = () => {
      a = window.setTimeout(() => {
        S(), j();
      }, ol);
    }, Q = (E) => {
      n.value = E;
      var H = L(E);
      $(e["onUpdate:modelValue"], H);
    }, F = (E) => {
      Q(C(String(E))), y("onLazyChange");
    };
    return $(i, V), le(() => e.modelValue, (E) => {
      Q(C(String(E))), $(e.onChange, L(E));
    }), Q(C(String(e.modelValue))), {
      n: jp,
      classes: Wp,
      inputValue: n,
      errorMessage: s,
      formDisabled: m,
      formReadonly: f,
      isMax: P,
      isMin: w,
      validate: p,
      reset: g,
      resetValidation: v,
      handleChange: B,
      decrement: S,
      increment: D,
      pressDecrement: O,
      pressIncrement: z,
      releaseDecrement: M,
      releaseIncrement: b,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
ku.render = qp;
const Ar = ku;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var yS = Ar, $u = 60, Tu = $u * 60, Ou = Tu * 24, Kp = Ou * 7, Ya = 1e3, lo = $u * Ya, ll = Tu * Ya, Xp = Ou * Ya, Zp = Kp * Ya, ki = "millisecond", Ba = "second", Na = "minute", Da = "hour", Zn = "day", Tt = "week", yn = "month", Pu = "quarter", Jn = "year", Aa = "date", Jp = "YYYY-MM-DDTHH:mm:ssZ", sl = "Invalid Date", Qp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const xp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Yo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, eh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Yo(t, 2, "0") + ":" + Yo(o, 2, "0");
}, nh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, yn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), yn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, rh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ah = function(n) {
  var r = {
    M: yn,
    y: Jn,
    w: Tt,
    d: Zn,
    D: Aa,
    h: Da,
    m: Na,
    s: Ba,
    ms: ki,
    Q: Pu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, th = function(n) {
  return n === void 0;
};
const oh = {
  s: Yo,
  z: eh,
  m: nh,
  a: rh,
  p: ah,
  u: th
};
var xa = "en", zr = {};
zr[xa] = xp;
var $i = function(n) {
  return n instanceof xt;
}, Lt = function e(n, r, a) {
  var t;
  if (!n)
    return xa;
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
  return !a && t && (xa = t), t || !a && xa;
}, te = function(n, r) {
  if ($i(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new xt(a);
}, ih = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = oh;
Te.l = Lt;
Te.i = $i;
Te.w = ih;
var lh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Qp);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, xt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Lt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = lh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== sl;
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(V, P) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, P, V) : new Date(o.$y, P, V), o);
      return i ? w : w.endOf(Zn);
    }, u = function(V, P) {
      var w = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[V].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : C).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Jn:
        return i ? s(1, 0) : s(31, 11);
      case yn:
        return i ? s(1, v) : s(0, v + 1);
      case Tt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(i ? f - y : f + (6 - y), v);
      }
      case Zn:
      case Aa:
        return u(m + "Hours", 0);
      case Da:
        return u(m + "Minutes", 1);
      case Na:
        return u(m + "Seconds", 2);
      case Ba:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Zn] = l + "Date", o[Aa] = l + "Date", o[yn] = l + "Month", o[Jn] = l + "FullYear", o[Da] = l + "Hours", o[Na] = l + "Minutes", o[Ba] = l + "Seconds", o[ki] = l + "Milliseconds", o)[i], u = i === Zn ? this.$D + (t - this.$W) : t;
    if (i === yn || i === Jn) {
      var d = this.clone().set(Aa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Aa, Math.min(this.$D, d.daysInMonth())).$d;
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
      var m = te(o);
      return Te.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (l === yn)
      return this.set(yn, this.$M + a);
    if (l === Jn)
      return this.set(Jn, this.$y + a);
    if (l === Zn)
      return s(1);
    if (l === Tt)
      return s(7);
    var u = (i = {}, i[Na] = lo, i[Da] = ll, i[Ba] = Ya, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || sl;
    var i = a || Jp, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(w, C, B, S) {
      return w && (w[C] || w(t, i)) || B[C].slice(0, S);
    }, y = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, g = m || function(P, w, C) {
      var B = P < 12 ? "AM" : "PM";
      return C ? B.toLowerCase() : B;
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
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(_p, function(P, w) {
      return w || V[P] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * lo, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Jn] = v / 12, i[yn] = v, i[Pu] = v / 3, i[Tt] = (d - u) / Zp, i[Zn] = (d - u) / Xp, i[Da] = d / ll, i[Na] = d / lo, i[Ba] = d / Ya, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(yn).$D;
  }, n.$locale = function() {
    return zr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = Lt(a, t, !0);
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
}(), Vu = xt.prototype;
te.prototype = Vu;
[["$ms", ki], ["$s", Ba], ["$m", Na], ["$H", Da], ["$W", Zn], ["$M", yn], ["$y", Jn], ["$D", Aa]].forEach(function(e) {
  Vu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, xt, te), e.$i = !0), te;
};
te.locale = Lt;
te.isDayjs = $i;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = zr[xa];
te.Ls = zr;
te.p = {};
const Eu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Mu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function sh(e) {
  return ["date", "month"].includes(e);
}
var Ot = [{
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
}], _a = [{
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
}], uh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: sh
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
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: dh
} = ee("picker-header");
function vh(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [re(
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
        default: ve(() => [re(r, {
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
      [re(
        De,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T(
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
    ), re(
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
        default: ve(() => [re(r, {
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
var Iu = x({
  name: "PanelHeader",
  components: {
    VarButton: xe,
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
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (l = He.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return He.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: dh,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
Iu.render = vh;
const Bu = Iu;
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
te.extend(Eu);
te.extend(Mu);
var {
  n: yt,
  classes: fh
} = ee("month-picker"), {
  n: bt
} = ee("date-picker");
function ch(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [re(
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
      ), re(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("ul", {
            key: e.panelKey
          }, [(h(!0), T(
            Pe,
            null,
            Be(e.MONTH_LIST, (t) => (h(), T("li", {
              key: t.index
            }, [re(
              a,
              Me({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Fo({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [be(
                  ne(e.getMonthAbbr(t.index)),
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
var Nu = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Bu
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
    } = n, [a, t] = e.current.split("-"), o = I(!1), i = I(0), l = I(null), s = Ee({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (P) => {
      var w, C;
      return (w = (C = He.value.datePickerMonthDict) == null ? void 0 : C[P].abbr) != null ? w : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: C,
          max: B
        }
      } = e, S = !0, D = !0, O = w + "-" + P;
      return B && (S = te(O).isSameOrBefore(te(B), "month")), C && (D = te(O).isSameOrAfter(te(C), "month")), S && D;
    }, m = (P) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: C,
          chooseRangeMonth: B
        },
        componentProps: {
          type: S,
          range: D
        }
      } = e;
      if (D) {
        if (!B.length)
          return !1;
        var O = te(P).isSameOrBefore(te(B[1]), "month"), z = te(P).isSameOrAfter(te(B[0]), "month");
        return O && z;
      }
      return S === "month" ? w.includes(P) : C.some((M) => M.includes(P));
    }, p = (P) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: B,
          color: S,
          multiple: D,
          range: O
        }
      } = e, z = C + "-" + P, M = () => O || D ? m(z) : (w == null ? void 0 : w.index) === P && u.value, b = () => f(P) ? B ? !B(z) : !1 : !0, k = b(), j = () => k ? !0 : O || D ? !m(z) : !u.value || (w == null ? void 0 : w.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (O || D || u.value) && k ? !0 : O || D ? !m(z) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, F = () => k ? "" : Q() ? S ?? "" : M() ? "" : bt() + "-color-cover", E = F().startsWith(bt());
      return {
        outline: Q(),
        text: j(),
        color: j() ? "" : S,
        textColor: E ? "" : F(),
        [bt() + "-color-cover"]: E,
        class: fh(yt("button"), [k, yt("button--disabled")])
      };
    }, y = (P, w) => {
      var C = w.currentTarget;
      C.classList.contains(yt("button--disabled")) || r("choose-month", P);
    }, g = (P) => {
      o.value = P === "prev", i.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, V = (P) => {
      l.value.checkDate(P);
    };
    return le(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: w,
          max: C
        }
      } = e;
      C && (s.right = !te("" + (L(P) + 1)).isSameOrBefore(te(C), "year")), w && (s.left = !te("" + (L(P) - 1)).isSameOrAfter(te(w), "year"));
    }, {
      immediate: !0
    }), {
      n: yt,
      nDate: bt,
      pack: He,
      MONTH_LIST: Ot,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: V,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
Nu.render = ch;
const mh = Nu;
var {
  n: ul,
  classes: ph
} = ee("year-picker"), hh = ["onClick"];
function gh(e, n) {
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), T(
      Pe,
      null,
      Be(e.yearList, (r) => (h(), T(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        hh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Du = x({
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
        var d = te(l).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        o.push(p);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return tn(() => {
      var o = document.querySelector("." + ul("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: ul,
      classes: ph,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Du.render = gh;
const yh = Du;
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
te.extend(Eu);
te.extend(Mu);
var {
  n: Ma,
  classes: bh
} = ee("day-picker"), {
  n: wt
} = ee("date-picker");
function wh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [re(
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
      ), re(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), T(
              Pe,
              null,
              Be(e.sortWeekList, (t) => (h(), T(
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
          ), A(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), T(
              Pe,
              null,
              Be(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [re(
                a,
                Me({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Ho({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
                }),
                {
                  default: ve(() => [be(
                    ne(e.filterDay(t)),
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
var Au = x({
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Bu
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
    } = n, [a, t, o] = e.current.split("-"), i = I([]), l = I(!1), s = I(0), u = I(null), d = Ee({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var O;
      return e.choose.chooseYear === e.preview.previewYear && ((O = e.choose.chooseMonth) == null ? void 0 : O.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var O = _a.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return O === -1 || O === 0 ? _a : _a.slice(O).concat(_a.slice(0, O));
    }), p = (O) => {
      var z, M;
      return (z = (M = He.value.datePickerWeekDict) == null ? void 0 : M[O].abbr) != null ? z : "";
    }, y = (O) => O > 0 ? O : "", g = () => {
      var {
        preview: {
          previewMonth: O,
          previewYear: z
        }
      } = e, M = te(z + "-" + O.index).daysInMonth(), b = te(z + "-" + O.index + "-01").day(), k = m.value.findIndex((j) => j.index === "" + b);
      i.value = [...Array(k).fill(-1), ...Array.from(Array(M + 1).keys())].filter((j) => j);
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
        var k = O + "-" + (L(z.index) + 1);
        d.right = !te(k).isSameOrBefore(te(M), "month");
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
          max: k
        }
      } = e, j = !0, Q = !0, F = z + "-" + M.index + "-" + O;
      return k && (j = te(F).isSameOrBefore(te(k), "day")), b && (Q = te(F).isSameOrAfter(te(b), "day")), j && Q;
    }, w = (O) => {
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
        var k = te(O).isSameOrBefore(te(M[1]), "day"), j = te(O).isSameOrAfter(te(M[0]), "day");
        return k && j;
      }
      return z.includes(O);
    }, C = (O) => {
      if (O < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ma("button")
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
          allowedDates: k,
          color: j,
          multiple: Q,
          range: F
        }
      } = e, E = M + "-" + b.index + "-" + O, H = () => F || Q ? w(E) : L(z) === O && f.value, U = () => P(O) ? k ? !k(E) : !1 : !0, X = U(), N = () => X ? !0 : F || Q ? !w(E) : !f.value || L(z) !== O, Z = () => v.value && L(o) === O && e.componentProps.showCurrent ? (F || Q || f.value) && X ? !0 : F || Q ? !w(E) : f.value ? z !== o : !0 : !1, G = () => X ? "" : Z() ? j ?? "" : H() ? "" : wt() + "-color-cover", J = G().startsWith(wt());
      return {
        text: N(),
        outline: Z(),
        textColor: J ? "" : G(),
        [wt() + "-color-cover"]: J,
        class: bh(Ma("button"), Ma("button--usable"), [X, Ma("button--disabled")])
      };
    }, B = (O) => {
      l.value = O === "prev", s.value += O === "prev" ? -1 : 1, r("check-preview", "month", O);
    }, S = (O, z) => {
      var M = z.currentTarget;
      M.classList.contains(Ma("button--disabled")) || r("choose-day", O);
    }, D = (O) => {
      u.value.checkDate(O);
    };
    return tn(() => {
      g(), V();
    }), le(() => e.preview, () => {
      g(), V();
    }), {
      n: Ma,
      nDate: wt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: B,
      chooseDay: S,
      buttonProps: C
    };
  }
});
Au.render = wh;
const Ch = Au;
var {
  n: Sh,
  classes: kh
} = ee("date-picker");
function $h(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return h(), T(
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
          ne(e.chooseYear),
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
        [re(
          De,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, i, l;
              return [e.type === "month" ? (h(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), T("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "date", oi(Me({
                key: 2
              }, e.slotProps)), () => [be(
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
      [re(
        De,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), me(
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
          )) : e.getPanelType === "month" ? (h(), me(
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
          )) : e.getPanelType === "date" ? (h(), me(
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
var zu = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: mh,
    YearPickerPanel: yh,
    DayPickerPanel: Ch
  },
  props: uh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = Ot.find((se) => se.index === l), u = I(!1), d = I(!1), v = I(!0), f = I(), m = I(), p = I(), y = I(s), g = I(i), V = I(!1), P = I([]), w = I([]), C = I([]), B = I([]), S = I(null), D = I(null), O = Ee({
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
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: P.value,
      chooseDays: w.value,
      chooseRangeMonth: C.value,
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
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = He.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + P.value.length + He.value.datePickerSelected : ce;
    }), k = R(() => {
      var se, ye, ce, Ce, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Ze = B.value.map((to) => te(to).format("YYYY-MM-DD"));
        return Ze.length ? Ze[0] + " ~ " + Ze[1] : "";
      }
      if (ke)
        return "" + w.value.length + He.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var dn = te(m.value + "-" + f.value.index + "-" + p.value).day(), Ea = _a.find((to) => to.index === "" + dn), Di = (se = (ye = He.value.datePickerWeekDict) == null ? void 0 : ye[Ea.index].name) != null ? se : "", fv = (ce = (Ce = He.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", cv = ya(p.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + cv + " " + Di.slice(0, 3) : Di.slice(0, 3) + ", " + fv.slice(0, 3) + " " + p.value;
    }), j = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(j.value)), F = R(() => {
      var se, ye, ce, Ce, ke = te(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Re = p.value ? ya(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Re
      };
    }), E = R(() => z.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), H = R(() => m.value === g.value), U = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), X = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0];
        n = ye, r = ce;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", G = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Ce = ye - n, ke = ce - r;
        t = Z(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(Q.value || t !== "x")) {
        var se = j.value === "month" ? S : D;
        Gt(() => {
          se.value.forwardRef(a), Ni();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? C : B;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? P : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Ze) => te(Ze).format(Ce)), Re = ke.findIndex((Ze) => Ze === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
    }, ge = (se, ye) => !m.value || !f.value ? !1 : H.value ? se === "month" ? ye.index < f.value.index : U.value ? ye < L(p.value) : f.value.index > y.value.index : m.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        V.value = ge("day", se);
        var Ze = g.value + "-" + y.value.index + "-" + se, dn = te(Ze).format("YYYY-MM-DD");
        ce ? ae(dn, "day") : Ce ? oe(dn, "day") : ($(Re, dn), $(ke, dn));
      }
    }, Fe = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Re,
        onPreview: Ze,
        "onUpdate:modelValue": dn
      } = e;
      if (V.value = ge("month", se), ye === "month" && !ce) {
        var Ea = g.value + "-" + se.index;
        Ce ? ae(Ea, "month") : ke ? oe(Ea, "month") : ($(dn, Ea), $(Re, Ea));
      } else
        y.value = se, $(Ze, L(g.value), L(y.value.index));
      d.value = !1;
    }, en = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, L(g.value), L(y.value.index));
    }, on = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + ce);
      else {
        var Ce = L(y.value.index) + ce;
        Ce < 1 && (g.value = "" + (L(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (L(g.value) + 1), Ce = 1), y.value = Ot.find((ke) => L(ke.index) === Ce);
      }
      $(e.onPreview, L(g.value), L(y.value.index));
    }, Le = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, un = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, uv = (se, ye) => {
      var ce = ye === "month" ? C : B, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((dn) => te(dn).format(Ce)).slice(0, 2), Re = ce.value.some((dn) => un(dn));
      if (!Re) {
        ce.value = ke;
        var Ze = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Ze && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, dv = (se, ye) => {
      var ce = ye === "month" ? P : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Ce))));
      ce.value = ke.filter((Re) => Re !== "Invalid Date");
    }, vv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!un(ye)) {
        var [ce, Ce, ke] = ye.split("-"), Re = Ot.find((Ze) => Ze.index === Ce);
        f.value = Re, m.value = ce, p.value = ke, y.value = Re, g.value = ce;
      }
    }, Ni = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Le() || un(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, uv(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          dv(se, e.type);
        } else
          vv(se);
    }, {
      immediate: !0
    }), le(j, Ni), {
      n: Sh,
      classes: kh,
      monthPanelEl: S,
      dayPanelEl: D,
      reverse: V,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: b,
      getDateTitle: k,
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
      getChooseDay: pe,
      getChooseMonth: Fe,
      getChooseYear: en,
      checkPreview: on
    };
  }
});
zu.render = $h;
const Lr = zu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var bS = Lr;
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jo.apply(this, arguments);
}
function Th(e) {
  return ["left", "center", "right"].includes(e);
}
var Oh = jo({
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
    validator: Th
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
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, Ke(ft, [
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
var {
  n: Ph,
  classes: Vh
} = ee("dialog");
function Eh(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return h(), me(
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
        Me({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Wo({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: c(e.n("title"))
          },
          [W(e.$slots, "title", {}, () => [be(
            ne(e.dt(e.title, e.pack.dialogTitle)),
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
            ne(e.message),
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
          [e.cancelButton ? (h(), me(
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
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0), e.confirmButton ? (h(), me(
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
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var Lu = x({
  name: "VarDialog",
  components: {
    VarPopup: fn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: Oh,
  setup(e) {
    var n = I(!1), r = I(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if ($(s), l != null) {
        l("confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if ($(s), l != null) {
        l("cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
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
      n: Ph,
      classes: Vh,
      pack: He,
      dt: jt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: he
    };
  }
});
Lu.render = Eh;
const sr = Lu;
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
var _n, Ut = {};
function Mh(e) {
  return e === void 0 && (e = {}), Ge(e) ? Rt({}, Ut, {
    message: e
  }) : Rt({}, Ut, e);
}
function Ca(e) {
  return vt() ? new Promise((n) => {
    Ca.close();
    var r = Mh(e), a = Ee(r);
    a.teleport = "body", _n = a;
    var {
      unmountInstance: t
    } = Za(sr, a, {
      onConfirm: () => {
        $(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        $(a.onCancel), n("cancel");
      },
      onClose: () => {
        $(a.onClose), n("close");
      },
      onClosed: () => {
        $(a.onClosed), t(), _n === a && (_n = null);
      },
      onRouteChange: () => {
        t(), _n === a && (_n = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function Ih(e) {
  Ut = e;
}
function Bh() {
  Ut = {};
}
function Nh() {
  if (_n != null) {
    var e = _n;
    _n = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Ca, {
  setDefaultOptions: Ih,
  resetDefaultOptions: Bh,
  close: Nh
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
Ca.install = function(e) {
  e.component(sr.name, sr);
};
Ca.Component = sr;
var wS = sr, Dh = {
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
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, za.apply(this, arguments);
}
var {
  n: Ah,
  classes: zh
} = ee("divider");
function Lh(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (h(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Ru = x({
  name: "VarDivider",
  props: Dh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = R(() => mo(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (mo(l) || l === 0)
        return za({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? za({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : za({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return tn(() => {
      i();
    }), Ht(() => {
      i();
    }), za({
      n: Ah,
      classes: zh
    }, yv(a), {
      style: o,
      isInset: t
    });
  }
});
Ru.render = Lh;
const Rr = Ru;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var CS = Rr, Rh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Rh[n];
  });
}
var An = "top", pr = "bottom", Sa = "right", ur = "left", eo = "auto", no = [An, pr, Sa, ur], ro = "start", ot = "end", Uh = "clippingParents", Uu = "viewport", Ja = "popper", Yh = "reference", dl = /* @__PURE__ */ no.reduce(function(e, n) {
  return e.concat([n + "-" + ro, n + "-" + ot]);
}, []), Yu = /* @__PURE__ */ [].concat(no, [eo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + ro, n + "-" + ot]);
}, []), Fh = "beforeRead", Hh = "read", jh = "afterRead", Wh = "beforeMain", Gh = "main", qh = "afterMain", Kh = "beforeWrite", Xh = "write", Zh = "afterWrite", Go = [Fh, Hh, jh, Wh, Gh, qh, Kh, Xh, Zh];
function zn(e) {
  return e.split("-")[0];
}
var Jh = {
  start: "end",
  end: "start"
};
function vl(e) {
  return e.replace(/start|end/g, function(n) {
    return Jh[n];
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
function ka(e) {
  var n = gn(e).Element;
  return e instanceof n || e instanceof Element;
}
function cn(e) {
  var n = gn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ti(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = gn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function yr(e) {
  return ((ka(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var et = Math.max, fl = Math.min, Fa = Math.round;
function qo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Fu() {
  return !/^((?!chrome|android).)*safari/i.test(qo());
}
function Ha(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Fa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Fa(a.height) / e.offsetHeight || 1);
  var i = ka(e) ? gn(e) : window, l = i.visualViewport, s = !Fu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  var n = gn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Pi(e) {
  return Ha(yr(e)).left + Oi(e).scrollLeft;
}
function Qh(e, n) {
  var r = gn(e), a = yr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Fu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + Pi(e),
    y: s
  };
}
function kn(e) {
  return gn(e).getComputedStyle(e);
}
function _h(e) {
  var n, r = yr(e), a = Oi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = et(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = et(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Pi(e), s = -a.scrollTop;
  return kn(t || r).direction === "rtl" && (l += et(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function En(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ao(e) {
  return En(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ti(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    yr(e)
  );
}
function Vi(e) {
  var n = kn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Hu(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : cn(e) && Vi(e) ? e : Hu(ao(e));
}
function nt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Hu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = gn(a), i = t ? [o].concat(o.visualViewport || [], Vi(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(nt(ao(i)))
  );
}
function xh(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function cl(e) {
  return !cn(e) || // https://github.com/popperjs/popper-core/issues/837
  kn(e).position === "fixed" ? null : e.offsetParent;
}
function eg(e) {
  var n = /firefox/i.test(qo()), r = /Trident/i.test(qo());
  if (r && cn(e)) {
    var a = kn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ao(e);
  for (Ti(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var o = kn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ei(e) {
  for (var n = gn(e), r = cl(e); r && xh(r) && kn(r).position === "static"; )
    r = cl(r);
  return r && (En(r) === "html" || En(r) === "body" && kn(r).position === "static") ? n : r || eg(e) || n;
}
function ng(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ti(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Ko(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rg(e, n) {
  var r = Ha(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ml(e, n, r) {
  return n === Uu ? Ko(Qh(e, r)) : ka(n) ? rg(n, r) : Ko(_h(yr(e)));
}
function ag(e) {
  var n = nt(ao(e)), r = ["absolute", "fixed"].indexOf(kn(e).position) >= 0, a = r && cn(e) ? Ei(e) : e;
  return ka(a) ? n.filter(function(t) {
    return ka(t) && ng(t, a) && En(t) !== "body";
  }) : [];
}
function tg(e, n, r, a) {
  var t = n === "clippingParents" ? ag(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = ml(e, u, a);
    return s.top = et(d.top, s.top), s.right = fl(d.right, s.right), s.bottom = fl(d.bottom, s.bottom), s.left = et(d.left, s.left), s;
  }, ml(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function it(e) {
  return e.split("-")[1];
}
function og(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ju(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? it(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
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
    case Sa:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case ur:
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
  var u = t ? og(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case ro:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case ot:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ig() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function lg(e) {
  return Object.assign({}, ig(), e);
}
function sg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Wu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Uh : l, u = r.rootBoundary, d = u === void 0 ? Uu : u, v = r.elementContext, f = v === void 0 ? Ja : v, m = r.altBoundary, p = m === void 0 ? !1 : m, y = r.padding, g = y === void 0 ? 0 : y, V = lg(typeof g != "number" ? g : sg(g, no)), P = f === Ja ? Yh : Ja, w = e.rects.popper, C = e.elements[p ? P : f], B = tg(ka(C) ? C : C.contextElement || yr(e.elements.popper), s, d, i), S = Ha(e.elements.reference), D = ju({
    reference: S,
    element: w,
    strategy: "absolute",
    placement: t
  }), O = Ko(Object.assign({}, w, D)), z = f === Ja ? O : S, M = {
    top: B.top - z.top + V.top,
    bottom: z.bottom - B.bottom + V.bottom,
    left: B.left - z.left + V.left,
    right: z.right - B.right + V.right
  }, b = e.modifiersData.offset;
  if (f === Ja && b) {
    var k = b[t];
    Object.keys(M).forEach(function(j) {
      var Q = [Sa, pr].indexOf(j) >= 0 ? 1 : -1, F = [An, pr].indexOf(j) >= 0 ? "y" : "x";
      M[j] += k[F] * Q;
    });
  }
  return M;
}
function ug(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Yu : s, d = it(a), v = d ? l ? dl : dl.filter(function(p) {
    return it(p) === d;
  }) : no, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, y) {
    return p[y] = Wu(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[zn(y)], p;
  }, {});
  return Object.keys(m).sort(function(p, y) {
    return m[p] - m[y];
  });
}
function dg(e) {
  if (zn(e) === eo)
    return [];
  var n = Pt(e);
  return [vl(e), n, vl(n)];
}
function vg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, g = n.options.placement, V = zn(g), P = V === g, w = s || (P || !p ? [Pt(g)] : dg(g)), C = [g].concat(w).reduce(function(ae, oe) {
      return ae.concat(zn(oe) === eo ? ug(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : oe);
    }, []), B = n.rects.reference, S = n.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, z = C[0], M = 0; M < C.length; M++) {
      var b = C[M], k = zn(b), j = it(b) === ro, Q = [An, pr].indexOf(k) >= 0, F = Q ? "width" : "height", E = Wu(n, {
        placement: b,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), H = Q ? j ? Sa : ur : j ? pr : An;
      B[F] > S[F] && (H = Pt(H));
      var U = Pt(H), X = [];
      if (o && X.push(E[k] <= 0), l && X.push(E[H] <= 0, E[U] <= 0), X.every(function(ae) {
        return ae;
      })) {
        z = b, O = !1;
        break;
      }
      D.set(b, X);
    }
    if (O)
      for (var N = p ? 3 : 1, Z = function(oe) {
        var ge = C.find(function(pe) {
          var Fe = D.get(pe);
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
const fg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function cg(e, n, r) {
  var a = zn(e), t = [ur, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [ur, Sa].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function mg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Yu.reduce(function(d, v) {
    return d[v] = cg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const pg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mg
};
function hg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function gg(e) {
  return e === gn(e) || !cn(e) ? Oi(e) : hg(e);
}
function yg(e) {
  var n = e.getBoundingClientRect(), r = Fa(n.width) / e.offsetWidth || 1, a = Fa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function bg(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && yg(n), o = yr(n), i = Ha(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Vi(o)) && (l = gg(n)), cn(n) ? (s = Ha(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Pi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function wg(e) {
  var n = Ha(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Cg(e) {
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
function Sg(e) {
  var n = Cg(e);
  return Go.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function kg(e) {
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
var br = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $g = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', pl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Tg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), pl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Kn(br, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Kn(br, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Go.indexOf(n.phase) < 0 && console.error(Kn(br, n.name, '"phase"', "either " + Go.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Kn(br, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Kn(br, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Kn(br, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Kn(br, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + pl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Kn($g, String(n.name), a, a));
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
var hl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", gl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Eg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? gl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gl, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(V) {
        var P = typeof V == "function" ? V(d.options) : V;
        y(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: ka(l) ? nt(l) : l.contextElement ? nt(l.contextElement) : [],
          popper: nt(s)
        };
        var w = Sg(Pg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Og([].concat(w, d.options.modifiers), function(b) {
            var k = b.name;
            return k;
          });
          if (Tg(C), zn(d.options.placement) === eo) {
            var B = d.orderedModifiers.find(function(b) {
              var k = b.name;
              return k === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = kn(s), D = S.marginTop, O = S.marginRight, z = S.marginBottom, M = S.marginLeft;
          [D, O, z, M].some(function(b) {
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
          var V = d.elements, P = V.reference, w = V.popper;
          if (!yl(P, w)) {
            process.env.NODE_ENV !== "production" && console.error(hl);
            return;
          }
          d.rects = {
            reference: bg(P, Ei(w), d.options.strategy === "fixed"),
            popper: wg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
            return d.modifiersData[b.name] = Object.assign({}, b.data);
          });
          for (var C = 0, B = 0; B < d.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Vg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, B = -1;
              continue;
            }
            var S = d.orderedModifiers[B], D = S.fn, O = S.options, z = O === void 0 ? {} : O, M = S.name;
            typeof D == "function" && (d = D({
              state: d,
              options: z,
              name: M,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: kg(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!yl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(hl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var V = g.name, P = g.options, w = P === void 0 ? {} : P, C = g.effect;
        if (typeof C == "function") {
          var B = C({
            state: d,
            name: V,
            instance: m,
            options: w
          }), S = function() {
          };
          v.push(B || S);
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
var Ct = {
  passive: !0
};
function Mg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = gn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ct);
  }), l && s.addEventListener("resize", r.update, Ct), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ct);
    }), l && s.removeEventListener("resize", r.update, Ct);
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
function Bg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ju({
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
  fn: Bg,
  data: {}
};
var Dg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ag(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Fa(n * t) / t || 0,
    y: Fa(r * t) / t || 0
  };
}
function bl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, p = i.y, y = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = g.x, y = g.y;
  var V = i.hasOwnProperty("x"), P = i.hasOwnProperty("y"), w = ur, C = An, B = window;
  if (u) {
    var S = Ei(r), D = "clientHeight", O = "clientWidth";
    if (S === gn(r) && (S = yr(r), kn(S).position !== "static" && l === "absolute" && (D = "scrollHeight", O = "scrollWidth")), S = S, t === An || (t === ur || t === Sa) && o === ot) {
      C = pr;
      var z = v && S === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[D]
      );
      y -= z - a.height, y *= s ? 1 : -1;
    }
    if (t === ur || (t === An || t === pr) && o === ot) {
      w = Sa;
      var M = v && S === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[O]
      );
      m -= M - a.width, m *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: l
  }, u && Dg), k = d === !0 ? Ag({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = k.x, y = k.y, s) {
    var j;
    return Object.assign({}, b, (j = {}, j[C] = P ? "0" : "", j[w] = V ? "0" : "", j.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, b, (n = {}, n[C] = P ? y + "px" : "", n[w] = V ? m + "px" : "", n.transform = "", n));
}
function zg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = kn(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: zn(n.placement),
    variation: it(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, bl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, bl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Lg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zg,
  data: {}
};
function Rg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !cn(o) || !En(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Ug(e) {
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
      !cn(t) || !En(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Yg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Rg,
  effect: Ug,
  requires: ["computeStyles"]
};
var Fg = [Ig, Ng, Lg, Yg], Hg = /* @__PURE__ */ Eg({
  defaultModifiers: Fg
});
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
function wl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        wl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        wl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Gu(e) {
  var n = I(null), r = I(null), a = I(!1), t = I({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = ct(() => a.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: S,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(S),
      height: Ne(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, C());
  }, v = /* @__PURE__ */ function() {
    var S = Cl(function* () {
      e.trigger === "hover" && (s = !1, yield Pn(), !l && B());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, m = /* @__PURE__ */ function() {
    var S = Cl(function* () {
      e.trigger === "hover" && (l = !1, yield Pn(), !s && B());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), p = () => {
    C();
  }, y = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, V = () => {
    u();
    var S = {
      x: Ne(e.offsetX),
      y: Ne(e.offsetY)
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
  }, P = () => {
    var {
      placement: S,
      skidding: D,
      distance: O
    } = V(), z = [Yt({}, fg, {
      enabled: a.value
    }), Yt({}, pg, {
      options: {
        offset: [D, O]
      }
    })];
    return {
      placement: S,
      modifiers: z
    };
  }, w = () => {
    i.setOptions(P());
  }, C = () => {
    var {
      disabled: S
    } = e;
    S || (a.value = !0, $(e["onUpdate:show"], !0));
  }, B = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return zv(n, "click", g), le(() => e.show, (S) => {
    a.value = S ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, w), le(() => e.offsetY, w), le(() => e.placement, w), le(() => a.value, (S) => {
    S ? (w(), $(e.onOpen)) : $(e.onClose);
  }), le(() => e.disabled, B), Wa(() => {
    i = Hg(n.value, r.value, P());
  }), Ta(() => {
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
    close: B
  };
}
function jg(e) {
  return ["click", "hover"].includes(e);
}
function Wg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Gg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var qg = {
  type: {
    type: String,
    default: "default",
    validator: Gg
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
    validator: jg
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Wg
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: Kg,
  classes: Xg
} = ee("tooltip");
function Zg(e, n) {
  return h(), T(
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
    [W(e.$slots, "default"), (h(), me(
      qa,
      {
        to: e.teleport
      },
      [re(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(A(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: q({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = On(() => {
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
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Ka, e.show]])]),
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
var qu = x({
  name: "VarTooltip",
  props: qg,
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
    } = Gu(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Kg,
      classes: Xg,
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
qu.render = Zg;
const dr = qu;
dr.install = function(e) {
  e.component(dr.name, dr);
};
var SS = dr;
function Jg(e) {
  return ["click"].includes(e);
}
var Qg = {
  expandTrigger: {
    type: String,
    validator: Jg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: _g,
  classes: xg
} = ee("ellipsis"), ey = {
  key: 0
};
function ny(e, n) {
  var r = ie("var-tooltip");
  return h(), me(
    r,
    oi(Jl(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          ey,
          ne(e.tooltip.content),
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
var Ku = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: dr
  },
  props: Qg,
  setup(e) {
    var n = I(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Xo({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: _g,
      classes: xg,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Ku.render = ny;
const Ur = Ku;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var kS = Ur;
function ry(e) {
  return ["start", "end"].includes(e);
}
var ay = {
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
    validator: ry
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Sl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ty(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Sl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Sl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: oy
} = ee("form");
function iy(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Xu = x({
  name: "VarForm",
  props: ay,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = pm(), o = (d, v) => {
      setTimeout(() => {
        var f = Va(v), m = f === window ? 0 : Hi(f), p = Hi(v) - m - Ne(e.scrollToErrorOffsetY);
        rt(f, {
          top: p,
          animation: po
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = ty(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: V
          } = g;
          return V();
        }));
        if (e.scrollToError) {
          var [, f] = $v(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var p, y = (p = a[f].instance.proxy) == null ? void 0 : p.$el;
            o(f, y);
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
      n: oy,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
Xu.render = iy;
const Ln = Xu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = pn;
Ln.useForm = hn;
var $S = Ln;
function ly(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var sy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: ly,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: uy,
  classes: dy
} = ee("image"), vy = ["alt", "title", "lazy-error", "lazy-loading"], fy = ["alt", "title", "src"];
function cy(e, n) {
  var r = Ae("lazy"), a = Ae("ripple");
  return Se((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((h(), T(
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
      vy
    )), [[r, e.src]]) : (h(), T(
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
      fy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Zu = x({
  name: "VarImage",
  directives: {
    Lazy: at,
    Ripple: ze
  },
  props: sy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && $(l, t), o._lazy.state === "error" && $(s, t)) : $(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && $(i, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: uy,
      classes: dy,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Zu.render = cy;
const Yr = Zu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var TS = Yr, Ju = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Qu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function my() {
  var {
    childProviders: e,
    bindChildren: n
  } = $n(Ju), {
    length: r
  } = Mn(Qu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var _u = {
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
  onChange: Y()
};
function kl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function py(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        kl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        kl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var hy = 250, gy = 20, {
  n: yy,
  classes: by
} = ee("swipe"), wy = ["onClick"];
function Cy(e, n) {
  return h(), T(
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
    }, () => [e.indicator && e.length ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), T(
        Pe,
        null,
        Be(e.length, (r, a) => (h(), T(
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
          wy
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
var xu = x({
  name: "VarSwipe",
  props: _u,
  setup(e) {
    var n = I(null), r = I(0), a = R(() => e.vertical), t = I(0), o = I(0), i = I(!1), l = I(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = my(), v = !1, f = -1, m, p, y, g, V, P = (N) => s.find((Z) => {
      var {
        index: G
      } = Z;
      return G.value === N;
    }), w = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, C = (N) => {
      var Z = _e(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: G
      } = e;
      return Z <= -1 ? G ? -1 : 0 : Z >= d.value ? G ? d.value : d.value - 1 : Z;
    }, B = (N) => {
      var {
        loop: Z
      } = e;
      return N === -1 ? Z ? d.value - 1 : 0 : N === d.value ? Z ? 0 : d.value - 1 : N;
    }, S = (N) => {
      var {
        loop: Z
      } = e;
      return N < 0 ? Z ? d.value - 1 : 0 : N > d.value - 1 ? Z ? 0 : d.value - 1 : N;
    }, D = (N) => {
      var Z = o.value >= r.value, G = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      i.value = !0, (Z || G) && (i.value = !0, o.value = G ? J : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Gt(() => {
        i.value = !1, $(N);
      });
    }, O = () => {
      l.value = S(L(e.initialIndex));
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
    }, k = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0];
        m = Z, p = G, y = performance.now(), v = !0, M(), D(() => {
          i.value = !0;
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
        } = N.touches[0], oe = Math.abs(J - m), ge = Math.abs(ae - p), pe = b(oe, ge), Fe = G ? "vertical" : "horizontal";
        if (pe === Fe) {
          N.preventDefault();
          var en = g !== void 0 ? J - g : 0, on = V !== void 0 ? ae - V : 0;
          g = J, V = ae, o.value += G ? on : en, w();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: Z
        } = e, G = N ? V < p : g < m, J = Math.abs(N ? p - V : m - g), ae = performance.now() - y <= hy && J >= gy, oe = ae ? C(G ? l.value + 1 : l.value - 1) : C();
        v = !1, i.value = !1, g = void 0, V = void 0, o.value = oe * -r.value;
        var ge = l.value;
        l.value = B(oe), z(), ge !== l.value && $(Z, l.value);
      }
    }, F = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), z(), setTimeout(() => {
        i.value = !1;
      }));
    }, E = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = l.value;
        l.value = S(J + 1), (N == null ? void 0 : N.event) !== !1 && $(G, l.value), D(() => {
          if (J === d.value - 1 && Z) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, H = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = l.value;
        l.value = S(J - 1), (N == null ? void 0 : N.event) !== !1 && $(G, l.value), D(() => {
          if (J === 0 && Z) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, U = (N, Z) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var G = N > l.value ? E : H, J = Math.abs(N - l.value);
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
    return u(X), le(() => d.value, /* @__PURE__ */ py(function* () {
      yield Pn(), O(), F();
    })), Ga(F), hr(M), Ta(M), ba(window, "resize", F), {
      n: yy,
      classes: by,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: k,
      handleTouchmove: j,
      handleTouchend: Q,
      next: E,
      prev: H,
      to: U,
      resize: F,
      toNumber: L
    };
  }
});
xu.render = Cy;
const Rn = xu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var OS = Rn;
function Sy() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(Ju), {
    index: r
  } = In(Qu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: ky
} = ee("swipe-item");
function $y(e, n) {
  return h(), T(
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
var ed = x({
  name: "VarSwipeItem",
  setup() {
    var e = I(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Sy(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: ky,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
ed.render = $y;
const Un = ed;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var PS = Un;
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
var Ty = Zo({
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
  "onUpdate:show": Y()
}, Ke(_u, ["loop", "indicator", "onChange"]), Ke(ft, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: $l,
  classes: Oy
} = ee("image-preview"), Tl = 12, Ol = 200, Py = 350, Pl = 200, Vy = ["src", "alt"];
function Ey(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return h(), me(
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
      default: ve(() => [re(
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
            Pe,
            null,
            Be(e.images, (i) => (h(), me(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: i
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
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    Vy
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
            }, () => [e.indicator && e.images.length > 1 ? (h(), T(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ne(l + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
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
      )) : _("v-if", !0)]), A(
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
var nd = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: fn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ty,
  setup(e) {
    var n = I(!1), r = R(() => {
      var {
        images: M,
        current: b
      } = e, k = M.findIndex((j) => j === b);
      return k >= 0 ? k : 0;
    }), a = I(1), t = I(0), o = I(0), i = I(void 0), l = I(void 0), s = I(!0), u = null, d = null, v = null, f = (M, b) => {
      var {
        clientX: k,
        clientY: j
      } = M, {
        clientX: Q,
        clientY: F
      } = b;
      return Math.abs(Math.sqrt(Math.pow(Q - k, 2) + Math.pow(F - j, 2)));
    }, m = (M, b) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: Date.now(),
      target: b
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Pl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, g = (M) => d ? f(d, M) <= Tl && M.timestamp - d.timestamp <= Ol && d.target === M.target : !1, V = (M) => !M || !u || !d ? !1 : f(u, d) <= Tl && Date.now() - d.timestamp < Py && (M === u.target || M.parentNode === u.target), P = (M) => {
      v = window.setTimeout(() => {
        V(M.target) && z(), u = null;
      }, Ol);
    }, w = (M) => {
      v && window.clearTimeout(v);
      var {
        touches: b
      } = M, k = m(b[0], M.currentTarget);
      if (u = k, g(k)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = k;
    }, C = (M) => {
      var {
        offsetWidth: b,
        offsetHeight: k
      } = M, {
        naturalWidth: j,
        naturalHeight: Q
      } = M.querySelector("." + $l("image"));
      return {
        width: b,
        height: k,
        imageRadio: Q / j,
        rootRadio: k / b,
        zoom: L(e.zoom)
      };
    }, B = (M) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: j,
        width: Q,
        height: F
      } = C(M);
      if (!k)
        return 0;
      var E = k > j ? F / k : Q;
      return Math.max(0, (b * E - Q) / 2) / b;
    }, S = (M) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: j,
        width: Q,
        height: F
      } = C(M);
      if (!k)
        return 0;
      var E = k > j ? F : Q * k;
      return Math.max(0, (b * E - F) / 2) / b;
    }, D = (M, b, k) => M + b >= k ? k : M + b <= -k ? -k : M + b, O = (M) => {
      if (d) {
        var b = M.currentTarget, {
          touches: k
        } = M, j = m(k[0], b);
        if (a.value > 1) {
          var Q = j.clientX - d.clientX, F = j.clientY - d.clientY, E = B(b), H = S(b);
          t.value = D(t.value, Q, E), o.value = D(o.value, F, H);
        }
        d = j;
      }
    }, z = () => {
      if (a.value > 1) {
        y(), setTimeout(() => $(e["onUpdate:show"], !1), Pl);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (M) => {
      n.value = M;
    }, {
      immediate: !0
    }), {
      n: $l,
      classes: Oy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: w,
      handleTouchmove: O,
      handleTouchend: P,
      close: z
    };
  }
});
nd.render = Ey;
const vr = nd;
var xn;
function Hn(e) {
  if (vt()) {
    Hn.close();
    var n = Ge(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Ee(n);
    r.teleport = "body", xn = r;
    var {
      unmountInstance: a
    } = Za(vr, r, {
      onClose: () => $(r.onClose),
      onClosed: () => {
        $(r.onClosed), a(), xn === r && (xn = null);
      },
      onRouteChange: () => {
        a(), xn === r && (xn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (xn != null) {
    var e = xn;
    xn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
vr.install = function(e) {
  e.component(vr.name, vr);
};
Hn.install = function(e) {
  e.component(vr.name, vr);
};
Hn.Component = vr;
var VS = vr, Vt = {
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
  onScroll: Y()
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
function El(e) {
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
  n: My,
  classes: Iy
} = ee("sticky");
function By(e, n) {
  return h(), T(
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
var rd = x({
  name: "VarSticky",
  props: Vt,
  setup(e) {
    var n = I(null), r = I(null), a = I(!1), t = I("0px"), o = I("0px"), i = I("auto"), l = I("auto"), s = I("auto"), u = I("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Ne(e.offsetTop)), m, p = () => {
      var {
        cssMode: w,
        disabled: C
      } = e;
      if (!C) {
        var B = 0;
        if (m !== window) {
          var {
            top: S
          } = m.getBoundingClientRect();
          B = S;
        }
        var D = r.value, O = n.value, {
          top: z,
          left: M
        } = O.getBoundingClientRect(), b = z - B;
        return b <= f.value ? (w || (i.value = O.offsetWidth + "px", l.value = O.offsetHeight + "px", t.value = B + f.value + "px", o.value = M + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
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
        w && $(e.onScroll, w.offsetTop, w.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var w = El(function* () {
        a.value = !1, yield Dv(), p();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var w = El(function* () {
        yield Pn(), m = Va(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), P = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return le(() => e.disabled, g), tn(V), Ta(P), hr(P), ba(window, "scroll", y), {
      n: My,
      classes: Iy,
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
rd.render = By;
const Yn = rd;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var ES = Yn, ad = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), td = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Ny() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(ad), {
    length: r
  } = Mn(td);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Dy() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(ad), {
    index: r
  } = In(td);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Ay = {
  index: {
    type: [Number, String]
  }
}, {
  n: zy,
  classes: Ly
} = ee("index-anchor");
function Ry(e, n) {
  return h(), me(
    Xa(e.sticky ? e.n("$-sticky") : e.Transition),
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
var od = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Ay,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Dy(), t = I(0), o = I(!1), i = R(() => e.index), l = I(null), {
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
      n: zy,
      classes: Ly,
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
od.render = Ry;
const Fr = od;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var MS = Fr, Uy = {
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
  onClick: Y(),
  onChange: Y()
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
function St(e) {
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
var {
  n: Yy,
  classes: Fy
} = ee("index-bar"), Hy = ["onClick"];
function jy(e, n) {
  return h(), T(
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
      [(h(!0), T(
        Pe,
        null,
        Be(e.anchorNameList, (r) => (h(), T(
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
          ne(r),
          15,
          Hy
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
var id = x({
  name: "VarIndexBar",
  props: Uy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Ny(), t = I(""), o = I(null), i = I([]), l = I(), s = R(() => e.sticky), u = R(() => e.cssMode), d = R(() => Ne(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = {
      active: l,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (S, D) => {
      var O = ii(S) ? S.name.value : S;
      O === l.value || O === void 0 || (l.value = O, (D == null ? void 0 : D.event) !== !1 && $(e.onChange, O));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: S
      } = f.getBoundingClientRect(), {
        scrollTop: D
      } = f, {
        top: O
      } = o.value.getBoundingClientRect();
      return D - S + O;
    }, g = () => {
      var S = Wt(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, O = y();
      r.forEach((z, M) => {
        var b = z.ownTop.value, k = S - b + d.value - O, j = M === r.length - 1 ? D : r[M + 1].ownTop.value - z.ownTop.value;
        k >= 0 && k < j && t.value === "" && (M && !e.cssMode && r[M - 1].setDisabled(!0), z.setDisabled(!1), p(z));
      });
    }, V = /* @__PURE__ */ function() {
      var S = St(function* (D) {
        var {
          anchorName: O,
          manualCall: z = !1,
          options: M
        } = D;
        if (z && $(e.onClick, O), O !== l.value) {
          var b = r.find((F) => {
            var {
              name: E
            } = F;
            return O === E.value;
          });
          if (b) {
            var k = y(), j = b.ownTop.value - d.value + k, Q = ui(f);
            t.value = O, p(O, M), yield rt(f, {
              left: Q,
              top: j,
              animation: xl,
              duration: L(e.duration)
            }), Gt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return S.apply(this, arguments);
      };
    }(), P = /* @__PURE__ */ function() {
      var S = St(function* () {
        yield Pn(), f = Va(o.value);
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = () => {
      f.addEventListener("scroll", g);
    }, C = () => {
      f.removeEventListener("scroll", g);
    }, B = (S, D) => {
      Sn(() => V({
        anchorName: S,
        options: D
      }));
    };
    return le(() => n.value, /* @__PURE__ */ St(function* () {
      yield Pn(), r.forEach((S) => {
        var {
          name: D,
          setOwnTop: O
        } = S;
        D.value && i.value.push(D.value), O();
      });
    })), tn(/* @__PURE__ */ St(function* () {
      yield P(), w();
    })), ut(C), hr(C), {
      n: Yy,
      classes: Fy,
      barEl: o,
      active: l,
      zIndex: v,
      anchorNameList: i,
      toNumber: L,
      scrollTo: B,
      anchorClick: V
    };
  }
});
id.render = jy;
const Hr = id;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var IS = Hr;
function Wy(e) {
  return ["text", "password", "number"].includes(e);
}
var Gy = {
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
    validator: Wy
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
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onInput: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: so,
  classes: qy
} = ee("input"), Ky = ["id", "disabled", "type", "value", "maxlength", "rows"], Xy = ["id", "disabled", "type", "value", "maxlength"], Zy = ["for"];
function Jy(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return h(), T(
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
        [e.type === "password" ? (h(), T(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (h(), T(
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
          Ky
        )) : (h(), T(
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
          Xy
        )), A(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: q({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          Zy
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
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
    )) : _("v-if", !0), re(
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
var ld = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: Gy,
  setup(e) {
    var n = I("var-input-" + Wn().uid), r = I(null), a = I(!1), t = R(() => e.type === "number" ? "text" : e.type), o = R(() => {
      var {
        maxlength: E,
        modelValue: H
      } = e;
      return E ? Nn(H) ? "0 / " + E : String(H).length + "/" + E : "";
    }), {
      bindForm: i,
      form: l
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
          rules: U,
          modelValue: X
        } = e;
        u(H, E, U, X);
      });
    }, m = () => {
      var {
        hint: E,
        modelValue: H
      } = e;
      if (!E && !Nn(H))
        return so("--placeholder-hidden");
      if (E && (!Nn(H) || a.value))
        return so("--placeholder-hint");
    }, p = (E) => {
      a.value = !0, $(e.onFocus, E), f("onFocus");
    }, y = (E) => {
      a.value = !1, $(e.onBlur, E), f("onBlur");
    }, g = (E) => {
      var H = E.target, {
        value: U
      } = H;
      return e.type === "number" && (U = D(U)), U = z(O(U)), H.value = U, U;
    }, V = (E) => {
      Object.assign(E.target, {
        composing: !0
      });
    }, P = (E) => {
      var H = E.target;
      H.composing && (H.composing = !1, H.dispatchEvent(new Event("input")));
    }, w = (E) => {
      var {
        composing: H
      } = E.target;
      if (!H) {
        var U = g(E);
        $(e["onUpdate:modelValue"], U), $(e.onInput, U, E), f("onInput");
      }
    }, C = (E) => {
      var H = g(E);
      $(e.onChange, H, E), f("onChange");
    }, B = () => {
      var {
        disabled: E,
        readonly: H,
        clearable: U,
        onClear: X
      } = e;
      l != null && l.disabled.value || l != null && l.readonly.value || E || H || !U || ($(e["onUpdate:modelValue"], ""), $(X, ""), f("onClear"));
    }, S = (E) => {
      var {
        disabled: H,
        onClick: U
      } = e;
      l != null && l.disabled.value || H || ($(U, E), f("onClick"));
    }, D = (E) => {
      var H = E.indexOf("-"), U = E.indexOf(".");
      return H > -1 && (E = H === 0 ? "-" + E.replace(/-/g, "") : E.replace(/-/g, "")), U > -1 && (E = E.slice(0, U + 1) + E.slice(U).replace(/\./g, "")), E.replace(/[^-0-9.]/g, "");
    }, O = (E) => e.modelModifiers.trim ? E.trim() : E, z = (E) => e.maxlength ? E.slice(0, L(e.maxlength)) : E, M = (E) => {
      var {
        disabled: H,
        readonly: U
      } = e;
      l != null && l.disabled.value || l != null && l.readonly.value || H || U || E.stopPropagation();
    }, b = () => {
      $(e["onUpdate:modelValue"], ""), v();
    }, k = () => d(e.rules, e.modelValue), j = () => {
      var E;
      (E = r.value) == null || E.focus();
    }, Q = () => {
      r.value.blur();
    }, F = {
      reset: b,
      validate: k,
      resetValidation: v
    };
    return $(i, F), tn(() => {
      e.autofocus && j();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: s,
      type: t,
      maxlengthText: o,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: so,
      classes: qy,
      isEmpty: Nn,
      computePlaceholderState: m,
      handleFocus: p,
      handleBlur: y,
      handleInput: w,
      handleChange: C,
      handleClear: B,
      handleClick: S,
      handleTouchstart: M,
      handleCompositionStart: V,
      handleCompositionEnd: P,
      validate: k,
      resetValidation: v,
      reset: b,
      focus: j,
      blur: Q
    };
  }
});
ld.render = Jy;
const fr = ld;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var BS = fr;
function Qy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function _y(e) {
  return ["always", "hover", "none"].includes(e);
}
var xy = {
  type: {
    type: String,
    default: "default",
    validator: Qy
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
    validator: _y
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
  onClick: Y()
}, {
  n: eb,
  classes: nb
} = ee("link");
function rb(e, n) {
  return h(), me(
    Xa(e.tag),
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
var sd = x({
  name: "VarLink",
  props: xy,
  setup(e) {
    var n = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = R(() => {
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
      o || $(i, t);
    };
    return {
      n: eb,
      classes: nb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
sd.render = rb;
const jr = sd;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var NS = jr, ab = {
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
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
};
function Il(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Il(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Il(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ob,
  classes: ib
} = ee("list");
function lb(e, n) {
  var r = ie("var-loading"), a = Ae("ripple");
  return h(), T(
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
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), re(r, {
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
        class: c(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [Se((h(), T(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : _("v-if", !0), A(
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
var ud = x({
  name: "VarList",
  directives: {
    Ripple: ze
  },
  components: {
    VarLoading: wn
  },
  props: ab,
  setup(e) {
    var n = I(null), r = I(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = tb(function* () {
        yield Ve();
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
    return tn(() => {
      a = Va(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), Ta(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: jt,
      isNumber: _e,
      load: t,
      check: i,
      n: ob,
      classes: ib
    };
  }
});
ud.render = lb;
const Wr = ud;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var DS = Wr, sb = {
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
  classes: ub,
  n: Bl
} = ee("loading-bar");
const db = x({
  name: "VarLoadingBar",
  props: sb,
  setup(e) {
    return () => re("div", {
      class: ub(Bl(), [e.error, Bl("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var dd, Nl, vd = {}, vb = {
  value: 0,
  opacity: 0,
  error: !1
}, qe = Ee(vb), fb = (e) => {
  Object.assign(qe, e);
}, cb = (e) => {
  Object.assign(qe, e), vd = e;
}, mb = () => {
  Object.keys(vd).forEach((e) => {
    qe[e] !== void 0 && (qe[e] = void 0);
  });
}, fd = () => {
  dd = window.setTimeout(() => {
    if (!(qe.value >= 95)) {
      var e = Math.random();
      qe.value < 70 && (e = Math.round(5 * Math.random())), qe.value += e, fd();
    }
  }, 200);
}, pb = () => {
  Nl || (Nl = !0, Za(db, qe)), (!qe.error || qe.value === 100) && (qe.value = 0), setTimeout(() => {
    qe.opacity = 1;
  }, 200), fd();
}, hb = () => {
  qe.value = 100, setTimeout(() => {
    qe.opacity = 0, setTimeout(() => {
      qe.error = !1;
    }, 250);
  }, 300), window.clearTimeout(dd);
}, gb = () => {
  qe.error = !0, Ft.start(), setTimeout(Ft.finish, 300);
}, Ft = {
  start: pb,
  finish: hb,
  error: gb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: fb,
  setDefaultOptions: cb,
  resetDefaultOptions: mb
}, AS = Ft;
const Jo = Ft;
function yb(e) {
  return ["click", "hover"].includes(e);
}
function bb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var wb = {
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
    validator: yb
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: bb
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: Cb,
  classes: Sb
} = ee("menu");
function kb(e, n) {
  return h(), T(
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
    [W(e.$slots, "default"), (h(), me(
      qa,
      {
        to: e.teleport
      },
      [re(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(A(
            "div",
            {
              ref: "popover",
              style: q({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = On(() => {
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
          ), [[Ka, e.show]])]),
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
var cd = x({
  name: "VarMenu",
  props: wb,
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
    } = Gu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: Cb,
      classes: Sb,
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
cd.render = kb;
const Fn = cd;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var zS = Fn, md = Symbol("SELECT_BIND_OPTION_KEY"), pd = Symbol("SELECT_COUNT_OPTION_KEY");
function $b() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(md), {
    length: r
  } = Mn(pd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Tb() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(md), {
    index: r
  } = In(pd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Ob = {
  label: {},
  value: {}
}, {
  n: Pb,
  classes: Vb
} = ee("option");
function Eb(e, n) {
  var r = ie("var-checkbox"), a = Ae("ripple");
  return Se((h(), T(
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
    ), e.multiple ? (h(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = On(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : _("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [W(e.$slots, "default", {}, () => [be(
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
var hd = x({
  name: "VarOption",
  directives: {
    Ripple: ze
  },
  components: {
    VarCheckbox: ir
  },
  props: Ob,
  setup(e) {
    var n = I(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: i
    } = Tb(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), m = (y) => {
      n.value = y;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return le([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), i(p), {
      n: Pb,
      classes: Vb,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
hd.render = Eb;
const Gr = hd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var LS = Gr, Mb = {
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
  onClick: Y(),
  "onUpdate:show": Y()
};
function Ib(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !dt(e);
}
var {
  n: Dl
} = ee("overlay");
const qr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Mb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ct(() => e.show, 1), {
      disabled: o
    } = fi(), i = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    qt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Me({
      class: Dl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: Dl("--fade")
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
        return re(qa, {
          to: u,
          disabled: o.value
        }, Ib(d = s()) ? d : {
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
var RS = qr, Bb = {
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
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: Nb,
  classes: Db
} = ee("pagination"), Ab = ["item-mode", "onClick"];
function zb(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), i = Ae("ripple");
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [Se((h(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [W(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), T(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = Ai((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [be(
        " / " + ne(e.pageCount) + " ",
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
    )) : (h(!0), T(
      Pe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => Se((h(), T(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [be(
          ne(l),
          1
          /* TEXT */
        )],
        10,
        Ab
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((h(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [W(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), T(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), T(
            Pe,
            null,
            Be(e.sizeOption, (l, s) => Se((h(), me(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ve(() => [be(
                  ne(l) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
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
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), re(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), re(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = Ai((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
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
        class: c(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var gd = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: or,
    VarInput: fr
  },
  directives: {
    Ripple: ze
  },
  props: Bb,
  setup(e) {
    var n = I(!1), r = I(""), a = I("1"), t = I(!1), o = I(!1), i = I(L(e.current) || 1), l = I(L(e.size) || 10), s = I([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(l.value))), v = R(() => {
      var C = l.value * (i.value - 1) + 1, B = Math.min(l.value * i.value, L(e.total));
      return [C, B];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (C, B) => _e(C) ? !1 : B === 1 ? t.value : o.value, p = (C, B) => _e(C) ? "basic" : B === 1 ? "head" : "tail", y = (C, B) => {
      C === i.value || e.disabled || (_e(C) ? i.value = C : C === "prev" ? i.value > 1 && (i.value -= 1) : C === "next" ? i.value < d.value && (i.value += 1) : C === "..." && (B === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, V = (C) => {
      l.value = C, n.value = !1;
    }, P = (C) => {
      var B = /^[1-9][0-9]*$/;
      return B.test(C);
    }, w = (C, B, S) => {
      if (S.target.blur(), P(B)) {
        var D = L(B);
        D > d.value && (D = d.value, a.value = "" + D), D !== i.value && (i.value = D);
      }
      C === "quick" && (r.value = ""), C === "simple" && !P(B) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (C) => {
      var [B, S] = C;
      i.value = L(B) || 1, l.value = L(S || 10);
    }), le([i, l, d], (C, B) => {
      var [S, D, O] = C, [z, M] = B, b = [], {
        maxPagerCount: k,
        total: j,
        onChange: Q
      } = e, F = Math.ceil(L(j) / L(M)), E = O - (k - u.value) - 1;
      if (a.value = "" + S, O - 2 > k) {
        if (z === void 0 || O !== F)
          for (var H = 2; H < k + 2; H++)
            b.push(H);
        if (S <= k && S < E) {
          b = [];
          for (var U = 1; U < k + 1; U++)
            b.push(U + 1);
          t.value = !0, o.value = !1;
        }
        if (S > k && S < E) {
          b = [];
          for (var X = 1; X < k + 1; X++)
            b.push(S + X - u.value);
          t.value = S === 2 && k === 1, o.value = !1;
        }
        if (S >= E) {
          b = [];
          for (var N = 1; N < k + 1; N++)
            b.push(O - (k - N) - 1);
          t.value = !1, o.value = !0;
        }
        b = [1, "...", ...b, "...", O];
      } else
        for (var Z = 1; Z <= O; Z++)
          b.push(Z);
      s.value = b, z !== void 0 && O > 0 && $(Q, S, D), $(e["onUpdate:current"], S), $(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Nb,
      classes: Db,
      pack: He,
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
      clickSize: V,
      setPage: w,
      toNumber: L
    };
  }
});
gd.render = zb;
const Kr = gd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var US = Kr, Lb = {
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
  onClick: Y()
}, {
  n: Rb,
  classes: Ub
} = ee("paper");
function Yb(e, n) {
  var r = Ae("ripple");
  return Se((h(), T(
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
var yd = x({
  name: "VarPaper",
  directives: {
    Ripple: ze
  },
  props: Lb,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: Rb,
      classes: Ub,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
yd.render = Yb;
const Xr = yd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var YS = Xr;
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
var Fb = Qo({
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
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, Ke(ft, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Hb,
  classes: jb
} = ee("picker"), Al = 300, Wb = 15, zl = 0, Gb = ["onTouchstart", "onTouchmove", "onTouchend"], qb = ["onTransitionend"];
function Kb(e, n) {
  var r = ie("var-button");
  return h(), me(
    Xa(e.dynamic ? e.n("$-popup") : e.Transition),
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
            class: c(e.n("toolbar"))
          },
          [W(e.$slots, "cancel", {}, () => [re(
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
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
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
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), W(e.$slots, "confirm", {}, () => [re(
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
        )) : _("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), T(
            Pe,
            null,
            Be(e.scrollColumns, (a) => (h(), T(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: On((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                [(h(!0), T(
                  Pe,
                  null,
                  Be(a.column.texts, (t) => (h(), T(
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
                      ne(e.textFormatter(t, a.columnIndex)),
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
                qb
              )],
              42,
              Gb
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
var bd = x({
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: fn
  },
  inheritAttrs: !1,
  props: Fb,
  setup(e) {
    var n = I([]), r = R(() => Ne(e.optionHeight)), a = R(() => Ne(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), i = [], l = (b, k) => {
      k.scrollEl = b;
    }, s = (b) => {
      $(e["onUpdate:show"], b);
    }, u = (b) => {
      var k = r.value + t.value, j = t.value - b.column.texts.length * r.value;
      b.translate >= k && (b.translate = k), b.translate <= j && (b.translate = j);
    }, d = (b, k) => {
      var {
        length: j
      } = b.column.texts;
      return k = k >= j ? j - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (b) => {
      var k = Math.round((t.value - b.translate) / r.value);
      return d(b, k);
    }, f = () => {
      var b = n.value.map((j) => j.column.texts[j.index]), k = n.value.map((j) => j.index);
      return {
        texts: b,
        indexes: k
      };
    }, m = function(b, k, j, Q) {
      Q === void 0 && (Q = !1);
      var F = t.value - d(b, k) * r.value;
      F === b.translate && (b.scrolling = !1, !Q && D(b)), b.translate = F, b.duration = j;
    }, p = (b, k, j) => {
      b.translate += Math.abs(k / j) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (b, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = oo(k.scrollEl);
    }, g = (b, k) => {
      if (k.touching) {
        var {
          clientY: j
        } = b.touches[0], Q = k.prevY !== void 0 ? j - k.prevY : 0;
        k.prevY = j, k.translate += Q, u(k);
        var F = performance.now();
        F - k.momentumTime > Al && (k.momentumTime = F, k.momentumPrevY = k.translate);
      }
    }, V = (b, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var j = k.translate - k.momentumPrevY, Q = performance.now() - k.momentumTime, F = Math.abs(j) >= Wb && Q <= Al;
      F && p(k, j, Q), k.index = v(k), m(k, k.index, F ? 1e3 : 200);
    }, P = (b) => {
      b.scrolling = !1, D(b);
    }, w = (b) => b.map((k, j) => {
      var Q, F = we(k) ? {
        texts: k
      } : k, E = {
        id: zl++,
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
      return m(E, E.index, 0, !0), E;
    }), C = (b) => {
      var k = [];
      return B(k, b, 0, !0), k;
    }, B = function(b, k, j, Q) {
      if (Q === void 0 && (Q = !1), we(k) && k.length) {
        var F, E = Q && (F = e.cascadeInitialIndexes[b.length]) != null ? F : 0, H = {
          id: zl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: E,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((U) => U[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        b.push(H), m(H, H.index, 0, !0), B(b, H.columns[H.index].children, j + 1, Q);
      }
    }, S = (b) => {
      n.value.splice(n.value.indexOf(b) + 1), B(n.value, b.columns[b.index].children, b.columnIndex + 1);
    }, D = (b) => {
      var {
        cascade: k,
        onChange: j
      } = e;
      k && S(b);
      var Q = n.value.some((U) => U.scrolling);
      if (!Q) {
        var {
          texts: F,
          indexes: E
        } = f(), H = E.every((U, X) => U === i[X]);
        H || (i = [...E], $(j, F, E));
      }
    }, O = () => {
      if (e.cascade) {
        var b = n.value.find((k) => k.scrolling);
        b && (b.translate = oo(b.scrollEl), b.index = v(b), m(b, b.index, 0, !0), b.scrolling = !1, S(b));
      } else
        n.value.forEach((k) => {
          k.translate = oo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, z = () => {
      O();
      var {
        texts: b,
        indexes: k
      } = f();
      i = [...k], $(e.onConfirm, b, k);
    }, M = () => {
      O();
      var {
        texts: b,
        indexes: k
      } = f();
      i = [...k], $(e.onCancel, b, k);
    };
    return le(() => e.columns, (b) => {
      n.value = e.cascade ? C(zi(b)) : w(zi(b));
      var {
        indexes: k
      } = f();
      i = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Hb,
      classes: jb,
      pack: He,
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
      handleTouchend: V,
      handleTransitionend: P,
      confirm: z,
      cancel: M,
      dt: jt
    };
  }
});
bd.render = Kb;
const cr = bd;
var nn;
function $a(e) {
  return new Promise((n) => {
    $a.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Za(cr, a, {
      onConfirm: (o, i) => {
        $(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (o, i) => {
        $(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), nn === a && (nn = null);
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
cr.install = function(e) {
  e.component(cr.name, cr);
};
$a.Component = cr;
$a.install = function(e) {
  e.component(cr.name, cr);
};
$a.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
var FS = cr;
function Xb(e) {
  return ["linear", "circle"].includes(e);
}
var Zb = {
  mode: {
    type: String,
    default: "linear",
    validator: Xb
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
  n: Jb,
  classes: Qb
} = ee("progress"), _b = ["viewBox"], xb = ["cx", "cy", "r", "stroke-width"], e0 = ["cx", "cy", "r", "stroke-width"];
function n0(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), T(
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
        [e.track ? (h(), T(
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
        )) : _("v-if", !0), A(
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
      ), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.linearProps.roundValue),
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
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), T(
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
          xb
        )) : _("v-if", !0), A(
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
          e0
        )],
        14,
        _b
      )), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.circleProps.roundValue),
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
var wd = x({
  name: "VarProgress",
  props: Zb,
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
      } = e, i = "0 0 " + Ne(a) + " " + Ne(a), l = L(o) > 100 ? 100 : Math.round(L(o)), s = (Ne(a) - Ne(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: i,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: Jb,
      classes: Qb,
      toSizeUnit: he,
      multiplySizeUnit: Je,
      linearProps: n,
      circleProps: r
    };
  }
});
wd.render = n0;
const Zr = wd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var HS = Zr, r0 = {
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
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
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
function a0(e) {
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
  n: Rl,
  classes: t0
} = ee("pull-refresh"), Ul = 150;
function o0(e, n) {
  var r = ie("var-icon");
  return h(), T(
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
      [re(
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
var Cd = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: r0,
  setup(e) {
    var n, r, a = I(0), t = I(null), o = I(null), i = I(0), l = I(-999), s = I("arrow-down"), u = I("default"), d = I(!1), v = 0, f = 0, m = I(!0), p = R(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = R(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: V.value ? e.successBgColor : e.bgColor,
      color: V.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * a.value)), V = R(() => u.value === "success"), P = () => new Promise((M) => {
      window.setTimeout(() => {
        m.value = !0, M();
      }, Ul);
    }), w = (M) => {
      var b = "classList" in n ? n : document.body;
      b.classList[M](Rl() + "--lock");
    }, C = (M) => {
      v = M.touches[0].clientY, f = 0;
    }, B = (M) => {
      if (p.value) {
        var b = Wt(n);
        if (!(b > 0)) {
          var k = b === 0, j = M.touches[0];
          f = j.clientY - v, k && f >= 0 && M.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = M.touches[0].clientY), k && l.value > a.value && w("add");
          var Q = (M.touches[0].clientY - i.value) / 2 + a.value;
          l.value = Q >= g.value ? g.value : Q, l.value >= g.value * 0.2 ? (m.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, S = /* @__PURE__ */ function() {
      var M = a0(function* () {
        p.value && (d.value = !0, l.value >= g.value * 0.2 ? (yield r, u.value = "loading", l.value = g.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), D = () => {
      var {
        width: M
      } = o.value.getBoundingClientRect();
      l.value = -(M + M * 0.25), a.value = -(M + M * 0.25);
    }, O = () => {
      n = e.target ? ns(e.target, "PullRefresh") : Va(t.value);
    }, z = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (M) => {
      M === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, z();
      }, L(e.successDuration)));
    }), tn(() => {
      O(), D();
    }), ba(t, "touchmove", B), {
      n: Rl,
      classes: t0,
      iconHasChanged: m,
      ICON_TRANSITION: Ul,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: B,
      touchEnd: S,
      iconName: s,
      controlStyle: y,
      isSuccess: V
    };
  }
});
Cd.render = o0;
const Jr = Cd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var jS = Jr, i0 = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Sd = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), kd = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function l0() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(Sd), {
    length: r
  } = Mn(kd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function s0() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(Sd), {
    index: r
  } = In(kd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: u0,
  classes: d0
} = ee("radio");
function v0(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Me({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
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
        }, () => [re(
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
    ), re(
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
var $d = x({
  name: "VarRadio",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: i0,
  setup(e) {
    var n = I(!1), r = R(() => n.value === e.checkedValue), a = I(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = s0(), {
      form: i,
      bindForm: l
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), f = (C) => {
      Ve(() => {
        var {
          validateTrigger: B,
          rules: S,
          modelValue: D
        } = e;
        u(B, C, S, D);
      });
    }, m = (C) => {
      var {
        checkedValue: B,
        onChange: S
      } = e;
      t && n.value === B || (n.value = C, $(e["onUpdate:modelValue"], n.value), $(S, n.value), t == null || t.onToggle(B), f("onChange"));
    }, p = (C) => {
      var {
        disabled: B,
        readonly: S,
        uncheckedValue: D,
        checkedValue: O,
        onClick: z
      } = e;
      i != null && i.disabled.value || B || ($(z, C), !(i != null && i.readonly.value || S) && (a.value = !0, m(r.value ? D : O)));
    }, y = (C) => {
      var {
        checkedValue: B,
        uncheckedValue: S
      } = e;
      n.value = C === B ? B : S;
    }, g = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, V = () => d(e.rules, e.modelValue), P = (C) => {
      var {
        uncheckedValue: B,
        checkedValue: S
      } = e, D = ![B, S].includes(C);
      D && (C = r.value ? B : S), m(C);
    };
    le(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var w = {
      sync: y,
      validate: V,
      resetValidation: v,
      reset: g
    };
    return $(o, w), $(l, w), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: u0,
      classes: d0,
      handleClick: p,
      toggle: P,
      reset: g,
      validate: V,
      resetValidation: v
    };
  }
});
$d.render = v0;
const Qr = $d;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var WS = Qr;
function f0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var c0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: f0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: m0,
  classes: p0
} = ee("radio-group");
function h0(e, n) {
  var r = ie("var-form-details");
  return h(), T(
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
    ), re(
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
var Td = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: c0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = l0(), {
      bindForm: t
    } = hn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = pn(), u = R(() => o.value), d = (g) => {
      Ve(() => {
        var {
          validateTrigger: V,
          rules: P,
          modelValue: w
        } = e;
        i(V, g, P, w);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: V
      } = g;
      return V(e.modelValue);
    }), f = (g) => {
      $(e["onUpdate:modelValue"], g), $(e.onChange, g), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, y), a(y), {
      errorMessage: o,
      n: m0,
      classes: p0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
Td.render = h0;
const _r = Td;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var GS = _r, g0 = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Qa
} = ee("rate"), y0 = ["onClick"];
function b0(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), T(
        Pe,
        null,
        Be(e.toNumber(e.count), (o) => Se((h(), T(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
            class: c(e.getClass(o)),
            onClick: (i) => e.handleClick(o, i)
          },
          [re(
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
          y0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
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
  props: g0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = pn(), l = (g) => {
      var {
        count: V,
        gap: P
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(V) ? he(P) : 0
      };
    }, s = (g) => {
      var {
        name: V,
        color: P
      } = u(g);
      return {
        [Qa("content")]: !0,
        [Qa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Qa("--error")]: a.value,
        [Qa("--primary")]: V !== e.emptyIcon && !P
      };
    }, u = (g) => {
      var {
        modelValue: V,
        disabled: P,
        disabledColor: w,
        color: C,
        half: B,
        emptyColor: S,
        icon: D,
        halfIcon: O,
        emptyIcon: z
      } = e, M = C;
      return (P || n != null && n.disabled.value) && (M = w), g <= L(V) ? {
        color: M,
        name: D
      } : B && g <= L(V) + 0.5 ? {
        color: M,
        name: O
      } : {
        color: P || n != null && n.disabled.value ? w : S,
        name: z
      };
    }, d = (g, V) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = V.target;
        V.offsetX <= Math.floor(P / 2) && (g -= 0.5);
      }
      $(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), m = (g, V) => {
      var {
        readonly: P,
        disabled: w,
        onChange: C
      } = e;
      P || w || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, V), $(C, g), f());
    }, p = () => {
      $(e["onUpdate:modelValue"], 0), i();
    }, y = {
      reset: p,
      validate: v,
      resetValidation: i
    };
    return $(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: m,
      reset: p,
      validate: v,
      resetValidation: i,
      toSizeUnit: he,
      toNumber: L,
      n: Qa
    };
  }
});
Od.render = b0;
const xr = Od;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var qS = xr;
function w0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var C0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: w0
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
}, S0 = (e) => (Oa(""), e = e(), Pa(), e), k0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, $0 = /* @__PURE__ */ S0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), T0 = [$0];
function O0(e, n) {
  return h(), T("svg", k0, T0);
}
var Pd = x({});
Pd.render = O0;
const P0 = Pd;
var V0 = (e) => (Oa(""), e = e(), Pa(), e), E0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, M0 = /* @__PURE__ */ V0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), I0 = [M0];
function B0(e, n) {
  return h(), T("svg", E0, I0);
}
var Vd = x({});
Vd.render = B0;
const N0 = Vd;
var D0 = (e) => (Oa(""), e = e(), Pa(), e), A0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, z0 = /* @__PURE__ */ D0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), L0 = [z0];
function R0(e, n) {
  return h(), T("svg", A0, L0);
}
var Ed = x({});
Ed.render = R0;
const U0 = Ed;
var {
  n: Y0,
  classes: F0
} = ee("result");
function H0(e, n) {
  return h(), T(
    Pe,
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
var Md = x({
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
      n: Y0,
      classes: F0,
      toNumber: L
    };
  }
});
Md.render = H0;
const j0 = Md;
var W0 = (e) => (Oa(""), e = e(), Pa(), e), G0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, q0 = /* @__PURE__ */ W0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), K0 = [q0];
function X0(e, n) {
  return h(), T("svg", G0, K0);
}
var Id = x({});
Id.render = X0;
const Z0 = Id;
var J0 = (e) => (Oa(""), e = e(), Pa(), e), Q0 = {
  viewBox: "-4 -4 32 32"
}, _0 = /* @__PURE__ */ J0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), x0 = [_0];
function e1(e, n) {
  return h(), T("svg", Q0, x0);
}
var Bd = x({});
Bd.render = e1;
const n1 = Bd;
var {
  n: r1,
  classes: a1
} = ee("result");
function t1(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (h(), T(
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
        [(h(), me(
          Xa(e.type),
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
        class: c(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Nd = x({
  name: "VarResult",
  components: {
    Info: P0,
    Success: j0,
    Warning: U0,
    Error: N0,
    Question: Z0,
    Empty: n1
  },
  props: C0,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: r1,
      classes: a1,
      toNumber: L,
      toPxNum: Ne,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
Nd.render = t1;
const ea = Nd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var KS = ea;
function o1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function i1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var l1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: o1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: i1
  },
  onClick: Y()
}, {
  n: s1,
  classes: u1
} = ee("row");
function d1(e, n) {
  return h(), T(
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
var Dd = x({
  name: "VarRow",
  props: l1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Nm(), t = R(() => {
      var s = Ne(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, i = (s) => {
      $(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(l), {
      n: s1,
      classes: u1,
      average: t,
      handleClick: i,
      padStartFlex: Et
    };
  }
});
Dd.render = d1;
const na = Dd;
na.install = function(e) {
  e.component(na.name, na);
};
var XS = na;
function v1(e) {
  return ["left", "right", "center"].includes(e);
}
var f1 = {
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
    validator: v1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onClose: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: uo,
  classes: c1
} = ee("select"), m1 = {
  key: 1
};
function p1(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), o = ie("var-form-details");
  return h(), T(
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
        [re(
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
                [e.isEmptyModelValue ? _("v-if", !0) : W(e.$slots, "selected", {
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
                      class: c(e.n("chips"))
                    },
                    [(h(!0), T(
                      Pe,
                      null,
                      Be(e.labels, (i) => (h(), me(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = On(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [be(
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
                  )) : (h(), T(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (h(), T(
                  "span",
                  m1,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), W(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [re(
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
              ne(e.placeholder),
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
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
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
    )) : _("v-if", !0), re(
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
var Ad = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: lr,
    VarFormDetails: je
  },
  props: f1,
  setup(e) {
    var n = I(null), r = I(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = I(""), i = I([]), l = R(() => Nn(e.modelValue)), s = I("0px"), u = I(0), {
      bindForm: d,
      form: v
    } = hn(), {
      length: f,
      options: m,
      bindOptions: p
    } = $b(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: V,
      // expose
      resetValidation: P
    } = pn(), w = I(null), C = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        i.value = ae.map(D);
      }
      !G && !Nn(J) && (o.value = D(J)), !G && Nn(J) && (o.value = "");
    }, B = (G) => {
      Ve(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: oe
        } = e;
        g(J, G, ae, oe);
      });
    }, S = (G) => {
      var {
        value: J,
        label: ae
      } = G;
      return J.value != null ? J.value : ae.value;
    }, D = (G) => {
      var J, ae, oe = m.find((ge) => {
        var {
          value: pe
        } = ge;
        return pe.value === G;
      });
      return oe || (oe = m.find((ge) => {
        var {
          label: pe
        } = ge;
        return pe.value === G;
      })), (J = (ae = oe) == null ? void 0 : ae.label.value) != null ? J : "";
    }, O = () => {
      var {
        hint: G,
        modelValue: J
      } = e;
      if (!G && !Nn(J))
        return uo("--placeholder-hidden");
      if (G && (!Nn(J) || r.value))
        return uo("--placeholder-hint");
    }, z = () => n.value && window.getComputedStyle(n.value).width || "0px", M = () => {
      var {
        disabled: G,
        readonly: J,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (s.value = z(), u.value = Ne(e.offsetY), r.value = !0, $(ae), B("onFocus"));
    }, b = () => {
      var {
        disabled: G,
        readonly: J,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || ($(ae), B("onBlur"));
    }, k = (G) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe ? m.filter((Fe) => {
          var {
            selected: en
          } = Fe;
          return en.value;
        }).map(S) : S(G);
        $(e["onUpdate:modelValue"], pe), $(ge, pe), B("onChange"), !oe && (r.value = !1);
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
        var pe = ae ? [] : void 0;
        $(e["onUpdate:modelValue"], pe), $(ge, pe), B("onClear");
      }
    }, Q = (G) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || ($(ae, G), B("onClick"));
    }, F = (G) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe, Fe = m.find((on) => {
          var {
            label: Le
          } = on;
          return Le.value === G;
        }), en = pe.filter((on) => {
          var Le;
          return on !== ((Le = Fe.value.value) != null ? Le : Fe.label.value);
        });
        $(e["onUpdate:modelValue"], en), $(ge, en), B("onClose");
      }
    }, E = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        m.forEach((oe) => oe.sync(ae.includes(S(oe))));
      } else
        m.forEach((oe) => oe.sync(J === S(oe)));
      C();
    }, H = () => {
      s.value = z(), u.value = Ne(e.offsetY), r.value = !0;
    }, U = () => {
      r.value = !1;
    }, X = () => V(e.rules, e.modelValue), N = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    le(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G && !we(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, E, {
      deep: !0
    }), le(() => f.value, E);
    var Z = {
      wrapWidth: R(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: k,
      reset: N,
      validate: X,
      resetValidation: P
    };
    return p(Z), $(d, Z), {
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
      n: uo,
      classes: c1,
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
      blur: U
    };
  }
});
Ad.render = p1;
const ra = Ad;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ZS = ra, h1 = {
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
  n: g1,
  classes: y1
} = ee("skeleton");
function b1(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), T(
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), T(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), T(
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
          )) : _("v-if", !0), (h(!0), T(
            Pe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (h(), T(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var zd = x({
  name: "VarSkeleton",
  props: h1,
  setup() {
    return {
      n: g1,
      classes: y1,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
zd.render = b1;
const aa = zd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var JS = aa;
function w1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var C1 = {
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
    validator: w1
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
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Yl,
  classes: S1
} = ee("slider"), k1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function $1(e, n) {
  var r = ie("var-form-details");
  return h(), T(
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
      ), (h(!0), T(
        Pe,
        null,
        Be(e.thumbList, (a) => (h(), T(
          "div",
          {
            class: c(e.n("thumb")),
            key: a.enumValue,
            style: q({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: On((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: On((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [W(e.$slots, "button", {
            currentValue: a.text
          }, () => [A(
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
          ), A(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
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
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
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
              ne(a.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          k1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      r,
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
var Ld = x({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: C1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = pn(), l = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = I(null), v = I(0), f = I(!1), m = Ee({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), p = R(() => L(e.max) - L(e.min)), y = R(() => v.value / p.value * L(e.step)), g = R(() => {
      var {
        modelValue: U,
        range: X
      } = e, N = [];
      return X && we(U) ? N = [{
        value: B(U[0]),
        enumValue: Ie.First,
        text: S(U[0])
      }, {
        value: B(U[1]),
        enumValue: Ie.Second,
        text: S(U[1])
      }] : _e(U) && (N = [{
        value: B(U),
        enumValue: Ie.First,
        text: S(U)
      }]), N;
    }), V = R(() => {
      var {
        activeColor: U,
        range: X,
        modelValue: N
      } = e, Z = X && we(N) ? B(Math.min(N[0], N[1])) : 0, G = X && we(N) ? B(Math.max(N[0], N[1])) - Z : B(N);
      return {
        width: G + "%",
        left: Z + "%",
        background: U
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), w = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (U) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : m[U].active, B = (U) => {
      var {
        min: X,
        max: N
      } = e;
      return U < L(X) ? 0 : U > L(N) ? 100 : (U - L(X)) / p.value * 100;
    }, S = (U) => {
      if (!_e(U))
        return 0;
      var X = U;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var N = parseInt("" + X, 10) === X;
      return N ? X : L(X.toPrecision(5));
    }, D = (U, X) => {
      var N = [], {
        step: Z,
        range: G,
        modelValue: J,
        onChange: ae,
        min: oe
      } = e, ge = L(Z), pe = Math.round(U / y.value), Fe = pe * ge + L(oe), en = m[X].percentValue * ge + L(oe);
      if (m[X].percentValue = pe, G && we(J) && (N = X === Ie.First ? [Fe, J[1]] : [J[0], Fe]), en !== Fe) {
        var on = G ? N.map((Le) => S(Le)) : S(Fe);
        $(ae, on), $(e["onUpdate:modelValue"], on), u();
      }
    }, O = (U) => {
      if (!e.range)
        return Ie.First;
      var X = m[Ie.First].percentValue * y.value, N = m[Ie.Second].percentValue * y.value, Z = Math.abs(U - X), G = Math.abs(U - N);
      return Z <= G ? Ie.First : Ie.Second;
    }, z = (U, X) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || w.value) && ($(e.onStart), f.value = !0, m[X].startPosition = U.touches[0].clientX);
    }, M = (U, X) => {
      if (!(P.value || w.value || !f.value)) {
        var N = U.touches[0].clientX - m[X].startPosition + m[X].currentLeft;
        m[X].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, X);
      }
    }, b = (U) => {
      var {
        range: X,
        modelValue: N,
        onEnd: Z,
        step: G,
        min: J
      } = e;
      if (!(P.value || w.value)) {
        var ae = [];
        m[U].currentLeft = m[U].percentValue * y.value, m[U].active = !1;
        var oe = m[U].percentValue * L(G) + L(J);
        X && we(N) && (ae = U === Ie.First ? [oe, N[1]] : [N[0], oe]), $(Z, X ? ae : oe), f.value = !1;
      }
    }, k = (U) => {
      if (!(P.value || w.value) && !U.target.closest("." + Yl("thumb"))) {
        var X = U.clientX - Pv(U.currentTarget), N = O(X);
        D(X, N), b(N);
      }
    }, j = () => {
      var U = L(e.step);
      return isNaN(U) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : U < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: U,
        modelValue: X
      } = e;
      return U && !we(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !U && we(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : U && we(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(U, X) {
      U === void 0 && (U = e.modelValue), X === void 0 && (X = L(e.step));
      var N = (Z) => {
        var {
          min: G,
          max: J
        } = e;
        return Z < L(G) ? 0 : Z > L(J) ? p.value / X : (Z - L(G)) / X;
      };
      e.range && we(U) ? (m[Ie.First].percentValue = N(U[0]), m[Ie.First].currentLeft = m[Ie.First].percentValue * y.value, m[Ie.Second].percentValue = N(U[1]), m[Ie.Second].currentLeft = m[Ie.Second].percentValue * y.value) : _e(U) && (m[Ie.First].currentLeft = N(U) * y.value);
    }, E = () => {
      var U = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], U), i();
    }, H = {
      reset: E,
      validate: l,
      resetValidation: i
    };
    return $(n, H), le([() => e.modelValue, () => e.step], (U) => {
      var [X, N] = U;
      !j() || !Q() || f.value || F(X, L(N));
    }), le(v, () => F()), tn(() => {
      !j() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Yl,
      classes: S1,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: V,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: m,
      thumbList: g,
      multiplySizeUnit: Je,
      toNumber: L,
      showLabel: C,
      start: z,
      move: M,
      end: b,
      click: k
    };
  }
});
Ld.render = $1;
const ta = Ld;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var QS = ta;
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
function T1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function O1(e) {
  return Mi.includes(e);
}
var Rd = {
  type: {
    type: String,
    validator: O1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: T1
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
  loadingType: Ke(er, "type"),
  loadingSize: Ke(er, "size"),
  loadingRadius: Ke(er, "radius"),
  loadingColor: _o({}, Ke(er, "color"), {
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
  onOpen: Y(),
  // 打开动画结束时的回调
  onOpened: Y(),
  // 关闭时的回调函数
  onClose: Y(),
  // 关闭动画结束时的回调
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: P1,
  classes: V1
} = ee("snackbar"), E1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function M1(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return Se((h(), T(
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
          ne(e.content),
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
        [e.iconName ? (h(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (h(), me(
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
  )), [[Ka, e.show]]);
}
var Ud = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: wn,
    VarIcon: $e
  },
  props: Rd,
  setup(e) {
    var n = I(null), {
      zIndex: r
    } = ct(() => e.show, 1);
    qt(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? E1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (i) => {
      i ? ($(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), $(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), tn(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Mi,
      n: P1,
      classes: V1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Ud.render = M1;
const Yd = Ud;
var {
  n: I1
} = ee("snackbar");
function B1(e, n) {
  var r = ie("var-snackbar-core");
  return h(), me(
    qa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [re(
          r,
          Me(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [W(e.$slots, "action")]),
            default: ve(() => [W(e.$slots, "default", {}, () => [be(
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
var Fd = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Yd
  },
  props: Rd,
  setup() {
    var {
      disabled: e
    } = fi();
    return {
      n: I1,
      disabled: e
    };
  }
});
Fd.render = B1;
const oa = Fd;
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, lt.apply(this, arguments);
}
function N1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !dt(e);
}
var Mi = ["loading", "success", "warning", "info", "error"], Fl = 0, xo = !1, Hd, ja = !1, jd = {
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
}, mn = Ee([]), Ii = jd, D1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, A1 = {
  setup() {
    return () => {
      var e = mn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), ja && (a.position = "top");
        var i = ja ? "relative" : "absolute", l = lt({
          position: i
        }, F1(a.position));
        return re(Yd, Me(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(bv, Me(D1, {
        style: {
          zIndex: sn.zIndex
        },
        onAfterEnter: z1,
        onAfterLeave: L1
      }), N1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = U1(e), r = Ee(lt({}, Ii, n));
  r.show = !0, xo || (xo = !0, Hd = Za(A1).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: Fl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || ja)
    R1(t);
  else {
    var o = "update-" + Fl;
    Y1(r, o);
  }
  return {
    clear() {
      !ja && mn.length ? mn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Mi.forEach((e) => {
  jn[e] = (n) => (ii(n) ? n.type = e : n = {
    content: n,
    type: e
  }, jn(n));
});
jn.install = function(e) {
  e.component(oa.name, oa);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== ja && (mn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), ja = e);
};
jn.clear = function() {
  mn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  Ii = e;
};
jn.resetDefaultOptions = function() {
  Ii = jd;
};
jn.Component = oa;
function z1(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === L(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function L1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && ($(Hd), mn = Ee([]), xo = !1);
}
function R1(e) {
  mn.push(e);
}
function U1(e) {
  return e === void 0 && (e = {}), Ge(e) ? {
    content: e
  } : e;
}
function Y1(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = lt({}, r.reactiveSnackOptions, e), r._update = n;
}
function F1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
oa.install = function(e) {
  e.component(oa.name, oa);
};
var _S = oa;
const ei = jn;
var Wd = (e) => ["mini", "small", "normal", "large"].includes(e), H1 = (e) => Wd(e) || we(e) || _e(e) || Ge(e), j1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), W1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), G1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: H1
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
    validator: j1
  },
  align: {
    type: String,
    validator: W1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function q1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== i ? l = ln(e) + " " + n + " " + ln(e) + " 0" : l = ln(e) + " 0" : t === "space-around" ? l = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? l = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === i ? l = ln(e) + " 0 " + ln(e) + " " + ln(n) : l = ln(e) + " " + ln(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: vo,
  classes: K1
} = ee("space");
const ia = x({
  name: "VarSpace",
  props: G1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : we(t) ? t.map(he) : [he(t), he(t)];
    return () => {
      var t, {
        inline: o,
        justify: i,
        align: l,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = $(r.default)) != null ? t : [], f = Wd(d), [m, p] = a(d, f), y = (P) => {
        var w = [];
        return P.forEach((C) => {
          if (C.type !== wv) {
            if (C.type === Pe && we(C.children)) {
              C.children.forEach((B) => {
                w.push(B);
              });
              return;
            }
            w.push(C);
          }
        }), w;
      };
      v = y(v);
      var g = v.length - 1, V = v.map((P, w) => {
        var C = q1(m, p, {
          direction: u,
          justify: i,
          index: w,
          lastIndex: g
        });
        return re("div", {
          style: {
            margin: C
          }
        }, [P]);
      });
      return re("div", {
        class: K1(vo(), vo("$--box"), [o, vo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Et(i),
          alignItems: Et(l),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [V]);
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var xS = ia, X1 = {
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
}, Gd = Symbol("STEPS_BIND_STEP_KEY"), qd = Symbol("STEPS_COUNT_STEP_KEY");
function Z1() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(Gd), {
    length: r
  } = Mn(qd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function J1() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(Gd), {
    index: r
  } = In(qd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Q1,
  classes: _1
} = ee("step"), x1 = {
  key: 3
};
function ew(e, n) {
  var r = ie("var-icon");
  return h(), T(
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
          [e.isActive ? (h(), me(
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
          )) : e.isCurrent && e.currentIcon ? (h(), me(
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
          )) : e.inactiveIcon ? (h(), me(
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
          )) : (h(), T(
            "span",
            x1,
            ne(e.index + 1),
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
      ), e.isLastChild ? _("v-if", !0) : (h(), T(
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
var Kd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: X1,
  setup() {
    var e = I(null), n = I(""), r = I(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = J1(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => i.value === a.value), m = R(() => a.value !== -1 && i.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = (V) => {
      d.value === "horizontal" && (e.value = V);
    };
    return o(p), le(l, (V) => {
      if (r.value = V - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: Q1,
      classes: _1,
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
Kd.render = ew;
const la = Kd;
la.install = function(e) {
  e.component(la.name, la);
};
var ek = la;
function nw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var rw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: nw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: aw
} = ee("steps");
function tw(e, n) {
  return h(), T(
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
var Xd = x({
  name: "VarSteps",
  props: rw,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: i
    } = Z1(), l = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: aw
    };
  }
});
Xd.render = tw;
const sa = Xd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var nk = sa, ow = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: iw
} = ee("style-provider"), lw = x({
  name: "VarStyleProvider",
  props: ow,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Zl(e.tag, {
      class: iw(),
      style: os(e.styleVars)
    }, $(r.default));
  }
});
const ua = lw;
var fo = [];
function st(e) {
  fo.forEach((r) => document.documentElement.style.removeProperty(r)), fo.length = 0;
  var n = os(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), fo.push(a);
  });
}
st.Component = ua;
ua.install = function(e) {
  e.component(ua.name, ua);
};
st.install = function(e) {
  e.component(ua.name, ua);
};
var rk = ua, sw = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: uw,
  classes: dw
} = ee("switch");
function vw(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Ae("ripple");
  return h(), T(
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
      ), Se((h(), T(
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
          [e.loading ? (h(), me(
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
    ), re(
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
var Zd = x({
  name: "VarSwitch",
  components: {
    VarLoading: wn,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: sw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = pn(), l = () => o(e.rules, e.modelValue), s = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = R(() => {
      var {
        size: p,
        modelValue: y,
        color: g,
        closeColor: V,
        loadingColor: P,
        activeValue: w
      } = e;
      return {
        handle: {
          width: Je(p),
          height: Je(p),
          backgroundColor: y === w ? g : V,
          color: P
        },
        ripple: {
          left: y === w ? Je(p, 0.5) : "-" + Je(p, 0.5),
          color: y === w ? g : V || "#999",
          width: Je(p, 2),
          height: Je(p, 2)
        },
        track: {
          height: Je(p, 0.72),
          width: Je(p, 1.9),
          borderRadius: Je(p, 2 / 3),
          filter: y === w || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === w ? g : V
        },
        switch: {
          height: Je(p, 1.2),
          width: Je(p, 2)
        }
      };
    }), d = R(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Je(p, 0.4);
    }), v = (p) => {
      var {
        onClick: y,
        onChange: g,
        disabled: V,
        loading: P,
        readonly: w,
        modelValue: C,
        activeValue: B,
        inactiveValue: S,
        "onUpdate:modelValue": D
      } = e;
      if ($(y, p), !(V || P || w || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var O = C === B ? S : B;
        $(g, O), $(D, O), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, m = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return $(n, m), {
      n: uw,
      classes: dw,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Zd.render = vw;
const da = Zd;
da.install = function(e) {
  e.component(da.name, da);
};
var ak = da, fw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Jd = Symbol("TABS_BIND_TAB_KEY");
function cw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = vi(Jd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function mw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = di(Jd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: kt,
  classes: pw
} = ee("tab");
function hw(e, n) {
  var r = Ae("ripple");
  return Se((h(), T(
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
var Qd = x({
  name: "VarTab",
  directives: {
    Ripple: ze
  },
  props: fw,
  setup(e) {
    var n = I(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = mw(), {
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
    }, V = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? kt("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? kt("$-tab--active") : kt("$-tab--inactive");
    }, P = (w) => {
      var {
        disabled: C,
        name: B,
        onClick: S
      } = e;
      C || ($(S, B ?? o.value, w), s(y));
    };
    return le(() => e.name, p), le(() => e.disabled, p), {
      n: kt,
      classes: pw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: g,
      computeColorClass: V,
      handleClick: P
    };
  }
});
Qd.render = hw;
const va = Qd;
va.install = function(e) {
  e.component(va.name, va);
};
var tk = va, _d = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function gw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = vi(_d);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function yw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = di(_d);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var bw = {
  name: {
    type: [String, Number]
  }
}, {
  n: ww,
  classes: Cw
} = ee("tab-item");
function Sw(e, n) {
  var r = ie("var-swipe-item");
  return h(), me(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
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
var xd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: bw,
  setup(e) {
    var n = I(!1), r = I(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = yw(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: ww,
      classes: Cw,
      current: n,
      initSlot: r
    };
  }
});
xd.render = Sw;
const fa = xd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var ok = fa, kw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: $w,
  classes: Tw
} = ee("table");
function Ow(e, n) {
  return h(), T(
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
    ), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ev = x({
  name: "VarTable",
  props: kw,
  setup() {
    return {
      toSizeUnit: he,
      n: $w,
      classes: Tw
    };
  }
});
ev.render = Ow;
const ca = ev;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var ik = ca;
function Hl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Pw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Hl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Hl
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
  stickyCssMode: Ke(Vt, "cssMode"),
  stickyZIndex: Ke(Vt, "zIndex"),
  offsetTop: Ke(Vt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
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
function Wl(e) {
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
  n: Vw,
  classes: Ew
} = ee("tabs");
function Mw(e, n) {
  return h(), me(
    Xa(e.sticky ? e.n("$-sticky") : e.Transition),
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
var nv = x({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Pw,
  setup(e) {
    var n = I("0px"), r = I("0px"), a = I("0px"), t = I("0px"), o = I(!1), i = I(null), l = R(() => e.active), s = R(() => e.activeColor), u = R(() => e.inactiveColor), d = R(() => e.disabledColor), v = R(() => e.itemDirection), f = I(null), {
      tabList: m,
      bindTabList: p,
      length: y
    } = cw(), g = (M) => {
      var b, k = (b = M.name.value) != null ? b : M.index.value, {
        active: j,
        onChange: Q,
        onClick: F
      } = e;
      $(e["onUpdate:active"], k), $(F, k), k !== j && $(Q, k);
    }, V = () => m.find((M) => {
      var {
        name: b
      } = M;
      return e.active === b.value;
    }), P = (M) => m.find((b) => {
      var {
        index: k
      } = b;
      return (M ?? e.active) === k.value;
    }), w = () => {
      if (y.value !== 0) {
        var {
          active: M
        } = e;
        if (_e(M)) {
          var b = M > y.value - 1 ? y.value - 1 : 0;
          return $(e["onUpdate:active"], b), P(b);
        }
      }
    }, C = () => {
      o.value = m.length >= 5;
    }, B = (M) => {
      var {
        element: b
      } = M, k = b.value;
      k && (e.layoutDirection === "horizontal" ? (n.value = k.offsetWidth + "px", a.value = k.offsetLeft + "px") : (r.value = k.offsetHeight + "px", t.value = k.offsetTop + "px"));
    }, S = (M) => {
      var {
        element: b
      } = M;
      if (o.value) {
        var k = i.value, j = b.value;
        if (e.layoutDirection === "horizontal") {
          var Q = j.offsetLeft + j.offsetWidth / 2 - k.offsetWidth / 2;
          rt(k, {
            left: Q,
            animation: po
          });
        } else {
          var F = j.offsetTop + j.offsetHeight / 2 - k.offsetHeight / 2;
          rt(k, {
            top: F,
            animation: po
          });
        }
      }
    }, D = () => {
      var M = V() || P() || w();
      !M || M.disabled.value || (C(), B(M), S(M));
    }, O = /* @__PURE__ */ function() {
      var M = Wl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), z = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: g
    };
    return p(z), le(() => y.value, /* @__PURE__ */ Wl(function* () {
      yield Pn(), D();
    })), le(() => e.active, D), ba(window, "resize", D), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: he,
      n: Vw,
      classes: Ew,
      resize: D,
      resizeSticky: O
    };
  }
});
nv.render = Mw;
const ma = nv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var lk = ma, Iw = {
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
  "onUpdate:active": Y()
};
function Gl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Gl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Gl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Nw
} = ee("tabs-items");
function Dw(e, n) {
  var r = ie("var-swipe");
  return h(), me(
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
var rv = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: Iw,
  setup(e) {
    var n = I(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = gw(), o = (f) => r.find((m) => {
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
          index: V
        } = g;
        return V.value === f;
      }), y = (m = p.name.value) != null ? m : p.index.value;
      $(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Bw(function* () {
      yield Pn(), s(e.active);
    })), {
      swipe: n,
      n: Nw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
rv.render = Dw;
const pa = rv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var sk = pa;
const Aw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, zw = {
  "--badge-default-color": "#555"
}, Lw = {
  "--button-default-color": "#303030"
}, Rw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Uw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Yw = {
  "--checkbox-unchecked-color": "#fff"
}, Fw = {
  "--chip-default-color": "#555"
}, Hw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, jw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Ww = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Gw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, qw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Kw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Xw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Zw = {
  "--popup-content-background-color": "#1e1e1e"
}, Jw = {
  "--pull-refresh-background": "#303030"
}, Qw = {
  "--radio-unchecked-color": "#fff"
}, _w = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, xw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, eC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, nC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, rC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, aC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, tC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, oC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, iC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, lC = {
  "--tabs-background": "#1e1e1e"
}, sC = {
  "--app-bar-color": "#272727"
}, uC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, dC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, vC = {
  "--menu-background-color": "#272727"
}, fC = {
  "--breadcrumb-inactive-color": "#aaa"
}, cC = {
  "--paper-background": "#303030"
}, mC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const pC = ni({
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
}, Lw, Uw, Rw, oC, jw, eC, lC, aC, Zw, Ww, Aw, Fw, zw, iC, Hw, Jw, rC, nC, Kw, tC, qw, xw, Qw, Yw, Gw, Xw, sC, uC, dC, vC, _w, fC, cC, mC);
var hC = {
  dark: pC
}, uk = null;
const ri = hC;
var vn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Qe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ql = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function gC(e) {
  return ["ampm", "24hr"].includes(e);
}
var yC = {
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
    validator: gC
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
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, av = (e, n) => e === "24hr" || n === "am", Bi = (e, n, r) => {
  var a = vn.findIndex((o) => L(o) === L(r)), t = av(e, n) ? r : Qe[a];
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
}, tv = (e) => {
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
  } = Bi(t, o, i), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: y
    } = rn(l);
    f = p === v && a > y;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: V
    } = rn(s);
    f = g === v && a < V;
  }
  if (l && s) {
    var {
      hour: P,
      minute: w
    } = rn(l), {
      hour: C,
      minute: B
    } = rn(s);
    f = C === v && a < B || P === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, ov = (e) => {
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
  } = Bi(t, o, i), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: g,
      second: V
    } = rn(s);
    m = y === f && g < l || g === l && a > V;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: w,
      second: C
    } = rn(u);
    m = P === f && w > l || w === l && a > C;
  }
  if (s && u) {
    var {
      hour: B,
      minute: S,
      second: D
    } = rn(s), {
      hour: O,
      minute: z,
      second: M
    } = rn(u);
    m = B === f && S < l || O === f && z > l || B === f && S === l && a > D || O === f && z === l && a < M;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: bC,
  classes: wC
} = ee("time-picker");
function CC(e, n) {
  return h(), T(
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
    ), (h(!0), T(
      Pe,
      null,
      Be(e.timeScales, (r, a) => (h(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        ne(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), T(
        Pe,
        null,
        Be(e.hours24, (r, a) => (h(), T(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var iv = x({
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
    } = n, a = I(null), t = I([]), o = I([]), i = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? vn : ql), u = (g, V) => {
      var P;
      g = (P = g) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? tv : ov, C = {
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
      return V && e.type === "minute" && Reflect.deleteProperty(C, "minute"), w(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? Qe[l.value] : s.value[l.value];
      return s.value === ql ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, V) => V ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (av(e.format, e.ampm))
          return t.value.includes(g);
        var V = vn.findIndex((P) => P === g);
        return o.value.includes(V);
      }
      return u(g, !0);
    }, m = (g, V, P) => {
      var w = 2 * Math.PI / 12 * g - Math.PI / 2, C = 50 * (1 + Math.cos(w)), B = 50 * (1 + Math.sin(w)), S = () => v(g, P) ? f(V) ? {
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
      } = S();
      return {
        left: C + "%",
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
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? vn : Qe;
        return ya(g[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (g, V) => {
      var [P, w] = g, [C, B] = V, S = P === C && w === B;
      if (!(S || e.type !== "hour" || l.value === void 0)) {
        var D = w ? Qe[l.value] : y(), O = e.useSeconds ? ":" + e.time.second : "", z = D + ":" + e.time.minute + O;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, V) => {
      if (!(e.type === "hour" || g === void 0 || V === void 0)) {
        var P = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = V / 6 >= 0 ? V / 6 : V / 6 + 60;
        if (P !== w) {
          var C, {
            hourStr: B
          } = Bi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = te().minute(P).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            C = B + ":" + S + D;
          }
          if (e.type === "second") {
            var O = te().second(P).format("ss"), z = e.useSeconds ? ":" + O : "";
            C = B + ":" + e.time.minute + z;
          }
          r("update", C);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [V, P, w] = g;
      if (t.value = [], V && !P) {
        var {
          hour: C
        } = rn(V), B = vn.filter((H) => L(H) > C), S = Qe.filter((H) => L(H) > C);
        t.value = [...B, ...S];
      }
      if (!V && P) {
        var {
          hour: D
        } = rn(P), O = vn.filter((H) => L(H) < D), z = Qe.filter((H) => L(H) < D);
        t.value = [...O, ...z];
      }
      if (V && P) {
        var {
          hour: M
        } = rn(V), {
          hour: b
        } = rn(P), k = vn.filter((H) => L(H) < b || L(H) > M), j = Qe.filter((H) => L(H) < b || L(H) > M);
        t.value = [...k, ...j];
      }
      if (w != null && w.hours) {
        var {
          hours: Q
        } = w, F = vn.filter((H) => !Q(L(H))), E = Qe.filter((H) => !Q(L(H)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...F, ...E])];
      }
      o.value = t.value.map((H) => Qe.findIndex((U) => H === U)).filter((H) => H >= 0);
    }, {
      immediate: !0
    }), {
      n: bC,
      classes: wC,
      hours24: Qe,
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
iv.render = CC;
const SC = iv;
var {
  n: kC,
  classes: $C
} = ee("time-picker"), TC = (e) => (Oa(""), e = e(), Pa(), e), OC = /* @__PURE__ */ TC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), PC = {
  key: 0
};
function VC(e, n) {
  var r = ie("clock");
  return h(), T(
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
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), OC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", PC, ":")) : _("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), T(
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
      )) : _("v-if", !0)],
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
        [re(
          De,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), me(
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
var lv = x({
  name: "VarTimePicker",
  components: {
    Clock: SC
  },
  props: yC,
  setup(e) {
    var n = I(null), r = I(null), a = I(null), t = I(!1), o = I(!1), i = I(!1), l = I(!1), s = I(!1), u = I(void 0), d = I(0), v = I(0), f = I("hour"), m = I("am"), p = I(!1), y = I(!1), g = I({
      hour: "00",
      minute: "00",
      second: "00"
    }), V = Ee({
      x: 0,
      y: 0
    }), P = Ee({
      x: [],
      y: []
    }), w = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      $(e["onUpdate:modelValue"], N), $(e.onChange, N);
    }, B = (N) => N * 57.29577951308232, S = (N) => {
      l.value = !1, y.value = !1, f.value = N;
    }, D = (N) => {
      var {
        disableHour: Z
      } = a.value, G = vn.findIndex((oe) => L(oe) === L(g.value.hour)), J = N === "am" ? vn : Qe, ae = [...J.slice(G), ...J.slice(0, G)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !Z.includes(oe)));
    }, O = (N) => {
      if (!e.readonly) {
        m.value = N;
        var Z = D(N);
        if (Z) {
          var G = e.useSeconds ? ":" + g.value.second : "", J = ya(Z, 2, "0") + ":" + g.value.minute + G;
          C(J);
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
    }, k = () => {
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
      i.value = z(N, Z);
      var ae = Math.round(G / 30) * 30 + 90, oe = b(ae), ge = t.value ? vn[oe] : Qe[oe];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? z(N, Z) : !1), t.value === i.value) {
        var pe = t.value || m.value === "pm" ? Qe[oe] : vn[oe];
        p.value = J.includes(pe), !p.value && (u.value = ae, l.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      y.value = tv(ae), !y.value && (d.value = G, s.value = !0);
    }, F = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      ov(ae) || (v.value = G);
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
          rangeYMax: pe
        } = k();
        P.x = [ae, oe], P.y = [ge, pe];
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
    }, U = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: Z,
          minute: G,
          second: J
        } = rn(N), ae = te().hour(Z).format("hh"), oe = te().hour(Z).format("HH"), ge = te().minute(G).format("mm"), pe = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : L(ae)) * 30, d.value = L(ge) * 6, v.value = L(pe) * 6, g.value = M(N), e.format !== "24hr" && (m.value = ya("" + Z, 2, "0") === oe && Qe.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && Qe.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: kC,
      classes: $C,
      getRad: w,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: H,
      checkPanel: S,
      checkAmpm: O,
      end: U,
      update: C,
      changePreventUpdate: X
    };
  }
});
lv.render = VC;
const ha = lv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var dk = ha, EC = {
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
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
};
function Kl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Kl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Kl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: MC,
  classes: IC
} = ee("uploader"), BC = 0, NC = ["onClick"], DC = ["onClick"], AC = ["src", "alt"], zC = ["multiple", "accept", "capture", "disabled"], LC = ["src"];
function RC(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), o = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), T(
        Pe,
        null,
        Be(e.files, (i) => Se((h(), T(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [i.state === "loading", e.n("--loading")])),
            key: i.id,
            onClick: (l) => e.preview(i)
          },
          [A(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ne(i.name || i.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: On((l) => e.handleRemove(i), ["stop"])
            },
            [re(
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
            DC
          )) : _("v-if", !0), i.cover ? (h(), T(
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
            AC
          )) : _("v-if", !0), A(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [i.state === "success", e.n("--success")], [i.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          NC
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((h(), T(
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
          zC
        ), W(e.$slots, "default", {}, () => [re(
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
      }]]) : _("v-if", !0)],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), re(
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
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (h(), T(
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
            LC
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
var sv = x({
  name: "VarUploader",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarPopup: fn,
    VarFormDetails: je
  },
  props: EC,
  setup(e) {
    var n = I(null), r = I(!1), a = I(null), t = R(() => {
      var {
        maxlength: F,
        modelValue: {
          length: E
        }
      } = e;
      return _e(F) ? E + " / " + F : "";
    }), {
      form: o,
      bindForm: i
    } = hn(), {
      errorMessage: l,
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
        previewed: U
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || E || H || !U)) {
        var {
          url: X
        } = F;
        if (Ge(X) && Ri(X)) {
          Hn(X);
          return;
        }
        Ge(X) && Ui(X) && (a.value = F, r.value = !0);
      }
    }, m = (F) => ({
      id: BC++,
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
        var U = H.result;
        F.file.type.startsWith("image") && (F.cover = U), F.url = U, E(F);
      }, H.readAsDataURL(F.file);
    }), g = (F) => F.map(y), V = (F) => {
      var {
        onBeforeRead: E
      } = e;
      return F.map((H) => new Promise((U) => {
        E || U({
          valid: !0,
          varFile: H
        });
        var X = $(E, Ee(H));
        X = we(X) ? X : [X], Promise.all(X).then((N) => {
          U({
            valid: !N.some((Z) => !Z),
            varFile: H
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var F = Xl(function* (E) {
        var {
          maxsize: H,
          maxlength: U,
          modelValue: X,
          onOversize: N,
          onAfterRead: Z,
          readonly: G,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          var ae = (Le) => Le.filter((un) => un.file.size > L(H) ? ($(N, Ee(un)), !1) : !0), oe = (Le) => {
            var un = Math.min(Le.length, L(U) - X.length);
            return Le.slice(0, un);
          }, ge = p(E), pe = ge.map(m);
          pe = H != null ? ae(pe) : pe, pe = U != null ? oe(pe) : pe;
          var Fe = yield Promise.all(g(pe)), en = yield Promise.all(V(Fe)), on = en.filter((Le) => {
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
          $(e["onUpdate:modelValue"], [...X, ...on]), E.target.value = "", on.forEach((Le) => $(Z, Ee(Le)));
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var F = Xl(function* (E) {
        var {
          disabled: H,
          readonly: U,
          modelValue: X,
          onBeforeRemove: N,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || U)) {
          if (N) {
            var G = $(N, Ee(E));
            if (G = we(G) ? G : [G], (yield Promise.all(G)).some((ae) => !ae))
              return;
          }
          var J = X.filter((ae) => ae !== E);
          $(Z, Ee(E)), M("onRemove"), $(e["onUpdate:modelValue"], J);
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((F) => F.state === "success"), B = () => e.modelValue.filter((F) => F.state === "error"), S = () => e.modelValue.filter((F) => F.state === "loading"), D = () => {
      n.value.click();
    }, O = () => {
      a.value = null, r.value = !1, Hn.close();
    }, z = {
      getSuccess: C,
      getError: B,
      getLoading: S
    }, M = (F) => {
      Ve(() => {
        var {
          validateTrigger: E,
          rules: H,
          modelValue: U
        } = e;
        s(E, F, H, U, z);
      });
    }, b = !1, k = () => u(e.rules, e.modelValue, z), j = () => {
      b = !0, $(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: k,
      resetValidation: d,
      reset: j
    };
    return $(i, Q), le(() => e.modelValue, () => {
      !b && M("onChange"), b = !1;
    }, {
      deep: !0
    }), {
      n: MC,
      classes: IC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Ui,
      isHTMLSupportImage: Ri,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: w,
      getSuccess: C,
      getError: B,
      getLoading: S,
      validate: k,
      resetValidation: d,
      reset: j,
      chooseFile: D,
      closePreview: O
    };
  }
});
sv.render = RC;
const ga = sv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var vk = ga;
const UC = "2.8.6";
function YC(e) {
  wa.install && e.use(wa), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), kr.install && e.use(kr), tr.install && e.use(tr), $r.install && e.use($r), Tr.install && e.use(Tr), Or.install && e.use(Or), Pr.install && e.use(Pr), xe.install && e.use(xe), Vr.install && e.use(Vr), Er.install && e.use(Er), or.install && e.use(or), ir.install && e.use(ir), Mr.install && e.use(Mr), lr.install && e.use(lr), Ir.install && e.use(Ir), Br.install && e.use(Br), Nr.install && e.use(Nr), sn.install && e.use(sn), Dr.install && e.use(Dr), Ar.install && e.use(Ar), Lr.install && e.use(Lr), Ca.install && e.use(Ca), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Ln.install && e.use(Ln), je.install && e.use(je), Nt.install && e.use(Nt), $e.install && e.use($e), Yr.install && e.use(Yr), Hn.install && e.use(Hn), Fr.install && e.use(Fr), Hr.install && e.use(Hr), fr.install && e.use(fr), at.install && e.use(at), jr.install && e.use(jr), Wr.install && e.use(Wr), wn.install && e.use(wn), Jo.install && e.use(Jo), Co.install && e.use(Co), Fn.install && e.use(Fn), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), $a.install && e.use($a), fn.install && e.use(fn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), ze.install && e.use(ze), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), ei.install && e.use(ei), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), Yn.install && e.use(Yn), st.install && e.use(st), Rn.install && e.use(Rn), Un.install && e.use(Un), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ri.install && e.use(ri), ha.install && e.use(ha), dr.install && e.use(dr), ga.install && e.use(ga);
}
const fk = {
  version: UC,
  install: YC,
  ActionSheet: wa,
  AppBar: wr,
  Avatar: Cr,
  AvatarGroup: Sr,
  BackTop: kr,
  Badge: tr,
  BottomNavigation: $r,
  BottomNavigationItem: Tr,
  Breadcrumb: Or,
  Breadcrumbs: Pr,
  Button: xe,
  ButtonGroup: Vr,
  Card: Er,
  Cell: or,
  Checkbox: ir,
  CheckboxGroup: Mr,
  Chip: lr,
  Col: Ir,
  Collapse: Br,
  CollapseItem: Nr,
  Context: sn,
  Countdown: Dr,
  Counter: Ar,
  DatePicker: Lr,
  Dialog: Ca,
  Divider: Rr,
  Ellipsis: Ur,
  Form: Ln,
  FormDetails: je,
  Hover: Nt,
  Icon: $e,
  Image: Yr,
  ImagePreview: Hn,
  IndexAnchor: Fr,
  IndexBar: Hr,
  Input: fr,
  Lazy: at,
  Link: jr,
  List: Wr,
  Loading: wn,
  LoadingBar: Jo,
  Locale: Co,
  Menu: Fn,
  Option: Gr,
  Overlay: qr,
  Pagination: Kr,
  Paper: Xr,
  Picker: $a,
  Popup: fn,
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
  Snackbar: ei,
  Space: ia,
  Step: la,
  Steps: sa,
  Sticky: Yn,
  StyleProvider: st,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: da,
  Tab: va,
  TabItem: fa,
  Table: ca,
  Tabs: ma,
  TabsItems: pa,
  Themes: ri,
  TimePicker: ha,
  Tooltip: dr,
  Uploader: ga
};
export {
  wa as ActionSheet,
  wr as AppBar,
  Cr as Avatar,
  Sr as AvatarGroup,
  kr as BackTop,
  tr as Badge,
  $r as BottomNavigation,
  Tr as BottomNavigationItem,
  Or as Breadcrumb,
  Pr as Breadcrumbs,
  xe as Button,
  Vr as ButtonGroup,
  Er as Card,
  or as Cell,
  ir as Checkbox,
  Mr as CheckboxGroup,
  lr as Chip,
  Ir as Col,
  Br as Collapse,
  Nr as CollapseItem,
  sn as Context,
  Dr as Countdown,
  Ar as Counter,
  Lr as DatePicker,
  Ca as Dialog,
  Rr as Divider,
  Ur as Ellipsis,
  Ln as Form,
  je as FormDetails,
  Nt as Hover,
  $e as Icon,
  Yr as Image,
  Hn as ImagePreview,
  Fr as IndexAnchor,
  Hr as IndexBar,
  fr as Input,
  at as Lazy,
  jr as Link,
  Wr as List,
  wn as Loading,
  Jo as LoadingBar,
  Co as Locale,
  Fn as Menu,
  Gr as Option,
  qr as Overlay,
  $o as PIXEL,
  Kr as Pagination,
  Xr as Paper,
  $a as Picker,
  fn as Popup,
  Zr as Progress,
  Jr as PullRefresh,
  Qr as Radio,
  _r as RadioGroup,
  xr as Rate,
  ea as Result,
  ze as Ripple,
  na as Row,
  Mi as SNACKBAR_TYPE,
  ra as Select,
  aa as Skeleton,
  ta as Slider,
  ei as Snackbar,
  ia as Space,
  la as Step,
  sa as Steps,
  Yn as Sticky,
  st as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  da as Switch,
  va as Tab,
  fa as TabItem,
  ca as Table,
  ma as Tabs,
  pa as TabsItems,
  ri as Themes,
  ha as TimePicker,
  dr as Tooltip,
  ga as Uploader,
  KC as _ActionSheetComponent,
  XC as _AppBarComponent,
  JC as _AvatarComponent,
  QC as _AvatarGroupComponent,
  nS as _BackTopComponent,
  rS as _BadgeComponent,
  aS as _BottomNavigationComponent,
  tS as _BottomNavigationItemComponent,
  oS as _BreadcrumbComponent,
  iS as _BreadcrumbsComponent,
  eS as _ButtonComponent,
  lS as _ButtonGroupComponent,
  sS as _CardComponent,
  uS as _CellComponent,
  vS as _CheckboxComponent,
  fS as _CheckboxGroupComponent,
  cS as _ChipComponent,
  mS as _ColComponent,
  pS as _CollapseComponent,
  hS as _CollapseItemComponent,
  HC as _ContextComponent,
  gS as _CountdownComponent,
  yS as _CounterComponent,
  bS as _DatePickerComponent,
  wS as _DialogComponent,
  CS as _DividerComponent,
  kS as _EllipsisComponent,
  $S as _FormComponent,
  dS as _FormDetailsComponent,
  xC as _HoverComponent,
  GC as _IconComponent,
  TS as _ImageComponent,
  VS as _ImagePreviewComponent,
  MS as _IndexAnchorComponent,
  IS as _IndexBarComponent,
  BS as _InputComponent,
  ZC as _LazyComponent,
  NS as _LinkComponent,
  DS as _ListComponent,
  AS as _LoadingBarComponent,
  _C as _LoadingComponent,
  qC as _LocaleComponent,
  zS as _MenuComponent,
  LS as _OptionComponent,
  RS as _OverlayComponent,
  US as _PaginationComponent,
  YS as _PaperComponent,
  FS as _PickerComponent,
  WC as _PopupComponent,
  HS as _ProgressComponent,
  jS as _PullRefreshComponent,
  WS as _RadioComponent,
  GS as _RadioGroupComponent,
  qS as _RateComponent,
  KS as _ResultComponent,
  jC as _RippleComponent,
  XS as _RowComponent,
  ZS as _SelectComponent,
  JS as _SkeletonComponent,
  QS as _SliderComponent,
  _S as _SnackbarComponent,
  xS as _SpaceComponent,
  ek as _StepComponent,
  nk as _StepsComponent,
  ES as _StickyComponent,
  rk as _StyleProviderComponent,
  OS as _SwipeComponent,
  PS as _SwipeItemComponent,
  ak as _SwitchComponent,
  tk as _TabComponent,
  ok as _TabItemComponent,
  ik as _TableComponent,
  lk as _TabsComponent,
  sk as _TabsItemsComponent,
  uk as _ThemesComponent,
  dk as _TimePickerComponent,
  SS as _TooltipComponent,
  vk as _UploaderComponent,
  rf as actionSheetProps,
  pi as add,
  cf as appBarProps,
  Rf as avatarGroupProps,
  Bf as avatarProps,
  fc as backTopProps,
  yc as badgeProps,
  Vc as bottomNavigationItemProps,
  Sc as bottomNavigationProps,
  Dc as breadcrumbProps,
  Yc as breadcrumbsProps,
  xf as buttonProps,
  Qc as cardProps,
  am as cellProps,
  wm as checkboxGroupProps,
  fm as checkboxProps,
  Om as chipProps,
  Bm as colProps,
  Hm as collapseItemProps,
  Rm as collapseProps,
  qm as countdownProps,
  Hp as counterProps,
  uh as datePickerProps,
  fk as default,
  Ue as defaultLazyOptions,
  Oh as dialogProps,
  Dh as dividerProps,
  ms as enUS,
  lm as formDetailsProps,
  ay as formProps,
  fs as iconProps,
  bs as imageCache,
  Ty as imagePreviewProps,
  sy as imageProps,
  Ay as indexAnchorProps,
  Uy as indexBarProps,
  Gy as inputProps,
  YC as install,
  xy as linkProps,
  ab as listProps,
  sb as loadingBarProps,
  er as loadingProps,
  wb as menuProps,
  hs as merge,
  Ob as optionProps,
  Mb as overlayProps,
  He as pack,
  ps as packs,
  Bb as paginationProps,
  Lb as paperProps,
  Fb as pickerProps,
  ft as popupProps,
  Zb as progressProps,
  r0 as pullRefreshProps,
  c0 as radioGroupProps,
  i0 as radioProps,
  g0 as rateProps,
  C0 as resultProps,
  l1 as rowProps,
  f1 as selectProps,
  h1 as skeletonProps,
  C1 as sliderProps,
  Rd as snackbarProps,
  G1 as spaceProps,
  X1 as stepProps,
  rw as stepsProps,
  Vt as stickyProps,
  ow as styleProviderProps,
  _u as swipeProps,
  sw as switchProps,
  bw as tabItemProps,
  fw as tabProps,
  kw as tableProps,
  Iw as tabsItemsProps,
  Pw as tabsProps,
  yC as timePickerProps,
  qg as tooltipProps,
  EC as uploaderProps,
  hi as use,
  mi as useLocale,
  UC as version,
  ci as zhCN
};
