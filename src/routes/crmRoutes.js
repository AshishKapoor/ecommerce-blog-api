const routes = (app) => {
  app.route('/contact')
  .get((req, res) =>
    res.send('GET request successfull')
  )

  .post((req, res) =>
    res.send('POST request successfull')
  );

  app.route('/contact/:contactId')
  .put((req, res) =>
    res.send(`PUT request successfull with ${req.params.contactId}`)
  )

  .delete((req, res) =>
    res.send('DELETE request successfull')
  );
};

export default routes;