
import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/pages/Home/Home.vue'

export const createMyRouter = function(){
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path:'/',
                name:'home',
                component:Home
            },
            {
                path:'/products',
                name:'products',
                component: () => import('@/pages/products/products.vue')
            },
            {
                path:'/promotion',
                name:'promotion',
                component: () => import('@/pages/promotion/promotion.vue'),
                children:[
                    {
                        path:'Monthly',
                        name:'Monthly',
                        component: () => import('@/pages/promotion/children/Monthly.vue'), 

                    },                    
                    {
                        path:'introduce',
                        name:'introduce',
                        component: () => import('@/pages/promotion/children/introduce.vue'),
                        children:[
                            {
                                path:'messageDetails',
                                name:'introduceMessageDetails',
                                component: () => import('@/pages/promotion/children/grandChildren/messageDetails.vue'), 
        
                            } 
                            ]
                    },                    
                    {
                        path:'newGoods',
                        name:'newGoods',
                        component: () => import('@/pages/promotion/children/newGoods.vue'),    
                        children:[
                            {
                                path:'messageDetails',
                                name:'newGoodsMessageDetails',
                                component: () => import('@/pages/promotion/children/grandChildren/messageDetails.vue'), 
        
                            } 
                            ]
                    },                    
                    {
                        path:'Promotions',
                        name:'Promotions',
                        component: () => import('@/pages/promotion/children/Promotions.vue'),  
                        children:[
                        {
                            path:'messageDetails',
                            name:'PromotionsMessageDetails',
                            component: () => import('@/pages/promotion/children/grandChildren/messageDetails.vue'), 
    
                        } 
                        ]
                    },


                ]
                
            },
            {
                path:'/brandZone',
                name:'brandZone',
                component: () => import('@/pages/brandZone/brandZone.vue')
            },
    
        ]
    })
    // 阻擋
    // router.beforeEach(() => {
    //     console.log('beforEach');
    // })
    // 頁面初始化
    // router.beforeResolve(() => {
    //     console.log('beforeResolve');
    // })

    return router
}

// export default router