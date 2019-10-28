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

  // Loop for getting all the <tr class="product"> in our table
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
window.addEventListener("load", function() {
  var deleteButtons = document.getElementsByClassName("btn-remove");

  //Loop to get all the delete buttons in our shop cart
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteProduct);
  }
});

function deleteProduct(event) {
  // $event will give us through currentTarget the remove button we are clicking.
  const $event = event.currentTarget;

  const $firstEventParent = $event.parentNode;

  //tbdoy is an HTML Coleection so we need to get index 0.
  document
    .getElementsByTagName("tbody")[0]
    .removeChild($firstEventParent.parentNode);
}

// ITERATION 5

function createProduct(event) {
  // ...
}
