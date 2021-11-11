var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mat = require("./models/Mat");

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true, useUnifiedTopology: true});

// server start
async function recreateDB() {
  // Delete everything
  await mat.deleteMany();
  let instance1 = new
  mat({
    "color": "Blue",
    "length": "10",
    "cost": 100
  });
  let instance2 = new
  mat({
    "color": "Orange",
    "length": "15",
    "cost": 110
  });
  let instance3 = new
  mat({
    "color": "Green",
    "length": "15",
    "cost": 150
  });  
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var matRouter = require('./routes/Mat');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Mat', matRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
//app.use('/Mat', matr);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
