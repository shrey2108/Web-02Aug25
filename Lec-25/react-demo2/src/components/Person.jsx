import React from 'react'

// props = {name: "", profession: "", age: ""}
const Person = (props) => {

  const style = {
    border: "2px solid black",
  }

  return (
    <div style={style}>
      <p>Name: {props.name} </p>
      <p>Profession: {props.profession} </p>
      <p>Age: {props.age} </p>
    </div>
  )
}

export default Person