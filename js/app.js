const createApp = Vue.createApp;
const param = {
  data: function () {
    return {
      num: 3,
      numeri: 56,
      message: 'Hello Vue :)',
      content: 'Welcome to Vue!!!',
      member: ['Giacinto', 'Giangianni', 'Giangiacomo'],
      className: 'border',
      colorWhite: 'white',
      image: 'bg-image'
    }
  },
  methods: {
    onClick: function () {
      this.num++
    },
  }
}
const app = createApp(param);
app.mount('#app');