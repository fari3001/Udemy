/**
*   EasyHTTP Library
*   Library for making HTTP requests
*
*   @version 3.0.0
*   @author Farhaan Essof
*   @title MIT
*
**/

class EasyHTTP {
    // Make an http GET Request 
    async get(url) {
        // resolve = if you want to send a response 
        // reject if you want to send an error
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make http POST request
    async post(url, data) {
        // resolve = if you want to send a response 
        // reject if you want to send an error
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    }

    // Make a PUT request 
    async put(url, data) {
        // resolve = if you want to send a response 
        // reject if you want to send an error
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;

    }

    // Make a DELETE request 
   async delete(url) {
        // resolve = if you want to send a response 
        // reject if you want to send an error
            const response = fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            });
            const resData = await 'Resource Deleted...';
            return resData;

    }

}

