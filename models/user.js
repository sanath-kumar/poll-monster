const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { Schema } = mongoose;  This is the same as the statement above

const userSchema = new Schema({
  googleId : String,
});

mongoose.model('users',userSchema);
