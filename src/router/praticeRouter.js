
import VuetifyComponent from "@/components/pratice/VuetifyComponent.vue";
import ModelingComponent from "@/components/pratice/ModelingComponent.vue";
import ConditionalComponent from "@/components/pratice/ConditionalComponent.vue";
import HookComponent from "@/components/pratice/HookComponent.vue";
import AxiosTestComponent from "@/components/pratice/AxiosTestComponent.vue";



export const praticeRouter = [
    {
        path: '/pratice/vuetify',
        name: 'VuetifyComponent',
        component: VuetifyComponent
    },
    {
        path: '/pratice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    },
    {
        path: '/pratice/conditional',
        name: 'ConditionalComponent',
        component: ConditionalComponent
    },
    {
        path: '/pratice/hooks',
        name: 'HookComponent',
        component: HookComponent
    },
    {
        path: '/pratice/axiostest',
        name: 'AxiosTestComponent',
        component: AxiosTestComponent
    }

]