/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import cerrarModal from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [name,setName] = useState('')
    const [ammount,setAmmount] = useState(0)
    const [category,setCategory] = useState('')

    const [error,setError] = useState(false);
    const [fecha,setFecha] = useState('false');
    const [id,setId] = useState('');

    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0){

            setName(gastoEditar.name)
            setAmmount(gastoEditar.ammount)
            setCategory(gastoEditar.category)
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha)
        }
    },[])

    const ocultarModal= ()=>{
        
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if([name, ammount, category].includes('')){
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);
            return;
        }
        setError(false);
        guardarGasto({name,ammount,category,id, fecha});
    }


  return (
    <div className="modal">

        <div className="cerrar-modal">
            <img 
                src={cerrarModal} 
                alt="Close Modal button" 
                onClick={ocultarModal}
            />
        </div>


        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
            >

            <legend>{gastoEditar.name ? 'Edit Expense': 'New Expense'}</legend>

            {error && (<Mensaje tipo='error'>All fields are required</Mensaje>)}

            <div className="campo">
                <label htmlFor="name">Expense Name</label>
                <input 
                    type="text" 
                    placeholder='Add the expense name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="ammount">Ammount</label>
                <input 
                    type="number" 
                    placeholder='Add the expense ammount'
                    id='ammount'
                    value={`${ammount}`}
                    onChange={(e) => setAmmount(Number(e.target.value))}
                />
            </div>

            <div className="campo">
                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category"
                    
                    value={category.length === 0 ? 'select' : category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value='select' disabled>-- Select --</option>
                    <option value="ahorro" >Savings</option>
                    <option value="casa" >Home</option>
                    <option value="comida" >Food</option>
                    <option value="ocio" >Leisure</option>
                    <option value="otherExpenses" >Other Expenses</option>
                    <option value="salud" >Healt</option>
                    <option value="subscripciones" >Memberships</option>
                </select>
            </div>

                <input 
                    type="submit" 
                    value={ gastoEditar.id ? 'Save Changes' :'Add Expense' }
                />


        </form>

    </div>
  )
}

export default Modal
