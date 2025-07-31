<template>
    <div class="flex gap-2 justify-center mb-4">
        <button v-for="filter in filters" :key="filter.value" @click="store.setFilter(filter.value)"
            :class="['px-4 py-1 rounded-full text-sm transition', store.activeFilter === filter.value ? 'bg-gray-600 text-white shadow dark:bg-gray-300 dark:text-gray-800' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600']">
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