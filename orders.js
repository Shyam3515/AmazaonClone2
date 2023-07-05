//Making cart quantity interactive
document.querySelector('.js-cart-quantity').innerText = cartQuantity;

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let dt = new Date();
let productsHTML = '';
orders.forEach((product) => {
    console.log(product)
    productsHTML += ` 
    <div class="order-container">
        <div class="order-header">
            <div class="order-header-left-section">
                <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    <div>${
                        dt.getFullYear() + " " + months[dt.getMonth()] + " " + dt.getDate()
                    }
                    </div>
                </div>
                <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div>$${(product.productPrice /100).toFixed(2)}</div>
                </div>
            </div>

            <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${product.productId}</div>
            </div>
        </div>

        <div class="order-details-grid">
            <div class="product-image-container">
                <img src="${product.productImg}">
            </div>

            <div class="product-details">
                <div class="product-name">
                    ${product.productName}
                </div>
                <div class="product-delivery-date">
                    Arriving on: ${(months[dt.getMonth() + 1]) + " " + dt.getDate()}
                </div>
                <div class="product-quantity">
                    Quantity: ${product.productQuantity}
                </div>
                <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
                </button>
            </div>

            <div class="product-actions"
            data-product-id="${product.productId}" 
            data-product-img="${product.productImg}"
            data-product-price="${product.productPrice}"
            data-product-name = "${product.productName}">
            <a href="tracking.html">
                <button class="track-package-button button-secondary">
                    Track package
                </button>
            </a>   
            </div>
        </div>
    </div>
`});
document.querySelector('.orders-grid').innerHTML = productsHTML;

//Track Package
document.querySelectorAll('.track-package-button')
.forEach((trackButton,index) => {
    trackButton.addEventListener('click', () => {
        const order = orders[index]
        // console.log("index : ",index,order)
        track[0] = order;
        trackData();
        console.log(order,track)
    });
});


