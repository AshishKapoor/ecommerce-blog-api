module.exports = (app, db) => {
  app.get( "/users", (req, res) =>
    db.user.findAll().then( (result) => res.json(result) )
  );

  app.get( "/user/:id", (req, res) =>
    db.user.findById(req.params.id).then( (result) => res.json(result))
  );

  app.post( "/user", (req, res) => 
    db.user.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  );

  app.put( "/user/:id", (req, res) =>
    db.user.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/user/:id", (req, res) =>
    db.user.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}