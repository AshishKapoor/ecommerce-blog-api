import {
  addNewContact,
  getContacts,
  getContactWithID
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => {
    // middleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
  }, getContacts)

  // POST endpoint
  .post(addNewContact);

  app.route('/contact/:contactId')
  .get((req, res, next) => {
    // middleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
  }, getContactWithID)

  .put((req, res) =>
    res.send(`PUT request successfull with ${req.params.contactId}`)
  )

  .delete((req, res) =>
    res.send('DELETE request successfull')
  );
};

export default routes;