const checkAuth = require('../middleware/check-auth');

module.exports = (app, db) => {
  app.get( "/carts", checkAuth, (_, res) =>
    db.cart.findAll().then( (result) => res.json(result) )
  );

  app.get( "/cart/:id", (req, res) =>
    db.cart.findByPk(req.params.id).then( (result) => res.json(result))
  );

  app.post( "/cart", (req, res) => 
    db.cart.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  );

  app.put( "/cart/:id", (req, res) =>
    db.cart.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/cart/:id", (req, res) =>
    db.cart.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}