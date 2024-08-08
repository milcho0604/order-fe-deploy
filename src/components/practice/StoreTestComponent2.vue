<template>
    <h1>store test component2</h1>
    <p>count: {{getCount}}</p>
    <button @click="incrementCount" color="primary"> incrementCount </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
    data() {
        return {
            count: 0
        }
    },
    computed:{
        ...mapGetters(['getCount'])
    },
    methods: {
        incrementCount(){
            // this.count++
            this.$store.dispatch('incrementCount')
        },
    }
}
</script>