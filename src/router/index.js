// @는 src(루트 폴더의 경로) 의미
// 파일 내부에 export default 있는 경우에는 {} 필요없고, 그렇지 않으면 {} 필요
// import하는 요소가 여러개 있을때에도 {}를 붙인다
import { createRouter, createWebHistory } from "vue-router"
// import HomeComponent from "@/components/HomeComponent.vue";
// import TestComponent from "@/components/TestComponent.vue";

import { praticeRouter } from "./praticeRouter";
const routes = [
    // {
    //     // path로도 라우팅이 가능하고 name으로도 라우팅이 가능
    //     // name으로 라우팅하는 경우는 js코드내에서 라우팅하는 경우
    //     path: '/home',
    //     name: 'HOME',
    //     component: HomeComponent
    // },
    // {
    //     path: '/test',
    //     name: 'TEST',
    //     component: TestComponent
    // }

    ...praticeRouter
]


const router = createRouter({
    // vue router는 내부적으로 두가지 방식의 히스토리 관리를 제공
    // 1) createWebHistory : /home, 2) createHashHistory : /#/home
    // 대부분 createWebHistory 사용
    history: createWebHistory(),
    routes
})

export default router;