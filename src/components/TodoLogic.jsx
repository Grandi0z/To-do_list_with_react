import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

const TodoLogic = () => {
  const [todos, setTodo] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodo((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodo([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  const addTodoItem = (title) => {
    const newToto = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodo([...todos, newToto]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList
        todoArr={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>

  );
};

export default TodoLogic;
