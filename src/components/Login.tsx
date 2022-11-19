/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Login() {
  const [loginTab, setLoginTab] = useState<boolean>(true);

  return (
    <div className=" login">
      <div className="login-box">
        <div className="tab-menus">
          <span
            role="button"
            tabIndex={0}
            className={`${loginTab ? 'active' : ''}`}
            onClick={() => setLoginTab(true)}
          >
            Login
          </span>
          <span
            role="button"
            tabIndex={0}
            className={`${!loginTab ? 'active' : ''}`}
            onClick={() => setLoginTab(false)}
          >
            Sign up
          </span>
        </div>

        {loginTab ? <LoginForm /> : <SignUpForm setLoginTab={setLoginTab} />}
      </div>
    </div>
  );
}

export default Login;
