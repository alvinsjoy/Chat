import { useEffect, useState } from 'react';
import { useAuth } from '../utils/hooks/authHook';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../index.css';

const LoginPage = () => {
  const { user, handleUserLogin } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form
          onSubmit={(e) => {
            handleUserLogin(e, credentials);
          }}
        >
          <div className="field--wrapper">
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="name@example.com"
              value={credentials.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="field--wrapper">
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="password123"
              value={credentials.password}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="field--wrapper">
            <input
              type="submit"
              value="Login"
              className="btn btn--lg btn--main"
            />
          </div>
        </form>

        <p>
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
