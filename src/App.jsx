import { useEffect, useState } from 'react';

import Filtros from './components/Filtros';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarID } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';


function App() {
  
  const [gastos,setGastos] =useState(JSON.parse(localStorage.getItem('gastos'))??[]);

  const [presupuesto,setPresupuesto] = useState(Number(localStorage.getItem('presupuesto'))?? 0);
  const [isValidBudget,setIsValidBudget] = useState(false);
  
  const [modal,setModal] = useState(false);
  const [animarModal,setAnimarModal] = useState(false);

  const [gastoEditar,setGastoEditar] = useState('');

  const [filtro,setFiltro] =useState('');
  const [gastosFiltrados,setGastosFiltrados] =useState([]);

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
    
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  },[gastoEditar])


  useEffect(()=>{
    localStorage.setItem('presupuesto',JSON.stringify(presupuesto) ?? 0)
  },[presupuesto])

    useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos));
  },[gastos])

  useEffect(()=>{
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.category === filtro);
      setGastosFiltrados(gastosFiltrados)
    }
  },[filtro])
  
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto'))??0;
    if(presupuestoLS > 0){
      setIsValidBudget(true)
    }
  },[])
  
  




  const handleNuevoGasto =()=>{
    
    setModal(true);
    setGastoEditar({})

    setTimeout(() => {

      setAnimarModal(true)

    }, 500);

  }

  const guardarGasto = gasto => {

    if(gasto.id){
      //editando
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      
      setGastos(gastosActualizados)
      setGastoEditar({})
    }else{
      //agregando
      gasto.fecha=Date.now();
  
      gasto.id = generarID();
      setGastos([...gastos,gasto])
    }


    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const eliminarGasto = (gastoID) =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== gastoID);
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      ></Header>

      {isValidBudget && (
        <>
          <main>

            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            ></Filtros>

            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            ></ListadoGastos>
          </main>

          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto} 
              alt="Icon add expenses"
              onClick={handleNuevoGasto} 
            />
          </div>
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
        ></Modal>
      )}

    </div>
  )
}

export default App
