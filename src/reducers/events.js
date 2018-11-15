import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETED } from '../actions/events'

export default (state = null, action) => {
    // console.log(state.filter(event => event.id !== action.eventId))
    switch(action.type){
        case EVENTS_FETCHED:
            return action.events
        case EVENT_CREATE_SUCCESS:
            return [...state, action.event]
        case EVENT_DELETED:
            return state.filter(event => event.id !== action.eventId) 
        default:
            return state
    }
}