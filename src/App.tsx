import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN || ''}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || ''}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><Layout><HomePage /></Layout></PrivateRoute>} />
          <Route path="/book/:id" element={<PrivateRoute><Layout><BookDetailPage /></Layout></PrivateRoute>} />
          <Route path="/categories" element={<PrivateRoute><Layout><CategoriesPage /></Layout></PrivateRoute>} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;

