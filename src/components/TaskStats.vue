<template>
    <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow text-sm flex flex-col gap-2 transition duration-500">
        <div class="flex justify-between dark:text-gray-100 transition duration-500">
            <span>Total tareas:</span>
            <span>{{ store.totalTasks }}</span>
        </div>
        <div class="flex justify-between dark:text-gray-100 transition duration-500">
            <span>Completadas:</span>
            <span>{{ store.completedTasks }}</span>
        </div>
        <div class="flex justify-between dark:text-gray-100 transition duration-500">
            <span>Activas:</span>
            <span>{{ store.activeTasks }}</span>
        </div>
        <div class="flex justify-between dark:text-gray-100 transition duration-500">
            <span>Progreso:</span>
            <span>{{ store.completionPercentage }}%</span>
        </div>
        <!--Barra de progreso-->
        <div class="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mt-2 transition duration-500">
            <div :class="['h-full transition-all duration-500',
            {
                'bg-red-500': store.completionPercentage < 33,
                'bg-yellow-500': store.completionPercentage >= 33 && store.completionPercentage < 66,
                'bg-green-500': store.completionPercentage >= 66
            }]" :style="{width: store.completionPercentage+'%'}"></div>
        </div>
    </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore';

const store = useTodoStore()
</script>

<style scoped>
</style>