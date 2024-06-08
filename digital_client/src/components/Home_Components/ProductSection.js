import React from 'react'

function ProductSection() {
    return (
        <>
            <div class="product-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 class="mb-4 section-title">Finest Products by Entrepreneurs</h2>
                            <p class="mb-4">Growing Business meets the quality expected by a consumer, putting consumers in charge </p>
                            <p><a href="shop.html" class="btn btn-secondary">Explore</a></p>
                        </div>
                        
                        <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a class="product-item" href="cart.html">
                                <img src="img/digital_marketing.png" class="img-fluid product-thumbnail"/>
                                    <h3 class="product-title">Nordic Chair</h3>
                                    <strong class="product-price">$50.00</strong>

                                    <span class="icon-cross">
                                        <img src="img/cross.svg" class="img-fluid"/>
                                    </span>
                            </a>
                        </div> 
                        <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a class="product-item" href="cart.html">
                                <img src="img/digital_marketing.png" class="img-fluid product-thumbnail"/>
                                    <h3 class="product-title">Nordic Chair</h3>
                                    <strong class="product-price">$50.00</strong>

                                    <span class="icon-cross">
                                        <img src="img/cross.svg" class="img-fluid"/>
                                    </span>
                            </a>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a class="product-item" href="cart.html">
                                <img src="img/digital_marketing.png" class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Nordic Chair</h3>
                                <strong class="product-price">$50.00</strong>

                                <span class="icon-cross">
                                    <img src="img/cross.svg" class="img-fluid" />
                                </span>
                            </a>
                        </div>
                        

                    </div>
                </div>
            </div >

        </>
    )
}

export default ProductSection
