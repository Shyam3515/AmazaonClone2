// const cart = [];
let cart;
//local storage
function saveData() {
    localStorage.setItem('product', JSON.stringify(cart));
    console.log("local: ", localStorage.getItem('product'))
};
let savedData = JSON.parse(localStorage.getItem('product'));
if(Array.isArray(savedData)){
    cart = savedData;
}
else{
    cart = [];
}

// Cart Update
let cartQuantity = 0;
cartUpdate();
function cartUpdate() {
    //Get the cart quantity and put it on the page
    cart.forEach((item) => {
        cartQuantity++;
    });
}  

let orders = cart;


