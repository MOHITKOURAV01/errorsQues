const express = require('express');
const app = express();

app.get('/sync', (req, res) => {
    // throw a user defined error
});

app.get('/async', async (req, res) => {
    // throw an error from an async function
});

app.get('/fs', (req, res) => {
    // throw an error from a callback function
});

// Error handling middleware    
app.use((err, req, res, next) => {
//  write your code here
}); 



app.listen(3000, () => console.log('Server running...'));
