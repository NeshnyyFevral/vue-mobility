import createApp from '@/app/index';

const {
  app, pinia, router,
} = createApp();

app
  .use(pinia)
  .use(router)
  .mount('#app');
