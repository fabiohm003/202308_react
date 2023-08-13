import React from 'react';
import './TodoList.css'


function TodoList(props) {

  //const renderFunc = props.children || props.aRenderizar;
  //const renderFunc = props.aRenderizar;
  const renderFunc = props.children;

  return (
    <section className='TodoList-container'>

      {/*condicionales: [si foo = true] && [ejecutar aqui] */}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {/*condicion: no hay carga && no hay lista array && no se esta buscando */}
      {(!props.loading && !props.totalTodos && !props.searchedTodos.length) && props.onEmptyTodos()}

      {/*condicion: si hay lista array && no se esta buscando */}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      
      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}


    </section>
  );
}


export { TodoList };
