import {defineStore} from 'pinia'
import {ref, computed, watch} from 'vue'

export const useTodoStore = defineStore('todo',() => {
    const tasks = ref(JSON.parse(localStorage.getItem('tasks') || []))
    const activeFilter = ref('all')
    
    watch(tasks, (newTasks)=>{
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }, {deep: true})

    const addTask = (text)=> {
        tasks.value.push({id: Date.now(), text, done: false})
    }
    const removeTask = (id)=>{
        tasks.value = tasks.value.filter(task => task.id != id)
    }
    
    const toggleTask = (id) => {
        const task = tasks.value.find(t => t.id == id)
        if(task) task.done = !task.done
    }
    const setFilter = (filter)=>{
        activeFilter.value = filter;
    }
    const filteredTasks = computed(()=>{
        if(activeFilter.value === 'active'){
            return tasks.value.filter(task => !task.done)
        }else if(activeFilter.value === 'completed'){
            return tasks.value.filter(task => task.done)
        }
        return tasks.value
    })
    const totalTasks = computed(()=>
        tasks.value.length
    )
    const completedTasks = computed(()=>
        tasks.value.filter(t => t.done).length
    )
    const activeTasks = computed(()=>
        tasks.value.filter(t => !t.done).length
    )
    const completionPercentage = computed(()=>
        Math.round((completedTasks.value/(totalTasks.value || 1))*100)
    )
    return{
        tasks, activeFilter, addTask, removeTask, toggleTask, setFilter, filteredTasks, totalTasks, completedTasks, activeTasks, completionPercentage
    }
})