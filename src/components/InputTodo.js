import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTodoItem } = props;
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    if (title.trim()) {
      e.preventDefault();
      addTodoItem(title);
      setMessage('');
      setTitle('');
    } else {
      setMessage('please add a title');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" placeholder="Add todo..." value={title} onChange={handleChange} className="input-text" />
        <button type="submit" className="input-submit" aria-label="Edit"><i className="bi bi-plus-circle" /></button>
      </form>
      <span className="submit-warning">{message}</span>
    </>

  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
