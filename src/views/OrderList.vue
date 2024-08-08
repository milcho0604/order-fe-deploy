<template>
    <OrederListComponent 
    :isAdmin="true"    
    
    />
</template>

<script>
import OrederListComponent from '@/components/OrederListComponent.vue';

export default{
    components: {
        OrederListComponent
    },
    // data() {
    //     return {
            
    //     }
    // },
}
</script>