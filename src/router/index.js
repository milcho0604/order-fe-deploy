// @는 src(루트 폴더의 경로) 의미
// 파일 내부에 export default 있는 경우에는 {} 필요없고, 그렇지 않으면 {} 필요
// import하는 요소가 여러개 있을때에도 {}를 붙인다
import { createRouter, createWebHistory } from "vue-router"
// import HomeComponent from "@/components/HomeComponent.vue";


import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";
import { productRouter } from "./productRouter";

const routes = [
    // {
//     path: '/',
//     name: 'HomeComponent',
//     component: HomeComponent,
// },
...practiceRouter,
...memberRouter,
...productRouter

]


const router = createRouter({
    // vue router는 내부적으로 두가지 방식의 히스토리 관리를 제공
    // 1) createWebHistory : /home, 2) createHashHistory : /#/home
    // 대부분 createWebHistory 사용
    history: createWebHistory(),
    routes
})

export default router;