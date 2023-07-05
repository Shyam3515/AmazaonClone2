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

//storing track order
let track;
function trackData() {
    localStorage.setItem('track', JSON.stringify(track));
    console.log("local: ", localStorage.getItem('track'))
};
let trackedData = JSON.parse(localStorage.getItem('track'));
if(Array.isArray(trackedData)){
    track = trackedData;
}
else{
    track = [];
}

