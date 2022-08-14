import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({
    gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto
}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)/*Calcula lo gastado*/
        const totalDisponible = presupuesto - totalGastado

        //Calcular Porcentaje
        const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto) * 100

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000)
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return Number(cantidad).toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Desea resetear la app?')
        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>

            <div className='contenido-presupuesto'>
                <button className='reset-app' type='button' onClick={handleResetApp}>Resetear App</button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto