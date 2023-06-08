// const cart = [];
let cart;
let savedData = JSON.parse(localStorage.getItem('product'));
if(Array.isArray(savedData)){
    cart = savedData;
}
else{
    cart = [];
}

