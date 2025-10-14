import express from 'express';
import dbConnection from './database/dbConnection.js';
import mountRoutes from './modules/routes.js';
import session from 'express-session';
import mongoSession from 'connect-mongodb-session';

const MongoDBStore = mongoSession(session);
var store = new MongoDBStore({
  uri: 'mongodb+srv://MohammedTeama:1Vvk5aNxHX7V3CtY@project.a5v7n.mongodb.net/sarahah',
  collection: 'sessions'
});

dbConnection();
const app = express();
app.use(session({
  secret: 'sarahah app mvc',
  resave: false,
  saveUninitialized: false,
  store
}))
app.use(express.static('public'));
app.use(express.urlencoded());
mountRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listen on port ${port}`)
})