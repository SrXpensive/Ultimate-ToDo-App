import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todo',{
    state: () => ({
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
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
        }
    }
})