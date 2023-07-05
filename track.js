console.log(track)

{/* <a href="tracking.html"> 
                    <button class="track-package-button button-secondary">
                        Track package
                    </button>
                </a> */}

// Adding products
let productsHTML = '';
track.forEach((product) => {
    console.log(product.quantity)
    productsHTML += `
    <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on Monday, June 13
        </div>

        <div class="product-info">
          ${product.productName}
        </div>

        <div class="product-info">
          Quantity: 1
        </div>

        <img class="product-image" src=" ${product.productImg}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    `
});
//Adding to webPage
document.querySelector('.main-orders').innerHTML = productsHTML;
