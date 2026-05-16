// Cart counter simple demo
let cartCount = 0;

function addToCart(){
  cartCount++;
  alert("Product added to cart!");
  document.getElementById("cartCount").innerText = cartCount;
}