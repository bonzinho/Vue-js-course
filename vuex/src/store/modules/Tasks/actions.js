let actions = {
  addTask(state, task){
    // Comunicar com a api
    // Chamar o motation para alterar o estado
    state.commit('ADD_TASK', task);
  }
}

export default actions;
