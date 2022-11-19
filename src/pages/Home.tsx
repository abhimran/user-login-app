/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';

function Home() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error: any) {
      // console.log(error.message);
    }
  };
  return (
    <div className="home">
      <div className="home-box">
        <div className="homepage">Home page</div>
        <div className="home-user">Welcome! {user && user.displayName}</div>
        <div className="">
          <button
            className="submit-btn"
            role="button"
            tabIndex={0}
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
