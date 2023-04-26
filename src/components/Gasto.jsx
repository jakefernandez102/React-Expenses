/* eslint-disable react/prop-types */
import 'react-swipeable-list/dist/styles.css';

import { useState } from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';

import { formatearFecha, formatearMonto } from '../helpers/index.js';
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSubscripciones from '../img/icono_suscripciones.svg';

const diccionarioIconos = {
    ahorro:IconoAhorro,
    comida:IconoComida,
    casa:IconoCasa,
    otherExpenses:IconoGastos,
    ocio:IconoOcio,
    salud:IconoSalud,
    subscripciones:IconoSubscripciones,
}

// eslint-disable-next-line react/prop-types
const Gasto = ({gasto,setGastoEditar,eliminarGasto}) => {

    const [editando, setEditando] = useState(false);

    const handleEditando=()=>{
        setGastoEditar(gasto)
        setEditando(true);
    }
    const handleEliminando=()=>{
        eliminarGasto(gasto.id)
    }

const leadingActions=()=>(
    <LeadingActions>
        <SwipeAction
            onClick={handleEditando}
        >
            Edit
        </SwipeAction>
    </LeadingActions>
)
const trailingActions=()=>(
        <TrailingActions>
        <SwipeAction
            onClick={handleEliminando}
            destructive={true}
        >
            Delete
        </SwipeAction>
    </TrailingActions>
)

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className="gasto sombra">
                <div className="contenido-gasto ">
                    <img 
                        src={diccionarioIconos[gasto.category]} 
                        alt="" 
                    />

                    <div className="descripcion-gasto">
                        <p className="categoria">{gasto.category}</p>
                        <p className="nombre-gasto">{gasto.name}</p>
                        <p className="fecha-gasto">{ editando ?'Edited': 'Created'} on : <span>{formatearFecha(gasto.fecha)}</span></p>
                    </div>

                </div>
                
                <p className="cantidad-gasto">{formatearMonto(gasto.ammount)}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
