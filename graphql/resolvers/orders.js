const Apartment = require('../../models/Apartment')
const Voucher = require('../../models/Voucher')
const Orders = require('../../models/Orders')

module.exports = {
  getOrders: () => {
    return Orders.find({}).populate('apartments').populate('vouchers')
  },
  addOrder: async (args) => {
    const order = new Orders({
      email: args.inputOrder.email,
      fullName: args.inputOrder.fullName,
      apartments: args.inputOrder.apartments,
      vouchers: args.inputOrder.vouchers,
    })

    if (args.inputOrder.apartments) {
      await Apartment.findByIdAndUpdate(args.inputOrder.apartments, {
        ordered: args.inputOrder.apartments,
      })
    }

    if (args.inputOrder.vouchers) {
      await Voucher.findByIdAndUpdate(args.inputOrder.vouchers, {
        ordered: args.inputOrder.vouchers,
      })
    }

    const result = await order.save()

    return result
  },
}
