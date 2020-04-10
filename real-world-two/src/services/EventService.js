import api from './api'

function getEvents(perPage, page) {
  return api.get(`/events?_limit=${perPage}&_page=${page}`)
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
