const express = require('express');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const roomID = req.query.id;
    res.render('index', { roomID });
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
