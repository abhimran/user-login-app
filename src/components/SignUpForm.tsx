function SignUpForm() {
  return (
    <form className="input-group">
      <input className="input-field" placeholder="Email" type="email" />
      <input className="input-field" placeholder="Username" type="text" />
      <input className="input-field" placeholder="Password" type="password" />
      <div className=" mb-30" />
      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
