import {
  _ as q, A as Je, a as l, b as a, c as d, d as D, e as o, F as C, f as p, h as k, i as w, j as E, k as je, l as G, m as Z, n as e, o as r, s as V, T as Ue, t as O, u as K, w as n, y as De, z as He,
} from './index.a92cb502.js';
import {
  _ as Qe, A as ne, a as ue, b as re, C as we, c as qe, d as ie, e as oe, G as v, R as Xe, u as We,
} from './useRipple.55384b70.js';

const Ze = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }; const Ke = l('path', { d: 'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z' }, null, -1); const xe = [Ke]; function es(i, u) { return r(), d('svg', Ze, xe); } const ss = { render: es }; const ls = {
  'clip-rule': 'evenodd', 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', 'stroke-miterlimit': '2', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
}; const as = l('path', { d: 'M11.998 5C7.92 5 4.256 8.093 2.145 11.483a1 1 0 0 0-.001 1.034C4.256 15.907 7.92 19 11.998 19c4.143 0 7.796-3.09 9.864-6.493a1 1 0 0 0 0-1.014C19.794 8.09 16.141 5 11.998 5zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zM12 8c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z', 'fill-rule': 'nonzero' }, null, -1); const ts = [as]; function is(i, u) { return r(), d('svg', ls, ts); } const Re = { render: is }; const ns = {
  'clip-rule': 'evenodd', 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', 'stroke-miterlimit': '2', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
}; const os = l('path', { d: 'm17.069 6.546 2.684-2.359A.753.753 0 0 1 21 4.75a.748.748 0 0 1-.254.562l-16.5 14.501a.748.748 0 1 1-.993-1.125l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028a1 1 0 0 1 .001-1.034C4.256 8.093 7.92 5 11.998 5c1.815 0 3.536.593 5.071 1.546zm2.319 1.83a16.03 16.03 0 0 1 2.474 3.117 1 1 0 0 1 0 1.014C19.794 15.91 16.141 19 11.998 19c-1.297 0-2.553-.313-3.729-.849l1.247-1.096a7.33 7.33 0 0 0 2.482.445c3.516 0 6.576-2.622 8.413-5.5a14.643 14.643 0 0 0-2.145-2.637zm-3.434 3.019a4.001 4.001 0 0 1-5.061 4.449l1.58-1.389a2.503 2.503 0 0 0 1.901-1.671zm-.058-3.818c-1.197-.67-2.512-1.077-3.898-1.077-3.465 0-6.533 2.632-8.404 5.5.853 1.308 1.955 2.567 3.231 3.549l1.728-1.519a4.001 4.001 0 0 1 5.902-5.187zm-2.6 2.285a2.5 2.5 0 0 0-3.583 3.149z', 'fill-rule': 'nonzero' }, null, -1); const rs = [os]; function us(i, u) { return r(), d('svg', ns, rs); } const Le = { render: us }; const cs = '_button_g2jle_54'; const ds = '_block_g2jle_90'; const ps = '_outlined_g2jle_95'; const vs = '_unlimited_g2jle_100'; const ms = {
  button: cs, block: ds, outlined: ps, unlimited: vs,
}; const Ce = {
  SMALL: '7px 15px', NORMAL: '10px 20px', LARGE: '13px 35px',
}; const T = {
  SMALL: 'small', NORMAL: 'normal', LARGE: 'large',
}; const S = {
  PRIMARY: 'primary', WARNING: 'warning', ERROR: 'error', SUCCESS: 'success', DEFAULT: 'default', INFO: 'info',
}; const ys = {
  __name: 'Button',
  props: {
    variant: {
      type: String, default: S.DEFAULT, validator: (i) => Object.values(S).includes(i),
    },
    size: {
      type: String, default: T.NORMAL, validator: (i) => Object.values(T).includes(i),
    },
    block: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    unlimited: { type: Boolean, default: !1 },
  },
  setup(i) {
    const u = i; K((g) => ({ '4949fb80': a(f), '1b2a9c44': a(R) })); const $ = {
      [S.ERROR]: v.ERROR, [S.PRIMARY]: v.PRIMARY, [S.WARNING]: v.WARNING, [S.DEFAULT]: v.DEFAULT, [S.SUCCESS]: v.SUCCESS, [S.INFO]: v.INFO,
    }; const h = {
      [T.SMALL]: Ce.SMALL, [T.NORMAL]: Ce.NORMAL, [T.LARGE]: Ce.LARGE,
    }; const f = V(() => $[u.variant]); const R = V(() => h[u.size]); const { add: y, items: b } = We(); const A = (g) => { const I = g.target; const B = g.pageX - I.offsetLeft - 15; const x = g.pageY - I.offsetTop - 15; const ee = getComputedStyle(I).color; y(x, B, ee); }; return (g, I) => (r(), d('button', { class: e([g.$style.button, i.block && g.$style.block, i.outlined && g.$style.outlined, i.unlimited && g.$style.unlimited]), onClick: A }, [w(g.$slots, 'default'), o(Xe, { items: a(b) }, null, 8, ['items'])], 2));
  },
}; const $s = { $style: ms }; const j = q(ys, [['__cssModules', $s]]); const As = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }; const fs = l('path', { d: 'M9 22-1 11.402l2.798-2.859 7.149 7.473L22.091 2 25 4.806z' }, null, -1); const Rs = [fs]; function Ls(i, u) { return r(), d('svg', As, Rs); } const bs = { render: Ls }; const hs = '_container_x0omb_54'; const Ms = '_text_x0omb_61'; const Ss = '_toggle_x0omb_78'; const Es = '_cycle_x0omb_108'; const gs = '_disabled_x0omb_126'; const zs = '_icon_x0omb_134'; const ks = '_input_x0omb_138'; const Ts = {
  container: hs, text: Ms, toggle: Ss, cycle: Es, disabled: gs, icon: zs, input: ks,
}; const Is = ['for']; const Cs = ['id', 'checked', 'disabled']; const N = {
  PRIMARY: 'primary', WARNING: 'warning', ERROR: 'error', SUCCESS: 'success', DEFAULT: 'default', INFO: 'info',
}; const Os = {
  __name: 'Checkbox',
  props: {
    label: { type: String, default: '' },
    value: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    toggle: { type: Boolean, default: !1 },
    variant: {
      type: String, default: N.DEFAULT, validator: (i) => Object.values(N).includes(i),
    },
  },
  emits: ['changeValue'],
  setup(i, { emit: u }) {
    const $ = i; K((R) => ({ '13195ac7': a(v).DEFAULT, '8925a5fc': a(f) })); const h = {
      [N.DEFAULT]: v.DEFAULT, [N.ERROR]: v.ERROR, [N.INFO]: v.INFO, [N.PRIMARY]: v.PRIMARY, [N.SUCCESS]: v.SUCCESS, [N.WARNING]: v.WARNING,
    }; const f = D(() => h[$.variant]); return (R, y) => (r(), d('label', { for: i.label, class: e([R.$style.container, i.disabled && R.$style.disabled]) }, [l('input', {
      id: i.label, checked: i.value, class: e(R.$style.input), disabled: i.disabled, type: 'checkbox', onChange: y[0] || (y[0] = (b) => u('changeValue', b.target.checked)),
    }, null, 42, Cs), l('span', { class: e([R.$style.text, i.toggle && R.$style.toggle]) }, [i.toggle ? Z('', !0) : (r(), k(a(bs), { key: 0, class: e(R.$style.icon) }, null, 8, ['class'])), l('span', null, [w(R.$slots, 'default')])], 2), l('span', { class: e(R.$style.cycle) }, null, 2)], 10, Is));
  },
}; const Ns = { $style: Ts }; const P = q(Os, [['__cssModules', Ns]]); const Gs = '_backdrop_jnfph_54'; const ws = '_dialog_jnfph_65'; const js = '_title_jnfph_83'; const Ds = '_content_jnfph_90'; const Fs = '_scrollContent_jnfph_97'; const Us = '_actions_jnfph_102'; const _s = '_enterActive_jnfph_107'; const Ps = '_leaveActive_jnfph_108'; const Vs = '_enterFrom_jnfph_117'; const Bs = '_leaveTo_jnfph_118'; const qs = '_backEnterActive_jnfph_123'; const Ys = '_backLeaveActive_jnfph_124'; const Ws = '_backEnterFrom_jnfph_128'; const Xs = '_backLeaveTo_jnfph_129'; const Qs = '_cancel_jnfph_133'; const Hs = {
  backdrop: Gs, dialog: ws, title: js, content: Ds, scrollContent: Fs, actions: Us, enterActive: _s, leaveActive: Ps, enterFrom: Vs, leaveTo: Bs, backEnterActive: qs, backLeaveActive: Ys, backEnterFrom: Ws, backLeaveTo: Xs, cancel: Qs,
}; const Js = {
  __name: 'Dialog',
  props: {
    visiable: { type: Boolean, default: !1 }, persistent: { type: Boolean, default: !1 }, scrollable: { type: Boolean, default: !1 },
  },
  emits: ['close', 'open'],
  setup(i, { emit: u }) {
    const $ = i; const h = E(!1); const f = D(() => $.visiable); const R = () => window.innerWidth - document.documentElement.clientWidth; De(f, () => { const A = R(); f.value ? (document.body.style.overflow = 'hidden', document.body.offsetWidth > 1270 && (document.body.style.marginRight = `${A}px`)) : (document.body.style.overflow = 'auto', document.body.style.marginRight = '0px'); }); const y = () => { $.persistent ? h.value = !0 : u('close'); }; const b = () => { u('open'); }; return (A, g) => (r(), d(C, null, [l('div', { class: e(A.$style.button), onClick: b }, [w(A.$slots, 'button')], 2), (r(), k(Je, { to: 'body' }, [o(Ue, {
      'enter-active-class': A.$style.backEnterActive, 'leave-active-class': A.$style.backLeaveActive, 'enter-from-class': A.$style.backEnterFrom, 'leave-to-class': A.$style.backLeaveTo,
    }, {
      default: n(() => [i.visiable ? (r(), d('div', {
        key: 0, class: e(A.$style.backdrop), onClick: y,
      }, null, 2)) : Z('', !0)]),
      _: 1,
    }, 8, ['enter-active-class', 'leave-active-class', 'enter-from-class', 'leave-to-class']), o(Ue, {
      'enter-active-class': A.$style.enterActive, 'leave-active-class': A.$style.leaveActive, 'enter-from-class': A.$style.enterFrom, 'leave-to-class': A.$style.leaveTo,
    }, {
      default: n(() => [i.visiable ? (r(), d('div', {
        key: 0, class: e([A.$style.dialog, h.value && A.$style.cancel]), onClick: g[0] || (g[0] = He(() => {}, ['stop'])), onAnimationend: g[1] || (g[1] = (I) => h.value = !1),
      }, [l('div', { class: e(A.$style.title) }, [w(A.$slots, 'title')], 2), l('div', { class: e([A.$style.content, i.scrollable && A.$style.scrollContent]) }, [w(A.$slots, 'content')], 2), l('div', { class: e(A.$style.actions) }, [w(A.$slots, 'actions')], 2)], 34)) : Z('', !0)]),
      _: 3,
    }, 8, ['enter-active-class', 'leave-active-class', 'enter-from-class', 'leave-to-class'])]))], 64));
  },
}; const Zs = { $style: Hs }; const be = q(Js, [['__cssModules', Zs]]); const Ks = '_root_k72rj_54'; const xs = '_container_k72rj_60'; const el = '_progress_k72rj_70'; const sl = '_error_k72rj_96'; const ll = '_disabled_k72rj_101'; const al = '_input_k72rj_108'; const tl = '_outlined_k72rj_129'; const il = '_solo_k72rj_136'; const nl = '_shaped_k72rj_152'; const ol = '_desc_k72rj_162'; const rl = '_moveDesc_k72rj_176'; const ul = '_details_k72rj_180'; const cl = '_dirty_k72rj_185'; const dl = '_validateOnBlur_k72rj_208'; const pl = '_line_k72rj_226'; const vl = '_counter_k72rj_262'; const ml = '_hint_k72rj_262'; const yl = '_crossIcon_k72rj_302'; const $l = '_prefix_k72rj_318'; const Al = '_suffix_k72rj_318'; const fl = '_focus_k72rj_334'; const Rl = '_append_k72rj_340'; const Ll = '_prepend_k72rj_341'; const bl = '_appendInner_k72rj_342'; const hl = '_prependInner_k72rj_343'; const Ml = {
  root: Ks, container: xs, progress: el, error: sl, disabled: ll, input: al, outlined: tl, solo: il, shaped: nl, desc: ol, moveDesc: rl, details: ul, dirty: cl, validateOnBlur: dl, line: pl, counter: vl, hint: ml, crossIcon: yl, prefix: $l, suffix: Al, focus: fl, append: Rl, prepend: Ll, appendInner: bl, prependInner: hl,
}; const Sl = ['for']; const El = ['id']; const gl = { key: 0 }; const zl = { key: 1 }; const kl = { key: 1 }; const Oe = {
  SMALL: '40px', NORMAL: '46px', LARGE: '58px',
}; const Ne = {
  DEFAULT: '5px', ROUNTED: '28px', RECTANGLE: '0px',
}; const L = {
  SMALL: 'small', NORMAL: 'normal', LARGE: 'large',
}; const W = {
  DEFAULT: 'dafault', ROUNTED: 'rounted', RECTANGLE: 'rectangle',
}; const Q = {
  PRIMARY: 'primary', WARNING: 'warning', ERROR: 'error', SUCCESS: 'success', DEFAULT: 'default', INFO: 'info',
}; const Tl = {
  __name: 'Input',
  props: {
    variant: {
      type: String, default: Q.PRIMARY, validator: (i) => Object.values(Q).includes(i),
    },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    autocomplete: {
      type: String, default: 'off', validator: (i) => ['off', 'on'].includes(i),
    },
    placeholder: { type: String, default: '' },
    size: {
      type: String, default: L.NORMAL, validator: (i) => Object.values(L).includes(i),
    },
    radius: {
      type: String, default: W.DEFAULT, validator: (i) => Object.values(W).includes(i),
    },
    tag: { type: String, default: 'input' },
    outlined: { type: Boolean, default: !1 },
    progress: { type: Boolean, default: !1 },
    label: { type: String, default: '' },
    shaped: { type: Boolean, default: !1 },
    solo: { type: Boolean, default: !1 },
    value: { type: String, default: '' },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    counter: { type: Number, default: 0 },
    maxlength: { type: Number, default: 0 },
    rules: { type: Array, default: () => [] },
    hint: { type: String, default: '' },
    clearable: { type: Boolean, default: !1 },
    suffix: { type: String, default: '' },
    prefix: { type: String, default: '' },
    validateOnBlur: { type: Boolean, default: !1 },
    moveDesc: { type: Boolean, default: !1 },
  },
  setup(i) {
    const u = i; K((m) => ({
      '672dd2d8': a(H), '6844d13b': a(F), '6a201aeb': a(v).ERROR, '31ee201f': a(B), '0af6f305': a(ee), '6cb71d30': a(x), '16c06e64': a(v).DEFAULT,
    })); const $ = E(u.value); const h = E(u.hint); const f = E(u.prefix + $.value + u.suffix); const R = E(!1); const y = E(!1); const b = E(!!f.value); De(() => u.value, () => { $.value = u.value, b.value = !!u.value; }); const A = {
      [Q.ERROR]: v.ERROR, [Q.PRIMARY]: v.PRIMARY, [Q.WARNING]: v.WARNING, [Q.DEFAULT]: v.DEFAULT, [Q.SUCCESS]: v.SUCCESS, [Q.INFO]: v.INFO,
    }; const g = {
      [L.SMALL]: Oe.SMALL, [L.NORMAL]: Oe.NORMAL, [L.LARGE]: Oe.LARGE,
    }; const I = {
      [W.DEFAULT]: Ne.DEFAULT, [W.ROUNTED]: Ne.ROUNTED, [W.RECTANGLE]: Ne.RECTANGLE,
    }; const B = D(() => g[u.size]); const x = D(() => I[u.radius]); const ee = D(() => A[u.variant]); const F = D(() => `${Math.min(100, f.value.length / u.counter * 100)}%`); const H = D(() => [v.ERROR, v.WARNING, v.SUCCESS][Math.floor(Number.parseInt(F.value, 10) / 40)]); const Ae = (m) => { let J = !1; m.forEach((X) => { if (J) return; const pe = X(f.value); typeof pe === 'string' ? (h.value = pe, y.value = !0, J = !0) : (h.value = u.hint, y.value = !1); }); }; const se = (m) => { $.value = m.target.value, f.value = u.prefix + $.value + u.suffix, b.value = !!u.value || !!f.value, R.value = !0, u.progress && (y.value = H.value === v.ERROR), Ae(u.rules), u.validateOnBlur && (y.value = !u.validateOnBlur); }; const fe = () => { $.value = '', b.value = !1; }; const te = () => { R.value = !1, Ae(u.rules); }; return (m, J) => {
      let X; return r(), d('div', { class: e([m.$style.root, R.value && m.$style.focus, y.value && m.$style.error, i.progress && m.$style.progress]) }, [l('span', { class: e(m.$style.prepend) }, [w(m.$slots, 'prepend')], 2), l('label', { for: i.label, class: e([m.$style.container, i.outlined && m.$style.outlined, i.solo && m.$style.solo, i.disabled && m.$style.disabled, i.readonly && m.$style.readonly, i.validateOnBlur && m.$style.validateOnBlur]) }, [i.prefix ? (r(), d('span', { key: 0, class: e(m.$style.prefix) }, O(i.prefix), 3)) : Z('', !0), l('span', { class: e(m.$style.prependInner) }, [w(m.$slots, 'prependInner')], 2), (r(), k(je(i.tag), {
        id: i.label, autocomplete: (X = i.autocomplete) != null ? X : i.name, type: i.type, class: e([m.$style.input, b.value && m.$style.dirty, i.shaped && m.$style.shaped]), disabled: i.disabled, readonly: i.readonly, value: $.value, maxlength: i.maxlength || 524288, onInput: se, onFocus: se, onBlur: te,
      }, null, 40, ['id', 'autocomplete', 'type', 'class', 'disabled', 'readonly', 'value', 'maxlength'])), l('div', { class: e(m.$style.details) }, [l('div', { id: i.label, class: e([m.$style.desc, y.value && m.$style.error, i.progress && m.$style.progress, i.moveDesc && m.$style.moveDesc]) }, [i.placeholder ? (r(), d('span', gl, O(i.placeholder), 1)) : (r(), d('span', zl, [w(m.$slots, 'default')]))], 10, El), l('div', { class: e(m.$style.line) }, null, 2), !i.progress && (i.counter || i.maxlength) ? (r(), d('div', { key: 0, class: e(m.$style.counter) }, `${O($.value.length)} / ${O(i.counter || i.maxlength)}`, 3)) : Z('', !0), l('div', { class: e(m.$style.hint) }, O(h.value), 3), i.clearable && b.value ? (r(), d('div', kl, [o(a(we), { class: e(m.$style.crossIcon), onClick: fe }, null, 8, ['class'])])) : Z('', !0)], 2), i.suffix ? (r(), d('span', { key: 1, class: e(m.$style.suffix) }, O(i.suffix), 3)) : Z('', !0), l('span', { class: e(m.$style.appendInner) }, [w(m.$slots, 'appendInner')], 2)], 10, Sl), l('span', { class: e(m.$style.append) }, [w(m.$slots, 'append')], 2)], 2);
    };
  },
}; const Il = { $style: Ml }; const M = q(Tl, [['__cssModules', Il]]); const Cl = '_container_1h9d7_54'; const Ol = '_text_1h9d7_62'; const Nl = '_cycle_1h9d7_96'; const Gl = '_input_1h9d7_114'; const wl = {
  container: Cl, text: Ol, cycle: Nl, input: Gl,
}; const jl = ['for']; const Dl = ['id', 'name', 'checked']; const Fl = { key: 0 }; const Ul = { key: 1 }; const _ = {
  PRIMARY: 'primary', WARNING: 'warning', ERROR: 'error', SUCCESS: 'success', DEFAULT: 'default', INFO: 'info',
}; const _l = {
  __name: 'Radio',
  props: {
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: String, default: '' },
    userSlot: { type: Boolean, default: !1 },
    variant: {
      type: String, default: _.DEFAULT, validator: (i) => Object.values(_).includes(i),
    },
    checked: { type: Boolean, default: !1 },
  },
  setup(i) {
    const u = i; K((f) => ({ aa0cc766: a(h), '2205e7c8': a(v).DEFAULT })); const $ = {
      [_.DEFAULT]: v.DEFAULT, [_.ERROR]: v.ERROR, [_.INFO]: v.INFO, [_.PRIMARY]: v.PRIMARY, [_.SUCCESS]: v.SUCCESS, [_.WARNING]: v.WARNING,
    }; const h = D(() => $[u.variant]); return (f, R) => (r(), d('label', { for: i.label, class: e(f.$style.container) }, [l('input', {
      id: i.label, class: e(f.$style.input), name: u.name, type: 'radio', checked: i.checked,
    }, null, 10, Dl), l('span', { class: e(f.$style.text) }, [i.userSlot ? (r(), d('span', Fl, [w(f.$slots, 'default')])) : (r(), d('span', Ul, O(i.value), 1))], 2), l('span', { class: e(f.$style.cycle) }, null, 2)], 10, jl));
  },
}; const Pl = { $style: wl }; const le = q(_l, [['__cssModules', Pl]]); const Vl = '_container_10z00_54'; const Bl = { container: Vl }; const ql = {
  __name: 'RadioGroup', props: { column: { type: Boolean, default: !1 } }, setup(i) { const u = i; K((f) => ({ '7bafc019': a($), '49b14c08': a(h) })); const $ = u.column ? 'column' : 'row'; const h = u.column ? 'start' : 'center'; return (f, R) => (r(), d('div', { class: e(f.$style.container) }, [w(f.$slots, 'default')], 2)); },
}; const Yl = { $style: Bl }; const he = q(ql, [['__cssModules', Yl]]); const Wl = '_root_10sc3_54'; const Xl = '_list_10sc3_61'; const Ql = '_spawn_10sc3_1'; const Hl = '_listItem_10sc3_75'; const Jl = '_arrow_10sc3_85'; const Zl = '_open_10sc3_96'; const Kl = {
  root: Wl, list: Xl, spawn: Ql, listItem: Hl, arrow: Jl, open: Zl,
}; const xl = ['onClick']; const ea = {
  __name: 'Select',
  props: { items: { type: Array, default: () => [] } },
  emits: ['choice'],
  setup(i, { emit: u }) {
    const $ = E(!1); const h = E(null); const f = (y) => { let b; (b = h.value) != null && b.contains(y.target) || ($.value = !1); }; const R = (y) => { $.value = !1, u('choice', y); }; return De($, () => { $.value ? document.addEventListener('click', f) : document.removeEventListener('click', f); }), (y, b) => (r(), d('div', {
      ref_key: 'root', ref: h, class: e(y.$style.root), onClick: b[0] || (b[0] = (A) => $.value = !0),
    }, [l('div', { class: e(y.$style.textField) }, [w(y.$slots, 'default')], 2), $.value ? (r(), d('div', { key: 0, class: e(y.$style.list) }, [(r(!0), d(C, null, G(i.items, (A) => (r(), d('div', {
      key: A, class: e(y.$style.listItem), onClick: (g) => R(A),
    }, O(A), 11, xl))), 128))], 2)) : Z('', !0), o(a(qe), { class: e([y.$style.arrow, $.value && y.$style.open]) }, null, 8, ['class'])], 2));
  },
}; const sa = { $style: Kl }; const _e = q(ea, [['__cssModules', sa]]); const la = '_chip_9bvuc_54'; const aa = { chip: la }; const Ge = {
  SMALL: '2px 7px', NORMAL: '5px 10px', LARGE: '7px 12px',
}; const ae = {
  SMALL: 'small', NORMAL: 'normal', LARGE: 'large',
}; const Y = {
  PRIMARY: 'primary', WARNING: 'warning', ERROR: 'error', SUCCESS: 'success', DEFAULT: 'default', INFO: 'info',
}; const ta = {
  __name: 'Chip',
  props: {
    variant: {
      type: String, default: Y.DEFAULT, validator: (i) => Object.values(Y).includes(i),
    },
    size: {
      type: String, default: ae.NORMAL, validator: (i) => Object.values(ae).includes(i),
    },
  },
  setup(i) {
    const u = i; K((y) => ({ b780e5a0: a(f), 47641494: a(R) })); const $ = {
      [Y.ERROR]: v.ERROR, [Y.PRIMARY]: v.PRIMARY, [Y.WARNING]: v.WARNING, [Y.DEFAULT]: v.DEFAULT, [Y.SUCCESS]: v.SUCCESS, [Y.INFO]: v.INFO,
    }; const h = {
      [ae.SMALL]: Ge.SMALL, [ae.NORMAL]: Ge.NORMAL, [ae.LARGE]: Ge.LARGE,
    }; const f = D(() => $[u.variant]); const R = D(() => h[u.size]); return (y, b) => (r(), d('span', { class: e(y.$style.chip) }, [w(y.$slots, 'default')], 2));
  },
}; const ia = { $style: aa }; const Pe = q(ta, [['__cssModules', ia]]); const na = '_container_7itis_54'; const oa = '_main_7itis_60'; const ra = '_after_7itis_69'; const ua = '_afterText_7itis_74'; const ca = '_icon_7itis_83'; const da = {
  container: na, main: oa, after: ra, afterText: ua, icon: ca,
}; const Me = {
  SMALL: '14px', NORMAL: '24px', LARGE: '30px', EXTRA_LARGE: '36px',
}; const Se = {
  SMALL: '11px', NORMAL: '14px', LARGE: '20px', EXTRA_LARGE: '24px',
}; const Ee = {
  SMALL: '20px', NORMAL: '20px', LARGE: '25px', EXTRA_LARGE: '30px',
}; const ge = {
  SMALL: '5px', NORMAL: '5px', LARGE: '6px', EXTRA_LARGE: '7px',
}; const ze = {
  SMALL: '3px', NORMAL: '3px', LARGE: '4px', EXTRA_LARGE: '5px',
}; const ce = { UP: 'up', DOWN: 'down' }; const z = {
  SMALL: 'small', NORMAL: 'normal', LARGE: 'large', EXTRA_LARGE: 'extralarge',
}; const pa = {
  __name: 'MoneyStat',
  props: {
    monotone: {
      type: String, default: ce.UP, validator: (i) => Object.values(ce).includes(i),
    },
    size: {
      type: String, default: z.SMALL, validator: (i) => Object.values(z).includes(i),
    },
  },
  setup(i) {
    const u = i; K((F) => ({
      ac32c2f6: a(g), a20bdd5c: a(A), db72f2e0: a(I), eade756c: a(x), '70f7ca9c': a(ee), ac365576: a(B),
    })); const $ = { [ce.UP]: v.SUCCESS, [ce.DOWN]: v.ERROR }; const h = {
      [z.SMALL]: Me.SMALL, [z.NORMAL]: Me.NORMAL, [z.LARGE]: Me.LARGE, [z.EXTRA_LARGE]: Me.EXTRA_LARGE,
    }; const f = {
      [z.SMALL]: Se.SMALL, [z.NORMAL]: Se.NORMAL, [z.LARGE]: Se.LARGE, [z.EXTRA_LARGE]: Se.EXTRA_LARGE,
    }; const R = {
      [z.SMALL]: Ee.SMALL, [z.NORMAL]: Ee.NORMAL, [z.LARGE]: Ee.LARGE, [z.EXTRA_LARGE]: Ee.EXTRA_LARGE,
    }; const y = {
      [z.SMALL]: ge.SMALL, [z.NORMAL]: ge.NORMAL, [z.LARGE]: ge.LARGE, [z.EXTRA_LARGE]: ge.EXTRA_LARGE,
    }; const b = {
      [z.SMALL]: ze.SMALL, [z.NORMAL]: ze.NORMAL, [z.LARGE]: ze.LARGE, [z.EXTRA_LARGE]: ze.EXTRA_LARGE,
    }; const A = V(() => $[u.monotone]); const g = V(() => h[u.size]); const I = V(() => f[u.size]); const B = V(() => R[u.size]); const x = V(() => y[u.size]); const ee = V(() => b[u.size]); return (F, H) => (r(), d('div', { class: e(F.$style.container) }, [l('span', { class: e(F.$style.main) }, [w(F.$slots, 'main')], 2), l('span', { class: e(F.$style.after) }, [l('span', { class: e(F.$style.icon) }, [w(F.$slots, 'icon')], 2), l('span', { class: e(F.$style.afterText) }, [w(F.$slots, 'after')], 2)], 2)], 2));
  },
}; const va = { $style: da }; const Ve = q(pa, [['__cssModules', va]]); const ma = '_container_maij1_54'; const ya = '_main_maij1_60'; const $a = '_after_maij1_68'; const Aa = {
  container: ma, main: ya, after: $a,
}; const ke = {
  SMALL: '16px', NORMAL: '20px', LARGE: '26px', EXTRALARGE: '32px',
}; const Te = {
  SMALL: '10px', NORMAL: '12px', LARGE: '16px', EXTRALARGE: '20px',
}; const Ie = {
  SMALL: '-3px', NORMAL: '-4px', LARGE: '-5px', EXTRALARGE: '-7px',
}; const de = { UP: 'up', DOWN: 'down' }; const U = {
  SMALL: 'small', NORMAL: 'normal', LARGE: 'large', EXTRALARGE: 'extra large',
}; const fa = {
  __name: 'TotalStat',
  props: {
    monotone: {
      type: String, default: de.UP, validator: (i) => Object.values(de).includes(i),
    },
    size: {
      type: String, default: U.SMALL, validator: (i) => Object.values(U).includes(i),
    },
  },
  setup(i) {
    const u = i; K((I) => ({
      '19e744c9': a(b), '216a3696': a(y), '225aa8cc': a(A), '3c0a4486': a(g),
    })); const $ = { [de.UP]: v.SUCCESS, [de.DOWN]: v.ERROR }; const h = {
      [U.SMALL]: ke.SMALL, [U.NORMAL]: ke.NORMAL, [U.LARGE]: ke.LARGE, [U.EXTRALARGE]: ke.EXTRALARGE,
    }; const f = {
      [U.SMALL]: Te.SMALL, [U.NORMAL]: Te.NORMAL, [U.LARGE]: Te.LARGE, [U.EXTRALARGE]: Te.EXTRALARGE,
    }; const R = {
      [U.SMALL]: Ie.SMALL, [U.NORMAL]: Ie.NORMAL, [U.LARGE]: Ie.LARGE, [U.EXTRALARGE]: Ie.EXTRALARGE,
    }; const y = V(() => $[u.monotone]); const b = V(() => h[u.size]); const A = V(() => f[u.size]); const g = V(() => R[u.size]); return (I, B) => (r(), d('div', { class: e(I.$style.container) }, [l('span', { class: e(I.$style.main) }, [w(I.$slots, 'main')], 2), l('span', { class: e(I.$style.after) }, [w(I.$slots, 'after')], 2)], 2));
  },
}; const Ra = { $style: Aa }; const Be = q(fa, [['__cssModules', Ra]]); const La = '_container_1wi09_54'; const ba = '_example_1wi09_62'; const ha = '_exampleTitle_1wi09_70'; const Ma = '_item_1wi09_76'; const Sa = '_slot_1wi09_83'; const Ea = '_icon_1wi09_88'; const ga = '_radioGroupColumn_1wi09_94'; const za = '_radioGroupRow_1wi09_95'; const ka = '_userButton_1wi09_111'; const Ta = '_totalStat_1wi09_112'; const Ia = '_moneyStat_1wi09_113'; const Ca = '_chip_1wi09_114'; const Oa = '_avatar_1wi09_115'; const Na = '_checkbox_1wi09_116'; const Ga = '_radio_1wi09_94'; const wa = '_radioColumn_1wi09_118'; const ja = '_input_1wi09_123'; const Da = '_prependInputIcon_1wi09_127'; const Fa = '_appendInputIcon_1wi09_128'; const Ua = '_password_1wi09_142'; const _a = '_action_1wi09_146'; const Pa = {
  container: La, example: ba, exampleTitle: ha, item: Ma, slot: Sa, icon: Ea, radioGroupColumn: ga, radioGroupRow: za, userButton: ka, totalStat: Ta, moneyStat: Ia, chip: Ca, avatar: Oa, checkbox: Na, radio: Ga, radioColumn: wa, input: ja, prependInputIcon: Da, appendInputIcon: Fa, password: Ua, action: _a,
}; const Va = p(' Button block '); const Ba = p(' default '); const qa = p(' outlined '); const Ya = p(' unlimited '); const Wa = p(' NE '); const Xa = p(' NT '); const Qa = p(' PP '); const Ha = p(' WC '); const Ja = p(' GB '); const Za = l('img', { src: Qe, alt: 'avatar' }, null, -1); const Ka = p(' on disabled '); const xa = p(' off disabled '); const et = p(' off disabled '); const st = p(' on disabled '); const lt = l('p', null, [p(' radio '), l('strong', { style: { color: 'blueviolet' } }, ' slot 1')], -1); const at = l('p', null, [p(' radio '), l('strong', { style: { color: 'red' } }, ' slot 2')], -1); const tt = l('span', null, 'cross', -1); const it = p(' click me '); const nt = p(' Police '); const ot = p(' Cancel '); const rt = p(' I accept '); const ut = p(' click me '); const ct = p(' Police '); const dt = p(' Cancel '); const pt = p(' I accept '); const vt = p(' click me '); const mt = p(' Police '); const yt = p(' Cancel '); const $t = p(' I accept '); const At = p(' click me '); const ft = p(' Police '); const Rt = p(' Cancel '); const Lt = p(' I accept '); const bt = {
  __name: 'Preview',
  setup(i) {
    const u = E(!0); const $ = E(!1); const h = D(() => (u.value === !0 ? 'false' : 'true')); const f = D(() => ($.value === !0 ? 'false' : 'true')); const R = E({
      primary: !0, warning: !0, error: !0, success: !0, default: !0, info: !0,
    }); const y = E(!0); const b = E(!1); const A = D(() => (y.value === !0 ? '\u043D\u0435\u0432\u0435\u0440\u043D\u043E' : '\u0432\u0435\u0440\u043D\u043E')); const g = D(() => (b.value === !0 ? '0' : '1')); const I = E(!0); const B = E(!1); const x = D(() => (I.value === !0 ? 'false' : 'true')); const ee = D(() => (B.value === !0 ? 'false' : 'true')); const F = E({
      primary: !0, warning: !0, error: !0, success: !0, default: !0, info: !0,
    }); const H = E(!1); const Ae = D(() => (H.value === !0 ? 'hide' : 'show')); const se = 25; const fe = [(s) => s.length <= se || `max ${se} characters`]; const te = { required: (s) => !!s || 'Required.', email: (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) || 'Invalid e-mail.' }; const m = [(s) => s.length >= 8 || 'min 8 characters']; const J = E(!0); const X = E(!1); const pe = E(''); const Fe = E(''); const ve = E(!1); const me = E(!1); const ye = E(!1); const $e = E(!1); return (s, c) => (r(), d('div', { class: e(s.$style.container) }, [l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Button sizes ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(T)), (t) => (r(), k(j, {
      key: t, variant: a(S).PRIMARY, size: t, class: e(s.$style.userButton),
    }, { default: n(() => [p(O(t), 1)]), _: 2 }, 1032, ['variant', 'size', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Button block ', 2), l('div', { class: e(s.$style.example) }, [o(j, {
      variant: a(S).PRIMARY, size: a(T).NORMAL, class: e(s.$style.userButton), block: '',
    }, { default: n(() => [Va]), _: 1 }, 8, ['variant', 'size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Button colors ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(S)), (t) => (r(), k(j, {
      key: t, variant: t, size: a(T).SMALL, class: e(s.$style.userButton),
    }, { default: n(() => [p(O(t), 1)]), _: 2 }, 1032, ['variant', 'size', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Button borders ', 2), l('div', { class: e(s.$style.example) }, [o(j, {
      variant: a(S).PRIMARY, size: a(T).SMALL, class: e(s.$style.userButton),
    }, { default: n(() => [Ba]), _: 1 }, 8, ['variant', 'size', 'class']), o(j, {
      variant: a(S).PRIMARY, size: a(T).SMALL, class: e(s.$style.userButton), outlined: '',
    }, { default: n(() => [qa]), _: 1 }, 8, ['variant', 'size', 'class']), o(j, {
      variant: a(S).PRIMARY, size: a(T).SMALL, class: e(s.$style.userButton), unlimited: '',
    }, { default: n(() => [Ya]), _: 1 }, 8, ['variant', 'size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Money stat positive sizes ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(z)), (t) => (r(), k(Ve, {
      key: t, class: e(s.$style.moneyStat), monotone: a(ce).UP, size: t,
    }, {
      main: n(() => [l('span', { class: e(s.$style.mainMoney) }, ' $69.93 ', 2)]), icon: n(() => [o(a(ss), { class: e(s.$style.iconMoney) }, null, 8, ['class'])]), after: n(() => [l('span', { class: e(s.$style.afterMoney) }, ' 18% ', 2)]), _: 2,
    }, 1032, ['class', 'monotone', 'size']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Money stat negative sizes ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(z)), (t) => (r(), k(Ve, {
      key: t, class: e(s.$style.moneyStat), monotone: a(ce).DOWN, size: t,
    }, {
      main: n(() => [l('span', { class: e(s.$style.mainMoney) }, ' $69.93 ', 2)]), icon: n(() => [o(a(qe), { class: e(s.$style.iconMoney) }, null, 8, ['class'])]), after: n(() => [l('span', { class: e(s.$style.afterMoney) }, ' 18% ', 2)]), _: 2,
    }, 1032, ['class', 'monotone', 'size']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Total stat positive size ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(U)), (t) => (r(), k(Be, {
      key: t, class: e(s.$style.totalStat), monotone: a(de).UP, size: t,
    }, {
      main: n(() => [l('span', { class: e(s.$style.mainTotal) }, ' 53.12k ', 2)]), after: n(() => [l('span', { class: e(s.$style.afterTotal) }, ' +34% ', 2)]), _: 2,
    }, 1032, ['class', 'monotone', 'size']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Total stat negative size ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(U)), (t) => (r(), k(Be, {
      key: t, class: e(s.$style.totalStat), monotone: a(de).DOWN, size: t,
    }, {
      main: n(() => [l('span', { class: e(s.$style.mainTotal) }, ' 53.12k ', 2)]), after: n(() => [l('span', { class: e(s.$style.afterTotal) }, ' -34% ', 2)]), _: 2,
    }, 1032, ['class', 'monotone', 'size']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Chip sizes ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ae)), (t) => (r(), k(Pe, {
      key: t, variant: a(Y).PRIMARY, size: t, class: e(s.$style.chip),
    }, { default: n(() => [p(O(t), 1)]), _: 2 }, 1032, ['variant', 'size', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Chip colors ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(Y)), (t) => (r(), k(Pe, {
      key: t, variant: t, size: a(ae).NORMAL, class: e(s.$style.chip),
    }, { default: n(() => [p(O(t), 1)]), _: 2 }, 1032, ['variant', 'size', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Avatar sizes ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ue)), (t) => (r(), k(re, {
      key: t, size: t, variant: a(ie).PRIMARY, corner: a(ne).DEFAULT, transparency: a(oe).DEFAULT, class: e(s.$style.avatar),
    }, { default: n(() => [Wa]), _: 2 }, 1032, ['size', 'variant', 'corner', 'transparency', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Avatar colors ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ie)), (t) => (r(), k(re, {
      key: t, size: a(ue).LARGE, variant: t, corner: a(ne).DEFAULT, transparency: a(oe).DEFAULT, class: e(s.$style.avatar),
    }, { default: n(() => [Xa]), _: 2 }, 1032, ['size', 'variant', 'corner', 'transparency', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Avatar transparency ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ie)), (t) => (r(), k(re, {
      key: t, size: a(ue).LARGE, variant: t, corner: a(ne).DEFAULT, transparency: a(oe).LIGHT, class: e(s.$style.avatar),
    }, { default: n(() => [Qa]), _: 2 }, 1032, ['size', 'variant', 'corner', 'transparency', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Avatar rounted ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ie)), (t) => (r(), k(re, {
      key: t, size: a(ue).LARGE, variant: t, corner: a(ne).ROUNTED, transparency: a(oe).DEFAULT, class: e(s.$style.avatar),
    }, { default: n(() => [Ha]), _: 2 }, 1032, ['size', 'variant', 'corner', 'transparency', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Avatar rectangle ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ie)), (t) => (r(), k(re, {
      key: t, size: a(ue).LARGE, variant: t, corner: a(ne).RECTANGLE, transparency: a(oe).DEFAULT, class: e(s.$style.avatar),
    }, { default: n(() => [Ja]), _: 2 }, 1032, ['size', 'variant', 'corner', 'transparency', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Avatar image ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(ne)), (t) => (r(), k(re, {
      key: t, size: a(ue).LARGE, variant: a(ie).DEFAULT, corner: t, transparency: a(oe).DEFAULT, class: e(s.$style.avatar),
    }, { default: n(() => [Za]), _: 2 }, 1032, ['size', 'variant', 'corner', 'transparency', 'class']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Checkbox toggle ', 2), l('div', { class: e(s.$style.example) }, [o(P, {
      label: 'checkbox 1', class: e(s.$style.checkbox), value: u.value, variant: a(N).PRIMARY, onChangeValue: c[0] || (c[0] = (t) => u.value = !u.value),
    }, { default: n(() => [p(O(a(h)), 1)]), _: 1 }, 8, ['class', 'value', 'variant']), o(P, {
      label: 'checkbox 2', class: e(s.$style.checkbox), value: $.value, variant: a(N).PRIMARY, onChangeValue: c[1] || (c[1] = (t) => $.value = !$.value),
    }, { default: n(() => [p(O(a(f)), 1)]), _: 1 }, 8, ['class', 'value', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Checkbox colors ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(N)), (t) => (r(), k(P, {
      key: t, label: `${t}Checkbox`, class: e(s.$style.checkbox), value: R.value[t], variant: t, onChangeValue: (Ye) => R.value[t] = !R.value[t],
    }, { default: n(() => [p(O(t), 1)]), _: 2 }, 1032, ['label', 'class', 'value', 'variant', 'onChangeValue']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Checkbox disabled ', 2), l('div', { class: e(s.$style.example) }, [o(P, {
      label: 'onDisabledCheckbox', class: e(s.$style.checkbox), value: !0, variant: a(N).PRIMARY, disabled: '',
    }, { default: n(() => [Ka]), _: 1 }, 8, ['class', 'variant']), o(P, {
      label: 'offDisabledCheckbox', class: e(s.$style.checkbox), value: !1, variant: a(N).PRIMARY, disabled: '',
    }, { default: n(() => [xa]), _: 1 }, 8, ['class', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Checkbox another value ', 2), l('div', { class: e(s.$style.example) }, [o(P, {
      label: 'anotherValueFirst', class: e(s.$style.checkbox), value: y.value, variant: a(N).PRIMARY, onChangeValue: c[2] || (c[2] = (t) => y.value = !y.value),
    }, { default: n(() => [p(O(a(A)), 1)]), _: 1 }, 8, ['class', 'value', 'variant']), o(P, {
      label: 'anotherValueSecond', class: e(s.$style.checkbox), value: b.value, variant: a(N).SUCCESS, onChangeValue: c[3] || (c[3] = (t) => b.value = !b.value),
    }, { default: n(() => [p(O(a(g)), 1)]), _: 1 }, 8, ['class', 'value', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Switch toggle ', 2), l('div', { class: e(s.$style.example) }, [o(P, {
      class: e(s.$style.checkbox), label: 'switch 1', value: I.value, variant: a(N).PRIMARY, toggle: '', onChangeValue: c[4] || (c[4] = (t) => I.value = !I.value),
    }, { default: n(() => [p(O(a(x)), 1)]), _: 1 }, 8, ['class', 'value', 'variant']), o(P, {
      class: e(s.$style.checkbox), label: 'switch 2', value: B.value, variant: a(N).PRIMARY, toggle: '', onChangeValue: c[5] || (c[5] = (t) => B.value = !B.value),
    }, { default: n(() => [p(O(a(ee)), 1)]), _: 1 }, 8, ['class', 'value', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Switch colors ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(N)), (t) => (r(), k(P, {
      key: t, class: e(s.$style.checkbox), label: `${t}Switch`, value: F.value[t], variant: t, toggle: '', onChangeValue: (Ye) => F.value[t] = !F.value[t],
    }, { default: n(() => [p(O(t), 1)]), _: 2 }, 1032, ['class', 'label', 'value', 'variant', 'onChangeValue']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Switch disabled ', 2), l('div', { class: e(s.$style.example) }, [o(P, {
      class: e(s.$style.checkbox), label: 'switch 3', value: !1, variant: a(N).PRIMARY, toggle: '', disabled: '',
    }, { default: n(() => [et]), _: 1 }, 8, ['class', 'variant']), o(P, {
      class: e(s.$style.checkbox), label: 'switch 4', value: !0, variant: a(N).PRIMARY, toggle: '', disabled: '',
    }, { default: n(() => [st]), _: 1 }, 8, ['class', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Switch slot + userValue ', 2), l('div', { class: e(s.$style.example) }, [o(P, {
      class: e(s.$style.checkbox), label: 'switch 5', value: H.value, variant: a(N).PRIMARY, toggle: '', onChangeValue: c[6] || (c[6] = (t) => H.value = !H.value),
    }, { default: n(() => [p(` switch: ${O(a(Ae))}`, 1)]), _: 1 }, 8, ['class', 'value', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Radio direction ', 2), l('div', { class: e(s.$style.example) }, [o(he, { class: e(s.$style.radioGroupRow) }, {
      default: n(() => [o(le, {
        class: e(s.$style.radio), variant: a(_).PRIMARY, value: 'radio1', label: 'radio1', name: 'RadioGroup1', checked: '',
      }, null, 8, ['class', 'variant']), o(le, {
        class: e(s.$style.radio), variant: a(_).PRIMARY, value: 'radio2', label: 'radio2', name: 'RadioGroup1',
      }, null, 8, ['class', 'variant'])]),
      _: 1,
    }, 8, ['class']), o(he, { class: e(s.$style.radioGroupColumn), column: '' }, {
      default: n(() => [o(le, {
        class: e(s.$style.radioColumn), variant: a(_).PRIMARY, value: 'radio1', label: 'radio3', name: 'RadioGroup2',
      }, null, 8, ['class', 'variant']), o(le, {
        class: e(s.$style.radioColumn), variant: a(_).PRIMARY, value: 'radio2', label: 'radio4', checked: '', name: 'RadioGroup2',
      }, null, 8, ['class', 'variant'])]),
      _: 1,
    }, 8, ['class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Radio colors ', 2), o(he, { class: e(s.$style.example) }, {
      default: n(() => [(r(!0), d(C, null, G(Object.values(a(_)), (t) => (r(), k(le, {
        key: t, class: e(s.$style.radio), variant: t, value: t, label: t, name: 'RadioGroup3', checked: '',
      }, null, 8, ['class', 'variant', 'value', 'label']))), 128))]),
      _: 1,
    }, 8, ['class'])], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Radio slot ', 2), l('div', { class: e(s.$style.example) }, [o(he, { class: e(s.$style.example) }, {
      default: n(() => [o(le, {
        class: e(s.$style.radio), variant: a(_).PRIMARY, label: 'radio5', name: 'RadioGroup4', checked: '', 'user-slot': '',
      }, { default: n(() => [lt]), _: 1 }, 8, ['class', 'variant']), o(le, {
        class: e(s.$style.radio), variant: a(_).PRIMARY, label: 'radio6', name: 'RadioGroup4', 'user-slot': '',
      }, { default: n(() => [at]), _: 1 }, 8, ['class', 'variant'])]),
      _: 1,
    }, 8, ['class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input Basic ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Basic input', size: a(L).SMALL, class: e(s.$style.input), radius: a(W).RECTANGLE, label: 'input 1',
    }, null, 8, ['size', 'class', 'radius'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input outlined ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Outlined input', size: a(L).SMALL, class: e(s.$style.input), label: 'input 2', outlined: '',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input shaped ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Shaped', size: a(L).SMALL, class: e(s.$style.input), label: 'input 3', outlined: '', shaped: '',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input size ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(L)), (t) => (r(), k(M, {
      key: t, placeholder: t, size: t, radius: a(W).DEFAULT, class: e(s.$style.input), tag: 'input', label: `${t}Size`, outlined: '',
    }, null, 8, ['placeholder', 'size', 'radius', 'class', 'label']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input radius ', 2), l('div', { class: e(s.$style.example) }, [(r(!0), d(C, null, G(Object.values(a(W)), (t) => (r(), k(M, {
      key: t, placeholder: t, size: a(L).SMALL, radius: t, class: e(s.$style.input), tag: 'input', label: `${t}Radius`, outlined: '',
    }, null, 8, ['placeholder', 'size', 'radius', 'class', 'label']))), 128))], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input disabled and readonly ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Disabled', size: a(L).SMALL, class: e(s.$style.input), label: 'input 5', value: 'Jhon Doe', disabled: '',
    }, null, 8, ['size', 'class']), o(M, {
      placeholder: 'Readonly', size: a(L).SMALL, class: e(s.$style.input), label: 'input 6', value: 'Moe Gilsberg', readonly: '',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input counter ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Regular', size: a(L).SMALL, class: e(s.$style.input), label: 'input 7', value: 'Lorem ipsum dolor sit amet', counter: se, rules: fe, hint: 'This field uses counter prop',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input maxlength ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Regular', size: a(L).SMALL, class: e(s.$style.input), label: 'input 8', value: 'Lorem ipsum dolor sit amet', maxlength: se, rules: fe, hint: 'This field uses maxlength prop',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Custom colors ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'First name', size: a(L).SMALL, class: e(s.$style.input), label: 'input 9', value: 'Lorem ipsum dolor sit amet', variant: a(Q).SUCCESS,
    }, null, 8, ['size', 'class', 'variant'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input clearable ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'First name', size: a(L).SMALL, class: e(s.$style.input), label: 'input 10', clearable: '', value: 'Lorem ipsum dolor sit amet',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input prefixes and suffixes ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Email address', size: a(L).SMALL, class: e(s.$style.input), label: 'input 11', value: 'ivan.turovskiy', suffix: '@gmail.com',
    }, null, 8, ['size', 'class', 'value', 'suffix']), o(M, {
      placeholder: 'Amount', size: a(L).SMALL, class: e(s.$style.input), label: 'input 12', value: 'ivan.turovskiy', prefix: '$$',
    }, null, 8, ['size', 'class', 'value'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Validation ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Email address', size: a(L).SMALL, class: e(s.$style.input), label: 'input 13', value: '', rules: [te.required, te.email],
    }, null, 8, ['size', 'class', 'rules'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Validate on blur ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Email address', size: a(L).SMALL, class: e(s.$style.input), label: 'input 14', value: '', 'validate-on-blur': '', rules: [te.required, te.email],
    }, null, 8, ['size', 'class', 'rules'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input uses slot ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      size: a(L).SMALL, class: e(s.$style.input), label: 'input 15', value: '',
    }, { default: n(() => [l('div', { class: e(s.$style.slot) }, [o(a(we), { class: e(s.$style.icon) }, null, 8, ['class']), tt, o(a(we), { class: e(s.$style.icon) }, null, 8, ['class'])], 2)]), _: 1 }, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input progress ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      size: a(L).SMALL, class: e(s.$style.input), label: 'input 16', placeholder: 'Progress', value: '', progress: '', counter: 30,
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input icons ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      size: a(L).SMALL, class: e(s.$style.input), label: 'input 17', value: '', placeholder: 'Prepend',
    }, { prepend: n(() => [o(a(Re), { class: e(s.$style.prependInputIcon) }, null, 8, ['class'])]), _: 1 }, 8, ['size', 'class']), o(M, {
      size: a(L).SMALL, class: e(s.$style.input), label: 'input 18', value: '', placeholder: 'Prepend inner', 'move-desc': '',
    }, { prependInner: n(() => [o(a(Le), { class: e(s.$style.prependInputIcon) }, null, 8, ['class'])]), _: 1 }, 8, ['size', 'class']), o(M, {
      size: a(L).SMALL, class: e(s.$style.input), label: 'input 19', value: '', placeholder: 'Append inner',
    }, { appendInner: n(() => [o(a(Re), { class: e(s.$style.appendInputIcon) }, null, 8, ['class'])]), _: 1 }, 8, ['size', 'class']), o(M, {
      size: a(L).SMALL, class: e(s.$style.input), label: 'input 20', value: '', placeholder: 'Append',
    }, { append: n(() => [o(a(Le), { class: e(s.$style.appendInputIcon) }, null, 8, ['class'])]), _: 1 }, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input password ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      size: a(L).SMALL, class: e([s.$style.input, s.$style.password]), label: 'input 21', value: '123', rules: m, placeholder: 'Your password', hint: 'At least 8 characters', counter: 8, type: J.value ? 'text' : 'password',
    }, { appendInner: n(() => [(r(), k(je(J.value ? a(Re) : a(Le)), { class: e(s.$style.appendInputIcon), onFocus: c[7] || (c[7] = (t) => J.value = !J.value) }, null, 40, ['class']))]), _: 1 }, 8, ['size', 'class', 'type']), o(M, {
      size: a(L).SMALL, class: e([s.$style.input, s.$style.password]), label: 'input 22', value: '123', rules: m, placeholder: 'Your password', hint: 'At least 8 characters', counter: 8, type: X.value ? 'text' : 'password',
    }, { appendInner: n(() => [(r(), k(je(X.value ? a(Re) : a(Le)), { class: e(s.$style.appendInputIcon), onFocus: c[8] || (c[8] = (t) => X.value = !X.value) }, null, 40, ['class']))]), _: 1 }, 8, ['size', 'class', 'type'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Input solo ', 2), l('div', { class: e(s.$style.example) }, [o(M, {
      placeholder: 'Solo', size: a(L).SMALL, class: e(s.$style.input), label: 'input 4', outlined: '', solo: '',
    }, null, 8, ['size', 'class'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Basic dialog ', 2), l('div', { class: e(s.$style.example) }, [o(be, {
      visiable: ve.value, onClose: c[11] || (c[11] = (t) => ve.value = !1), onOpen: c[12] || (c[12] = (t) => ve.value = !0),
    }, {
      button: n(() => [o(j, {
        class: e(s.$style.button), variant: a(S).PRIMARY, size: a(T).NORMAL,
      }, { default: n(() => [it]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      title: n(() => [nt]),
      content: n(() => [l('p', { class: e(s.$style.dialogContent) }, ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore vero nesciunt ea ', 2)]),
      actions: n(() => [o(j, {
        class: e(s.$style.action), variant: a(S).ERROR, size: a(T).NORMAL, onClick: c[9] || (c[9] = (t) => ve.value = !1),
      }, { default: n(() => [ot]), _: 1 }, 8, ['class', 'variant', 'size']), o(j, {
        class: e(s.$style.action), variant: a(S).PRIMARY, size: a(T).NORMAL, onClick: c[10] || (c[10] = (t) => ve.value = !1),
      }, { default: n(() => [rt]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      _: 1,
    }, 8, ['visiable'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Basic select ', 2), l('div', { class: e(s.$style.example) }, [o(_e, { items: ['option 1', 'option 2', 'option 3', 'option 4'], onChoice: c[13] || (c[13] = (t) => { pe.value = t; }) }, {
      default: n(() => [o(M, {
        placeholder: 'Basic', size: a(L).SMALL, class: e(s.$style.input), radius: a(W).RECTANGLE, label: 'select 1', autocomplete: 'off', value: pe.value, readonly: '',
      }, null, 8, ['size', 'class', 'radius', 'value'])]),
      _: 1,
    })], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Persistent dialog ', 2), l('div', { class: e(s.$style.example) }, [o(be, {
      persistent: '', visiable: me.value, onClose: c[16] || (c[16] = (t) => me.value = !1), onOpen: c[17] || (c[17] = (t) => me.value = !0),
    }, {
      button: n(() => [o(j, {
        class: e(s.$style.button), variant: a(S).PRIMARY, size: a(T).NORMAL,
      }, { default: n(() => [ut]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      title: n(() => [ct]),
      content: n(() => [l('p', { class: e(s.$style.dialogContent) }, ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore vero nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae iure cum laboriosam in, amet incidunt corrupti optio soluta velit, reprehenderit iste? Consequatur dolor itaque quisquam ad reprehenderit id. Dolore. Quibusdam cum molestias reprehenderit nemo ex nam nesciunt impedit totam necessitatibus, quam, alias, perspiciatis deleniti iusto possimus molestiae laborum voluptate. Maiores eos corrupti dolorem dignissimos est delectus, autem tempora blanditiis. ', 2)]),
      actions: n(() => [o(j, {
        class: e(s.$style.action), variant: a(S).ERROR, size: a(T).NORMAL, onClick: c[14] || (c[14] = (t) => me.value = !1),
      }, { default: n(() => [dt]), _: 1 }, 8, ['class', 'variant', 'size']), o(j, {
        class: e(s.$style.action), variant: a(S).PRIMARY, size: a(T).NORMAL, onClick: c[15] || (c[15] = (t) => me.value = !1),
      }, { default: n(() => [pt]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      _: 1,
    }, 8, ['visiable'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Outlined select ', 2), l('div', { class: e(s.$style.example) }, [o(_e, { items: ['option 1', 'option 2', 'option 3', 'option 4'], onChoice: c[18] || (c[18] = (t) => { Fe.value = t; }) }, {
      default: n(() => [o(M, {
        placeholder: 'Outlined', size: a(L).SMALL, class: e(s.$style.input), radius: a(W).RECTANGLE, label: 'select 2', autocomplete: 'off', value: Fe.value, readonly: '', outlined: '',
      }, null, 8, ['size', 'class', 'radius', 'value'])]),
      _: 1,
    })], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Scroll dialog content ', 2), l('div', { class: e(s.$style.example) }, [o(be, {
      visiable: ye.value, scrollable: '', onClose: c[21] || (c[21] = (t) => ye.value = !1), onOpen: c[22] || (c[22] = (t) => ye.value = !0),
    }, {
      button: n(() => [o(j, {
        class: e(s.$style.button), variant: a(S).PRIMARY, size: a(T).NORMAL,
      }, { default: n(() => [vt]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      title: n(() => [mt]),
      content: n(() => [l('p', { class: e(s.$style.dialogContent) }, ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore vero nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae iure cum laboriosam in, amet incidunt corrupti optio soluta velit, reprehenderit iste? Consequatur dolor itaque quisquam ad reprehenderit id. Dolore. Quibusdam cum molestias reprehenderit nemo ex nam nesciunt impedit totam necessitatibus, quam, alias, perspiciatis deleniti iusto possimus molestiae laborum voluptate. Maiores eos corrupti dolorem dignissimos est delectus, autem tempora blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore vero nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae iure cum laboriosam in, amet incidunt corrupti optio soluta velit, reprehenderit iste? Consequatur dolor itaque quisquam ad reprehenderit id. Dolore. Quibusdam cum molestias reprehenderit nemo ex nam nesciunt impedit totam necessitatibus, quam, alias, perspiciatis deleniti iusto possimus molestiae laborum voluptate. Maiores eos corrupti dolorem dignissimos est delectus, autem tempora blanditiis. ', 2)]),
      actions: n(() => [o(j, {
        class: e(s.$style.action), variant: a(S).ERROR, size: a(T).NORMAL, onClick: c[19] || (c[19] = (t) => ye.value = !1),
      }, { default: n(() => [yt]), _: 1 }, 8, ['class', 'variant', 'size']), o(j, {
        class: e(s.$style.action), variant: a(S).PRIMARY, size: a(T).NORMAL, onClick: c[20] || (c[20] = (t) => ye.value = !1),
      }, { default: n(() => [$t]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      _: 1,
    }, 8, ['visiable'])], 2)], 2), l('div', { class: e(s.$style.item) }, [l('h3', { class: e(s.$style.exampleTitle) }, ' Overflow content ', 2), l('div', { class: e(s.$style.example) }, [o(be, {
      visiable: $e.value, onClose: c[25] || (c[25] = (t) => $e.value = !1), onOpen: c[26] || (c[26] = (t) => $e.value = !0),
    }, {
      button: n(() => [o(j, {
        class: e(s.$style.button), variant: a(S).PRIMARY, size: a(T).NORMAL,
      }, { default: n(() => [At]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      title: n(() => [ft]),
      content: n(() => [l('p', { class: e(s.$style.dialogContent) }, ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore vero nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae iure cum laboriosam in, amet incidunt corrupti optio soluta velit, reprehenderit iste? Consequatur dolor itaque quisquam ad reprehenderit id. Dolore. Quibusdam cum molestias reprehenderit nemo ex nam nesciunt impedit totam necessitatibus, quam, alias, perspiciatis deleniti iusto possimus molestiae laborum voluptate. Maiores eos corrupti dolorem dignissimos est delectus, autem tempora blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dicta aut earum nobis accusamus odio nemo! Delectus ea ipsa eius? Beatae labore praesentium alias, aperiam nemo sequi saepe dolorum nisi. Exercitationem iure fuga unde ut, quasi veniam, possimus temporibus voluptatum, a quaerat qui facere asperiores. Dolor, non! Libero numquam hic praesentium omnis repudiandae animi maiores illo, voluptate possimus tempora cumque? Velit, corporis quam? Aperiam sit esse iste consectetur quos expedita porro vero, velit minima eius exercitationem est dicta assumenda dolorum doloribus incidunt tempore qui temporibus consequuntur aut placeat sed? Aliquid. Autem, officia! Dicta modi debitis, quaerat saepe est, fuga nostrum dolor quidem laboriosam doloribus, quod tempore. Accusantium nisi deleniti labore exercitationem ipsam sequi suscipit illum amet, fuga iste. Saepe, dolores. Vero, neque obcaecati. Id magni ullam neque dolores ro fugiat facere officia aliquam, optio fugit enim! Corporis. Dolores alias non natus eius quis harum blanditiis, a voluptate modi, nobis possimus ab repellat et placeat audantium fuga architecto doloribus obcaecati? Dolorem, nulla animi consectetur error nostrum perferendis hic. Error culpa in similique enim magni cumque officia amet eum repudiandae dolorem quibusdam, minima nisi fugiat natus blanditiis tempora temporibus! Maiores totam consectetur dolor eos suscipit unde cum sed dolore? Ut accusamus sapiente eaque, aspernatur sint nobis, itaque iste repellat eligendi maxime commodi ab magnam aut ducimus fugit quia dignissimos optio blanditiis facilis eos similique, minus nisi laborum. Quas, veniam. ', 2)]),
      actions: n(() => [o(j, {
        class: e(s.$style.action), variant: a(S).ERROR, size: a(T).NORMAL, onClick: c[23] || (c[23] = (t) => $e.value = !1),
      }, { default: n(() => [Rt]), _: 1 }, 8, ['class', 'variant', 'size']), o(j, {
        class: e(s.$style.action), variant: a(S).PRIMARY, size: a(T).NORMAL, onClick: c[24] || (c[24] = (t) => $e.value = !1),
      }, { default: n(() => [Lt]), _: 1 }, 8, ['class', 'variant', 'size'])]),
      _: 1,
    }, 8, ['visiable'])], 2)], 2)], 2));
  },
}; const ht = { $style: Pa }; const Et = q(bt, [['__cssModules', ht]]); export { Et as default };
