<template>
    <div class="py-4rounded-lg">
        <div class="relative shadow-lg rounded-lg">
            <span class=" 
                absolute 
                text-center 
                items-center justify-center
                py-4">       
                <font-awesome-icon v-if="loading" class="text-4xl animate-spin h-6 w-6 m-2 text-indigo" icon='spinner'/>
            </span>
        
            <input 
                required
                v-bind:class="loading ? 'pl-12' : 'pl-4'"
                class="w-full py-4  pr-8 
                text-2xl 
                bg-gray-200 
                focus:bg-gray-100 
                rounded-lg 
                border-gray-500 
                focus:outline-none
                focus:ring-2 
                focus:ring-blue-600 
                focus:border-indigo-500" 
                type="text" 
                placeholder="type username..."
                @keyup.enter="searchUser"
                v-model="query"/>

            <button class="absolute uppercase 
                inset-y-0 right-0 
                flex items-center px-4 
                font-semibold text-indigo-500 
                bg-transparent rounded-r-lg 
                hover:text-white hover:bg-indigo-400 
                focus:outline-none  
                focus:text-white focus:bg-indigo-500"
                @click="searchUser">Search</button>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{ loading: Boolean },
    data() { return { query: null } },
    methods: {
        searchUser: function(){this.$emit('searchUser', this.query);}
    }
}
</script>