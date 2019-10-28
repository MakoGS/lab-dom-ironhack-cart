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
  const $createRow = event.currentTarget.parentNode.parentNode;

  const $productNameInput = $createRow.querySelector('input[type="text"]');
  const $productPriceInput = $createRow.querySelector('input[type="number"]');

  const nameValue = $productNameInput.value;
  const priceValue = $productPriceInput.valueAsNumber;

  const $tableRow = document.createElement("tr");
  $tableRow.classList.add("product");
  $tableRow.innerHTML += `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const $removeButton = $tableRow.querySelector(".btn-remove");
  console.log($removeButton);
  $removeButton.addEventListener("click", deleteProduct);

  const $parent = document.querySelector("#cart tbody");

  $parent.appendChild($tableRow);

  $productNameInput.value = "";
  $productPriceInput.valueAsNumber = 0;
}

//Event Listener for Iteration 4 & 5
window.addEventListener("load", function() {
  var deleteButtons = document.getElementsByClassName("btn-remove");

  //Loop to get all the delete buttons in our shop cart
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteProduct);
  }

  const $createButton = document.getElementById("create");
  if ($createButton) {
    $createButton.addEventListener("click", createProduct);
  }
});
