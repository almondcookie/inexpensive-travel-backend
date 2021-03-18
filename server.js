
const express = require('express'); //from documentation: express is function
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express(); //app is an object
const methodOverride = require("method-override");
const routes = require("./routes");
require('dotenv').config();
const cors = require('cors');
const constants = require('./constants');

const corsOptions = {
    // origin: ['http://localhost:3000'],
    origin: ['http://inexpensive-travel-frontend.surge.sh'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());


// Middleware
app.use((req, res, next) => {
    console.log("I ran");
    next();
});

app.use(express.urlencoded( {extended: true }));

app.use(methodOverride("_method"));
// app.use(express.static(__dirname + '/public'));


app.use("/places", routes.places);
app.use("/users", routes.users);

// app.get('/', (req, res) => {
//     res.render('users/index.ejs');
// })

app.listen(process.env.PORT, () => {
    console.log("Backend listening on port:" + process.env.PORT);
});