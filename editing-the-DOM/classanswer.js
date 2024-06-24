// Solution 1:

// Select the <ul> element representing the shopping cart
const shopCart = document.querySelector('ul')

// Change the text of the second item in the shopping cart to "Granny Smith Apples"
shopCart.children[1].innerHTML = 'Granny Smith Apples'

// Remove the fourth item in the shopping cart
shopCart.children[3].remove()

// Create a new <li> element for a new item
const newItem = document.createElement("li")
// Set the text of the new item to "Kombucha"
newItem.innerHTML = "Kombucha"
// Add the new item to the end of the shopping cart
shopCart.appendChild(newItem)

// Remove all items from the shopping cart one by one
while (shopCart.children.length > 0){
    shopCart.children[0].remove()
}

// Function to fill the shopping cart with new items
function fillList(){
    // Array of new items to add to the shopping cart
    let supplements = ['protein powder', 'almonds', 'peanut butter'];
    // Iterate over each item in the supplements array
    supplements.forEach(function(x){
        // Create a new <li> element for each supplement
        shopCart.appendChild(document.createElement('li'));
        // Set the text of the new item to the current supplement
        shopCart.children[supplements.indexOf(x)].innerHTML = x   
    }) 
}

// Call the function to fill the shopping cart with the supplements
fillList()

// Add a class of 'important' to the second item in the shopping cart
shopCart.children[1].setAttribute('class', 'important')

// Log the final state of the shopping cart to the console
console.log(shopCart)


// Solution 2:

// Select the <ul> element with the id 'list'
const shopCart = document.getElementById('list');

// Update the 'Apples' item to say 'Granny Smith Apples'
shopCart.children[1].innerHTML = 'Granny Smith Apples';

// Remove 'Oat Milk' from the list
shopCart.children[3].remove();

// Add an item 'Kombucha'
const newItem = document.createElement('li');
newItem.innerHTML = 'Kombucha';
shopCart.appendChild(newItem);

// Clear the list
while (shopCart.children.length > 0) {
  shopCart.children[0].remove();
}

// Array of new items to add to the shopping cart
const supplements = ['protein bars', 'almonds', 'peanut butter'];

// Function to fill the shopping cart with new items
function fillList() {
  supplements.forEach(function (x) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = x;
    shopCart.appendChild(newListItem);
  });

  // Add the class 'important' to the almonds item
  const almondsIndex = supplements.indexOf('almonds');
  if (almondsIndex !== -1) {
    shopCart.children[almondsIndex].setAttribute('class', 'important');
  }
}

// Call the function to fill the shopping cart with the supplements
fillList();

// Log the final state of the shopping cart to the console
console.log(shopCart);