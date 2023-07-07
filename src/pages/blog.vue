<template>
    <!-- <div>
        <section class="bg-black text-gray-100">
            <header class="text-center py-10">
                <h2 class="text-xl capitalize font-bold text-white sm:text-3xl">  &lt; what's happening? &gt;</h2>
            </header>
            <div class="container max-w-5xl px-4 py-12 mx-auto">
                <div class="grid gap-4 mx-4 sm:grid-cols-12">
                    <div class="col-span-12 sm:col-span-3">
                        <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
                            <h3 class="text-3xl uppercase font-semibold">newest.</h3>
                            <span class="text-sm font-bold tracki uppercase text-gray-400"> </span>
                        </div>
                    </div>
                    <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div
                            class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700"
                        >
                            <div
                                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600"
                            >
                                <h3 class="text-xl font-semibold tracki">Donec porta enim vel</h3>
                                <time class="text-xs tracki uppercase text-neutral-400">Dec 2020</time>
                                <p class="mt-3 text-neutral-600">
                                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                            <div
                                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600"
                            >
                                <h3 class="text-xl font-semibold tracki">Aliquam sit amet nunc ut</h3>
                                <time class="text-xs tracki uppercase text-neutral-400">Jul 2019</time>
                                <p class="mt-3 text-neutral-600">
                                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.
                                </p>
                            </div>
                          
                            <div
                                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600"
                            >
                                <h3 class="text-xl font-semibold tracki">Pellentesque habitant morbi</h3>
                                <time class="text-xs tracki uppercase text-neutral-400">Jan 2016</time>
                                <p class="mt-3 text-neutral-600">
                                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula
                                    felis id, vehicula enim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center mt-10 text-center items-center">
                    <button class="border-neutral-600 border-b-2 border-dotted text-neutral-600 hover:border-neutral-800 hover:text-neutral-300">Read All</button>
                </div>
            </div>
        </section>
    </div> -->

    <section class="border-b border-dotted border-neutral-600 bg-black">
         <header class="text-center py-10">
                <h2 class="text-xl capitalize font-bold text-white sm:text-3xl">  what's happening?</h2>
            </header>
        <div class="container px-6 py-10 mx-auto">
            <div class="lg:flex lg:-mx-6">
                <div class="lg:w-3/4 lg:px-6">
                    <img
                        class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                        src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                    />

                    <div>
                        <p class="mt-6 text-sm text-blue-500 uppercase">Want to know</p>

                        <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">What do you want to know about UI</h1>

                        <div class="flex items-center mt-6">
                            <img
                                class="object-cover object-center w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""
                            />

                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                    <div>
                        <h3 class="text-blue-500 capitalize">Design instument</h3>

                        <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"> How to raise $100k+ by using blox ui kit on your design </a>
                    </div>

                    <hr class="my-6 border-gray-200 dark:border-gray-700" />

                    <div>
                        <h3 class="text-blue-500 capitalize">UI Resource</h3>

                        <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"> Should you creat UI Product by using Blox? </a>
                    </div>

                    <hr class="my-6 border-gray-200 dark:border-gray-700" />

                    <div>
                        <h3 class="text-blue-500 capitalize">Premium Collection</h3>

                        <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"> Top 10 Blocks you can get on Blox's collection. </a>
                    </div>

                    <hr class="my-6 border-gray-200 dark:border-gray-700" />

                    <div>
                        <h3 class="text-blue-500 capitalize">Premium kits</h3>

                        <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"> Top 10 Ui kit you can get on Blox's collection. </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style></style>
