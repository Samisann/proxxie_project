const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');



const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
// connect to MongoDB
mongoose.connect('mongodb://localhost/proxxie', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connexion a la base de données établie!');
});

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
