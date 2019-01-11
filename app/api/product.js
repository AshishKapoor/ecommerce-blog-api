module.exports = (app, db) => {
    app.get( "/product/:id", (req, res) =>
      db.product.findById(req.params.id).then( (result) => res.json(result))
    );
  }