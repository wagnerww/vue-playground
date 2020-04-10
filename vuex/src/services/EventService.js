import api from './api'

function getEvents() {
  return api.get('/events')
}

function getEvent(id) {
  return api.get(`/events/${id}`)
}

function postEvent(event) {
  return api.post('/events', event)
}

export default {
  getEvents,
  getEvent,
  postEvent
}
