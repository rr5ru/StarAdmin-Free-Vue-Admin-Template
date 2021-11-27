import AdminLayout from "./../../admin/Layout.vue";

const layout = {path: "/", name: "admin", component: AdminLayout};

const dashboard = {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import(/* webpackChunkName: "admin-dashboard" */ './../../admin/dashboard/Index.vue'),
};


// export
export {
    layout as adminLayoutRouter,
    dashboard as adminDashboardRouter,
}