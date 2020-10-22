const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
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

module.exports = mongoose.model('Orders', ordersSchema)
