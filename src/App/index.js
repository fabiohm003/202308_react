import React from 'react';

import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';



function App() {

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
} = useTodos();


return (
  <React.Fragment>
    <TodoHeader loading={loading} >
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} /*loading={loading}*/ />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} /*loading={loading}*/ />
    </TodoHeader>

    
    
    <TodoList 
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      searchText={searchValue}
      totalTodos={totalTodos}
      onError={() =>  <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults={(searchText) => <p>no hay resultados para {searchText}</p>}
    >
    {
      todo => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      />
      )
    }
    </TodoList>

    {!!openModal && (
      <Modal>
        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
      </Modal>
    )}

    <CreateTodoButton setOpenModal={setOpenModal} />
  </React.Fragment>
);
}



export default App;
