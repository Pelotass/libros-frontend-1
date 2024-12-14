import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header: React.FC = () => {
  const { logout, user } = useAuth0();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">LibroStore</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-primary">Inicio</Link>
          <Link to="/categories" className="text-gray-600 hover:text-primary">Categorías</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Hola, {user?.name}</span>
          <button
  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
>
  Cerrar sesión
</button>

        </div>
      </div>
    </header>
  );
};

export default Header;

