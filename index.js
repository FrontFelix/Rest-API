const methodOverride = require('method-override');
const express = require('express')
const fs = require('fs')
// const fs = require('fs')
const port = 3000
const path = require('path')

const userFile = './data/users.json'

const users = require(userFile)

let serverList = users

const server = express()

server.use(methodOverride('_method'));
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())


function getRandomID() {
    let randomID = Math.floor(Math.random() * 100)
    let foundID = serverList.find((user) => user.id === randomID)
    if(foundID) return getRandomID()

    return randomID
}


server.get('/users', (req, res) => {
    return res.send(serverList)
})


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})


server.get('/user', (req, res) => {
    let userID = parseInt(req.query.id || req.body.id)
    let foundUser = serverList.find((user) => user.id === userID)

    if(!foundUser) return res.status(404).send('No user Found')


    return res.send('USER ' + JSON.stringify(foundUser))
    
})


server.post('/user', (req, res) => {

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let message = req.body.message
    let newUser = {"id": getRandomID(), "firstName": firstName, "lastName": lastName, "message": message}
    serverList.push(newUser)

    fs.writeFileSync(userFile, JSON.stringify(serverList, null, 2), function writeJSON(err) {
        if(err) return console.log(err)
        console.log('eee ändrar fil')
    })

    return res.send('User added ' + JSON.stringify(newUser))
})

server.put('/user', (req, res) => {
    let userID = parseInt(req.body.id)
    let foundUser = serverList.find((user) => user.id === userID)

    if(!foundUser) return res.status(404).send('No user Found')

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let message = req.body.message
    let updatedUser = {"id": userID, "firstName": firstName, "lastName": lastName, "message": message}
    let updatedUsers = serverList.map(user => {
        if(user.id === userID) {
            user = updatedUser
            return user
        }
        return user
    })
    serverList = updatedUsers
    fs.writeFileSync(userFile, JSON.stringify(updatedUsers, null, 2), function writeJSON(err) {
        if(err) return console.log(err)
        console.log('eee ändrar fil')
    })

    return res.send('Updated User ' + userID + ' new information ' + JSON.stringify(updatedUser))
})


server.delete('/user', (req, res) => {
    let userID = parseInt(req.body.id)
    let foundUser = serverList.find((user) => user.id === userID)

    if(!foundUser) return res.status(404).send('No user Found')

    let updatedUsers = serverList.filter((user) => user.id !== userID)
    fs.writeFileSync(userFile, JSON.stringify(updatedUsers, null, 2), function writeJSON(err) {
        if(err) return console.log(err)
        console.log('eee ändrar fil')
    })
    serverList = updatedUsers
    return res.send('Removed ID ' + userID)
    
})



server.listen(port, () => {
    console.log('Server startad på port ' + port)
})
