import Vue from 'vue'
import App from './App.vue'
import VueSocketio from 'vue-socket.io';
import store from './store'

Vue.use(VueSocketio, 'http://localhost:1337');

new Vue({
  el: '#app',
  store,
  sockets:{
    connect: function(){
      console.log('socket connected')
    }
  },
  render: h => h(App)
})
