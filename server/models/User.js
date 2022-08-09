const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        validate: {
            validator: function (v)
            {
                return /^[A-Za-z0-9]{4,14}$/.test(v)
            },
            message: props => `${props.value} has to between 4 and 14 characters`
        },
        required: [true, 'username required']
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (v)
            {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)
            },
            message: props => `${props.value} is not a valid email address`
        },
        required: [true, 'email address required']
        
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next()
})

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
}

const User = model("User", userSchema)
module.exports = User
