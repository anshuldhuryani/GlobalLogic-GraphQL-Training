
const axios = require('axios');
const fs = require('fs').promises;

async function saveUsers() {
    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let userList = '';
        response.data.forEach(user => {
            userList += `${user['name']}, ${user['email']}\n`;
        });
        await fs.writeFile('asyncawaitUsers.csv', userList);
    } catch (error) {
        console.log(`Could not save the user list to a file: ${error}`);
    }
}

saveUsers();