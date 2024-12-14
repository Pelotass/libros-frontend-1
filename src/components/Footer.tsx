const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">LibroStore</h3>
              <p className="text-sm">Tu destino para descubrir nuevos mundos a través de la lectura.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Enlaces rápidos</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-primary">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-primary">Contacto</a></li>
                <li><a href="#" className="hover:text-primary">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-primary">Términos y condiciones</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary"><span className="sr-only">Facebook</span><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white hover:text-primary"><span className="sr-only">Twitter</span><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white hover:text-primary"><span className="sr-only">Instagram</span><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} LibroStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  