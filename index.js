const express = require('express');
const fs = require('fs');
const app = express();

app.get('/sync', (req, res) => {
    // throw a user defined error
    app.get('/sync', (req, res) => {
    try {
        throw new Error('Synchronous route error!');
    } catch (err) {
        next(err);
    }
});
});


app.get('/async', async (req, res, next) => {
    // throw an error from an async function
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Async route error!')), 100);
        });
        res.send('This will never run');
    } catch (err) {
        next(err);
    }
});


app.get('/fs', (req, res) => {
    // throw an error from a callback function
    fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
        if (err) return next(err);
        res.send(data);
});
});


// Error handling middleware    
app.use((err, req, res, next) => {
    console.error('Error caught by middleware:', err.message);
    res.status(500).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});
 



app.listen(3000, () => console.log('Server running...'));
