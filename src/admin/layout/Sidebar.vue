<template>
    <div id="admin-sidebar">

        <div class="mobile-phone">
            <a href="#">
                <i class="icon icon-th"></i>&nbsp;<span>{{this.$route.path}}</span>
            </a>
            <div class="mobile-message">
                <b-badge variant="primary"><i class="icon icon-envelope"></i>&nbsp;5</b-badge>
            </div>
        </div>

        <div class="mini-menu">
            <a href="#">&nbsp;</a>
        </div>

        <b-nav vertical id="admin-sidebar-menu">

            <b-nav-text tag="li" :class="{active:this.$route.path==='/admin/dashboard'}">
                <router-link to="/admin/dashboard">
                    <i class="icon icon-home"></i><span>Карточка</span>
                </router-link>
            </b-nav-text>


        </b-nav>
    </div>
</template>

<script>
    // import {sidebarMenuFeatures} from '../../assets/admin/js/sidebar'

    export default {
        data() {
            return {}
        },
        mounted() {
            // sidebarMenuFeatures()
        },
        methods: {}
    }
</script>