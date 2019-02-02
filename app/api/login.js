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
          return res.json(dbuser.dataValues);
        }
        return res.status(400).send('invalid email or password');
      })  
    } catch (err) {
      return res.status(400).send('invalid email or password');
    }
  });
}