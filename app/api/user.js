const bcrypt = require('bcrypt');

module.exports = (app, db) => {
  app.get( "/users", (req, res) =>
    db.user.findAll()
    .then( (result) => res.json(result) )
    .catch( (err) => {
      throw res.json(err);
    })
  );

  app.get( "/user/:id", (req, res) =>
    db.user.findByPk(req.params.id).then( (result) => res.json(result))
  );

  
  app.post( "/user", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        phone: req.body.phone
      })
      .then( (result) => res.json(result))
      .catch( (err) => {
        throw res.json(err.errors.map(msg => msg.message.replace("user.", "")));
      })
  });

  app.put( "/user/:id", (req, res) =>
    db.user.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then( (result) => res.json(result) )
    .catch( (err) => {
      console.log(err) // for the time being just to keep an eye.
      throw res.json(err);
    })
  );

  app.delete( "/user/:id", (req, res) =>
    db.user.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( (result) => res.json(result) )
    .catch( (err) => {
      console.log(err) // for the time being just to keep an eye.
      throw res.json(err);
    })
  );
}