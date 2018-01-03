<template>
    <form @submit.prevent="onSubmit" class="container">
        <textarea v-model="message" placeholder="Type your message here"></textarea>
        <button type="submit">Send</button>
    </form >
</template>

<script>
    import { mapGetters } from 'vuex'; 

    export default {
        data () {
            return {
                message: '',
            }
        },
        computed: {
            ...mapGetters({
                sender: 'chat_sender',
                push_id: 'chat_push_id',
            })
        },
        methods: {
            onSubmit () {
                this.$socket.emit('message', this.message, this.sender, this.push_id);
                this.message = '';
            }
        }
    }
</script>

<style scoped>
    
</style>
