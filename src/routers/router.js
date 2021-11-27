// vue
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);



import {adminLayoutRouter, adminDashboardRouter} from "./admin/layout";

const router = new Router({
    // mode: 'history',
    // base: __dirname,
    routes: [
        // {
        //     path: adminDashboardRouter.path,
        //     name: adminDashboardRouter.name,
        //     component: adminDashboardRouter.component,
        // },
        
        {
            path: adminLayoutRouter.path,
            name: adminLayoutRouter.name,
            component: adminLayoutRouter.component,
            // redirect: adminDashboardRouter,
            // beforeEnter: requireAdminAuth,
            // children: adminChildrenRouter,
        }
    ]
});


export default router
