const { JWT_PRIVATE_KEY } = require('../../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');

module.exports = (app, db) => {
  // https://www.codementor.io/mayowa.a/how-to-build-a-simple-session-based-authentication-system-with-nodejs-from-scratch-6vn67mcy3
  // app.use(cookieParser());

  // app.use(session({
  //     key: 'user_sid',
  //     secret: 'somerandonstuffs',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //         expires: 600000
  //     }
  // }));

  // app.use((req, res, next) => {
  //   if (req.cookies.user_sid && !req.session.user) {
  //       res.clearCookie('user_sid');        
  //   }
  //   next();
  // });


  // // middleware function to check for logged-in users
  // var sessionChecker = (req, res, next) => {
  //     if (req.session.user && req.cookies.user_sid) {
  //         res.redirect('/dashboard');
  //     } else {
  //         next();
  //     }    
  // };


  // // route for Home-Page
  // app.get('/', sessionChecker, (req, res) => {
  //     res.redirect('/login');
  // });

  // app.post('/logout', (req, res) => {
  //   if (req.session.user && req.cookies.user_session) {
  //       res.clearCookie(user.user_session);
  //       res.redirect('/');
  //   } else {
  //       res.redirect('/login');
  //   }
  // });


  app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send(
        'Request missing email or password param'
      );
    }
    try {
      db.user.findOne({
        where: { email },
      })
      .then(async dbuser => {
        let isValidUser = await bcrypt.compare(password, dbuser.dataValues.password)
        if (isValidUser) {
          const token = jwt.sign({ id: dbuser.dataValues.id }, JWT_PRIVATE_KEY);
          const userObject = ({
            id: dbuser.id,
            firstName: dbuser.firstName,
            lastName: dbuser.lastName,
            email: dbuser.email,
            phone: dbuser.phone,
            token
          });
          return res.json({ user: userObject });
        }
        return res.status(400).send({ error: 'invalid email or password'});
      })  
    } catch (err) {
      return res.status(400).send({ error: 'invalid email or password'});
    }
  });
}