import React from 'react'

const Tip = ({ tip }) => {
    const { titulo, descripcion } = tip
    return (
        <div className='text-center py-3'>
            <h4 className='font-semibold'> - {titulo} - </h4>
            <span>{descripcion}</span>
        </div>
    )
}

export default Tip