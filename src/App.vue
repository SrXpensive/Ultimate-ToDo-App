<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 flex flex-col items-center justify-center">
    <button @click="toggleDarkMode" class="mb-6 px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
      {{ isDark ? 'Modo Claro':'Modo Oscuro' }}
    </button>
    <p class="text-lg">Este texto cambia de color con el tema</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
}

watch(isDark, (value) => {
  document.documentElement.classList.toggle('dark', value)
})
</script>

<style></style>