import api from './api'

function getEvents() {
  return api.get('/events')
}

function getEvent(id) {
  return api.get(`/events/${id}`)
}

export default {
  getEvents,
  getEvent
}
