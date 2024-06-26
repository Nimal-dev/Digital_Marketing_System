import React, { useEffect, useState } from "react";
import CustomerNavbar from "../Common/CustomerNavbar";
import CustomerFooter from "../Common/CustomerFooter";

function FullProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/entrepreneur/viewProductss")
      .then((response) => response.json())
      .then((data) => setProducts(data)) // Correctly set the fetched data to the state
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (productId) => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    const customerId = userdata._id;

    fetch("http://localhost:4000/customer/AddCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId, productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Product added to cart successfully");
        } else {
          alert(data.message || "Error adding product to cart");
        }
      })
      .catch((error) => console.error("Error adding product to cart:", error));
  };

  return (
    <>
      <CustomerNavbar />
      {/* -------------Top Bar Start--------------- */}
      <div
        style={{
          backgroundColor: "#3b5d50",
          padding: "5px 0px 20px 0px",
        }}
      >
        <h1 style={{ marginLeft: "50px", marginTop: "20px" }}>PRODUCTS</h1>
      </div>
      {/* -------------Top Bar End--------------- */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div
                className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                key={product._id}
              >
                <div className="product-item" href="cart.html">
                  <img
                    src={`http://localhost:4000${product.imageUrl}`}
                    alt={product.name}
                    style={{ width: "290px", height: "200px", borderRadius:"10px 10px 3px 3px" }}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{product.name}</h3>
                  <p>{product.description}</p>
                  <p>
                    Seller: <b>{product.entrepreneurId.entrepreneurname}</b>
                  </p>
                  <strong className="product-price">
                    ₹{product.price.toFixed(2)}
                  </strong>
                  <span className="icon-cross">
                    <button
                      onClick={() => addToCart(product._id)}
                      className="btn btn-secondary"
                    >
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CustomerFooter />
    </>
  );
}

export default FullProductSection;
