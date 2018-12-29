#!/usr/bin/env node

import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const Sequelize = require('sequelize');

const app = express();
const PORT = 3000;

const sequelize = new Sequelize('ecommerce', 'ashishkapoor', null, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

  // const User = sequelize.define('user', {
  //   firstName: {
  //     type: Sequelize.STRING
  //   },
  //   lastName: {
  //     type: Sequelize.STRING
  //   }
  // });
  
  // force: true will drop the table if it already exists
  // User.sync({force: true}).then(() => {
  //   // Table created
  //   return User.create({
  //     firstName: 'Master',
  //     lastName: 'Williams'
  //   });
  // });

  // User.findAll().then(users => {
  //   console.log(users)
  // })

  // User.findOne().then(user => {
  //   console.log(user.get('firstName'));
  // });

// bodyparser setup
app.use(bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));

// custom routes
routes(app);

app.get('/', (req , res) =>
  res.send(`Node express server is running of port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);