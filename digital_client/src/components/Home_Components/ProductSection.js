import React, { useEffect, useState } from 'react';

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/entrepreneur/viewProducts')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 3))) // Limit to first 3 products
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Finest Products by Entrepreneurs</h2>
            <p className="mb-4">Growing Business meets the quality expected by a consumer, putting consumers in charge</p>
            <p><a href="/products" className="btn btn-secondary">Explore</a></p>
          </div>
          {products.map(product => (
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={product._id}>
              <a className="product-item" href="cart.html">
              <img
                    src={`http://localhost:4000${product.imageUrl}`}
                    class="img-fluid product-thumbnail"
                    alt={product.name}
                    style={{ width: "290px", height: "200px" }}
                  />
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">${product.price.toFixed(2)}</strong>
                <span className="icon-cross">
                  <img src="img/cross.svg" className="img-fluid" alt="cross icon" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
