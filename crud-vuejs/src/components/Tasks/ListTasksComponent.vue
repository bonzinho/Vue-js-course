<template>
    <div>
        <h1>{{title}}</h1>
        
        <div class="row">

            <form action="#" class="form form-inline" @submit.prevent="search">
                <input type="text" name="task" id="task" class="form-control" placeholder="pesquisar pelo nome da tarefa" @change.prevent="search" v-model="filter">            
            </form>

            <form action="#" class="form form-inline" @submit.prevent="onSubmit">
                <input type="text" name="task" id="task" class="form-control" placeholder="Nome da Tarefa" v-model="task.name">
                <button type="submit" class="btn btn-primary">Adicionar</button>
            </form>

        </div>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th>
                    <th>Acções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ta, index) in filteredTasks" :key="index">
                    <td>{{ta.id}}</td>
                    <td>{{ta.name}}</td>
                    <td>
                        <a class="btn btn-info" href="" @click.prevent="edit(ta.id)">Editar</a>
                        <a class="btn btn-danger" href="" @click.prevent="deleteTask(ta.id)">Apagar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>    

<script>
export default {
    data(){
        return {
            title: "Lista de tarefas",
            tasks: [],
            task: {
                id: '',
                name: '',
            },
            updating: false,
            filter: '',
            indexToEdit: '',
        }
    },
    methods:{
        onSubmit(){
            if(this.updating){
                this.update();
                return;
            }
            this.save();
        },
        edit(id){
            alert(id);            
            this.indexToEdit = this.findIndexTask(id);                       
            this.task = this.tasks[this.indexToEdit]
            this.updating = true;            
        },
        update(){                        
            this.tasks[this.indexToEdit] = this.task;            
            this.updating = false;   
            this.resetForm();
        },
        save(){             
            this.task.id = this.tasks.length + 1;                   
            this.tasks.push(this.task);                      
            this.resetForm()       
        },
        deleteTask(id){             
            this.tasks.splice(this.findIndexTask(id), 1);
        },
        findIndexTask(id){
            for (let index = 0; index < this.tasks.length; index++) {               
                if(this.tasks[index].id === id) return index;
            }
        },
        resetForm(){
            this.task = {
                id: '',
                name: '',
            }   
        },
        search(){
           this.tasks 
        }        
    },

    computed: {
        filteredTasks(){
            if(this.filter == ''){
                return this.tasks;
            }

            let vm = this;

            return this.tasks.filter((task) => {
                return task['name'].includes(vm.filter);
            }); 
            
            /*

            return this.tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > -1;
            }); 

            */

            /*

            return this.tasks.filter((task) => {
                return task.name.indexOf(vm.filter) > -1;
            }); 
            
            */
        }
    }
}
</script>

<style scoped>
    form {margin: 20px 0}
</style>