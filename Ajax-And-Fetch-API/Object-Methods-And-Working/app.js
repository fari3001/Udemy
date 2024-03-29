document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState);

    // Optional - used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);        
    }

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = 
            `<h1>${this.responseText}</h1>`
        }
    }
    
    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();
    
    // readyState Values
    // 0 = request not initialised
    // 1 = server connection established 
    // 2 = request recieved 
    // 3 = processing request 
    // 4 = request finished and response is ready 

    // HTTP Statuses
    // 200 = ok
    // 403 = forbidden
    // 404 = not found 
}

