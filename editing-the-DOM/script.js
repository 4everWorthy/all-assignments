const shopCart= document.querySelector('ul');
    // declaring a constant variable named shopCart. This finds the first unordered list <ul> element in the HTML document.
        //querySelector is a tool that helps you find elements on the page using CSS selectors.
            // This line of code finds the first <ul> element on the page and stores it in the shopCart variable, allowing you to easily work with this element later in your script.

shopCart.children[1].innerHTML = 'Granny Smith Apples'
    // shopCart.children[1] gets the second list <li> element inside the <ul>.
        // .innerHTML changes the text inside that list item to whatever you assign to it, in this case, 'Granny Smith Apples'.
            
shopCart.children[3].remove()
    // This is a method that removes the element from the DOM, element in the list, so it no longer appears on the web page.
        
const newitem = document.createElement('li')
    // This line of code creates a new <li> element and stores it in the newitem variable

newItem = document.createElement('li')
    // This declares or reassigns a variable named newItem. Unlike const, this doesn't necessarily declare a new variable if newItem was already declared somewhere else.
        // If it was declared with let or var before, this line will just reassign its value.

newItem.innerHTML = "Kombucha"
    // .innerHTML allows you to change what is displayed inside the HTML element.

shopCart.appendChild(newItem)
    // .appendChild is a standard method for adding new elements to the DOM. It allows you to insert new elements into existing elements.
    
while (shopCart.children.length > 0){
}
function fillList(){
    let supplements = ['protein powder', 'almonds', 'peanut butter'];
    supplements.forEach(function(x){
        shopCart.appendChild(document.createElement('li'));
        shopCart.children[supplements.indexOf(x)].innerHTML = x
    })
}
    // This while loop checks if the shopCart element has any child elements (list items), but since the loop body is empty.

fillList()
    // This line calls the fillList function, which adds new list items for each supplement in an array to the shopCart.

shopCart.children[1].setAttribute('class', 'important')
    // This line sets the class attribute of the second list item (<li>) in the shopCart to 'important'.

console.log(shopCart)
