import { createRouter, createWebHistory } from "vue-router"
import HomeView from '@/views/HomeView/HomeView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'
import ProductsView from '@/views/ProductsView/ProductsView.vue'
import ContactsView from '@/views/ContactsView/ContactsView.vue'
import MemberView from '@/views/MemberView/MemberView.vue'
import TestView from '@/views/TestView/TestView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name:'home', component: HomeView},
        { path: '/about', name:'about', component: AboutView},
        { 
            path: '/products', 
            name:'products', 
            component: ProductsView,
            children: [
                { 
                    path: '', 
                    name:'products', 
                    component: () => import('@/views/ProductsView/section/Products.vue')
                },
                { 
                    path: 'detail', 
                    name:'productDetail', 
                    component: () => import('@/views/ProductsView/section/ProductDetail.vue')
                },
            ]
        },
        { path: '/contacts', name:'contacts', component: ContactsView},
        { path: '/member', name:'member', component: MemberView},
        { path: '/test', name:'test', component: TestView},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
    ]
})

export default router