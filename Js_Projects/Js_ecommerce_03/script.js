document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 29.99 },
  ];
  let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartTotalMessage = document.getElementById("cart-total");
  const emptyCartMessage = document.getElementById("empty-cart");
  const checkoutBtn = document.getElementById("checkout-btn");
  const totalPriceDisplay = document.getElementById("total-price");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}"> Add To Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  function saveCartToLocalStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <span>${item.name} - $${item.price}</span>
        <button data-index="${item}"> Remove </button>
        `;
        cartItem.addEventListener("click", (e) => {
          if (e.target.tagName === "BUTTON") {
            removeFromCart(index);
          }
        });

        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }
  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;

    alert("CheckOut Sucessfully");
    renderCart();
  });
  renderCart();
});
