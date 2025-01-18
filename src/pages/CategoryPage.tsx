import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  // Convert URL format back to display format (e.g., "hand-chains" -> "Hand Chains")
  const displayCategory = categoryName
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const categoryProducts = getProductsByCategory(displayCategory || '');

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{displayCategory}</h1>
          <p className="text-gray-600">
            Discover our collection of beautiful {displayCategory?.toLowerCase()}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage; 