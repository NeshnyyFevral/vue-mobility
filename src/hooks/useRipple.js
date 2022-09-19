import { reactive } from 'vue';

export const useRipple = () => {
  const items = reactive([]);

  const remove = (key) => {
    const index = items.findIndex((i) => i.key === key);
    if (index === -1) return;
    items.splice(index, 1);
  };

  const add = (top, left, color) => {
    const key = Math.random().toString(16).substring(0, 8);

    const item = {
      left,
      key,
      top,
      color,
    };

    items.push(item);

    setTimeout(() => {
      remove(item.key);
    }, 800);
  };

  return {
    add,
    items,
  };
};
