import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: String,
      required: true,
      default: false
    }
  },
  // created at
  { timestamps: true }
)

// middleware that will compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// middleware that will run before save happens
userSchema.pre('save', async function (next) {
  // check if the user object is modified
  if (!this.isModified('password')) {
    next()
  }

  // assuming its a new user, since it was never modified
  // only then hashing the password is needed
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// create a model of 'userSchema' called 'User'
const User = mongoose.model('User', userSchema)

export default User
