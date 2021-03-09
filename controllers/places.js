const Place = require('../models').Place;
const User = require('../models').User;


const index = (req, res) => {
    Place.findAll({
        order: [
            ['name', 'DESC']
            // ['id', 'ASC']
        ]
    })//select * from "Places";
    .then(allPlaces => {//temp local variable that has all the places
        if(allPlaces){
            res.status(constants.SUCCESS).json({"places": allPlaces})
        }
        else{
            res.status(constants.BAD_REQUEST).send(`ERROR: No All Places`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
};       

const show = (req, res) => {
    Place.findByPk(req.params.index, {
        // include: [
        //     {
        //         model: User,
        //         attributes: ['name']
        //     },
        // ],
        attributes: ['name', 'link', 'description']
    })
    .then(foundPlace => {
        if(foundPlace){
            res.status(constants.SUCCESS).json({"place": foundPlace})
        }
        else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Didn't find the place`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
};

// const newPlace = (req, res) => {
//     res.render('new.ejs');
// }

const create = (req, res) => {

    // req.body.userId = req.user.id;
    
    Place.create(req.body)
    .then(newPlace => {
        res.status(constants.SUCCESS).json({newPlace})
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
};        

module.exports = {
    index,
    show,
    // newPlace,
    create
}

