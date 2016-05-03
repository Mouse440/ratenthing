var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type: String,
        required: "The First Name can't be blank"
    },
    lastName: {
        type: String,
        required: "The Last Name can't be blank"
    },
    email: {
        type: String,
        match: /\S+@\S+\.\S+/,
        unique: true

    }, // 4. Match validation via regex
    password: {
        type: String,
        required: "The Pass can't be blank",
        min: [6, "Password can't be less than 6 characters"]
    },
    created: {
        type: Date,
        default: Date.now
    }
});
/**
 * Validations
 */

// // the below 5 validations only apply if you are signing up traditionally

// userSchema.path('name').validate(function (name) {
//   if (this.skipValidation()) return true;
//   return name.length;
// }, 'Name cannot be blank');

// userSchema.path('email').validate(function (email) {
//   if (this.skipValidation()) return true;
//   return email.length;
// }, 'Email cannot be blank');

userSchema.path('email').validate(function(email, fn) {
    const User = mongoose.model('User');
    //   if (this.skipValidation()) fn(true);

    // Check only when it is a new user or when email field is modified
    if (this.isNew || this.isModified('email')) {
        User.find({
            email: email
        }).exec(function(err, users) {
            fn(!err && users.length === 0);
        });
    }
    else fn(true);
}, 'Email already exists');

// userSchema.path('username').validate(function (username) {
//   if (this.skipValidation()) return true;
//   return username.length;
// }, 'Username cannot be blank');

// UserSchema.path('hashed_password').validate(function (hashed_password) {
//   if (this.skipValidation()) return true;
//   return hashed_password.length && this._password.length;
// }, 'Password cannot be blank');

var User = mongoose.model("User", userSchema);

module.exports = {
    User: User
}
