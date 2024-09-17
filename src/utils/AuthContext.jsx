import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { account } from '../appwriteConfig';
import { useNavigate } from 'react-router';
import { ID } from 'appwrite';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.info(error);
    }
    setLoading(false);
  };

  const handleUserLogin = async (e, credentials) => {
    e.preventDefault();

    try {
      await account.createEmailPasswordSession(
        credentials.email,
        credentials.password,
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  const handleRegister = async (e, credentials) => {
    e.preventDefault();

    if (credentials.password1 !== credentials.password2) {
      alert('Passwords did not match!');
      return;
    }

    try {
      await account.create(
        ID.unique(),
        credentials.email,
        credentials.password1,
        credentials.name,
      );

      await account.createEmailPasswordSession(
        credentials.email,
        credentials.password1,
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const contextData = {
    user,
    handleUserLogin,
    handleLogout,
    handleRegister,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
