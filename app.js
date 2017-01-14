'use strict';

const axios = require('axios');
const express = require('express');
const socketio = require('socket.io');
const serverKey = require('./fcm-config'); // contains your server key
const http = require("http");
const fs = require('fs');
const path = require('path');   

let app = express();
let server = http.createServer(app);
let io = socketio.listen(server);

let listId = [];

app.get('/firebase-messaging-sw.js', (req, res) => res.sendFile(path.join(__dirname, '/firebase-messaging-sw.js')));
app.get('/manifest.json', (req, res) => res.sendFile(path.join(__dirname, '/manifest.json')));
app.get('/', express.static(path.join(__dirname, '/public')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

io.sockets.on('connection', (socket) => {
    socket.on('new_client', (push_id) => {
        console.log(push_id);
        socket.push_id = push_id;
        listId.push(push_id)
    });

    socket.on('message',  (message, sender) => {
        let listReceiver = listId.filter((user) => user !== socket.push_id);
        for (let receiver in listReceiver) {
            let notif = { 
                'to': listReceiver[receiver], 
                'collapse_key': 'chat',
                
                'notification': {
                    'title': 'New message', 
                    'body': sender + ':' + message.substring(0,50)
                }
            };

            console.log(notif);

            axios.post('https://fcm.googleapis.com/fcm/send', notif, {
                headers: {
                    'Authorization': 'key=' + serverKey,
                    'Content-Type': 'application/json'
                }
            }).then(() => console.log('notif sent'))
            .catch((err) => console.log(err));
        }
        io.sockets.emit('message', {sender: sender, txt: message})
    }); 
});


server.listen(1337);