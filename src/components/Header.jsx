/* eslint-disable react/prop-types */
import ControlPresupuesto from './ControlPresupuesto';
import Presupuesto from './Presupuesto';

const Header = ({
                presupuesto, 
                setPresupuesto,
                isValidBudget,
                setIsValidBudget,
                gastos,
                setGastos
}) => {
  return (
    <header>
        <h1>Expenses Planner</h1>
        
        {isValidBudget ? (
            <ControlPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                gastos={gastos}
                setGastos={setGastos}
                setIsValidBudget={setIsValidBudget}
            ></ControlPresupuesto>
            ) : (
        <Presupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidBudget={setIsValidBudget}
        ></Presupuesto>
        )}
    </header>
  )
}

export default Header
