<template>
    <div class="flex gap-2 justify-center mb-4">
        <button v-for="filter in filters" :key="filter.value" @click="store.setFilter(filter.value)"
            :class="['px-4 py-1 rounded-full text-sm transition border-2', store.activeFilter === filter.value ? 'bg-gray-600 text-white dark:bg-gray-300 dark:text-gray-800 border-gray-300 dark:border-gray-600 shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 border-gray-600 dark:border-gray-300']">
                {{filter.label}}
        </button>
    </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore';

const store = useTodoStore();
const filters = [
    { label: 'Todas', value: 'all' },
    { label: 'Activas', value: 'active' },
    { label: 'Completadas', value: 'completed' }
]
</script>

<style scoped></style>