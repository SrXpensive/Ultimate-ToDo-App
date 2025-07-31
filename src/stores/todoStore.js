import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todo',{
    state: () => ({
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        activeFilter: 'all'
    }),
    actions: {
        addTask(text){
            this.tasks.push({id: Date.now(), text, done: false})
            this.saveToLocalStorage()
        },
        removeTask(id){
            this.tasks = this.tasks.filter(task => task.id != id)
            this.saveToLocalStorage()
        },
        saveToLocalStorage(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        toggleTask(id){
            const task = this.tasks.find(t => t.id == id)
            if(task) task.done = !task.done
            this.saveToLocalStorage()
        },
        setFilter(filter){
            this.activeFilter = filter;
        }
    },
    getters: {
        filteredTasks(state){
            if(state.activeFilter === 'active'){
                return state.tasks.filter(task => !task.done)
            }else if(state.activeFilter === 'completed'){
                return state.tasks.filter(task => task.done)
            }
            return state.tasks
        }
    }
})