<template>
    <div class="list-messages">
        <message v-for="message in messages" :class="{'bySender': sender === message.sender}">
            {{ message.txt }} by {{ message.sender }} {{ postedOn(message) }}
        </message>
    </div>
</template>

<script>
    import moment from 'moment';
    import Message from './Message.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: { Message },
        computed: {
            ...mapGetters({
                messages: 'chat_messages',
                sender: 'chat_sender',
            })
        },
        methods: {
            bySender (msg) {
                return msg.sender === this.sender;
            },
            postedOn (msg) {
                return moment(msg.created_at).fromNow();
            }
        }
    }
</script>

<style scoped>
    .list-messages {
        width: 100vw;
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
        -ms-align-items: flex-start;
        align-items: flex-start;
    }

    .bySender {
        -ms-align-self: flex-end;
        align-self: flex-end;
    }
</style>
