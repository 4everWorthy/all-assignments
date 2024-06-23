const headerElement = document.querySelector('header'); 
//'document.querySelector' method with 'header' as an argument.
    // finds and selects the first <header> element in the document.

const sec = document.querySelectorAll('section');
// 'document.querySelectorAll method with 'section' as an argument.
    //finds and selects all <section> elements in the document, returning a NodeList of these elements.
        // A NodeList is a collection of DOM nodes. It is similar to an array but is not exactly the same. It can be live or static.

const currentSec = document.querySelector('section.current')
// The selector '.current' targets the section with the class "current"
    // Calls document.querySelector method with .current as an argument

const afterCurrent = currentSec.nextElementSibling
// The nextElementSibling property is used to get the next sibling element of the current section.
    //  It directly accesses the next element in the DOM that is at the same hierarchical level.

const hTwo = currentSec.previousElementSibling.children[0] 
// The previousElementSibling property is used to get the previous sibling element of the current section.
    // The querySelector('h2') method is then used to select the <h2> element within that previous section.

const fullDiv = currentSec.parentElement
// The querySelector('h2.highlight') method is used to select the <h2> element with the class "highlight". 
    // The closest('div') method is then used to find the nearest ancestor <div> element containing that <h2>.

const h2Sections = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement})
// This consolidates the retrieval of all sections with headers
    // The querySelectorAll method can be used with a CSS pseudo-class to select all <section> elements that contain an <h2> element.
        // This is a convenient way to filter elements based on their descendants.

console.log(header)
console.log(sec)
console.log(currentSec)
console.log(afterCurrent)
console.log(hTwo)
console.log(fullDiv)
console.log(h2Sections)
// console.log(headerElement)
// console.log(sectionElements)
// console.log(currentSection)
// console.log(nextSection)
// console.log(previousSectionHeader)
// console.log(containingDiv)
// console.log(sectionWithH2)