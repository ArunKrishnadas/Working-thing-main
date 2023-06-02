const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://abhijithts402:G9C1nTJCtF28jHwV@cluster0.2grn0aq.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

const usersRoutes = require('./routes/users');
const blogsRoutes = require('./routes/blogs');
app.use('/api/users', usersRoutes);
app.use('/api/blogs', blogsRoutes);

module.exports = app;
