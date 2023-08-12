import React from 'react';

export function withStorageListener(WrappedComponent) {

  return function WrappedComponentwithStorageListener(props){

    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if(change.key === "TODOS_V1"){
        console.log("hay cambios aplicados en LocalStorage con key TODOS_V1");
        setStorageChange(true);
      }
    });


    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };


    return (
      <>
        <WrappedComponent show={storageChange} toggleShow={toggleShow} />
        <h1>WrappedComponentwithStorageListener</h1>
      </>
    );
  }

}
