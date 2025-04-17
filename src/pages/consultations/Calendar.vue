<template>
    <div class="w-full px-2">
        
            <button @click="getScheduled()" class="bg-red-500">
                queriesDoctorss
            </button>
        

        <div class="grid grid-rows-4 bg-blue-900 rounded-md h-26 p-4 gap-2">
            <div class="grid  justify-items-center self-center text-xl font-semibold">
                {{ monthOfTheWeek }}
            </div>
            <div class="flex row-span-3">

                <button @click="delayWeek()" class="flex w-8 h-12 rounded-md self-center justify-center bg-second">
                    <span class="material-symbols-outlined self-center">
                        chevron_left
                    </span>
                </button>
                <div class="flex-auto">
                    <div class="grid grid-rows-2 h-5 gap-6">
                        <div class="grid grid-cols-7 justify-items-center font-semibold">
                            <button v-for="daysOfTheWeeks in daysOfTheWeek" :key="daysOfTheWeeks">
                                {{ daysOfTheWeeks.dayWeekFormated }}
                            </button>
                        </div>
                        <div class="grid grid-cols-7 justify-items-center">
                            <button v-for="daysOfTheWeeks in daysOfTheWeek" :key="daysOfTheWeeks" @click="chosenDate(daysOfTheWeeks)"
                                class="focus:bg-second rounded-xl h-8 w-8">
                                {{ daysOfTheWeeks.dayFormated }}
                            </button>
                        </div>
                    </div>
                </div>
                <button @click="advanceWeek()" class="flex w-8 h-12 rounded-md self-center justify-center bg-second">
                    <span class="material-symbols-outlined self-center">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>

    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { subDays, addDays, format } from 'date-fns';
import { pt, ptBR } from 'date-fns/locale';
import { getScheaduledWorker } from '../../worker/requestWorker.js';

const daysOfTheWeek = ref();
const firstDayOfTheWeek = ref();
const monthOfTheWeek = ref();
const availableTimes  = ref();

onMounted(() => {
    //getDaysOfTheWeek(getfirstDayOfTheWeek());
    startCalendar();
    getScheduled();
})


function getDaysOfTheWeek() {

    daysOfTheWeek.value = [];
    for (let i = 0; i < 7; i++) {
        const day = addDays(firstDayOfTheWeek.value, i)
        const dayFormated = format(day, 'dd');
        const dayWeekFormated = format(day, "EEEEEE", { locale: ptBR });
        daysOfTheWeek.value.push({ day:day, dayFormated: dayFormated, dayWeekFormated: dayWeekFormated });
    }
}

function getfirstDayOfTheWeek(date) {
    const dayOfTheWeekToday = date.getDay();
    firstDayOfTheWeek.value = new Date(date);
    firstDayOfTheWeek.value.setDate(date.getDate() - dayOfTheWeekToday);
}

const advanceWeek = () => {
    firstDayOfTheWeek.value = addDays(firstDayOfTheWeek.value, 7);
    getDaysOfTheWeek();
    getMonthOfTheWeek()
}

const delayWeek = () => {
    firstDayOfTheWeek.value = subDays(firstDayOfTheWeek.value, 7);
    getDaysOfTheWeek();
    getMonthOfTheWeek();
}

const startCalendar = () => {
    const today = new Date();
    getfirstDayOfTheWeek(today);
    getDaysOfTheWeek();
    getMonthOfTheWeek()
}

const getMonthOfTheWeek = () => {
    monthOfTheWeek.value = format(firstDayOfTheWeek.value, "MMMM", { locale: ptBR });
    const dayFormat = format(firstDayOfTheWeek.value, "EEEEEE", { locale: ptBR });
    console.log("dayFormat", dayFormat)
}

const chosenDate = (date) => {
    console.log("date",date.day)
}

async function getScheduled () {
    availableTimes.value = null;
    availableTimes.value = await getScheaduledWorker();
}


</script>