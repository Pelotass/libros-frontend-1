import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  description: string;
  isbn: string;
  publisher: string;
  publicationDate: string;
  pages: number;
  language: string;
}

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    // Aquí deberías hacer una llamada a tu API para obtener los detalles del libro
    // Por ahora, usaremos datos de ejemplo
    const fetchBook = async () => {
      // Simula una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));

      setBook({
        id: Number(id),
        title: "El nombre del viento",
        author: "Patrick Rothfuss",
        price: 24.99,
        image: "https://via.placeholder.com/300x450",
        description: "El nombre del viento es una novela de fantasía épica, primera entrega de la trilogía 'Crónica del asesino de reyes'. Narra la historia de Kvothe, un legendario mago, ladrón y músico, que relata su vida a un escribano.",
        isbn: "978-8401352836",
        publisher: "Plaza & Janés",
        publicationDate: "2007-03-27",
        pages: 880,
        language: "Español",
      });
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={book.image} alt={book.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">por {book.author}</p>
          <div className="text-2xl font-bold text-primary mb-4">${book.price.toFixed(2)}</div>
          <p className="text-gray-700 mb-6">{book.description}</p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300">
            Añadir al carrito
          </button>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Detalles del libro</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>ISBN:</strong> {book.isbn}</li>
              <li><strong>Editorial:</strong> {book.publisher}</li>
              <li><strong>Fecha de publicación:</strong> {book.publicationDate}</li>
              <li><strong>Páginas:</strong> {book.pages}</li>
              <li><strong>Idioma:</strong> {book.language}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

