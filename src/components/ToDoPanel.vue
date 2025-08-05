<template>
    <main class="flex justify-center mt-10">
        <div class="w-full max-w-xl bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-lg transition-colors duration-500">
            <AddTask/>
            <TaskList/>
        </div>
    </main>
</template>

<script setup>
import AddTask from './AddTask.vue'
import TaskList from './TaskList.vue'
</script>

<style scoped>
</style>