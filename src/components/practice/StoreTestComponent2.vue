<template>
    <h1>store test component2</h1>
    <p>count: {{getCount}}</p>
    <button @click="incrementCount" color="primary"> incrementCount </button>


    <br>
    <p>{{getMessage}}</p>
    <br>
    <input type="text" v-model="newMessage">
    <br>
    <v-btn color="red" @click="updateMessage">updateMessage</v-btn>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
    data() {
        return {
            count: 0,
        }
    },
    computed:{
        ...mapGetters(['getCount']),
        ...mapGetters(['getMessage'])
    },
    methods: {
        incrementCount(){
            // this.count++
            this.$store.dispatch('incrementCount')
        },
        updateMessage(){
            this.$store.dispatch('updateMessage', this.newMessage)
        }
    }
}
</script>