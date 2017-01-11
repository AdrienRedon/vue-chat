import Vue from 'vue';
import Vuex from 'vuex';
import messagesModule from './modules/messages';
import socketPlugin from './plugins/socket';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        messages: messagesModules
    },
    plugins: [socketPlugin]
});
