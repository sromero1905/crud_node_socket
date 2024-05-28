import express from 'express'
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import { log } from 'console'
import {v4 as uuid} from 'uuid'
const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server)

app.use(express.static(__dirname + '/public'))
const notes = []

io.on("connection", (socket) => {
   console.log('nueva conexion',socket.id);
   
    socket.on('client: newnote', newNote=>{
    const note = {...newNote, id:uuid()}
    notes.push(note)
    socket.emit('server:newnote', note)
    })
  });


server.listen(3000)
console.log("server on post",3000)
