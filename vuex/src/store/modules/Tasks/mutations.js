let mutations = {
  ADD_TASK(state, task){
    state.tasks.push(task);
  },
  TOOGLE_TASKS(state, task){
    task.completed = !task.completed;
  }
}

export default mutations;
