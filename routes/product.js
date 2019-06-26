module.exports = (app, db) => {
  app.get( "/products", (_, res) =>
    db.product.findAll().then( (result) => res.json(result) )
  );

  app.get( "/product/:id", (req, res) =>
    db.product.findByPk(req.params.id).then( (result) => res.json(result))
  );

  app.post( "/product", (req, res) => 
    db.product.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  );

  app.put( "/product/:id", (req, res) =>
    db.product.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/product/:id", (req, res) =>
    db.product.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}