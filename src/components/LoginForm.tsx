/* eslint-disable jsx-a11y/label-has-associated-control */
function LoginForm() {
  return (
    <>
      <form className="input-group">
        <input className="input-field" placeholder="Enter Email or Username" type="email" />

        <input className="input-field" placeholder="Password" type="password" />
        <div className="checkbox">
          <input type="checkbox" id="remember-me" name="vehicle1" value="Bike" />
          <label htmlFor="remember-me" className="ms-5">
            Remember me
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Log in
        </button>
      </form>
      <div className="forgot-password">
        <span>Forgot your password?</span>
      </div>
    </>
  );
}

export default LoginForm;
