const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');

const app = express();
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// if api route, have express handle, otherwise, delegate control to client, (react router handles views / routing)
app.use('/api', require('./routes/user-router'));
app.use('/api', require('./routes/ranch-router'));
app.use('/api', require('./routes/field-router'));
app.use('/api', require('./routes/herd-router'));

// serve file / react app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
