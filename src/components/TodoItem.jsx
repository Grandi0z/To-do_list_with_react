import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = (props) => {
  const {
    itemProps, handleChange, delTodo, setUpdate,
  } = props;
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const { user } = useAuthContext();

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input type="checkbox" checked={itemProps.completed} onChange={() => { handleChange(itemProps.id); }} />
        <span style={itemProps.completed ? completedStyle : null}>
          {itemProps.title}
        </span>
        {user && (
        <button type="button" onClick={handleEditing}>
          <i className="bi bi-pen" />
        </button>
        )}
        <button type="button" onClick={() => { delTodo(itemProps.id); }}>
          <i className="bi bi-trash3-fill" />
        </button>
      </div>
      <input
        type="text"
        value={itemProps.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => { setUpdate(e.target.value, itemProps.id); }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProps: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
