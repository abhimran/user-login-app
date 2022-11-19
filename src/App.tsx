/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
