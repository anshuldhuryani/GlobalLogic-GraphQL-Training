
const request = require('request');
const fs = require('fs');

request(`https://jsonplaceholder.typicode.com/users`, (error, response, body) => {
    if(error) {
        console.error(`Coulnd not send request to API: ${error.message}`);
        return;
    }
    if(response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}`);
        return;
    }
    let userList = '';
    users = JSON.parse(body);
    users.forEach(user => {
        userList += `${user['name']}, ${user['email']}\n`;
    });
    fs.writeFile('callbackUsers.csv', userList, function(error) {
        if(error) {
            console.error(`Could not save the users list to a file: ${error}`);
            return;
        }
        console.log(`Saved the user list to callbackUsers.csv`);
    })
})

/**
 doSomething() => {
    doSomething() => {
        doSomething() => {
            doSomething() => {
                // Write Code Here..
            }
        }
    }
 }
 */