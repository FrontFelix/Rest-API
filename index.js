
const express = require('express')
const fs = require('fs')
// const fs = require('fs')
const port = 3000

const userFile = './data/users.json'

const users = require(userFile)

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
    let userList = users
    let newUser = {"id": users.length + 1, "firstName": "test", "lastName": "test", "message": "eheheh111"}
    userList.push(newUser)

    fs.writeFileSync(userFile, JSON.stringify(userList), function writeJSON(err) {
        if(err) return console.log(err)
        console.log('eee ändrar fil')
    })

    return res.send('User added ' + JSON.stringify(newUser))
})

server.put('/users', (req, res) => {

})

server.delete('/users', (req, res) => {
    
})

server.listen(port, () => {
    console.log('Server startad på port ' + port)
})
