const express = require('express');

const app = express();

// serve static contents
app.use(express.static('static'))
// dynamic handling
app.get('/admin', (req, res) => {
    let content = '';
    res.send(content);
})
app.get('/guest', (req, res) => {
    let content = '';
    res.send(content);
})

app.listen(80);