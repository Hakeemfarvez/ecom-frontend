const API_URL = 'http://13.203.207.225:5000/api';

// Get all products
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/getproduct`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Add new product
export const addProduct = async (productData) => {
  try {
    const response = await fetch(`${API_URL}/postProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Update product
export const updateProduct = async (id, productData) => {
  try {
    const response = await fetch(`${API_URL}/updateProduct/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete product
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/deleteProduct/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
