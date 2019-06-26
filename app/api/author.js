module.exports = (app, db) => {
  app.get( "/authors", (req, res) =>
    db.author.findAll().then( (result) => res.json(result) )
  );

  app.get( "/author/:id", (req, res) =>
    db.author.findByPk(req.params.id).then( (result) => res.json(result))
  );

  app.post( "/author", (req, res) => 
    db.author.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  );

  app.put( "/author/:id", (req, res) =>
    db.author.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/author/:id", (req, res) =>
    db.author.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}