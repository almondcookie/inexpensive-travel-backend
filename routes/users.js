const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// //Index route
// // router.get("/", ctrl.users.homePage);

// //New route
// router.get("/signup", ctrl.users.renderSignup);
router.post("/signup", ctrl.users.signup);

// //Show profile route
console.log(`before routing to /profile/:index`)
router.get("/profile/:index", ctrl.users.renderProfile);

// //Edit profile route
// router.get("/profile/:index/edit", ctrl.users.renderEdit);

// //Login route
// router.get("/login", ctrl.users.renderLogin);
router.post("/login", ctrl.users.login);

// //Edit route
// router.put("/profile/:index", ctrl.users.addPlace);
// router.put("/profile/:index/edit", ctrl.users.editUser);

// //Delete route
// router.delete("/profile/:index/edit", ctrl.users.deleteUser);

module.exports = router;