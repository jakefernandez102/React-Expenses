/* eslint-disable react/prop-types */

const Filtros = ({filtro,setFiltro}) => {




    return (
    <div className='filtros sombra contenedor'>
    
        <form >
            <div className="campo">
                <label htmlFor="filter">Filter Expenses</label>

                <select 
                    name="filter" 
                    id="filter" 

                    value={filtro == '' ? 'select' : filtro}
                    onChange={(e)=> setFiltro(e.target.value)}
                >
                    <option value='select' disabled>-- Select --</option>
                    <option value="ahorro" >Savings</option>
                    <option value="casa" >Home</option>
                    <option value="comida" >Food</option>
                    <option value="ocio" >Leisure</option>
                    <option value="otherExpenses" >Other Expenses</option>
                    <option value="salud" >Healt</option>
                    <option value="subscripciones" >Memberships</option>
                    <option value="" >All</option>
                </select>
            </div>
        </form>

    </div>
  )
}

export default Filtros
