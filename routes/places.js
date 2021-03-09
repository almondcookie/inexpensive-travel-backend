const express = require('express');
const router = express.Router();// express router, new router object
const ctrl = require('../controllers');

router.get('/', ctrl.places.index);
// router.get('/new', ctrl.places.newPlace);
router.get('/:index', ctrl.places.show);
router.post('/', ctrl.places.create);

module.exports = router;