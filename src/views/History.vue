<template>
    <div class="text-center text-lg text-gray-800"> 
        <h1 class="text-4xl m-8">History of searches!</h1>
            <div v-if="keywords && keywords.length" >
                <div class="flex space-x-6 py-6">
                    <button class=" py-4 px-6 uppercase  
                    flex items-center  
                    font-semibold
                    rounded-lg 
                    text-white bg-indigo-400
                    hover:border-2 hover:border-indigo-800 
                    focus:outline-none  
                    focus:text-white focus:bg-indigo-500"
                    @click="clearHistory()">Clear History</button>
                    
                    <button class=" py-4 px-6 uppercase  
                    flex items-center  
                    font-semibold
                    rounded-lg 
                    text-white bg-indigo-400
                    hover:border-2 hover:border-indigo-800 
                    focus:outline-none  
                    focus:text-white focus:bg-indigo-500"
                    @click="clearUsers()">Clear User</button>

                </div>
                <ul  class="space-y-4" >
                    <li v-for="key in keywords" 
                        :key="key.id"
                        class="p-4 text-2xl bg-gray-100 rounded-lg shadow-md ">"{{key}}"</li>
                </ul>
                <p class="mt-8 mb-4 text-2xl"> Last results : </p>
                <div v-if="users && users.length" class="space-y-4">
                    <user-card 
                        v-for="user in users" 
                        :key="user.id" 
                        :username="user.login"
                        :avatar="user.avatar_url"
                        :url="user.html_url"/>
                </div>
            </div>
            <div v-else> 
                <p class="text-2xl italic font-semibold text-gray-600 ">No searches has been made yet!</p>
            </div>
    </div>
</template>
<script>
import UserCard from '@/components/UserCard.vue'
import {mapState} from 'vuex'

export default {
    name:'history',
    data: () => { return {}},
    components: { UserCard },
    methods: {
        clearUsers: function(){
            this.$store.dispatch('clearUsers');
        },
        clearHistory: function(){
            this.$store.dispatch('clearHistory');
        }
    },
    computed: mapState(['keywords', 'users'])
}
</script>