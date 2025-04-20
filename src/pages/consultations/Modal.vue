<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded shadow-md w-80">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Agendar Consulta</h2>
        <h2 class="text-lg font-bold mb-4 text-gray-800">      
          {{ selectedTime.doctorName }} - {{ selectedTime.doctorSpecialty }}
          {{ selectedTime ? format(selectedTime.date, 'dd/MM/yyyy HH:mm') : '' }}
        </h2>  
        <input
          v-model="userName"
          type="text"
          placeholder="Seu nome"
          class="w-full border rounded px-2 py-1 mb-3 text-gray-700"
        />
  
        <input
          v-model="userCpf"
          type="text"
          placeholder="Seu CPF"
          class="w-full border rounded px-2 py-1 mb-3 text-gray-700"
        />
  
        <div class="flex justify-end gap-2">
          <button @click="close" class="text-gray-600">Cancelar</button>
          <button @click="submit" class="bg-blue-600 text-white px-3 py-1 rounded">Agendar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { format } from 'date-fns'
  
  const props = defineProps({
    show: Boolean,
    selectedTime: Object,
    selectedDoctor: String
  })
  
  const emit = defineEmits(['update:show', 'submit'])
  
  const userName = ref('Hiago')
  const userCpf = ref('12345678900')
  
  watch(() => props.show, (newVal) => {
    if (!newVal) {
      userName.value = ''
      userCpf.value = ''
    }
  })
  
  function close() {
    emit('update:show', false)
  }
  
  function submit() {
    emit('submit', {
      time: props.selectedTime,
      name: userName.value,
      cpf: userCpf.value
    })
    close()
  }
  </script>