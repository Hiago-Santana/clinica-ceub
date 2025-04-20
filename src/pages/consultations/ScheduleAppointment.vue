<template>
    <div class=" bg-white">
        <button @click="testerWorker()" >Teste</button>
        <calendar></calendar>
        <!-- <vue-cal 
            ref="exCreateEventsVueCalEl" 
            editable-events 
            @cell-dblclick="createEvent"
            :time-from="6 * 60" :time-to="17 * 60" :time-step="30"
            :snap-to-interval="30"
            >></vue-cal> -->
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { VueCal } from 'vue-cal'
import Calendar from './Calendar.vue';
import 'vue-cal/style'

const events = ref([]);

onMounted(() => {
    console.log("VueCal carregado:", exCreateEventsVueCalEl.value);
});

const exCreateEventsVueCalEl = ref(null);

const createEvent = ({ cursor }) => {
  if (!exCreateEventsVueCalEl.value || !exCreateEventsVueCalEl.value.view) return;

  const start = cursor.date;
  const end = new Date(cursor.date.getTime() + 30 * 60 * 1000) // 30 minutos depois

  const hasOverlap = events.value.some(event => 
    (start >= event.start && start < event.end) || 
    (end > event.start && end <= event.end) || 
    (start <= event.start && end >= event.end)
  );

  if (hasOverlap) {
    alert("Já existe um evento nesse horário!");
    return;
  }

  const newEvent = {
    start: start,
    end: end,
    title: 'Novo Evento',
  };
  

  exCreateEventsVueCalEl.value.view.createEvent(newEvent);
  events.value.push(newEvent); // Adiciona ao array para controle
};

</script>