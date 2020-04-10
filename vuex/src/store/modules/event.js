import EventsServices from '../../services/EventService'

export const state = {
  events: [],
  event: {}
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventsServices.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventsServices.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('error ', error)
      })
  },
  fetchEvent({ commit }, id) {
    EventsServices.getEvent(id)
      .then(response => {
        commit('SET_EVENT', response.data)
      })
      .catch(error => {
        console.log('error ', error)
      })
  }
}

export const getters = {
  catLength: state => {
    return state.categories.length
  },
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  activeTodosCount: state => {
    return state.todos.filter(todo => !todo.done).length
  }
}
