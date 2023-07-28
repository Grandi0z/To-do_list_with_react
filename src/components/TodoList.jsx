import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todoArr, handleChange, delTodo, setUpdate,
  } = props;
  return (
    <ul className="todos-list">
      {todoArr.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProps={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoArr: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
