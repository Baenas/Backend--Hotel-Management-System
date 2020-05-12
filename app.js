const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const indexRouter = require("./routes/index");
const roomsRouter = require("./routes/rooms");
const guestRouter = require("./routes/guest");
const checkingRouter = require("./routes/checking");
const extraRouter = require("./routes/extra");
const authRouter = require("./routes/auth");
const cors = require('cors');

const app = express();
require('dotenv').config();
const dbPath = process.env.MONGODB_URI;
// view engine setup

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

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
	session({
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			ttl: 24 * 60 * 60, // 1 day
		}),
		secret: 'hms',
		resave: true,
		saveUninitialized: true,
		name: 'hms',
		cookie: {
			maxAge: 24 * 60 * 60 * 1000,
		},
	})
);
app.use(
	cors({
		origin: process.env.AlLOW,
		origin: "http://localhost:3001"

	})
);


app.use("/", indexRouter);
app.use("/rooms", roomsRouter);
app.use("/guest", guestRouter);
app.use("/checking", checkingRouter);
app.use("/extra", extraRouter);
app.use("/auth", authRouter);



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
