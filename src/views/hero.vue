<template>
  <section class="bg-black">
    <div
      class="grid max-w-screen-xl max-h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
        >
          <span class="group text-2xl md:text-3xl xl:text-4xl"
            >H<span class="text-blue-400">i</span> there<span class="text-blue-400">!</span> </span
          ><br /><span class="group-hover:text-blue-500 transition-transform"
            >I'm Oluwaferanmi John</span
          >
        </h1>
        <p class="max-w-2xl mb-6 font-extralight lg:mb-8 md:text-lg lg:text-xl text-gray-400">
          I am a
          <span class="border-b-[1px] text-blue-400 border-dotted border-gray-500"
            >Software developer</span
          >&nbsp; and
          <span class="border-b-[1px] text-blue-400 border-dotted border-gray-500"
            >Content writer,</span
          >
          &nbsp;with a passion for using technology to improve healthcare.
        </p>
        <a
          href="#"
          class="inline-flex gap-2 text-blue-400 items-center justify-center border-blue-400 hover:border-b-2 border-dotted pb-2 mr-3 text-base font-medium text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
          ><svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
          <span class="">Let's Explore</span>
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 w-96 h-96 lg:flex">
        <img
          src="../assets/image/image.png"
          class="rounded-full border-white border-2 border-dashed"
          alt="mockup"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style>
.transition-transform {
  transition-property: transform, color;
  transition-duration: 0.5s; /* Adjust the duration as needed */
  transition-timing-function: ease-in-out; /* Adjust the timing function as needed */
}

.group:hover .transition-transform {
  transform: translateX(10px); /* Adjust the distance the text moves */
  color: #1a202c; /* New color on hover */
}
</style>
