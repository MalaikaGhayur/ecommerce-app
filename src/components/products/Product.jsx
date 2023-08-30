import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='product-border'>
        <div className="product-container">
          <div id='product-heading'>
            <h2 >Products</h2>
          </div>
          <div className='main-product-container'>

            {products.map((p, index) => (
              <div className='main-product borderr' key={index}>
                <div className='images'>
                  <img src={p.image} alt="..." />
                </div>
                <div>
                  <p>{p.category}</p>
                </div>
                <div>{p.price}$</div>
                <div>
                  <Link to="/Showproducts">
                    <button type="button" class="btn btn-dark  btn-sm">Add To Cart</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Product;
