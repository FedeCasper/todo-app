// import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Comprar Fruta', completed: false },
  { text: 'Cocinar', completed: false },
  { text: 'Poner la mesa', completed: false },
  { text: 'Aprender React', completed: true },
]

function App() {
  // Estados
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.
    useState('');

  // Estados Derivados
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const serchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} />
      <TodoSearch
        propiedadSearchValue={searchValue}
        propiedadSetSearchValue={setSearchValue}
      />

      <TodoList>
        {serchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            propiedadSetTodos={setTodos}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
