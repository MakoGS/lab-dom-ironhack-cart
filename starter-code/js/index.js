// ITERATION 1

function updateSubtotal($product) {
  const $price = $product.querySelector(".unit");
  const priceNumber = getNumberFromElement($price);
  const $quantity = $product.querySelector(".quantity");
  const quantity = $quantity.valueAsNumber;
  return priceNumber * quantity;
}

function calculateAll() {
  // ITERATION 2
  //...
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
