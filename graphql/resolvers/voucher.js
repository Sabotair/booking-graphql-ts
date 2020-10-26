const User = require('../../models/User')
const Voucher = require('../../models/Voucher')

module.exports = {
  vouchers: () => {
    return Voucher.find({}).populate('attachment')
  },
  lowCostVoucher: async () => {
    const lowCost = await Voucher.find({}).sort({ cost: 1 })
    return lowCost
  },
  higherCostVoucher: async () => {
    const highCost = await Voucher.find({}).sort({ cost: -1 })
    return highCost
  },
  getVoucher: async (args) => {
    const voucher = await Voucher.findById(args.id)
    if (!voucher) {
      throw new Error('Not found voucher id')
    }
    return voucher
  },
  updateVoucher: async (args) => {
    const { title, description, cost, variant, img } = args.updateVoucher
    const voucher = await Voucher.findByIdAndUpdate(
      { _id: args.id },
      { title, description, cost, variant, img }
    )
    await voucher.save()

    return voucher
  },
  deleteVoucher: async (args) => {
    const voucher = Voucher.findByIdAndDelete(args.id)
    const user = await User.findById(args.userId)
    const filter = user.vouchers.filter((item) => String(item) !== args.id)
    user.vouchers = filter
    await user.save()
    return voucher
  },
  createVoucher: async (args) => {
    try {
      const voucher = new Voucher({
        title: args.inputVoucher.title,
        description: args.inputVoucher.description,
        cost: +args.inputVoucher.cost,
        img: args.inputVoucher.img,
        variant: args.inputVoucher.variant,
        quantity: args.inputVoucher.quantity,
        attachment: args.inputVoucher.attachment,
      })
      const result = await voucher.save()

      const user = await User.findById(args.inputVoucher.attachment)
      await user.vouchers.push(voucher)
      await user.save()

      return result
    } catch (error) {
      throw error
    }
  },
}
