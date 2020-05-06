var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var roomsRouter = require("./routes/rooms");
var guestRouter = require("./routes/guest");
var checkingRouter = require("./routes/checking");
var extraRouter = require("./routes/extra");


const mongoose = require('mongoose');
var app = express();
require('dotenv').config();
const dbPath = process.env.MONGODB_URI;
// view engine setup


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


mongoose
	.connect(dbPath, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`conected to ${dbPath}`);
	})
	.catch(error => {
		console.error(error);
	});


app.use("/", indexRouter);
app.use("/rooms", roomsRouter);
app.use("/guest", guestRouter);
app.use("/checking", checkingRouter);
app.use("/extra", extraRouter);



// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

module.exports = app;
