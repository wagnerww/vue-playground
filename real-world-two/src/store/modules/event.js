import EventsServices from '../../services/EventService'
//import { dispatch } from 'rxjs/internal/observable/range'

export const namespaced = true

export const state = {
  events: [],
  event: {},
  perPage: 3
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
  createEvent({ commit, dispatch }, event) {
    return EventsServices.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your event has bee created!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'Error on create event ' + error
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventsServices.getEvents(state.perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        console.log('chegou', notification)
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvent({ commit }, id) {
    return EventsServices.getEvent(id).then(response => {
      commit('SET_EVENT', response.data)
      return response.data
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
