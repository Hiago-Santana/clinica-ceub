<template>
    <nav class="relative z-50 bg-second dark:bg-second h-12">

        <div class="block md:hidden">
            <div class="flex w-full h-full justify-between items-center">
                <span class=" h-12 flex mx-4 justify-center items-center ">
                    <button @click='showBar = true' class="flex">
                        <span
                            class="material-symbols-outlined text-white bg-second hover:text-first dark:text-white">menu</span>
                    </button>
                </span>
                <div class="">
                    <img src="/logo-ceub-white.webp" alt="Clinica Ceub" class="pl-2 h-12">
                </div>
                <a href="#" @click="goTo('scheduleAppointment')"
                    class="flex border-2 border-white rounded-xl py-1 px-3 text-white dark:text-white md:dark:text-blue-500 mx-4">
                    Agendar
                    <span class="ml-2 material-symbols-outlined text-white">
                        login
                    </span>
                </a>
            </div>
        </div>

        <div class="w-full flex justify-between mx-auto items-center">
            <div class="flex justify-start">
                <img src="/logo-ceub-white.webp" alt="Clinica Ceub" class="pl-2 hidden md:block mr-2 h-12">
            </div>
            <div class="">
                <ul class="w-full flex justify-end items-center ">
                    <li>
                        <a href="#" @click="goTo('scheduleAppointment')"
                            class=" border-2 border-white rounded-xl hidden md:block py-1 px-3 text-white dark:text-white md:dark:text-white mx-4">
                            <div class="flex">
                                Agendar
                                <span class="ml-2 material-symbols-outlined text-white">
                                    event_available
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <side-bar-welcome @close-bar="closeBar()" :showBar="showBar"></side-bar-welcome>
    </nav>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const showBar = ref(false)

const goTo = (nameRouter) => {
    router.push({name: nameRouter})
}

</script>