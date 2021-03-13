require('dotenv').config();

const Place = require('../models').Place;
const User = require('../models').User;
const UserPlace = require('../models').UserPlace

const constants = require('../constants');

// console.log("At controller - users")

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.status(constants.SUCCESS).json({"user": newUser})
    })
    .catch(err => {
        res.status(constants.BAD_REQUEST).send(`ERROR: ${err}`);
    })
}

const renderProfile = (req, res) => {
    // console.log("Got to render profile")
    User.findByPk(req.params.index, {
        include: [
        {
            model: Place,
        }
    ]        
    })  
    .then(userProfile => {
        Place.findAll()
        .then(allPlaces => {
            res.render('profile.ejs', {
                user: userProfile,
                place: allPlaces,
            });
        })
    });
};

const login = (req, res) => {
    console.log(`at login function, req: ${req.body.username} and res: ${res}`)
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        if(foundUser){
           res.status(constants.SUCCESS).json({"user": foundUser})
            // res.redirect(`/users/profile/${foundUser.id}`);
        }
        else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
};

module.exports = {
    signup,
    login,
    renderProfile
}