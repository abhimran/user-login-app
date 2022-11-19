import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { SignUp, SignUpInterface } from '../types';

function SignUpForm({ setLoginTab }: SignUpInterface) {
  const { signUp } = useUserAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<SignUp>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(values.email, values.password, values.name);
      setLoginTab(true);
      setLoading(false);
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
          placeholder="Email"
          type="email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          className="input-field"
          placeholder="Username"
          type="text"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
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
        <div className=" mb-30" />
        <button type="submit" className="submit-btn">
          {loading ? '... Signing Up' : 'Sign Up'}
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
