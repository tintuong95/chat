const express = require("express");
const http = require("http");
const { faker } = require("@faker-js/faker");
const script =require("./script.json")


const db = require("./db/models");
const app = express();
const server = http.createServer(app);




const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("listRoom", async ({ limit, offset }) => {
    try {
      const response = await db.Rooms.findAll({
        limit,
        offset,
      });
      io.emit("sendRoom", { data: response });
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("listMessageUser", async (data) => {
    try {
      const response = await db.Messages.findAll({
        where: { roomID: data?.roomID },
        order: [["createdAt", "ASC"]],
      });

      io.emit("sendMessage", { data: response });
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("listMessageAdmin", async (data) => {
    try {
      const response = await db.Messages.findAll({
        where: { roomID: data?.roomID },
        order: [["createdAt", "ASC"]],
      });
      const room = await db.Rooms.findOne({ where: { id: data?.roomID } });
      room.update({ count: 0 });

      io.emit("sendMessage", { data: response });
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("sendMessage", async (data) => {
    try {
      if (data.status) {
        const room = await db.Rooms.findOne({ where: { id: data.roomID } });
        await room.update({ count: ++room.toJSON().count });
      }
      await db.Messages.create(data);
      const message = await db.Messages.findAll({
        where: { roomID: data?.roomID },
        order: [["createdAt", "ASC"]],
      });
      io.emit("sendMessage", { data: message });
    } catch (err) {
      console.log(err);
    }
  });

  //remove
  socket.on("clearMessage", async ({ roomID }) => {
    try {
      await db.Messages.destroy({ where: { roomID } });
      const message = await db.Messages.findAll({
        where: { roomID },
        order: [["createdAt", "ASC"]],
      });
      io.emit("sendMessage", { data: message });
    } catch (err) {
      console.log(err);
    }
  });

  //client
  socket.on("createRoom", async ({ roomID }) => {
    try {
      db.Rooms.create({ id: roomID });
    } catch (err) {
      console.log(err);
    }
  });
  socket.on("chatbot", ({ message }) => {
    console.log(message);
    io.emit("sendChatbot", {
      data: `<button onClick={()=>{console.log("d")}}>clicke</button>`,
    });
  });
});

server.listen(3004);
