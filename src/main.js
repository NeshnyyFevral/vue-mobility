import createApp from '@/app/index';

const {
  app,
  router,
} = createApp();

app
  .use(router)
  .mount('#app');
