

<template>
 
 <!--There must be only one root element inside a template-->
 <div>
    
    <div >
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                                   
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div class="navbar-nav">
                
                     <router-link to="/about">About this Vue Application&nbsp;&nbsp;</router-link> 
                                     
                     <!--If the current user is logged in-->
                    <div v-if="account.status['loggedIn']">
                         <router-link to="/login">Logout</router-link>
                    </div>

                     <!--If no users are logged in-->
                   
                     <router-link  v-if="!account.status['loggedIn']" to="/login">Login</router-link>
                                                       
               </div>

            </div>

         </nav>
    </div>
    
    <!--If the current user is logged in display the name of the user-->
    <div class="user-text" v-if="account.status['loggedIn']" >
        You are logged in as: 
        <span class="user-name"> {{ account.user.username }} </span>
    </div>


    <div class="jumbotron">
        <div class="container">
            <div class="row">
               <div class="col-sm-6 offset-sm-3">
                    

                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
 
 </div>
 
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    computed: {
        ...mapState({

             alert: state => state.alert,

            // For testing if the current user is logged in
            account: state => state.account
                                       
        })
    },
    
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear'
          
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>