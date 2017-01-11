export default function socketPlugin (socket) {
    return store => {
        socket.on('message', data => {
            store.commit('ADD_MESSAGE', data)
        })
    }
}
