const state = {
    clubs: [
      { id: 1, name: 'SMU Student Life', description: '' },
      { id: 2, name: 'SMU IEEE RAS', description: 'Robotics and Automation Society' }
    ]
  }
  
  const mutations = {
    ADD_CLUB(state, club) {
      state.clubs.push(club)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations
  }
