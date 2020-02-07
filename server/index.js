require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')

//dotenv
const {SERVER_PORT, CONNECTION_STRING} = process.env;

//use req, res
app.use(express.json())

//controllers
const {getUsers, addUsers, updateUsers, deleteUsers} = require('./controllers/userController')

//db connection
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB is connected')
})

//endpoints
app.get('/users', getUsers)
app.post('/users', addUsers)
app.put('/users/:user_id', updateUsers)
app.delete('/users/:user_id', deleteUsers)

//listen
app.listen(SERVER_PORT, () => console.log(`App listening on ${SERVER_PORT}`))