const createApp = Vue.createApp;
const param = {
  data: function () {
    return {
      message: 'Hello Vue :)',
      content: 'Welcome to Vue!!!',
    }
  }
};
const app = createApp(param);
app.mount('#app');
