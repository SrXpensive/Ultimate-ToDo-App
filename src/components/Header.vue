<template>
    <header class="flex flex-row justify-between p-20">
        <h1 class="text-4xl font-bold dark:text-white transition duration-500 text-gray-600">Ultimate To Do List</h1>
        <button @click="toggleDarkMode"
            class="p-2 bg-gray-200 dark:bg-gray-700 rounded-xl hover:scale-105 transition dark:text-white duration-500 text-gray-600 font-bold">
            {{ isDark ? "Modo Claro" : "Modo Oscuro" }}
        </button>
    </header>
</template>

<script setup>
import {ref} from 'vue'

const isDark = ref(false)

function toggleDarkMode(){
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
}
</script>

<style></style>