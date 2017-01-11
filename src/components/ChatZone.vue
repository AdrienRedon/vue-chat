<template>
    <form @submit.prevent="onSubmit" class="container">
        <textarea v-model="message" placeholder="Type your message here"></textarea>
        <button type="submit">Send</button>
    </form >
</template>

<script>
    export default {
        data () {
            return {
                message: ''
            }
        },
        methods: {
            onSubmit (e) {
                this.$socket.emit('message', this.message);
            }
        }
    }
</script>

<style scoped>
    
</style>
