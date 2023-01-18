import React from 'react'
import "./catalog.css"

function Catalog(props) {
    return (
        <div className='catalog'>
            <div className='blocks'>
                <p>{props.catalog.c1}</p>
                <div className='c1'></div>
            </div>
            <div className='blocks'>
                <p>{props.catalog.c2}</p>
                <div className='c2'></div>
            </div>
            <div className='blocks'>
                <p>{props.catalog.c3}</p>
                <div className='c3'></div>
            </div>
            <div className='blocks'>
                <p>{props.catalog.c4}</p>
                <div className='c4'></div>
            </div>
            <div className='blocks'>
                <p>{props.catalog.c5}</p>
                <div className='c5'></div>
            </div>
        </div>    
    )
}

export default Catalog