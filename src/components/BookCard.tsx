import { Link } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 truncate">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
          <p className="text-primary font-bold">${book.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

