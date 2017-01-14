<template>
    <div id="container">
        <list-messages class="list" :sender="sender"></list-messages>
        <chat-zone></chat-zone>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import ListMessages from './components/ListMessages.vue';
    import ChatZone from './components/ChatZone.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'app',
        components: { ListMessages, ChatZone },
        computed: {
            ...mapGetters({
                sender: 'chat_sender',
                push_id: 'chat_push_id',
            })
        },
        created() {
            this.$options.sockets.message =  (message) => this.addMessage(message);
            
            const config = {
                apiKey: "AIzaSyArEaIk3iFNYQbB9u0eW_UVPB5GMaz1aV4",
                authDomain: "amp-pwa-vue.firebaseapp.com",
                databaseURL: "https://amp-pwa-vue.firebaseio.com",
                storageBucket: "amp-pwa-vue.appspot.com",
                messagingSenderId: "583154623608"
            };
            firebase.initializeApp(config);
            const messaging = firebase.messaging();
            messaging.requestPermission()
                .then(() => messaging.getToken())
                .then((token) => {
                    this.$socket.emit('new_client', token);
                    this.setPushId(token);
                }) // token to send to the server
                .catch(err => console.log('Error occured', err));
            this.setSender(prompt('Who are you ?'));
            messaging.onMessage((data) => this.addMessage(data));

        },
        methods: {
            ...mapActions({
                setSender: 'chat_setSender',
                setPushId: 'chat_setPushId',
                addMessage: 'chat_addMessage',
            })
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
