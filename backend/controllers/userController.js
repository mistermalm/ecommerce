import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//  @desc       Auth user & get token
//  @route      POST api/users/login
//  @access     Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  // check if user exists
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

//  @desc       Register a new user
//  @route      POST api/users
//  @access     Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const existingUser = await User.findOne({ email })

  // check if user exists
  if (existingUser) {
    res.status(400)
    throw new Error('User already exists')
  }

  // create is basically "save" so therefore then middleware in userModel will run
  const newUser = await User.create({
    name,
    email,
    password
  })

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//  @desc       Get user profile
//  @route      GET /api/users/profile
//  @access     Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, registerUser, getUserProfile }
