<template>
    <form @submit.prevent="onSubmit" class="container">
        <textarea>Type your message</textarea>
        <button type="submit">Send</button>
    </form >
</template>

<script>
    export default {
        props: ['sender'],
        methods: {
            onSubmit (e) {
                let message = e.target.querySelector('textarea').value;
                this.$socket.emit('message', message);
            }
        }
    }
</script>

<style scoped>
    
</style>