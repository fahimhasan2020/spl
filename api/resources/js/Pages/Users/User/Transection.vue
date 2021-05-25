<template>
    <layout title="Admin | AdminLIst">
        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title-box">
                                <h4 class="page-title">Dashboard</h4>
                                <ol class="breadcrumb p-0 m-0">
                                    <li CLASS="active">
                                         Transection
                                    </li>
                                </ol>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-box">
                                <h4 class="header-title m-t-0 m-b-30">User Panel</h4>
                                <ul class="nav nav-tabs tabs-bordered">
                                    <li class="active">
                                        <a href="#home-b1" data-toggle="tab" aria-expanded="true">
                                            <span class="visible-xs"><i class="fa fa-home"></i></span>
                                            <span class="hidden-xs">Transection</span>
                                        </a>
                                    </li>
                                   
                                   
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="home-b1">
                                      
                                        <hr>
                                        <transections v-bind:permissions="admins"></transections>
                                    </div>
                                   
                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div>
                    <!-- end row -->
                </div> <!-- container -->
            </div> <!-- content -->
        </div>
    </layout>
</template>
<script>
    import Layout from "../../inc/Layout";
    import Dashboard from "../../../Mixins/Dashboard";
    import PermissionList from "./PermissionList";
    import RoleList from "./RoleList";
    import Admins from "./Admins";
    import AdminHolded from "./AdminHolded";
    import AllTransections from "./AllTransections"
    export default {
        components: {Layout,permission:PermissionList,role:RoleList,admins:Admins,holded:AdminHolded,transections:AllTransections},
        mixins: [Dashboard],
        data () {
            return {
               //
            }
        },

        props: {
            permissions:Object,
            roles:Object,
            admins:Object,
            adminDisabled:Object
        },
        computed: {
          //
        },
        created () {
            //
        },
        mounted () {
           //
        },
                methods: {
                    //
        }
    };
</script>
