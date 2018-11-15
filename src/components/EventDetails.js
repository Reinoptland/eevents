import React from 'react'
export default (props) => {
  if(props.event === null) return <h1>You're not invited</h1>

  return (
    <div>
      <h2>{props.event.name}</h2>
      <h2>{props.event.date}</h2>
      <h2>{props.event.description}</h2>
      <button onClick={props.deleteEvent} >DELETE!</button>
    </div>
  )
}