import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function ForgotPassword() {
  const { resetPassword } = useUserAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [toast, setToast] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      setLoading(false);
      setToast('Email send successfully, Please check your mail. ');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className=" login">
      <div className="login-box">
        <div className="reset-password">Reset Password</div>
        {error ? <div className="error-block">{error}</div> : ''}
        {toast ? <div className="error-block">{toast}</div> : ''}
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            className="input-field"
            placeholder="Enter your Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className=" mb-30" />
          <button type="submit" className="submit-btn">
            {loading ? '... Forgot password' : 'Forgot password'}
          </button>
          <div className="back-login">
            <Link to="/">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
