const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db.js");
const apiPost = require("./routes/post");
const apiCart = require("./routes/cart");
const apiUser = require("./routes/user");
const apiProduct = require("./routes/product");
const apiLogin = require("./routes/login");
const apiOrder = require("./routes/order");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

apiPost(app, db);
apiCart(app, db);
apiUser(app, db);
apiProduct(app, db);
apiLogin(app, db);
apiOrder(app, db);

db.sequelize.sync().then(() => {
  app.listen(8080, () => console.log("App listening on port 8080!"));
});
