const state = {
    messages: []
}

const mutations = {
    ADD_MESSAGE (store, message) {
        state.messages.push(message);
    }
}

const actions = {
    addMessage (store, message) {
        commit('ADD_MESSAGE');
    }
}

const getters = {
    messages () {
        state.messages
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
