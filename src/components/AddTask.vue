    <template>
        <div class="flex gap-2 mb-4">
            <input type="text" v-model="taskText" @keyup.enter="submitTask" placeholder="Añade una nueva tarea"
                class=" flex-grow p-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-500">
            <button @click="submitTask"
                class="bg-gray-600 text-white px-4 rounded hover:bg-gray-800 transition duration-500 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 font-bold hover:scale-105 hover:scale-105">Añadir</button>
        </div>

    </template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const store = useTodoStore()

const taskText = ref('')

function submitTask() {
    if (taskText.value.trim() === '') {
        return
    }
    store.addTask(taskText.value.trim())
    taskText.value = ''
}
</script>

<style></style>