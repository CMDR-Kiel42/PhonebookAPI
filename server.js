const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const contactController = require('./controllers/contact');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');

mongoose.connect('mongodb://127.0.0.1:27017/contact');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(passport.initialize());

const port = process.env.PORT || 3000;
const router = express.Router();

router.route('/contacts')
    .post(contactController.postContact)
    .get(contactController.getAllContacts);

router.route('/contacts/:contact_id')
    .get(contactController.getContact)
    .put(contactController.putContact)
    .delete(contactController.deleteContact);

router.route('/users')
    .post(userController.postUser)
    .get(authController.isAuthenticated, userController.getUsers);


app.use('/api', router);
app.listen(port);
console.log('Server started on port ' + port);