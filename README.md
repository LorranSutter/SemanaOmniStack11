# Be The Hero - OmniStack Week 11.0

Project provided by [Rocket Seat](https://rocketseat.com.br/week/inscricao/11.0) to learn backend, frontend and mobile development employing React JS, React Native and Express.

<div align="center">

<img src="https://res.cloudinary.com/lorransutter/image/upload/v1588812449/be_the_hero_site_preview.gif" alt="Site preview" height="300"/>
<img src="https://res.cloudinary.com/lorransutter/image/upload/v1588898902/be_the_hero_mobile_preview.gif" alt="Site preview" height="300"/>

</div>

This project aims to create a web application and mobile web app to help **Charities** find people who want to donate for incidents registered on the platform.

The web application is intended for the use of charities, where is possible to:

- Register yourself as a charity institution with name, email, whatsapp number, city and province/state, generating an unique ID used to login.
- Register a new incident related to the institution, having name, description and value of helping.

The mobile web app is indended for users that want to help charities, where is possible to:

- List all available incidents of all charities.
- Choose and read details about an incident.
- Get in touch with the charity, either registered email or whatsapp.

## :runner: How to run

Open your terminal in the folder you want to clone the project

```sh
# Clone this repo
git clone https://github.com/LorranSutter/Be-The-Hero.git

# Go to the project
cd Be-The-Hero

# Go to each folder and install dependencies
cd backend
npm install

cd ../frontend
npm install

cd ../mobile
npm install
```

Now you will need two opened terminals to run the project. One for the backend and another one for the frontend or mobile.

Backend will run on http://localhost:3333/

Frontend will run on http://localhost:3000/

Mobile will run on http://localhost:19002/

```sh
# Go to backend
cd backend

# Run the project
npm start

## In the another terminal ##

# Go to frontend
cd frontend

# Run the project
npm start
```

For the mobile web app keep backend running and do the following:

```sh
# Go to mobile
cd mobile

# Run the project
expo start
```

This will start expo CLI on your browser. A QR code will appear on your screen and in terminal. You can scan this QR code with [Expo app](https://expo.io/tools#client) to see the application running in your phone.

## :computer: Technologies

- [Node.js](https://nodejs.org/en/) - executes JS scripts in server side
- [Express.js](http://expressjs.com/) - web application framework
- [ReactJS](https://reactjs.org/) - frontend library
- [React Navigation](https://reactnavigation.org/) - routing and navigation for react apps
- [React Native](https://reactnative.dev/) - framework for mobile development
- [Expo](https://expo.io/) - tool for helping mobile development with react native
- [Knex](http://knexjs.org/) - query builder
- [Sqlite](https://www.sqlite.org/index.html) - simple SQL database engine
- [Celebrate](https://github.com/arb/celebrate) - middleware to validate data
- [Jest](https://jestjs.io/) - library for tests
- [Supertest](https://github.com/visionmedia/supertest) - HTTP assertions provider

## :cookie: Credits
- [Rocket Seat](https://rocketseat.com.br/week/inscricao/11.0)
- [Diego Fernandes](https://github.com/diego3g)
