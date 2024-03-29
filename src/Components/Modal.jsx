import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
    setModal, animarModal, setAnimarModal, guardarGasto,
    gastoEditar, setGastoEditar
}) => {
    
    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {//Muestra el formulario con la informacion del gasto al editar
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])

    const ocultarModal = () => {

        setAnimarModal(false) //Hace que se vuelva a ver la animacion del formulario
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        },500)
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            },2000)

            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerar modal" onClick={ocultarModal}/>
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}` /*Si animarModal esta verdadero le da la clase de "animar" al formulario*/}> 
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>/*Ya que tiene un children se deben cerrar las llaves*/}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gastos</label>
                    <input type="text" id="nombre" placeholder="Añade el Nombre del Gasto" value={nombre} onChange={ e => setNombre(e.target.value)   /*para mostrar lo que se escribe en el campo */}/>
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id="cantidad" placeholder="Añada la cantidad del gasto:ej. 300" value={cantidad} onChange={ e => setCantidad(Number(e.target.value))   /*para mostrar lo que se escribe en el campo */}/>
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria" value={categoria} onChange={ e => setCategoria(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'} />
            </form>
        </div>
    )
}

export default Modal