const state = {
    messages: [],
    sender: '',
    push_id: '',
}

const mutations = {
    CHAT_ADD_MESSAGE (state, message) {
        state.messages.push(message);
    },
    CHAT_SET_SENDER (state, sender) {
        state.sender = sender;
    },
    CHAT_SET_PUSH_ID (state, push_id) {
        state.push_id = push_id;
    },
}

const actions = {
    chat_addMessage ({state, commit}, message) {
        commit('CHAT_ADD_MESSAGE', message);
    },
    chat_setSender ({state, commit}, sender) {
        commit('CHAT_SET_SENDER', sender);
    },
    chat_setPushId ({state, commit}, push_id) {
        commit('CHAT_SET_PUSH_ID', push_id);
    },
}

const getters = {
    chat_messages (state, getters, rootState) {
        return state.messages;
    },
    chat_sender (state, getters, rootState) {
        return state.sender;
    },
    chat_push_id (state, getters, rootState) {
        return state.push_id;
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
