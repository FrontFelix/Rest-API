
const express = require('express')
<<<<<<< Updated upstream
=======
const { json } = require('express/lib/response')
const fs = require('fs')
>>>>>>> Stashed changes
// const fs = require('fs')
const port = 3000

const users = require('./data/users.json')

const server = express()


server.get('/users', (req, res) => {
    return res.send(users)
})

server.get('/users/:userID', (req,res) => {
    let userID = parseInt(req.params.userID)
    let user = users.find((user) => user.id === userID)

    if(!user) return res.send('No User with that ID')

    return res.send(user)
})

server.post('/users', (req, res) => {

})

server.put('/users/:userID', (req, res) => {
    let userID = parseInt(req.params.userID)
    let foundUser = users.find((user) => user.id === userID)

    if(!foundUser) return res.send('No User with that ID')

    let updatedUser = {"id": userID, "firstName": "updated", "lastName": "updated", "message": "eheheh111"}
    let updatedUsers = users.map(user => {
        if(user.id === userID) {
            user = updatedUser
            return user
        }
        return user
    })
    fs.writeFileSync(userFile, JSON.stringify(updatedUsers), function writeJSON(err) {
        if(err) return console.log(err)
        console.log('eee ändrar fil')
    })

    return res.send('Updated User ' + userID + ' new information ' + JSON.stringify(updatedUser))

})

server.delete('/users', (req, res) => {
    
})

server.listen(port, () => {
    console.log('Server startad på port ' + port)
})
