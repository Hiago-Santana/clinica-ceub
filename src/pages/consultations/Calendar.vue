<template>
    <div class="w-full px-2">
        <div class="flex bg-blue-900 rounded-md ">
            <button class="flex w-8 self-center justify-center">
                <span class="material-symbols-outlined">
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
            <button class="flex w-8 self-center justify-center">
                <span class="material-symbols-outlined">
                    chevron_right
                </span>
            </button>
        </div>


        {{ dayOfTheWeekToday }}
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { subDays, addDays } from 'date-fns';

const daysOfTheWeek = ref([]);

onMounted(() => {
    getDaysOfTheWeek();
})


function getDaysOfTheWeek() {
    const firstDayOfTheWeek = new Date(getfirstDayOfTheWeek());
    daysOfTheWeek.value = [];
    for (let i = 0; i < 7; i++) {
        daysOfTheWeek.value.push(addDays(firstDayOfTheWeek, i).getDate());
    }
    console.log("daysOfTheWeek", daysOfTheWeek.value)

}

function getfirstDayOfTheWeek() {
    const today = new Date();
    const dayOfTheWeekToday = today.getDay();
    const firstDayOfTheWeek = new Date(today);
    firstDayOfTheWeek.setDate(today.getDate() - dayOfTheWeekToday)
    console.log("firstDayOfTheWeek ", firstDayOfTheWeek)
    return firstDayOfTheWeek;
}

const farwordWeekChanger = (action) => {
    
}


</script>