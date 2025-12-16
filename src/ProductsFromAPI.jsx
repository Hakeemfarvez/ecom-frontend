import { useState, useEffect } from 'react';
import { getProducts } from './api/productApi';

function ProductsFromAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Failed to load products from backend');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="api-test-container">
        <h2>Loading products from backend...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-test-container">
        <h2>Error: {error}</h2>
        <p>Make sure the backend server is running on port 5000</p>
      </div>
    );
  }

  return (
    <div className="api-test-container">
      <h2>Products from Backend API</h2>
      <p>Connected successfully! Found {products.length} products</p>
      
      <div className="api-products-grid">
        {products.map((product) => (
          <div key={product._id} className="api-product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">₹{product.price}</p>
            <p className="category">{product.category}</p>
            <p className="stock">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsFromAPI;
