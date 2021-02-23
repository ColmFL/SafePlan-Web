const mongoose = require("mongoose");

//Links the schema to mongoose
const Schema = mongoose.Schema;

//Creates schema to handle user objects
  const UserSchema = new Schema({

      //The required field ensures that this field will be included in the database 
      //when a new user object is sent to the database collection
      name: {
        type: String,
        required: true
  },
      email: {
        type: String,
        required: true
  },
      password: {
        type: String,
        required: true
  },
      date: {
        type: Date,
        default: Date.now
  }
});

//Schema exported so that it can be used by the APIs
module.exports = User = mongoose.model("users", UserSchema);