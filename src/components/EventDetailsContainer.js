import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  deleteEvent = () => {
    this.props.deleteEvent(Number(this.props.match.params.id))
    this.props.history.push('/')
  }

  render() {
    return <EventDetails 
      event={this.props.event} 
      deleteEvent={this.deleteEvent} 
    />
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent })(EventDetailsContainer)