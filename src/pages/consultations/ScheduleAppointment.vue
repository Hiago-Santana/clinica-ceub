<template>
<div class="h-screen w-screen">
    <vue-cal
        ref="exCreateEventsVueCalEl"
        editable-events
        @cell-dblclick="createEvent">
    ></vue-cal>
</div>
</template>
<script setup>
import { ref, onMounted  } from 'vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

onMounted(() => {
    console.log("VueCal carregado:", exCreateEventsVueCalEl.value);
});

const exCreateEventsVueCalEl = ref(null)
const createEvent = ( event, cursor ) => {
    console.log("Duplo clique acionado!", cursor);
    event.start = cursor.date;
    event.end = cursor.date.addHours(1);
    exCreateEventsVueCalEl.value.view.createEvent(event)
}
</script>