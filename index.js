const express = require('express');

const app = express();

// serve static contents
app.use(express.static('static'))
// dynamic handling
app.get('/admin', (req, res) => {
    res.redirect("admin.html");
})
app.get('/guest', (req, res) => {
    res.redirect("guest.html");
})
app.get('/previous', (req, res) => {
    let content = '';
    // attach all previous submissions
    res.send(content);
})
app.listen(80);