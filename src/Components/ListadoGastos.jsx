import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto,
  filtro, gastosFiltrados }) => {
  return (
    <div className='listado-gastos contenedor'>


      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta Categoria'}</h2>
          {gastosFiltrados.map(gasto => (
            <Gasto
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? 'Gastos' : 'No hay Gastos'}</h2>
          {gastos.map(gasto => (
            <Gasto
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ListadoGastos