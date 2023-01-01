import {
  _ as N, a as S, b as c, c as d, F as b, i as C, l as I, n as G, o as R, s as o, u as g, v as h, x as $,
} from './index.a92cb502.js';

const l = {
  BG: '#F5F5F5', PRIMARY: '#B388FF', WARNING: '#FFB300', ERROR: '#FF3D00', SUCCESS: '#64DD17', INFO: '#00B0FF', DEFAULT: '#9E9E9E',
}; const sa = '/vue-mobility/assets/1.aac046b6.png'; const w = '_container_1n4bo_54'; const z = '_avatar_1n4bo_85'; const k = { container: w, avatar: z }; const v = {
  SMALL: '21px', NORMAL: '35px', LARGE: '49px', EXTRALARGE: '70px',
}; const T = {
  SMALL: '11px', NORMAL: '14px', LARGE: '24px', EXTRALARGE: '36px',
}; const F = {
  DEFAULT: '50%', ROUNTED: '4px', RECTANGLE: '0px',
}; const y = { DEFAULT: '1', LIGHT: '0.12' }; const M = { DEFAULT: '#fff', LIGHT: !1 }; const r = {
  PRIMARY: 'primary', WARNING: 'warning', ERROR: 'error', SUCCESS: 'success', DEFAULT: 'default', INFO: 'info',
}; const s = {
  SMALL: 'small', NORMAL: 'normal', LARGE: 'large', EXTRALARGE: 'extra large',
}; const L = {
  DEFAULT: 'default', ROUNTED: 'rounted', RECTANGLE: 'rectangle',
}; const A = { DEFAULT: 'default', LIGHT: 'light' }; const B = {
  __name: 'Avatar',
  props: {
    variant: {
      type: String, default: r.DEFAULT, validator: (a) => Object.values(r).includes(a),
    },
    size: {
      type: String, default: s.NORMAL, validator: (a) => Object.values(s).includes(a),
    },
    corner: {
      type: String, default: L.DEFAULT, validator: (a) => Object.values(L).includes(a),
    },
    transparency: {
      type: String, default: A.DEFAULT, validator: (a) => Object.values(A).includes(a),
    },
  },
  setup(a) {
    const t = a; g((u) => ({
      c16dcaac: c(D), '9ad4204c': c(U), '777d1c49': c(m), '534e22b7': c(O), '6d4c2d92': c(x), '77477c1b': c(f),
    })); const E = {
      [r.ERROR]: l.ERROR, [r.PRIMARY]: l.PRIMARY, [r.WARNING]: l.WARNING, [r.DEFAULT]: l.DEFAULT, [r.SUCCESS]: l.SUCCESS, [r.INFO]: l.INFO,
    }; const e = {
      [s.SMALL]: v.SMALL, [s.NORMAL]: v.NORMAL, [s.LARGE]: v.LARGE, [s.EXTRALARGE]: v.EXTRALARGE,
    }; const n = {
      [s.SMALL]: T.SMALL, [s.NORMAL]: T.NORMAL, [s.LARGE]: T.LARGE, [s.EXTRALARGE]: T.EXTRALARGE,
    }; const i = {
      [L.DEFAULT]: F.DEFAULT, [L.ROUNTED]: F.ROUNTED, [L.RECTANGLE]: F.RECTANGLE,
    }; const _ = { [A.DEFAULT]: y.DEFAULT, [A.LIGHT]: y.LIGHT }; const p = { [A.DEFAULT]: M.DEFAULT, [A.LIGHT]: M.LIGHT }; const f = o(() => (p[t.transparency] ? p[t.transparency] : E[t.variant])); const D = o(() => E[t.variant]); const U = o(() => e[t.size]); const m = o(() => n[t.size]); const O = o(() => i[t.corner]); const x = o(() => _[t.transparency]); return (u, ta) => (R(), d('div', { class: G(u.$style.container) }, [S('div', { class: G(u.$style.avatar) }, [C(u.$slots, 'default')], 2)], 2));
  },
}; const V = { $style: k }; const ra = N(B, [['__cssModules', V]]); const H = {
  'clip-rule': 'evenodd', 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', 'stroke-miterlimit': '2', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
}; const X = S('path', { d: 'm12 10.93 5.719-5.72a.749.749 0 1 1 1.062 1.062l-5.72 5.719 5.719 5.719a.75.75 0 1 1-1.061 1.062L12 13.053l-5.719 5.719A.75.75 0 0 1 5.22 17.71l5.719-5.719-5.72-5.719A.752.752 0 0 1 6.281 5.21z' }, null, -1); const j = [X]; function P(a, t) { return R(), d('svg', H, j); } const na = { render: P }; const W = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }; const Y = S('path', { d: 'M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z' }, null, -1); const Z = [Y]; function q(a, t) { return R(), d('svg', W, Z); } const oa = { render: q }; const J = '_ripple_1pwth_54'; const K = { ripple: J }; const Q = {
  __name: 'Ripple',
  props: { items: { type: Array, default: () => [] } },
  setup(a) {
    return (t, E) => (R(!0), d(b, null, I(a.items, (e) => (R(), d('span', {
      key: e.key,
      style: h({
        top: `${e.top}px`, left: `${e.left}px`, backgroundColor: e.color,
      }),
      class: G(t.$style.ripple),
    }, null, 6))), 128));
  },
}; const aa = { $style: K }; const ca = N(Q, [['__cssModules', aa]]); const la = () => {
  const a = $([]); const t = (e) => { const n = a.findIndex((i) => i.key === e); n !== -1 && a.splice(n, 1); }; return {
    add: (e, n, i) => {
      const _ = Math.random().toString(16).substring(0, 8); const p = {
        left: n, key: _, top: e, color: i,
      }; a.push(p), setTimeout(() => { t(p.key); }, 800);
    },
    items: a,
  };
}; export {
  sa as _, L as A, s as a, ra as b, na as C, oa as c, r as d, A as e, l as G, ca as R, la as u,
};
