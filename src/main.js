import Vue from 'vue'
import App from './App.vue'
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:1337');

new Vue({
  el: '#app',
  sockets:{
    connect: function(){
      console.log('socket connected')
    }
  },
  render: h => h(App)
})
