class Storage {
  get = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  };

  set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  removeItem = (key) => {
    localStorage.removeItem(key);
  };
}

const appStorage = new Storage();

export default appStorage;
