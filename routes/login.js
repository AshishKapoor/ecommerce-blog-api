const { JWT_PRIVATE_KEY } = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (app, db) => {
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send(
        'Request missing email or password param'
      );
    }
    try {
      db.user.findOne({
        where: { email },
      })
      .then(async dbuser => {
        let isValidUser = await bcrypt.compare(password, dbuser.dataValues.password)
        if (isValidUser) {
          const token = jwt.sign({ id: dbuser.dataValues.id }, JWT_PRIVATE_KEY);
          const userObject = ({
            id: dbuser.id,
            firstName: dbuser.firstName,
            lastName: dbuser.lastName,
            email: dbuser.email,
            phone: dbuser.phone,
            token
          });
          return res.json({ user: userObject });
        }
        return res.status(400).send({ error: 'invalid email or password'});
      })  
    } catch (err) {
      return res.status(400).send({ error: 'invalid email or password'});
    }
  });
}