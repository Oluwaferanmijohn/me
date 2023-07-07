<!-- <template>
    <div class="overflow-hidden bg-black">
        <div class="mb-8 text-center">
            <h1 class="my-3 text-4xl font-bold">About me</h1>
        </div>
        <section class="sm:grid sm:grid-cols-2 sm:items-center">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 class="text-2xl font-bold text-white md:text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>

                    <p class="hidden text-neutral-600 md:mt-4 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                        volutpat quisque ut interdum tincidunt duis.
                    </p>

                    <div class="mt-4 md:mt-8">
                        <a href="#" class="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-purple-400">
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="Violin"
                src="../assets/images/erfg.jpg"
                class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
        </section>
    </div>
    <div class="text-container">
        <p class="text text-base leading-7">
            {{ truncatedText }}
            <button
                v-if="showButton"
                @click="expandText"
                class="mt-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Show More
            </button>
        </p>
        <p v-if="expanded" class="text text-base leading-7">
            {{ remainingText }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            truncatedText: '',
            remainingText: '',
            showButton: false,
        }
    },
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    mounted() {
        this.truncateText()
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        truncateText() {
            if (this.text.length > 200) {
                this.truncatedText = this.text.slice(0, 200)
                this.remainingText = this.text.slice(200)
                this.showButton = true
            } else {
                this.truncatedText = this.text
                this.showButton = false
            }
        },
        expandText() {
            this.expanded = true
        },
        handleScroll() {
            if (this.expanded && !this.$el.getBoundingClientRect().bottom > 0) {
                this.expanded = false
            }
        },
    },
}
</script>

<style>
.text-container {
    max-width: 600px;
    margin: 0 auto;
}
</style> -->

<template>
    <div>
        <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Jenna Stones</h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
            </div>
            <div class="mb-2 text-blueGray-600 mt-10"><i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer</div>
            <div class="mb-2 text-blueGray-600"><i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science</div>
        </div>
        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm,
                        intimate feel with a solid groove structure. An artist of considerable range.
                    </p>
                    <p v-for="(item, index) in faq" class="lb_item font-normal " @click="faqTrigger(index)" :class="{ 'lb_ext-active': currentFaq === index }">
                <div class="lb_item__hl">
                    <h2><span class="text-pink-500" v-html="item.hl"></span></h2>
                </div>
                <transition mode="out-in" name="faq-fade" @before-enter="beforeEnterFaq" @enter="enterFaq">
                    <div class="lb_item__copy" v-show="currentFaq === index">
                        <div class="lb_item-copy-ct" v-html="item.copy"></div>
                    </div>
                </transition>
            </p>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="lb_accordeon" id="lb_accordeon">
        <ul class="lb_accordeon__item">
            
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faq: [
                {
                    hl: '> show more ',
                    copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                },
                {
                    hl: '> show less',
                    // copy: 'Copy in the rockin casbah',
                },
               
            ],
            currentFaq: -10,
        }
    },
    methods: {
        faqTrigger(newFaq) {
            if (newFaq === this.currentFaq) {
                this.currentFaq = -10
            } else {
                this.currentFaq = newFaq
            }
        },
        beforeEnterFaq(element) {
            element.style.display = 'block'
            element.style.maxHeight = null
            element.myHeight = element.offsetHeight
            element.style.maxHeight = 0
            element.style.display = null
        },
        enterFaq(element) {
            element.style.maxHeight = element.myHeight + 'px'
        },
    },
}
</script>

<style></style>
