<template>
  <div class="bg-black max-w-screen-xl px-4 py-8 mx-auto">
    <div class="py-4 text-left xl:max-w-2xl">
      <h2 class="text-xl text-white font-bold leadi sm:text-4xl">My Projects</h2>
      <p class="my-4 text-gray-700">
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
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div>
          <div class="max-w-[370px] bg-white border rounded-lg shadow border-gray-700">
            <p>
              <img class="rounded-t-lg w-full h-40" src="../assets/image/novelnest1.png" alt="" />
            </p>
            <div class="p-5">
  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">NovelNest</h5>
  <p class="mb-3 text-xs font-normal text-gray-700">
    NovelNest: Where Books Find A Home, Readers Find Delight.
  </p>
  <div class="flex justify-between px-1">
    <p class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700">
      in progress
    </p>
    <a href="https://novelnest.vercel.app/" class="inline-flex items-center px-1 py-1 text-xs font-medium uppercase text-center text-blue-800 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      check website
    </a>
  </div>
</div>
          </div>
        </div>
        <div>
          <div class="max-w-[370px] bg-white border border-gray-200 rounded-lg shadow">
            <p>
              <img class="rounded-t-lg w-full h-40" src="../assets/image/kjobs.png" alt="" />
            </p>
            <div class="p-5">
              <p>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">kjobs</h5>
              </p>
              <p class="mb-3 text-xs font-normal text-gray-700">
                Kinplus jobs makes it easier to search, find and connect to your next big opportunity either as an employer or an employee..
              </p>
              <div class="flex justify-between px-1">
                <a
                  href="https://kjobs.vercel.app/"
                  class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
                >
                  in progress
                </a>
                <a
                  href="https://kjobs.vercel.app/"
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
            <p>
              <img
                class="rounded-t-lg w-full h-40"
                src="../assets/image/afrobellecare.png"
                alt=""
              />
            </p>
            <div class="p-5">
              <p>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">afrobellecare</h5>
              </p>
              <p class="mb-3 text-xs font-normal text-gray-700">
                Bellecare provides African cuisine that can be enjoyed anywhere in the world, allowing people to eat their desired dishes without having to worry about location, time, or cooking skills..
              </p>
              <div class="flex justify-between px-1">
                <a
                  href="https://afrobellecare.com/"
                  class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
                >
                  on hold
                </a>
                <a
                  href="https://afrobellecare.com/"
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
            <p>
              <img class="rounded-t-lg w-full h-40" src="../assets/image/maven.png" alt="" />
            </p>
            <div class="p-5">
              <p>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  maven BMI calculator
                </h5>
              </p>
              <p class="mb-3 text-xs font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
              <div class="flex justify-between px-1">
                <a
                  href="https://mavenbmicalculator.netlify.app/"
                  class="inline-flex items-center px-2 py-1 text-xs font-thin uppercase text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-700"
                >
                  completed
                </a>
                <a
                  href="https://mavenbmicalculator.netlify.app/"
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
            <p>
              <img
                class="rounded-t-lg w-full h-40"
                src="../assets/image/EkitiCampusHAck.svg"
                alt=""
              />
            </p>
            <div class="p-5">
              <p>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Ekiti Campus Hack
                </h5>
              </p>
              <p class="mb-3 text-xs font-normal text-gray-700">
                To provide tech solutions to problems and challenges affecting students schooling in higher institutions in Ekiti State using technology.
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
            <p>
              <img class="rounded-t-lg w-full h-40" src="../assets/image/image.png" alt="" />
            </p>
            <div class="p-5">
              <p>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">lybri</h5>
              </p>
              <p class="mb-3 text-xs font-normal text-gray-700">
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
                  read white paper
                </a>
              </div>
            </div>
          </div>
        </div>
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
