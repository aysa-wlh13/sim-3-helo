require('dotenv').config();
const express = require ('express');
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./Controllers/controller');
const authCtrl = require('./Controllers/authCtrl');
const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('db connected')
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))


//Endpoints
//auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.post('/api/logout', authCtrl.logout);
app.get('/api/user', authCtrl.getUser);

//controller endpoints

app.get('/api/posts/:id', ctrl.getPosts);


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is Haunted!`));