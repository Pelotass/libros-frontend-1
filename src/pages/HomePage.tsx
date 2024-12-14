import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [bestSellers, setBestSellers] = useState<Book[]>([]);
  const [popular, setPopular] = useState<Book[]>([]);
  const [categories, setCategories] = useState<{ [key: string]: Book[] }>({});

  useEffect(() => {
    // Aquí deberías hacer las llamadas a tu API para obtener los libros
    // Por ahora, usaremos datos de ejemplo
    const fetchBooks = async () => {
      // Simula una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));

      const sampleBooks: Book[] = [
        { id: 1, title: "El nombre del viento", author: "Patrick Rothfuss", price: 24.99, image: "https://via.placeholder.com/150" },
        { id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez", price: 19.99, image: "https://via.placeholder.com/150" },
        { id: 3, title: "1984", author: "George Orwell", price: 15.99, image: "https://via.placeholder.com/150" },
        { id: 4, title: "El principito", author: "Antoine de Saint-Exupéry", price: 12.99, image: "https://via.placeholder.com/150" },
      ];

      setBestSellers(sampleBooks);
      setPopular(sampleBooks.slice().reverse());
      setCategories({
        "Fantasía": [sampleBooks[0]],
        "Clásicos": [sampleBooks[1], sampleBooks[2]],
        "Infantil": [sampleBooks[3]],
      });
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Libros más vendidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Libros populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popular.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {Object.entries(categories).map(([category, books]) => (
        <section key={category} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      ))}

      <div className="text-center mt-8">
        <Link to="/categories" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300">
          Ver todas las categorías
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

