import React from 'react';
import { withStorageListener } from './withStorageListener';



function ChangeAlert(props) {
 
  if (props.show == true){
    return (
      <>
        <p>si hubo cambios en otra ventana del mismo navegador</p>
        <p>props.show == true</p>
        <button onClick={props.toggleShow}> Volver a cargar la información </button>
        {/*mostrar actualizado*/}
      </>
    );
  }
  else {
    return (
      <>
        <p>sin cambios</p>
        <p>props.show == false</p>
      </>
    );
  }
  //props.toogleShow

}


export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);