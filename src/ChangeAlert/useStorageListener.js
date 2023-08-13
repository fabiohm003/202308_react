import React from 'react';

export function useStorageListener({props}) {


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


    return {
      show: storageChange,
      toggleShow,
    };
 

}
