import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(from, { replace: true });
    if (!username) return;
    login(username);
  };
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
