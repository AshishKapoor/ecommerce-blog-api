const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const apiPost = require("./app/api/post");
const apiAuthor = require("./app/api/author");
const apiCart = require("./app/api/cart");
const apiUser = require("./app/api/user");
const apiProduct = require("./app/api/product");
const apiLogin = require("./app/api/login");
const apiOrder = require("./app/api/order");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiPost(app, db);
apiAuthor(app, db);
apiCart(app, db);
apiUser(app, db);
apiProduct(app, db);
apiLogin(app, db);
apiOrder(app, db);

db.sequelize.sync().then(() => {
  app.listen(8080, () => console.log("App listening on port 8080!"));
});
