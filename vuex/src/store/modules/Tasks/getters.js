let getters = {
  sortedTasks(state){
    let tasks = state.tasks;
    return tasks.sort((a,b) => {
      if(a.name < b.nome) return -1
      if(a.name > b.name) return 1
      return 0
    });
  },
  tasksNotCompleted(state){
    let tasks = state.tasks;
    let tasksNotCompleted = tasks.filter((task)=>{
      return !task.completed;
    })
    return tasksNotCompleted
  }
}

export default getters;
