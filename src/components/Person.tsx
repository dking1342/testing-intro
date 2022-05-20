import React from 'react'
import { PersonProps } from '../types/person'



const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h2>Person</h2>
      <p role={name}>Name: { name }</p>
    </div>
  )
}

export default Person