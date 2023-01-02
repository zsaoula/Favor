//Utilisation de express/dotenv
const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({path: './config/.env'});
require('./config/db.js');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');

const app = express();

//autorise tout le monde à faire des requetes
//app.use(cors());
//autorise seulement les client à effectuer des requetes
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type','Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

//prend la requete et la rend au bon format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//permet de lire les cookies
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
});


//routes
//toutes les routes qui vont avoir un lien avec le user
app.use('/api/user', userRoutes);
//toutes les routes en lien avec le post
app.use('/api/post', postRoutes);

//server
//process.env.PORT (récupérer la variable PORT)
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})