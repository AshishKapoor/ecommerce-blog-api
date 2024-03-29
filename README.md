# Simple e-commerce API including blog services.
The project is an idea that I came up with after my own extensive research on businesses that really work well in the current times.

## What is E-Commerce Blog API?
This project is supposed to be an API only for the e-commerce blog API.
We will be serving products like:
1. Bags (Men and Women) <--> Startin point
2. Watches (Men, Unisex, and Women)
3. Clothing (Men and Women)
4. Jewellery (Men and Women)
5. Shoes (Men and Women)
6. Makeup supplies (Men and Women)
7. A blog CRUD.
8. Yoga matt.

## Getting started.

So far we are using:

- `.eslintrc.js` is currently set to 'eslint:airbnb' coding standards.
- `server.js`is where our server and database orm setup and configuration is found.
- `dump.sql` is data dump of dummy data(I know we can do better).
- `config.js` contains all the environments.
- `package.json` contains all the dependencies.

Express framework
https://expressjs.com

Postgresql
https://www.postgresql.org/docs/

Sequelize:
http://docs.sequelizejs.com/manual/installation/usage.html


## How to contribute?
Currently, It will be just the two of us. I have no idea about how docker and vault works. I’m only aware of JWT but even for it’s implementation It’s safe to say that you can initiate the setup. I really wish to make use of Express, Postgresql, and sequelize (ORM), stripe for payment gateway.

Note:

```
master = Production branch
develop = Development branch
```

- `Continuous Integration`: we will be having `issue-<number>` branches to be merged with all the updates on `develop` branch.
- `Continuous Delivery`: if possible @prafiles hook up the `master` and `develop` branch with free `heroku` servers.
- `Continuous Deployment`: Create a pipeline @prafiles which makes it deploy each time we merge anything on the `master` and `develop` branch.
- `Continuous Testing`: Leave the testing part up to me. We'll keep all the `apis` synced on postman.


## Structure (Tentative)
- The Routes are defined inside `/routes` folder.
- The Models schemas are defined inside the `/models` folder.
- The Restful services can be found inside `/app/api` folder.
- All public files are kept inside `/app/public` folder.

## Models:
- Products,
- Shopping Cart,
- Blog/posts,
- Orders,
- Users.

## Also, Featuring:
- Payment integration using stripe at checkout.
