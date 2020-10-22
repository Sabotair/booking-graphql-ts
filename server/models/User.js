const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  apartments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Apartments',
    },
  ],
  vouchers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vouchers',
    },
  ],
})

module.exports = mongoose.model('Users', userSchema)
