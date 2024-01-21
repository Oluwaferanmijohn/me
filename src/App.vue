<script setup>
// import navbar from './views/navbar.vue'
import hero from './views/hero.vue'
import sidebar from './views/sidebar.vue'
// import tools from './views/tools.vue'
// import about from './views/About.vue'
// import project from './views/project.vue'
// import message from './views/message.vue'
// import foot from './views/footer.vue'
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="text-white bg-white h-screen w-screen">
    <!-- <div class="flex "> -->
    <sidebar /> 
    <hero />

    <!-- </div> -->
    <!-- <navbar /> -->
    <!-- <hero /> -->
    <!-- <tools /> -->
    <!-- <about /> -->
    <!-- <project /> -->
    <!-- <message /> -->
    <!-- <foot /> -->
  </div>
</template>

<style scoped></style>
