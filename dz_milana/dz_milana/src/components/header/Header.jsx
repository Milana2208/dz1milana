import "./header.css"


import React from 'react'

function Header(props) {
  return (
    <div className="header">
        <button >{props.header.home}</button>
        <button >{props.header.b1}</button>
        <button >{props.header.b2}</button>
        <button >{props.header.b3}</button>
        <button >{props.header.b4}</button>
    </div>
    
  )
}

export default Header