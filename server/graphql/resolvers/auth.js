const bcrypt = require('bcryptjs')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
  users: () => {
    return User.find({}).populate('apartments').populate('vouchers')
  },
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({ email: args.inputUser.email })
      if (existingUser) {
        throw new Error('User exists already.')
      }
      const hashedPassword = await bcrypt.hash(args.inputUser.password, 12)
      const user = new User({
        email: args.inputUser.email,
        password: hashedPassword,
      })
      const result = await user.save()
      return { ...result._doc, password: 'secret', _id: result.id }
    } catch (error) {
      throw error
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email })
    if (!user) {
      throw new Error('User does not exist')
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      throw new Error('Password is incorrect!!')
    }
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      'somesecretkey',
      {
        expiresIn: '1h',
      }
    )
    return { userId: user.id, token: token, tokenExpiration: 1 }
  },
}
