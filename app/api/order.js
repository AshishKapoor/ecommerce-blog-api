module.exports = (app, db) => {
    app.get( "/orders", (req, res) =>
      db.order.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/order/:id", (req, res) =>
      db.order.findById(req.params.id).then( (result) => res.json(result))
    );
  
    app.post( "/order", (req, res) => 
      db.order.create({
        title: req.body.title,
        content: req.body.content
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/order/:id", (req, res) =>
      db.order.update({
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/order/:id", (req, res) =>
      db.order.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }