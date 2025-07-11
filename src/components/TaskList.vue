<template>
    <transition-group name="task" tag="ul" class="space-y-2 relative">
        <TaskItem v-for="task in store.tasks" :key="task.id" :task="task" @remove="store.removeTask(task.id)"/>
    </transition-group>
</template>

<script setup>
import {useTodoStore} from '../stores/todoStore'
import TaskItem from './TaskItem.vue'

const store = useTodoStore()
</script>

<style scoped>
.task-enter-from{
    opacity: 0;
    transform: scale(0.7);
}

.task-enter-active{
    transition: transform 600ms cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 300ms ease-out;
}

.task-enter-to{
    opacity: 1;
    transform: scale(1);
}

.task-leave-from{
    opacity: 1;
    transform: translateX(0px);
}

.task-leave-active{
    position: absolute;
    width: 100%;
    min-height: 40px;
    transition: transform 300ms ease-in, opacity 300ms ease-in;
}

.task-leave-to{
    opacity: 0;
    transform: translateX(100px)
}

.task-move{
    transition: transform 300ms ease;
}
</style>