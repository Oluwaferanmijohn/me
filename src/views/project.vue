<template>
  <div class="bg-black max-w-screen-xl px-4 py-8 mx-auto">
    <div class="py-4 text-left xl:max-w-2xl">
      <h2 class="text-xl text-white font-bold leadi sm:text-4xl">My Projects</h2>
      <p class="my-4 text-gray-400">
        Here are the projects I have completed, am currently working on, and have in mind to do in
        the near future
      </p>
    </div>
    <div class="flex items-left justify-left py-4 md:py-8 flex-wrap">
      <button
        @click="toggleContent('all')"
        type="button"
        class="border bg-white focus:ring-4 focus:outline-none rounded-full font-medium px-5 py-2.5 text-center mr-3 mb-3 text-xs border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
      >
        All
      </button>
      <button
        type="button"
        class="text-gray-900 border capitalize hover:border-gray-200 border-gray-900 bg-white focus:ring-4 focus:outline-none rounded-full font-medium px-5 py-2.5 text-center mr-3 mb-3 text-xs focus:ring-gray-800"
      >
        software development
      </button>
      <button
        type="button"
        class="text-gray-900 capitalize border hover:border-gray-200 border-gray-900 bg-white focus:ring-4 focus:outline-none rounded-full font-medium px-5 py-2.5 text-center mr-3 mb-3 text-xs focus:ring-gray-800"
      >
        Creative Write-ups
      </button>
      <!-- <button
        type="button"
        class="text-gray-900 border hover:border-gray-200 border-gray-900 bg-white focus:ring-4 focus:outline-none rounded-full font-medium px-5 py-2.5 text-center mr-3 mb-3 text-xs focus:ring-gray-800"
      >
        Innovative Pursuits
      </button> -->
    </div>
    <div class="mx-auto flex justify-center items-center">
    <div class="grid   grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div>
        <div class="max-w-[370px] bg-white border rounded-lg shadow border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-full h-40" src="../assets/image/novelnest1.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">NovelNest</h5>
            </a>
            <p class="mb-3 text-xs font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div class="flex justify-between px-1">
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
              >
                in progress
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                check website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg w-full h-40" src="../assets/image/kjobs.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">kjobs</h5>
            </a>
            <p class="mb-3 text-xs font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div class="flex justify-between px-1">
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
              >
                in progress
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                check website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg w-full h-40" src="../assets/image/afrobellecare.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">afrobellecare</h5>
            </a>
            <p class="mb-3 text-xs font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div class="flex justify-between px-1">
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
              >
                on hold
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                check website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg w-full h-40" src="../assets/image/maven.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                maven BMI calculator
              </h5>
            </a>
            <p class="mb-3 text-xs font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div class="flex justify-between px-1">
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
              >
                completed
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                check website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              class="rounded-t-lg w-full h-40"
              src="../assets/image/EkitiCampusHAck.svg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Ekiti Campus Hack</h5>
            </a>
            <p class="mb-3 text-xs font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div class="flex justify-between px-1">
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
              >
                in progress
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                check website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg w-full h-40" src="../assets/image/image.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">lybri</h5>
            </a>
            <p class="mb-3 text-xs font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div class="flex justify-between px-1">
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
              >
                research stage
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                check website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div></div>
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
