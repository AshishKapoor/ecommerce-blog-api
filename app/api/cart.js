module.exports = (app, db) => {
    app.get( "/cart/:id", (req, res) =>
      db.cart.findById(req.params.id).then( (result) => res.json(result))
    );
  }