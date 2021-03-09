require('dotenv').config();

const Place = require('../models').Place;
const User = require('../models').User;
const UserPlace = require('../models').UserPlace

const constants = require('../constants');

// const signup = (req, res) => {
//     User.create(req.body)
//     .then(newUser => {
//         res.status(constants.SUCCESS).json({"user": newUser})
//     })
//     .catch(err => {
//         res.status(constants.BAD_REQUEST).send(`ERROR: ${err}`);
//     })
// }

// const login = (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username,
//             password: req.body.password
//         }
//     })
//     .then(foundUser => {
//         if(foundUser){
//             res.status(constants.SUCCESS).json({"user": foundUser})
//         }
//         else{
//             res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// };

// module.exports = {
//     signup,
//     login
// }