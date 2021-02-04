<template>
    <div class="w-full px-8 py-4 my-2 shadow-md cursor-pointer bg-gray-100 rounded-lg text-indigo-500 font-semibold hover:bg-indigo-500 hover:text-gray-200 flex items-center space-x-4"
        @click="openProfile(url)">
        <img class="w-12 h-12 rounded-full" :src="avatar"/>
        <span class="text-xl">/{{username}}</span>
    </div>
</template>

<script>
export default {
    props: {
        avatar: String,
        username: String,
        url: String,
    },
    methods: {
        openProfile(url){
            window.open(url);
        }
    }
}
</script>