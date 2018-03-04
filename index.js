import express from 'express';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

// bodyparser setup
app.use(bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

// custom routes
routes(app);

app.get('/', (req , res) =>
  res.send(`Node express server is running of port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);