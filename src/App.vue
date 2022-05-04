<template>

    <!-- <link rel="stylesheet" href="https://rsms.me/inter/inter.css">  -->
    <div class1="fixed inset-0 flex items-center justify-center" class="p-5">
        <div class="inline-block rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            @click="openModal()">打开</div>

        <div class="bg-yellow-300 mt-5 rounded-md overflow-hidden">
            <img class="object-cover h-48 w-full" src="//unsplash.it/400/300">
        </div>

        <div class="mt-5">
            <div class="inline-block rounded-md bg-blue-700 bg-opacity-60 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30"
                @click=" openTip = true ">openTip</div>

            <div class="ml-4 inline-block rounded-md bg-orange-500 bg-opacity-60 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30"
                @click=" openBox = true ">openBox</div>
        </div>
    </div>

    <Transition type="animation"
        enter-active-class="animated faster fadeIn"
        leave-active-class="animated faster fadeOut delay-.5s">
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center"
        v-show="openTip"
        @click=" openTip = false ">

        <Transition type="animation"
            enter-active-class="animated bounceInUp"
            leave-active-class="animated bounceOutDown">
        <div class="bg-white inline-block rounded-md overflow-hidden leading-2 py-2 px-4"
            v-show="openTip"
            @click.native.stop>测试一下</div>
        </Transition>
    </div>
    </Transition>

        <Transition type="animation"
        enter-active-class="animated faster fadeIn"
        leave-active-class="animated faster fadeOut delay-.5s">
    <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
        v-show="openBox"
        @click=" openBox = false ">

        <Transition type="animation"
            enter-active-class="animated bounceInUp"
            leave-active-class="animated bounceOutDown">
        <div class=" p-4"
            v-show="openBox"
            @click.native.stop>
                <div class="w-2/3 bg-white rounded-lg overflow-hidden leading-2 m-auto p-4">测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下测试一下</div>
                <div class="mt-2 w-2/3 mx-auto flex flex-1 text-center text-xs">
                    <div class="w-1/2 bg-lime-500 rounded-lg overflow-hidden leading-5 p-2 mr-1">我知道了</div>
                    <div class="w-1/2 bg-stone-700 text-white rounded-lg overflow-hidden leading-5 p-2 ml-1">关闭窗口</div>
                </div>
            </div>
        </Transition>
    </div>
    </Transition>

    <Draggable class="mt-4 mx-auto" />

    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out"
                enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">支付成功</DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">您的支付已完成，请关注电子邮件的详细通知</p>
                            </div>
                            <div class="mt-4">
                                <button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">知道了</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

</template>

<script>

import 'animate.css/source/_vars.css'
import 'animate.css/source/_base.css'

import 'animate.css/source/fading_entrances/fadeIn.css'
import 'animate.css/source/fading_exits/fadeOut.css'
import 'animate.css/source/bouncing_entrances/bounceInUp.css'
import 'animate.css/source/bouncing_exits/bounceOutDown.css'

import 'animate.css/source/sliding_entrances/slideInUp.css'
import 'animate.css/source/sliding_exits/slideOutDown.css'

import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import Draggable from './sample/Draggable.vue'

export default {
    name: 'Home',
    data: () => ({
        isOpen: false,
        openTip: false,
        openBox: false
    }),
    methods: {
        openModal() {
            let vm = this
            vm.isOpen = true
        },
        closeModal() {
            let vm = this
            vm.isOpen = false
        }
    },
    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionRoot,
        TransitionChild,
        Draggable
    }
}

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.animated.delay-\.5s {
    animation-delay: calc( var(--animate-delay) / 2 );
}

.animated.bounceInUp {
    animation-timing-function: ease-in;
}

.animated.bounceOutDown {
    animation-timing-function: ease-out;
}

/*@import "animate.css/source/bouncing_entrances/bounceInUp.css";*/
</style>
