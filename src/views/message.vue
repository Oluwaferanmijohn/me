<template>
  <section class="p-6 text-gray-100 max-w-screen-xl px-4 py-8 mx-auto">
    <div class="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-4xl">
      <h2 class="text-2xl font-bold sm:text-4xl">Contact Me</h2>
      <p class="px-8 my-4 text-neutral-600text-gray-400">
        If you have anything you wish to communicate to me, I am open to receiving them and
        providing feedback as soon as possible...
      </p>
    </div>
    <form class="container w-full max-w-xl p-8 mx-auto space-y-6">
      <label for="email" class="block mb-1 ml-1">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Your email"
        required
        class="block w-full p-2 rounded focus:outline-none focus:ring bg-black"
      />

      <label for="message" class="block mb-1 ml-1">Message</label>
      <textarea
        id="message"
        type="text"
        placeholder="Drop your Message..."
        class="block w-full p-2 rounded focus:outline-none focus:ring bg-black"
      ></textarea>

      <button
        type="submit"
        class="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-white focus:ri hover:ri text-black"
      >
        Send
      </button>
    </form>
  </section>
</template>
<script lang="ts" setup></script>
