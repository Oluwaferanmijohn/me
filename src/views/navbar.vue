<template>
  <header class="bg-black sticky top-0 z-50 max-w-screen-xl mx-auto">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="">
          <a href="https://..com/" class="flex items-center">
            <img
              src="../assets/image/image.png"
              class="h-10 mr-3 rounded-full"
              alt="Flowbite Logo"
            />
            <span class="self-center font-extrabold text-2xl text-white">John.</span>
          </a>
        </div>

        <div class="flex items-center gap-12">
          <nav aria-label="Global" class="block items-center">
            <ul class="flex items-center gap-6 text-lg">
              <li>
                <a class="transition text-gray-500 hover:text-gray-500 /75" href="/"
                  ><ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a class="transition text-gray-500 hover:text-gray-500 /75" href="/">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a class="transition text-gray-500 hover:text-gray-500 /75" href="/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              <li>
                <a class="transition text-gray-500 hover:text-gray-500 /75" href="/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a class="transition text-gray-500 hover:text-gray-500 /75" href="/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </nav>

          <div class="items-center md:block hidden">
            <button
              type="button"
              class="text-black items-center inline-flex gap-2 bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 capitalize"
            >
              sponsor
              <div class="fill-current text-black hover:text-red-500 transition-colors">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 19"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div></div>
</template>
<script setup></script>
