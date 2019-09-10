<template>
    <div class="comp">
        <h1>Lista de tarefas - {{title}}</h1>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                {{task.name}} - {{task.completed ? 'Sim' : 'Não'}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tasks: [
                {name: "tarefa 1",  completed: true},
                {name: "tarefa 2",  completed: true},
                {name: "tarefa 3",  completed: false},
                {name: "tarefa 4",  completed: true},
                {name: "tarefa 5",  completed: false},
                {name: "tarefa 6",  completed: true},
            ],
            title: "Tasks Component"
        }
    }
}
</script>

<style scoped>
.comp{
    border: 1px solid red;
    margin: 5px;
    padding: 5px;
    }
</style>