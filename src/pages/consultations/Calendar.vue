<template>
    <div class="w-full px-2">
        <div class="bg-red-500">
             
        </div>
        
   
        <div class="flex bg-blue-900 rounded-md">

            <button @click="delayWeek()" class="flex w-8 h-12 rounded-md self-center justify-center bg-second">
                <span class="material-symbols-outlined self-center">
                    chevron_left
                </span>
            </button>
            <div class="flex-auto">
                <div class="grid grid-rows-2">
                    <div class="grid grid-cols-7 justify-items-center font-bold">
                        <div>Dom</div>
                        <div>Seg</div>
                        <div>Ter</div>
                        <div>Qua</div>
                        <div>Qui</div>
                        <div>Sex</div>
                        <div>Sab</div>
                    </div>
                    <div class="grid grid-cols-7 justify-items-center">
                        <div v-for="daysOfTheWeeks in daysOfTheWeek" :key="daysOfTheWeeks">
                            {{ daysOfTheWeeks }}
                        </div>
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
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { subDays, addDays, format  } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const daysOfTheWeek = ref([]);
const firstDayOfTheWeek = ref();
const monthOfTheWeek = ref();

onMounted(() => {
    //getDaysOfTheWeek(getfirstDayOfTheWeek());
    startCalendar()
})


function getDaysOfTheWeek() {

    daysOfTheWeek.value = [];
    for (let i = 0; i < 7; i++) {
        daysOfTheWeek.value.push(addDays(firstDayOfTheWeek.value, i).getDate());
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
}


</script>