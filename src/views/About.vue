<template>
  <section class="py-8 bg-black text-gray-100 max-w-screen-xl px-4 mx-auto">
    <div class="container mx-auto">
      <div class="p-4 text-left xl:max-w-2xl">
        <h2 class="text-2xl font-bold leadi sm:text-4xl">About Me</h2>
        <p class="my-4 text-neutral-600">
          Read more about my passion-driven pursuits in using web development and content writing to
          improve the healthcare industry
        </p>
      </div>
      <div class="flex md:flex-row flex-col  items-center justify-center place-items-center">
        <div
          class="flex justify-center px-4  my-auto col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start"
        >
          <button
            @click="toggleContent('introduction')"
            :class="{
              'text-gray-50': activeSection === 'introduction',
              'text-gray-400': activeSection !== 'introduction',
              'border-b-2 border-blue-500 md:border-l-2 md:border-b-0':
                activeSection === 'introduction',
              'border-b-2 border-white md:border-l-2 md:border-b-0':
                activeSection !== 'introduction'
            }"
            class="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3  text-gray-400"
          >
            Intro
          </button>
          <button
            @click="toggleContent('background')"
            :class="{
              'text-gray-50': activeSection === 'background',
              'text-gray-400': activeSection !== 'background',
              'border-b-2 border-blue-500 md:border-l-2 md:border-b-0':
                activeSection === 'background',
              'border-b-2 border-white md:border-l-2 md:border-b-0': activeSection !== 'background'
            }"
            class="px-2 py-1 md:py-3 text-gray-400"
          >
            Background
          </button>
          <button
            @click="toggleContent('expertise')"
            :class="{
              'text-gray-50': activeSection === 'expertise',
              'text-gray-400': activeSection !== 'expertise',
              'border-b-2 border-blue-500 md:border-l-2 md:border-b-0':
                activeSection === 'expertise',
              'border-b-2 border-white md:border-l-2 md:border-b-0': activeSection !== 'expertise'
            }"
            class="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3  text-gray-400"
          >
            Expertise
          </button>
          <button
            @click="toggleContent('experience')"
            :class="{
              'text-gray-50': activeSection === 'experience',
              'text-gray-400': activeSection !== 'experience',
              'border-b-2 border-blue-500 md:border-l-2 md:border-b-0':
                activeSection === 'experience',
              'border-b-2 border-white md:border-l-2 md:border-b-0': activeSection !== 'experience'
            }"
            class="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3  text-gray-400"
          >
            Experience
          </button>
          <!-- <button
            @click="toggleContent('relevant')"
            :class="{
              'text-gray-50': activeSection === 'relevant',
              'text-gray-400': activeSection !== 'relevant',
            }"
            class="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400"
          >
            !relevant
          </button> -->
        </div>
        <div class=" ">
          <div v-if="activeSection === 'introduction'">
            <introductionVue />
          </div>

          <div class="text-green-600" v-if="activeSection === 'experience'">
            <experienceVue />
          </div>
          <div class="text-gray-700" v-if="activeSection === 'expertise'">
            <expertiseVue />
          </div>
          <div class="text-orange-600" v-if="activeSection === 'background'">
            <backgroundVue />
          </div>

          <!-- <router-view /> -->
        </div>
      </div>
      <div class="justify-center text-center items-center">
        <button
          data-popover-target="popover-default"
          class="border-neutral-600 border-b-2 border-dotted text-neutral-600 hover:border-neutral-800 hover:text-neutral-300"
        >
          Download CV
        </button>
        <div
          data-popover
          id="popover-default"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
        >
          <div
            class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
          >
            <h3 class="font-semibold text-gray-900 dark:text-white">testing Popover title</h3>
          </div>
          <div class="px-3 py-2">
            <p>And here's some amazing content. It's very engaging. Right?</p>
          </div>
          <div data-popper-arrow></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import introductionVue from '../pages/introduction.vue'
// import relevantVue from "../pages/relevant.vue";
import experienceVue from '../pages/experience.vue'
import expertiseVue from '../pages/expertise.vue'
import backgroundVue from '../pages/background.vue'
export default {
  data() {
    return {
      activeSection: 'introduction'
    }
  },
  methods: {
    toggleContent(section) {
      this.activeSection = section
    }
  },
  components: {
    introductionVue,
    // relevantVue,
    experienceVue,
    expertiseVue,
    backgroundVue
  }
}
</script>
<style>
.gradient-text {
  background: linear-gradient(to right, from green, via blue, to purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
