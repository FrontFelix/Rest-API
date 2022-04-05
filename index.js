
const express = require('express')
// const fs = require('fs')
const port = 3000

const users = require('./data/users.json')

const server = express()


server.get('/users', (req, res) => {
    return res.send(users)
})

server.get('/users/:userID', (req,res) => {
    let userID = req.params.userID
    let user = users.find((user) => user.id = userID)
    return res.send(user)
})

server.post('/users', (req, res) => {

})

server.put('/users', (req, res) => {

})

server.delete('/users', (req, res) => {
    
})

server.listen(port, () => {
    console.log('Server startad på port ' + port)
})
