/* eslint-disable react/prop-types */
import Gasto from './Gasto';


const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className="listado-gastos contenedor">

       
        <h3>You can slide to the <span className='success'>right</span> to Edit your expenses or to the <span className='delete'>left</span> to delete it</h3>
        
        {filtro ? (
            <>
              <h2>{gastosFiltrados.length ? 'Expenses' : `There are no expenses in ${filtro} category`}</h2>
              {gastosFiltrados.map(gasto => (
                <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                ></Gasto>
                ))}
            </>
        )
        
        :(
          <>
            <h2>{gastos.length ? 'Expenses' : "There are no expenses"}</h2>
            {gastos.map(gasto => {
              return(
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                ></Gasto>
              )
            })}
          </>
        )}

    </div>
  )
}

export default ListadoGastos
