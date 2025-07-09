<template>
    <main class="flex justify-center mt-10">
        <div class="w-full max-w-xl bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-lg transition-colors duration-500">
            <AddTask @add-task="addTask"/>
            <TaskList :tasks="tasks"/>
        </div>
    </main>
</template>

<script setup>
import {ref} from 'vue'
import AddTask from './AddTask.vue'
import TaskList from './TaskList.vue'

const tasks = ref([])

function addTask(text){
    tasks.value.push({id: Date.now(), text, done: false})
}
</script>

<style scoped>
</style>