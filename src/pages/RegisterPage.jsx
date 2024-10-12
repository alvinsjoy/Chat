import { useEffect, useState } from 'react';
import { useAuth } from '../utils/hooks/authHook';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { user, handleRegister } = useAuth();
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
            handleRegister(e, credentials);
          }}
        >
          <div className="field--wrapper">
            <label>Name</label>
            <input
              required
              type="text"
              name="name"
              value={credentials.name}
              placeholder="John Doe"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="field--wrapper">
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="john@example.com"
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
              name="password1"
              placeholder="••••••••"
              value={credentials.password1}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="field--wrapper">
            <label>Confirm password</label>
            <input
              required
              type="password"
              name="password2"
              placeholder="••••••••"
              value={credentials.password2}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="field--wrapper">
            <input
              className="btn btn--lg btn--main"
              type="submit"
              value="Register"
            />
          </div>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
