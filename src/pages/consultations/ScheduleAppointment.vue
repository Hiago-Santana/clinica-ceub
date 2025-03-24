<template>
    <div class="h-screen w-screen">
        <vue-cal 
            ref="exCreateEventsVueCalEl" editable-events @cell-dblclick="createEvent"
            :time-from="6 * 60" :time-to="17 * 60" :time-step="30">
            ></vue-cal>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

onMounted(() => {
    console.log("VueCal carregado:", exCreateEventsVueCalEl.value);
});

const exCreateEventsVueCalEl = ref(null);

const createEvent = ({ cursor }) => {
  if (!exCreateEventsVueCalEl.value || !exCreateEventsVueCalEl.value.view) return;

  const newEvent = {
    start: cursor.date,
    end: new Date(cursor.date.getTime() + 60 * 60 * 1000), // 1 hora depois
    title: 'Novo Evento',
  };

  exCreateEventsVueCalEl.value.view.createEvent(newEvent);
};

</script>