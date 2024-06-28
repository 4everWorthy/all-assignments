document.getElementById('getAllPosts').addEventListener('click', getAllPosts);
document.getElementById('getPost10').addEventListener('click', getPost10);
document.getElementById('createPost').addEventListener('click', createPost);
document.getElementById('replacePost12').addEventListener('click', replacePost12);
document.getElementById('updatePost12').addEventListener('click', updatePost12);
document.getElementById('deletePost12').addEventListener('click', deletePost12);

function getAllPosts() { // declares a function named getAllPosts.
    fetch('http://jsonplaceholder.typicode.com/posts') // fetch initiates a GET request to the provided URL.
        .then(response => response.json()) // Once the fetch request completes, it returns a response object. The response.json() method is called to parse the JSON data from the response.
        .then(data => { // After parsing the JSON, the parsed data is passed to the next .then() method as data.
            document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // This line updates the inner HTML of the element with the ID results. The data is formatted into a JSON string with indentation for readability.
            //  null,  "I don't want to modify the object; just convert it to JSON as it is."            
            // 2: This argument is the space parameter. It specifies the number of spaces to use as white space (indentation) for each level in the JSON string. By setting it to 2, it makes the JSON output more readable by indenting nested structures by two spaces.
        })
        .catch(error => console.error('Error:', error)); // If any error occurs during the fetch operation or while processing the data, it is caught and "Error" logged to the console.
}

function getPost10() {
    fetch('http://jsonplaceholder.typicode.com/posts/10')
        .then(response => response.json())
        .then(data => {
            document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
}

function createPost() {
    clearResults();
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',  // used to send data to a server to create or update a resource.
        body: JSON.stringify({  // JSON.stringify({ ... }) converts a JavaScript object into a JSON string, which is the format required for the body of a POST request.
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').innerHTML = `Created Post ID: ${data.id}`;
    })
    .catch(error => console.error('Error:', error));
}

function replacePost12() {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
            id: 12,
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error:', error));
}

function updatePost12() {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo updated'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error:', error));
}

function deletePost12() {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
    })
    .then(() => {
        document.getElementById('results').innerHTML = 'Post deleted successfully';
    })
    .catch(error => console.error('Error:', error));
}
