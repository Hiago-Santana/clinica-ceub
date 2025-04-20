<template>
    <div class="min-h-screen flex justify-center p-2 ">
        <div class="flex-auto min-w-80% max-w-screen-md">
            

            <div class="grid grid-cols-2 gap-4">
                <select v-model="selectedSpecialty" @click="selectedDoctor = null, doctors = null"
                    class="w-full h-10 rounded-md bg-second text-white mb-4">
                    <option value="">Todas as especialidades</option>
                    <option v-for="specialty in specialties" :key="specialty" :value="specialty">
                        {{ specialty }}
                    </option>
                </select>
                <select v-model="selectedDoctor" @click="selectedSpecialty = null, specialty = null"
                    class="w-full h-10 rounded-md bg-second text-white mb-4">
                    <option value="">Todos os Médicos</option>
                    <option v-for="doctor in doctors" :key="doctor" :value="doctor">
                        {{ doctor }}
                    </option>
                </select>
            </div>



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
                                <button v-for="daysOfTheWeeks in daysOfTheWeek" :key="daysOfTheWeeks"
                                    @click="chosenDate(daysOfTheWeeks.day)"
                                    class="focus:bg-first rounded-xl h-8 w-8 hover:bg-first cursor-pointer">
                                    {{ daysOfTheWeeks.dayFormated }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <button @click="advanceWeek()"
                        class="flex w-8 h-12 rounded-md self-center justify-center bg-second">
                        <span class="material-symbols-outlined self-center">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
            <div v-if="selectedDoctor" class="flex flex-row">
                <div class=" bg-blue-900 rounded-md p-4 gap-2 mt-4 ">
                    <div class="text-2xl text-white font-semibold mb-5">
                        {{ filteredTimes[0].doctorName }} -
                        {{ filteredTimes[0].doctorSpecialty }}
                    </div>
                    <div class="flex flex-wrap contain-content gap-2 focus:bg-first">
                        <button v-for="item in filteredTimes" :key="item.id"
                            @click="daySelected = item.date, openModal(item)"
                            class="flex self-center  bg-second rounded-md min-h-10 min-w-20 justify-center items-center hover:bg-first cursor-pointer focus:bg-first">
                            {{ format(item.date, "HH:mm") }}
                        </button>
                    </div>
                </div>

            </div>

            <div v-else>
                <button v-for="item in filteredTimes" :key="item.id" @click="openModal(item)"
                    class="grid grid-cols-3 w-full bg-blue-900 rounded-md h-16 p-4 gap-2 mt-4 hover:bg-first cursor-pointer focus:bg-first active:bg-first">

                    <div class="flex items-center text-white font-semibold">
                        {{ item.doctorName }}
                    </div>
                    <div class="flex items-center text-white font-semibold">
                        {{ item.doctorSpecialty }}
                    </div>
                    <div class="flex items-center text-white font-semibold">
                        {{ format(item.date, "HH:mm") }}
                    </div>
                </button>
            </div>
            <Modal v-model:show="showModal" :selectedTime="selectedTime" @submit="handleSubmit" />

        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import { subDays, addDays, format, isSameDay } from 'date-fns';
import { pt, ptBR } from 'date-fns/locale';
import { getScheaduledWorker, scheduleappointmentWorker } from '../../worker/requestWorker.js';
import Modal from './Modal.vue';

const emit = defineEmits(['showModal']);

const daysOfTheWeek = ref();
const firstDayOfTheWeek = ref();
const monthOfTheWeek = ref();
const availableTimes = ref([]);
const selectedSpecialty = ref('');
const selectedDate = ref();
const selectedDoctor = ref('');
const daySelected = ref();
const showModal = ref(false)
const selectedTime = ref(null)

onMounted(async () => {
    //getDaysOfTheWeek(getfirstDayOfTheWeek());
    startCalendar();
    //startDay();
})


function getDaysOfTheWeek() {

    daysOfTheWeek.value = [];
    for (let i = 0; i < 7; i++) {
        const day = addDays(firstDayOfTheWeek.value, i)
        const dayFormated = format(day, 'dd');
        const dayWeekFormated = format(day, "EEEEEE", { locale: ptBR });
        daysOfTheWeek.value.push({ day: day, dayFormated: dayFormated, dayWeekFormated: dayWeekFormated });
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

const startCalendar = async () => {
    await getScheduled();
    selectedDate.value = new Date(availableTimes.value[0].date)
    getfirstDayOfTheWeek(selectedDate.value);
    getDaysOfTheWeek();
    getMonthOfTheWeek()
}

const getMonthOfTheWeek = () => {
    monthOfTheWeek.value = format(firstDayOfTheWeek.value, "MMMM", { locale: ptBR });
    const dayFormat = format(firstDayOfTheWeek.value, "EEEEEE", { locale: ptBR });
}

const chosenDate = (date) => {
    selectedDate.value = date;
}

async function getScheduled() {
    availableTimes.value = await getScheaduledWorker();
    availableTimes.value = availableTimes.value.result.queriesDoctors;
}



// lista única de especialidades
const specialties = computed(() =>
    [...new Set(availableTimes.value.map(item => item.doctorSpecialty))].filter(Boolean)
)

const doctors = computed(() =>
    [...new Set(availableTimes.value.map(item => item.doctorName))].filter(Boolean)
)


// lista filtrada
const filteredTimes = computed(() => {
    return availableTimes.value.filter(item => {
        const specialtyMatches = !selectedSpecialty.value || item.doctorSpecialty === selectedSpecialty.value;
        const dateMatches = !selectedDate.value || isSameDay(new Date(item.date), selectedDate.value);
        const doctorMatches = !selectedDoctor.value || item.doctorName === selectedDoctor.value;
        return specialtyMatches && doctorMatches && dateMatches;
    });
});

function openModal(time) {
    selectedTime.value = time
    showModal.value = true
    selectedDoctor.value = time.doctorName
}

async function handleSubmit(data) {
    await scheduleappointmentWorker(data);
    // Aqui você pode enviar os dados para API etc
}

</script>