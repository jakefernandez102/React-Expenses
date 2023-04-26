/* eslint-disable react/prop-types */
import { useState } from 'react';

import Mensaje from './Mensaje';

// eslint-disable-next-line react/prop-types
const Presupuesto = ({
    presupuesto, 
    setPresupuesto,
    setIsValidBudget
}) => {

    const [mensaje,setMensaje] = useState('');


    const handlePresupuesto = (e)=>{
        e.preventDefault();
        
        if(!presupuesto || presupuesto <= 0){
            setMensaje('It is not a valid budget');

            return;
        }
        setMensaje('')
        setIsValidBudget(true);


    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      
      <form 
            className="formulario"
            onSubmit={handlePresupuesto}>

        <div className="campo">
            <label htmlFor="">Define budget</label>

            <input 
                type="number"
                className="nuevo-presupuesto" 
                placeholder="Add your Budget"
                value={presupuesto}
                onChange={(e)=> setPresupuesto(Number(e.target.value))}
            />
        </div>

        <input type="submit"value='Add' />

        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

      </form>
    </div>
  )
}

export default Presupuesto
