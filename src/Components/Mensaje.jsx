import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
        {children /*Mensaje que se envia*/}
    </div>
  )
}

export default Mensaje