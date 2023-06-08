// Main Idea of JavaScript: 1)Save the data 2)Generate HTML 3)Make it Interactive...

cartUpdate();
function cartUpdate() {
    //Get the cart quantity and put it on the page
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity++;
    });
    //Making cart quantity interactive
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// Adding products
let productsHTML = '';
products.forEach((product) => {
    console.log(product.quantity)
    productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button 
        button-primary js-add-to-cart"
        data-product-id="${product.id}" 
        data-product-img="${product.image}"
        data-product-price="${product.priceCents}"
        data-product-name = "${product.name}"
        data-product-quantity = "${product.quantity}">
        Add to Cart
        </button>
    </div>`;
});
//Adding to webPage
document.querySelector('.js-products-grid').innerHTML = productsHTML;

//Making add to cart interactive
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            // onclick we need to add product to cart
            //How do we know which product to add?
            // => With Data Attribute
            // It is just another HTML attribute.
            // Allows us to attach any information to an element
            //It has to start with 'data-' and we can give any name.Let's add it to Add-to-cart-button Element

            //dataset basically gives all the data attributes attached that are attached to this button
            //to differentiate between two same product names but different brands, we are using Id's  
            const productId = button.dataset.productId;
            let productQuantity = button.dataset.productQuantity;

            let matchingItem;
            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingItem = item;
                }
            });

            //If same item is present increase the product quantity
            if (matchingItem) {
                alert('Item added to cart, Please update the required quantity..')
                // button.dataset.productQuantity++;
                // saveData();
            } else {
                cart.push(button.dataset);
                saveData();
            }
            //Cart Update
            cartUpdate()
        });
    });

//local storage
function saveData() {
    localStorage.setItem('product', JSON.stringify(cart));
    console.log("local: ", localStorage.getItem('product'))
};