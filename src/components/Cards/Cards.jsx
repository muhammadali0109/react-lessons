/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Cards.scss'
import { Link } from 'react-router-dom'

const Cards = (props) => {
   const {img, name, capital}   = props
  return (
    <div className='card'>
        <img src={img}/>
        <h2>{name}</h2>
        <h4>{capital}</h4>
        <Link to={`name/${name}`}>Read more</Link>
    </div>
  )
}

export default Cards