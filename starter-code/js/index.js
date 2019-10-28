// ITERATION 1

function updateSubtotal($product) {
  const $price = $product.querySelector(".price").querySelector("span");
  const priceNumber = $price.innerText;
  const $quantity = $product.querySelector("input");
  const quantity = $quantity.valueAsNumber;
  const $subtotal = $product.querySelector(".subtotal").querySelector("span");
  const subTotal = priceNumber * quantity;
  $subtotal.innerText = subTotal;
}

function calculateAll() {
  // ITERATION 2
  const $products = document.querySelectorAll(".product");
  for (let $product of $products) {
    updateSubtotal($product);
  }
  // ITERATION 3
  //...
}

const $calculateTrigger = document.getElementById("calculate");

$calculateTrigger.addEventListener("click", calculateAll);

// ITERATION 4

function addProductRemoveListener($removeButton) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
