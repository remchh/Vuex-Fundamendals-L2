import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Rafael Mejia',
    events: [] // new events array
  },
  mutations: {
    ADD_EVENT(state, event) {
      // our first mutation
      state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})
