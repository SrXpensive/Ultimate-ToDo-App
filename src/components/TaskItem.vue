<template>
    <div class="task-item-wrapper">
        <li
            class="flex justify-between items-center px-4 py-2 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600  rounded shadow bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-500">
            <span :class="{ 'line-through opacity-50': task.done }">
                {{ task.text }}
            </span>
            <div class="flex gap-2 items-center">
                <button @click="$emit('remove', task.id)"
                    class="text-red-500 hover:text-red-700 transition-colors duration-300">
                    🗑
                </button>
            </div>
        </li>
    </div>
</template>

<script setup>
defineProps(['task'])
defineEmits(['remove'])
</script>

<style scoped></style>