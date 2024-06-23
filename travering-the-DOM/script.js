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

const nextSection = currentSection.nextElementSibling;
// The nextElementSibling property is used to get the next sibling element of the current section.
    //  It directly accesses the next element in the DOM that is at the same hierarchical level.
console.log(nextSection)

const previousSectionHeader = currentSection.previousElementSibling.querySelector('h2');
// The previousElementSibling property is used to get the previous sibling element of the current section.
    // The querySelector('h2') method is then used to select the <h2> element within that previous section.
console.log(previousSectionHeader)

const containingDiv = document.querySelector('h2.highlight').closest('div');
// The querySelector('h2.highlight') method is used to select the <h2> element with the class "highlight". 
    // The closest('div') method is then used to find the nearest ancestor <div> element containing that <h2>.
console.log(containingDiv)

const sectionWithH2 = Array.from(document.querySelectorAll('section')).filter(section => section.querySelector('h2'));
// This consolidates the retrieval of all sections with headers
    // The querySelectorAll method can be used with a CSS pseudo-class to select all <section> elements that contain an <h2> element.
        // This is a convenient way to filter elements based on their descendants.
console.log(sectionWithH2)




        

