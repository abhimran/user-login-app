/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function LoginForm() {
  const { logIn } = useUserAuth();
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logIn(values.email, values.password);
      setLoading(false);
      navigate('/home');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      {error ? <div className="error-block">{error}</div> : ''}
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="input-field"
          placeholder="Enter Email"
          type="email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <input
          className="input-field"
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <div className="checkbox">
          <input
            type="checkbox"
            id="remember-me"
            name="vehicle1"
            value="Bike"
          />
          <label htmlFor="remember-me" className="ms-5">
            Remember me
          </label>
        </div>
        <button type="submit" className="submit-btn">
          {loading ? '... Loged in' : 'Log in'}
        </button>
      </form>
      <div className="forgot-password">
        <span>
          <Link to="/reset-password">Forgot your password?</Link>
        </span>
      </div>
    </>
  );
}

export default LoginForm;
