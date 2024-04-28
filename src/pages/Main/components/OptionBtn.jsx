import React from 'react'
import { Link } from 'react-router-dom'

const OptionBtn = (props) => {

    return (
        <Link className='w-full h-20 flex py-10 justify-between px-4 items-center border-t-1 border-t-darker border-b-darker border-b-2 font-extrabold text-text bg-darker bg-opacity-10'
            to={props.linkTo}>
            <i className={`${props.icon}`} style={{ fontSize: '1.5rem', color: '#052E16' }} />
            <h2 className='text-3xl text-text font-comfortaa'>{`${props.option}`}</h2>
        </Link>
    )
}

export default OptionBtn