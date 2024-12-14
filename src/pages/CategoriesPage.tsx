import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    // Aquí deberías hacer una llamada a tu API para obtener las categorías
    // Por ahora, usaremos datos de ejemplo
    const fetchCategories = async () => {
      // Simula una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));

      setCategories([
        { id: 1, name: 'Fantasía' },
        { id: 2, name: 'Ciencia Ficción' },
        { id: 3, name: 'Misterio' },
        { id: 4, name: 'Romance' },
        { id: 5, name: 'No Ficción' },
      ]);
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim()) {
      // Aquí deberías hacer una llamada a tu API para añadir la nueva categoría
      // Por ahora, simplemente la añadiremos al estado local
      const newId = Math.max(...categories.map(c => c.id)) + 1;
      setCategories([...categories, { id: newId, name: newCategory.trim() }]);
      setNewCategory('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <form onSubmit={handleAddCategory} className="mt-8">
        <div className="flex">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Nueva categoría"
            className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l text-gray-800 border-gray-200 bg-white"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-r-lg bg-primary text-white font-bold hover:bg-primary-dark transition duration-300"
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoriesPage;

