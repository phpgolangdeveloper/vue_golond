import {createRouter, createWebHistory} from "vue-router";
import Home from './components/Home'

const webHistory = createWebHistory();

const router = createRouter({
    history: webHistory,
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home, // 对应到哪一个组件？
        },
        {
            path: "/",
            name: "index",
            component: () => import('./components/Index')
        },
        {
            path: "/books",
            name: "book",
            component: () => import('./components/Books')
        },
        {// 动态路由
            path: "/book_detail/:id",
            name: "book_detai",
            component: () => import('./components/BookDetai')
        },
        {
            path: "/post_test",
            name: "post_test",
            component: () => import('./components/Submit')
        },
        {
            path: "/upload_file",
            name: "upload_file",
            component: () => import('./components/UploadFile')
        },
    ],
});

export default router;