import { useState, useEffect } from 'react'
import {generarId} from './helpers'
import Header from './Components/Header'
import Modal from './Components/Modal'
import ListadoGastos from './Components/ListadoGastos'
import Filtros from './Components/Filtros'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [])//Mira el localStorage cuando carga la pagina

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([]) //Como arreglo porque pueden ser varios gastos filtrados


  useEffect(() =>{
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() =>{
        setAnimarModal(true)
      },500)
    }
  }, [gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)    
  },[presupuesto])
  
  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])    
  },[gastos])
  
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if(presupuestoLS>0){
      setIsValidPresupuesto(true)//Si hay presupuesto en el localStorage cambiara la pantalla
    }
  },[])

  /*PARA FILTRAR LOS GASTOS*/
  useEffect(()=>{
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)

      setGastosFiltrados(gastosFiltrados)
    }
  },[filtro])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({}) //muestra el formulario vacio por si se edita
    setTimeout(() =>{
      setAnimarModal(true)
    },500)
  }

  const guardarGasto = gasto => {
    if(gasto.id){//Ediar un gasto
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState) //Cuando el gastoState tenga le mismo id mostara el gasto que se esta editando
      setGastos(gastosActualizados) //El gasto seleccionado se guardara 
      setGastoEditar({})//Resetea el State


    }else{//Si es un nuevo gasto
      gasto.id = generarId() //Genera un id aleatorio unico
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto]) //Genera una copia del array y lo pasa a "gasto"
    }
    
    
    
    setAnimarModal(false)
    
    setTimeout(() =>{
      setModal(false)
    },500)
  
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? "fijar" :''}>
      <Header 
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto} 
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && ( //Para mostrar el boton de agregar otros gastos
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              setGastoEditar={setGastoEditar} 
              gastos={gastos}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>

          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto}/>
          </div> {/*Si se usan ternarios se le debe agregar : null al final*/ }
        </>
      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal} 
          guardarGasto={guardarGasto} 
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
      
    </div>
  )
}

export default App
