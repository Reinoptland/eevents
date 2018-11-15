import React from 'react'
import { __values } from 'tslib';

export default (props) => {
    console.log(props)
    return (
        <form onSubmit={props.onSubmit}>
            <label>Name</label>
            <input onChange={props.onChange} name="name" value={props.values.name}></input>
            <label>Date</label>
            <input onChange={props.onChange} name="date" value={props.values.date}></input>
            <label>Description</label>
            <input onChange={props.onChange} name="description" value={props.values.description}></input>
            <input type="submit" />
        </form>
    )
}