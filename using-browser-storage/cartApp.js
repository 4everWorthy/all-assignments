// This function initializes the cart when the page loads
function initializeCart() {
    // Check if a cart exists in localStorage
    if (!localStorage.getItem('cart')) {
      // If not, create an empty cart and save it in localStorage
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  // This function adds an item to the cart
  function addItem(item) {
    // Get the cart from localStorage and convert it from a JSON string to an array
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Add the new item to the cart array
    cart.push(item);
    // Convert the updated cart array back to a JSON string and save it in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // This function displays the contents of the cart
  function displayCart() {
    // Get the cart from localStorage and convert it from a JSON string to an array
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Get the HTML element where we want to display the cart contents
    let cartContents = document.getElementById('cartContents');
    // Clear any previous contents in the display area
    cartContents.innerHTML = '';
  
    // Check if the cart is empty
    if (cart.length === 0) {
      // If the cart is empty, display a message
      cartContents.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      // If the cart has items, display each item
      cart.forEach(item => {
        // Create a new div element for each item
        let itemElement = document.createElement('div');
        // Set the HTML content of the item element
        itemElement.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        // Add the item element to the display area
        cartContents.appendChild(itemElement);
      });
    }
  }
  
  // This event listener runs when the page is fully loaded
  document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the cart
    initializeCart();
    // Set up the event listener for the form submission
    document.getElementById('addItemForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the usual way
  
      // Get the values from the input fields
      let itemName = document.getElementById('itemName').value;
      let itemPrice = parseFloat(document.getElementById('itemPrice').value);
  
      // Create a new item object with a unique id, name, and price
      let item = {
        id: Date.now(), // Use the current timestamp as the unique id
        name: itemName,
        price: itemPrice
      };
  
      // Add the new item to the cart
      addItem(item);
    });
  
    // Set up the event listener for the display cart button
    document.getElementById('displayCartButton').addEventListener('click', displayCart);
  });
  