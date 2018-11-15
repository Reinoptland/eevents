import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.events === null) return <h1>Nope, sorry!</h1>

    console.log(props.events, 'event list')
    return (
        <ul>
            { props.events.map(event => {
                return <Link to={`events/${event.id}`}><li>{event.name}</li></Link>
            }) }
        </ul>
    )
}