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
  let totalPrice = 0;
  const $products = document.querySelectorAll(".product");
  for (let $product of $products) {
    updateSubtotal($product);
    totalPrice += parseInt(
      $product.querySelector(".subtotal").querySelector("span").innerText
    );
  }
  // ITERATION 3
  const $total = document.getElementById("total-value").querySelector("span");
  $total.innerText = totalPrice;
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
