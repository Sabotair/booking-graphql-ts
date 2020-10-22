const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vouchertSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  variant: {
    type: String,
    required: true,
  },
  attachment: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
})

module.exports = mongoose.model('Vouchers', vouchertSchema)
