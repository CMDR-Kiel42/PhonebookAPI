const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/contact');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Server is up and running');
});

app.use('/api', router);
app.listen(port);
console.log('Server started on port ' + port);