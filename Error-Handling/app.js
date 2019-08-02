const user = {email: 'foo@bar.com'}

try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Will produce SyntaxError
    // console.log(eval('2+2'));

    // Will produce a URIError
    // decodeURIComponent('%');

    if(!user.name) {
        // throw 'User has no name'
        throw new SyntaxError('User has no name');
    }

} catch (e) {
    // Output = ReferenceError: My function is not defined
    console.log(e);
    // Output = My function is not defined
    // console.log(e.message);
    // Output = ReferenceError
    // console.log(e.name);
    // // Output = true 
    // console.log(e instanceof ReferenceError);
    // // Output = false
    // console.log(e instanceof ReferenceError);

// Finally runs no matter what 
} finally {
    console.log('Finally runs regardless of result...')
}


console.log('Program continues...')