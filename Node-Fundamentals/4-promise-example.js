
const axios = require('axios');
const fs = require('fs').promises;

axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => { 
        let userList = '';
        response.data.forEach(user => {
            userList += `${user['name']}, ${user['email']}\n`;
        })
        return fs.writeFile('promiseUsers.csv', userList);
    })
    .then(() => { console.log(`Saved the user list to promiseUsers.csv`);})
    .catch((error) => { console.log(error); })