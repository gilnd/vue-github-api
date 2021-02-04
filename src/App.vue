<template>
    <div id="app" class="bg-gray-300 min-w-screen min-h-screen p-4 md:p-0" >  
        <NavBar/>
        <router-view class="container my-16 bg-gray-300 mx-auto min-h-screen"/>
        <Footer/>
    </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar, Footer
  }
}
</script>
