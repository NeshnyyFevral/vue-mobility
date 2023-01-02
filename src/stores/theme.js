import { defineStore } from 'pinia';
import { ref } from 'vue';

import appStorage from '@/appStorage';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(0);
  const changeTheme = () => {
    theme.value = appStorage.get('themeColor');
  };
  return { theme, changeTheme };
});
