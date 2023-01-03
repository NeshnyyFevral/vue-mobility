<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <div :class="$style.authBox">
        <div :class="$style.image">
          <img
            src="../assets/images/bg-authorisation.svg"
            alt="auth-image"
          >
        </div>
      </div>
      <div :class="$style.authBox">
        <div :class="$style.main">
          <h3 :class="$style.title">
            Registration
          </h3>
          <form
            :class="$style.form"
            @submit.prevent="submit"
          >
            <Input
              :placeholder="'Login'"
              :size="InputSize.SMALL"
              :class="[$style.input, $style.login]"
              :label="'login'"
              :value="loginValue"
              :hint="'Your login'"
              @input="inputLogin"
              @error="loginError"
            />
            <Input
              :placeholder="'Email address'"
              :size="InputSize.SMALL"
              :class="[$style.input, $style.email]"
              :label="'email'"
              :value="emailValue"
              :hint="'Your email'"
              :rules="[rulesEmail.required, rulesEmail.email]"
              validate-on-blur
              @input="inputEmail"
              @error="emailError"
            />
            <Input
              :size="InputSize.SMALL"
              :class="[$style.input, $style.password]"
              :label="'password'"
              :value="passwordValue"
              :placeholder="'Your password'"
              :hint="'At least 8 characters'"
              :type="passwordShow ? 'text' : 'password'"
              :rules="rulesPassword"
              :counter="8"
              @input="inputPassword"
              @error="passwordError"
            >
              <template #appendInner>
                <component
                  :is="passwordShow ? EyeOff : EyeOn"
                  :class="$style.appendInputIcon"
                  @focus="passwordShow = !passwordShow"
                />
              </template>
            </Input>

            <div :class="$style.actions">
              <Button
                :variant="ButtonVariant.PRIMARY"
                :size="ButtonSize.NORMAL"
                :class="$style.button"
                type="submit"
              >
                Sigh up
              </Button>
            </div>
            <div :class="$style.registration">
              Already have an account? <button
                type="button"
                @click="login"
              >
                Sign in instead
              </button>
            </div>
          </form>
          <div :class="$style.copyright">
            ©2023 materio
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed, onBeforeMount, ref,
} from 'vue';
import { useRouter } from 'vue-router';

import appStorage from '@/appStorage';
import EyeOff from '@/assets/icons/eye-off.svg';
import EyeOn from '@/assets/icons/eye-on.svg';
import Button from '@/components/Basic/Button.vue';
import Input from '@/components/Basic/Input.vue';
import { ButtonSize, ButtonVariant } from '@/model/button';
import { InputSize } from '@/model/input';
import { Routes } from '@/router';
import { useThemeStore } from '@/stores/theme';
import theme from '@/styles/theme';

const themeStore = useThemeStore();
const router = useRouter();
const loginValue = ref('');
const emailValue = ref('');
const passwordValue = ref('');
const passwordShow = ref(false);

const loginErrorValue = ref(false);
const emailErrorValue = ref(false);
const passwordErrorValue = ref(false);

const rulesEmail = {
  required: (value) => !!value || 'Required.',
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
};
const rulesPassword = [(value) => value.length >= 8 || 'min 8 characters'];

const inputLogin = (val) => { loginValue.value = val; };
const inputEmail = (val) => { emailValue.value = val; };
const inputPassword = (val) => { passwordValue.value = val; };

const loginError = (val) => { loginErrorValue.value = val; };
const emailError = (val) => { emailErrorValue.value = val; };
const passwordError = (val) => { passwordErrorValue.value = val; };

const submit = () => {
  if (!emailValue.value || !passwordValue.value || !loginValue.value) {
    alert('Заполните все поля!');
    return;
  }

  if (loginErrorValue.value || emailErrorValue.value || passwordErrorValue.value) return;

  appStorage.set('user', {
    login: loginValue.value,
    email: emailValue.value,
    password: passwordValue.value,
  });
  appStorage.set('authUser', { key: Math.random().toString(16).substring(2, 8) });
  router.push(Routes.CRM);
};

const login = () => {
  router.push(Routes.LOGIN);
};

onBeforeMount(() => {
  if (appStorage.get('authUser')) {
    router.push(Routes.CRM);
  }
});

const color = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
</script>

<style module lang="scss">
  .root {
    --text-color: v-bind(color);

    height: 100vh;
  }

  .container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    height: 100vh;
    color: var(--text-color);
  }

  .authBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 20px 90px;
  }

  .authBox:first-child {
    background-color: #6671D0;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .authBox:last-child {
    justify-content: flex-start;

    @media (max-width: 900px) {
      display: block;
      width: 100%;
      padding: 20px 90px;
      margin-top: 70px;
    }

    @media (max-width: 1100px) {
      padding: 20px 40px;
    }
  }

  .main {
    width: 600px;

    @media (max-width: 1100px) {
      width: auto;
    }
  }

  .form {
    margin-bottom: 40px;
  }

  .image img {
    width: 100%;
    height: auto;
  }

  .appendInputIcon {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }

  .title {
    margin-bottom: 10px;
    font-size: 45px;
  }

  .desc {
    margin-bottom: 30px;
  }

  .input {
    margin-bottom: 30px;
  }

  .actions {
    display: flex;
    justify-content: space-around;
  }

  .button {
    width: 350px;
    margin-bottom: 20px;
  }

  .button + .button {
    margin-left: 20px;
  }

  .registration button {
    margin-left: 5px;
    font-size: 16px;
    color: var(--text-color);
    text-decoration: underline;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: color 0.2s linear;

    &:hover {
      color: #cea0ff;
    }
  }
</style>
