const headerElement = document.querySelector('header'); 
//'document.querySelector' method with 'header' as an argument.
    // finds and selects the first <header> element in the document.
console.log(headerElement)

const sectionElements = document.querySelectorAll('section');
// 'document.querySelectorAll method with 'section' as an argument.
    //finds and selects all <section> elements in the document, returning a NodeList of these elements.
        // A NodeList is a collection of DOM nodes. It is similar to an array but is not exactly the same. It can be live or static.
console.log(sectionElements)

const currentSection = document.querySelector('.current');
// The selector '.current' targets the section with the class "current"
    // Calls document.querySelector method with .current as an argument
console.log(currentSection)

if (currentSection.nextElementSibling) { // adding 'if/else' statement corrected dev console error.
const nextSection = currentSection.nextElementSibling;
// The nextElementSibling property is used to get the next sibling element of the current section.
    //  It directly accesses the next element in the DOM that is at the same hierarchical level.
console.log(nextSection)
} else {
    console.log("No next sibling section found");
}
const previousSectionHeader = currentSection.previousElementSibling.querySelector('h2');
// The previousElementSibling property is used to get the previous sibling element of the current section.
    // The querySelector('h2') method is then used to select the <h2> element within that previous section.
console.log(previousSectionHeader)

const containingDiv = document.querySelector('h2.highlight').closest('div');
// The querySelector('h2.highlight') method is used to select the <h2> element with the class "highlight". 
    // The closest('div') method is then used to find the nearest ancestor <div> element containing that <h2>.
console.log(containingDiv)

const sectionsWithH2 = document.querySelectorAll('section h2');
// console.log(sectionWithH2) ... This corrected the console error I was seeing but not sure if this is correct.

// This consolidates the retrieval of all sections with headers
    // The querySelectorAll method can be used with a CSS pseudo-class to select all <section> elements that contain an <h2> element.
        // This is a convenient way to filter elements based on their descendants.
// console.log(sectionWithH2) ... This corrected the console error I was seeing but not sure if this is correct.


//Dev console... Uncaught ReferenceError: sectionWithH2 is not defined
    // at script.js:36:13

    // script.js:39 Uncaught ReferenceError: sectionWithH2 is not defined    at script.js:39:13

// The if statement checks if currentSection is not null before trying to use it. This prevents errors that happen when you try to do something with an element that doesn't exist.       

