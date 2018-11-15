import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_DELETED = 'EVENT_DELETED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

const eventDeleted = (eventId) => ({
  type: EVENT_DELETED,
  eventId
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
    console.log(data)
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (eventId) => dispatch => {
  request
    .get(`${baseUrl}/events/${eventId}`)
    .then(response => dispatch(eventFetched(response.body)))
    .catch(console.error)
}

export const deleteEvent = (eventId) => dispatch => {
  dispatch(eventDeleted(eventId))

  request
    .delete(`${baseUrl}/events/${eventId}`)
    .then(response => console.log(response))
    .catch(console.error)
}