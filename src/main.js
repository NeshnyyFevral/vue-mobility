import createApp from './app/index';
import createRouter from './router';

const { app } = createApp();
const { router } = createRouter();

app
  .use(router)
  .mount('#app');
