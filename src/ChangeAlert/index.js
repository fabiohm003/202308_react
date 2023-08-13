import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';



export function ChangeAlert(props) {

  const { show, toggleShow } = useStorageListener(props);
  
  if (show == true){
    return (
      <>
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
      </>
    );
  }
  else {
    return (
      <>
        <p>sin cambios</p>
        <p>show == false</p>
      </>
    );
  }

}


//export const ChangeAlert = useStorageListener(ChangeAlert);