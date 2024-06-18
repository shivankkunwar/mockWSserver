const express = require( 'express');
const { WebSocketServer, WebSocket } = require( 'ws')

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    console.log("websocket Reached");
    console.log(data.toString());
  });
  console.log("working")
  ws.send('Hello! Message From Server!!');
});