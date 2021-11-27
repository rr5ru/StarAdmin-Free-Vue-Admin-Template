<template>
    <div id="admin-header">
        <b-navbar toggleable="md" id="admin-header-nav">

            <b-navbar-toggle class="admin-header-toggle" target="admin-header-nav-collapse"></b-navbar-toggle>

            <b-navbar-brand class="admin-header-logo" to="/admin">
                <span>&nbsp;admin panel</span>
            </b-navbar-brand>

            <b-collapse is-nav id="admin-header-nav-collapse">



                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-input-group>
                            <b-form-input size="sm" class="mr-sm-0" type="text" placeholder="Search"></b-form-input>
                            <b-button variant="primary" size="sm" class="my-2 my-sm-0" slot="append" type="submit">
                                <i class="icon icon-search"></i>
                            </b-button>
                        </b-input-group>
                    </b-nav-form>

                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>