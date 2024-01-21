<template>
  <section class="max-w-screen-xl mx-auto md:grid md:grid-cols-4 bg-white">
    <section class="md:col-span-3">
      <div class="h-screen flex flex-col mx-auto justify-center text-center items-center">
        <h1 class="md:text-5xl text-[#241F21] tracking-[0.03em] text-4xl font-extrabold capitalize">
          hi i'm <span class="text-[#F26649]"> phenry</span>
        </h1>
        <div>
          <p class="text-[#53494D] font-normal max-w-sm md:max-w-lg mx-auto my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat nihil quas
            ex perferendis dignissimos.
          </p>
        </div>
        <div class="my-3">
          <div>
            <button
              class="bg-[#F26649] rounded-md px-7 py-2 text-white uppercase font-normal tracking-[0.2em]"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="isVisible"
      class="z-50 top-0 absolute md:fixed right-0 col-span-1 w-96 mx-auto flex bg-[#241F21] justify-center items-center h-screen text-white"
    >
      <div class="relative flex flex-col justify-center items-center mx-auto">
        <div @click="toggleVisibility" class="top-[-8.9rem] left-0  absolute">
          <svg
            class="w-6 h-6 text-[#F26649]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </div>
        <div class="bg-[#4d2d29] p-[5px] rounded-full flex justify-center">
          <img class="rounded-full bg-white w-36" src="../assets/image/image.png" alt="" />
        </div>
        <div class="mx-5">
          <div>
            <h1
              class="md:text-xl mt-5 text-white tracking-[0.03em] text-lg font-extrabold capitalize"
            >
              Oluwaferanmi john (phenry)
            </h1>
            <p class="mx-auto text-sm my-5 text-center font-light max-w-[18rem]">
              Lorem ipsum dolor sit amet Placeat suscipit vero incidunt voluptate nobis inventore
              nulla iusto impedit ea commodi?
            </p>
            <div>
              <div class="flex gap-5 my-5 justify-center items-center">
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
                </div>
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div class="mx-auto flex py-5 justify-center">
                <button
                  class="border border-solid rounded-3xl px-9 py-2 border-[#F26649] uppercase"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="hidden z-50 absolute md:fixed right-0 col-span-1 w-96 mx-auto md:flex bg-[#241F21] justify-center items-center h-screen text-white"
    >
      <div class="flex flex-col justify-center items-center mx-auto">
        <div class="bg-[#4d2d29] p-[5px] rounded-full flex justify-center">
          <img class="rounded-full bg-white w-36" src="../assets/image/image.png" alt="" />
        </div>
        <div class="mx-5">
          <div>
            <h1
              class="md:text-xl mt-5 text-white tracking-[0.03em] text-lg font-extrabold capitalize"
            >
              Oluwaferanmi john (phenry)
            </h1>
            <p class="mx-auto text-sm my-5 text-center font-light max-w-[18rem]">
              Lorem ipsum dolor sit amet Placeat suscipit vero incidunt voluptate nobis inventore
              nulla iusto impedit ea commodi?
            </p>
            <div>
              <div class="flex gap-5 my-5 justify-center items-center">
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
                </div>
                <div>
                  <svg
                    class="w-4 h-4 hover:text-[#F26649] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div class="mx-auto flex py-5 justify-center">
                <button
                  class="border border-solid rounded-3xl px-9 py-2 border-[#F26649] uppercase"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section @click="toggleVisibility" class="md:hidden top-0 absolute right-0 p-5">
      <svg
        class="w-6 h-6 text-[#F26649]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </section>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // Use ref to control the visibility of the div
    const isVisible = ref(false)
    const ishidden = ref(true)

    // Function to toggle visibility when the button is clicked
    const toggleVisibility = () => {
      ishidden.value = !ishidden.value
      isVisible.value = !isVisible.value
    }

    return {
      isVisible,
      ishidden,
      toggleVisibility
    }
  }
}
</script>
