import {
  useState, useContext, createContext, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import getUsername from '../components/utils/getUserName';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUsername);

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
