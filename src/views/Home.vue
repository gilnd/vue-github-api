<template>
    <div>
        <h1 class="text-4xl">Hey There! <span class="animate-bounce inline-block py-2 px-4">👋</span></h1>
        <p class="text-2xl"> This app uses github API. It's a test one company gave me for an job interview! :)</p>
        
        
        <search-user class="pt-4 pb-8"
            @searchUser="searchUser" :loading="loading"/>
        
        <div v-if="users && users.length" class="space-y-4">
            <user-card 
                v-for="user in users" 
                :key="user.id" 
                :username="user.login"
                :avatar="user.avatar_url"
                :url="user.html_url"/>
        </div>
        <div v-else-if="failed" class="my-8 p-8 bg-red-300 rounded-lg border-4 border-red-400 text-center text-4xl text-red-800">
            <font-awesome-icon class="text-4l" icon='exclamation-triangle'/> 
            <p>Sorry for that, something went wrong! <br/> Computers have feelings too! 😔</p>
        </div>
        
        <div v-if="(users.length <= 0) && !firstSearch && !loading && !failed" class="my-8 p-8 bg-orange-300 rounded-lg border-4 border-orange-400 text-center text-4xl text-orange-800">
            <font-awesome-icon class="text-4l" icon='exclamation-triangle'/> 
            <p>Wow, thats a very rare username! Cant find this madlad on github!</p>
        </div>
    </div>
</template>
<script>
import SearchUser from '@/components/SearchUser.vue'
import UserCard from '@/components/UserCard.vue'

import {mapState} from 'vuex'
export default {
    name: 'Home',
    data: () => {
        return {
            loading: false,
            failed: false,
            firstSearch: true,
        }
    },
    components: {
        SearchUser,
        UserCard
    },
    methods: {
        searchUser: function(query){
            if(query){
                console.log('Searching for users: ', query);
                this.firstSearch = false;
                this.loading = true;
                this.failed = false;
                this.$store.dispatch('clearUsers');
                this.$store.dispatch('getUsers', query).then(() => {
                    this.loading = false;
                }).catch((error)=>{
                    this.failed = true;
                    this.loading = false;
                    console.log("Error on search: ", error);
                })
            }
        }
    },
    computed: mapState(['users'])
}
</script>