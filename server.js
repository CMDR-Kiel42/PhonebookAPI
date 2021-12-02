const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactController = require('./controllers/contact');

mongoose.connect('mongodb://127.0.0.1:27017/contact');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 3000;
const router = express.Router();

router.route('/contacts')
    .post(contactController.postContact)
    .get(contactController.getAllContacts);

router.route('/contacts/:contact_id')
    .get(contactController.getContact)
    .put(contactController.putContact)
    .delete(contactController.deleteContact);

app.use('/api', router);
app.listen(port);
console.log('Server started on port ' + port);