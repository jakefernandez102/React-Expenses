/* eslint-disable react/prop-types */
import 'react-circular-progressbar/dist/styles.css';

import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const ControlPresupuesto = ({
    presupuesto,
    setPresupuesto,
    gastos,
    setGastos,
    setIsValidBudget
}) => {

    const [disponible,setDisponible]=useState(0)
    const [gastado,setGastado]=useState(0)
    const [porcentaje,setPorcentaje] =useState(0)

    
    useEffect(()=>{
        
        const totalGastado = gastos.reduce((total,gasto) => gasto.ammount + total, 0);
        
        const totalDisponible = presupuesto - totalGastado;
        
        //calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible)/ presupuesto * 100).toFixed(2))

        setGastado(totalGastado)
        setDisponible(totalDisponible)

        setTimeout(() => {
            
            setPorcentaje(nuevoPorcentaje)
        }, 1000);

    },[gastos])

    const formatearPresupuesto = (cantidad) =>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    const handleResetApp = ()=>{
        const resultado = confirm('Do you really want to reset your budget and expenses?');

        if(resultado){
            setGastos([]);
            setPresupuesto(0)
            setIsValidBudget(false)
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
    
    <div>
        <CircularProgressbar
            value={porcentaje}
            text={`${porcentaje}% spent`}
            styles={buildStyles({
                textColor: `${porcentaje >= 85 ? 'red': porcentaje >= 50 ? 'orange':'green'}`,
                pathColor: `${porcentaje >= 85 ? 'red': porcentaje >= 50 ? 'orange':'green'}`,
                trailColor:'#f5f5f5',
            })}
        ></CircularProgressbar>
    </div>

    <div className="contenido-presupuesto">
        <button
            className='reset-app'
            type='button'
            onClick={handleResetApp}
        >
            Reset
        </button>
        <p>
            <span>
                Budget: 
            </span>
                {formatearPresupuesto(presupuesto)}
        </p>
        <p>
            <span>
                Available: 
            </span>
                {formatearPresupuesto(disponible)}
        </p>
        <p>
            <span>
                Spent: 
            </span>
                {formatearPresupuesto(gastado)}
        </p>
    </div>

    </div>
  )
}

export default ControlPresupuesto
