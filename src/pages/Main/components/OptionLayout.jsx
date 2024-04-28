import React from 'react'
import OptionBtn from './OptionBtn.jsx'

const optionButtons = () => {
    return (
        <div className='w-full h-full p-2 justify-center flex flex-col '>
            <OptionBtn
                linkTo='/main/lists'
                icon='ri-list-check'
                option='Ver Listas' />
            <OptionBtn
                linkTo='/main/lists/new'
                icon='ri-play-list-add-line'
                option='Crear Listas' />
        </div >
    )
}

export default optionButtons