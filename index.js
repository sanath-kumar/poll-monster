const express = require('express');
const auth = require('./routes/authRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());


auth(app);

app.listen(5000);
