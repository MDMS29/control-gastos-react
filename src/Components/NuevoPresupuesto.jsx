import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto, setPresupuesto, setIsValidPresupuesto
}) => {
    
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = e => {
        e.preventDefault()
        
        if(!presupuesto || presupuesto < 0){//Si no es un numero !Number()
            setMensaje('No es un presupuesto valido')
            return //rompe el ciclo
        }
        setMensaje('')//Limpia el mensaje (State)
        setIsValidPresupuesto(true)//Para cambiar de pestaña
    }



    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input type="number" className='nuevo-presupuesto'  placeholder='Añade tu presupuesto' value={presupuesto} onChange={ e => setPresupuesto(e.target.value)/*Convertir a numero*/}/>
                </div>
                <input type="submit" value="Añadir"/>

                {mensaje && (
                    <div>
                        <Mensaje tipo="error">{mensaje /*children*/}</Mensaje>
                    </div>
                )}

            </form>

        </div>
    )
}

export default NuevoPresupuesto