const express = require('express')
const game = require('./game/controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));
app.use('/game', game);

app.listen(3000);