<template>
  <div class="bg-black max-w-screen-xl px-4 py-8 mx-auto">
    <div class="py-4 text-left xl:max-w-2xl">
      <h2 class="text-2xl text-white font-bold leadi sm:text-4xl">My Projects</h2>
      <p class="my-4 text-neutral-600">
        Explore the captivating world of my passion-driven pursuits in web development, product
        design, and content writing.
      </p>
    </div>
    <div class="flex items-left justify-left py-4 md:py-8 flex-wrap">
      <button
        @click="toggleContent('all')"
        type="button"
        class="border bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:ring-blue-800"
      >
        All
      </button>
      <button
        type="button"
        class="text-gray-900 border capitalize hover:border-gray-200 border-gray-900 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 focus:ring-gray-800"
      >
        software development
      </button>
      <button
        type="button"
        class="text-gray-900 capitalize border hover:border-gray-200 border-gray-900 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 focus:ring-gray-800"
      >
        Creative Write-ups
      </button>
      <button
        type="button"
        class="text-gray-900 border hover:border-gray-200 border-gray-900 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 focus:ring-gray-800"
      >
        Innovative Pursuits
      </button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
