const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookiewParser = require('cookie-parser')

module.exports = (app) => {

   const jsonParser = bodyParser.json()

   app.use(jsonParser)
   app.use(bodyParser.urlencoded({ extended: true }))

   app.use(cookiewParser())

   app.engine('.hbs', handlebars({
       extname: '.hbs'
   }));

   app.set('view engine', '.hbs')
   app.use('/static', express.static('static'))
};