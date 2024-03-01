import React from 'react'
import NavBar from './NabBar'

const HeaderHome = () => {
    return (
        <header className='flex text-white'>
            <NavBar />
            <h1 className="text-center p-2">Control de Gastos</h1>
            <button className=''>
                Perfil
            </button>
        </header>
    )
}

export default HeaderHome