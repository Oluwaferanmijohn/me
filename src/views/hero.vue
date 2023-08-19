<template>
  <section class="bg-black">
    <div
      class="grid max-w-screen-xl max-h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
        >
          <span class="text-3xl md:text-4xl xl:text-5xl">Hi there! </span><br />I'm Oluwaferanmi
          John
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-400"
        >
          I'm skilled in
          <span class="border-b-2 border-dotted font-normal border-gray-500"
            >Software Development
          </span>and &nbsp;
          <span class="border-b-2 border-dotted font-normal border-gray-500">Content Writing,</span>
          &nbsp;
        </p>
        <a
          href="#"
          class="inline-flex gap-2 hover:border-b-2 border-dotted items-center justify-center px-2 pb-2 mr-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
        >
          Let's Explore
          <svg
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

<style scoped></style>
