const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()//mongoose method that gives all the users from the mongodb atlas and returns a promise
    .then(users => res.json(users))//returning the users in a json format
    .catch(err => res.status(400).json('Error: '+err));//if an error occurs we are going to set status 400 with error msg
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});//creating an instance of the user 

    newUser.save()//saving it to the database
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error :'+err));

});

module.exports = router;
