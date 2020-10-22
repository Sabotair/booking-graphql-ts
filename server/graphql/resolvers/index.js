const auth = require('./auth')
const apartments = require('./apartments')
const voucher = require('./voucher')
const orders = require('./orders')

const rootResolver = {
  ...auth,
  ...apartments,
  ...voucher,
  ...orders,
}

module.exports = rootResolver
