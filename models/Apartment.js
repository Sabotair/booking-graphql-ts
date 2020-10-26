const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apartmentSchema = new Schema({
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
  rooms: {
    type: Number,
    required: true,
  },
  interval: {
    type: Number,
    require: true,
  },
  attachment: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  ordered: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
  },
})

module.exports = mongoose.model('Apartments', apartmentSchema)
