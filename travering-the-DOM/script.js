const headerElement = document.querySelector('header'); 
//'document.querySelector' method with 'header' as an argument.
    // finds and selects the first <header> element in the document.

const sec = document.querySelectorAll('section');
// 'document.querySelectorAll method with 'section' as an argument.
    //finds and selects all <section> elements in the document, returning a NodeList of these elements.
        // A NodeList is a collection of DOM nodes. It is similar to an array but is not exactly the same. It can be live or static.

const currentSec = document.querySelector('section.current')
// '.current' targets the section with the class "current"
    // Calls document.querySelector method with .current as an argument

const afterCurrent = currentSec.nextElementSibling
// The nextElementSibling property is used to get the next sibling element of the current section.
    //  It directly accesses the next element in the DOM that is at the same hierarchical level.

const hTwo = currentSec.previousElementSibling.children[0] 
// The previousElementSibling property is used to get the previous sibling element of the current section.
    // The querySelector('h2') method is then used to select the <h2> element within that previous section.

const fullDiv = currentSec.parentElement
// currentSec.parentElement points to the <div class="col"> element, which is the parent of the <section class="current">.

const h2Sections = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement})
// This consolidates the retrieval of all sections containing <h2> elements.
    // The querySelectorAll method selects all <h2> elements.
        // The Array.from method converts the NodeList returned by querySelectorAll into an array.
            // The map function iterates over each <h2> element, returning its parent element (the <section>).
                // This is a convenient way to collect all sections that contain <h2> elements.

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