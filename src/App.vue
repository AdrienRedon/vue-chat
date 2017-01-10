<template>
    <div id="container">
        <list-messages class="list" :messages="messages" :sender="sender"></list-messages>
        <chat-zone></chat-zone>
    </div>
</template>

<script>
    import ListMessages from './components/ListMessages.vue';
    import ChatZone from './components/ChatZone.vue';

    export default {
        name: 'app',
        components: { ListMessages, ChatZone },
        data () {
            return {
                messages: [],
                sender: ''
            }
        },
        created() {
            this.$options.sockets.message = (data) => {
                this.messages.push(data)
            };

            this.$options.sockets.new_client =  (sender) => console.log(sender, 'join the chat');

            this.sender = prompt('Who are you ?');
            this.$socket.emit('new_client', this.sender);
        }
    }
</script>

<style scoped>
    .container {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
    }
    
    .list {
        flex: 1;
    }

</style>
