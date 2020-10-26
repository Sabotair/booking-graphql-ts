const Apartment = require('../../models/Apartment')
const User = require('../../models/User')

module.exports = {
  apartments: () => {
    return Apartment.find({}).populate('attachment').populate('ordered')
  },
  getApartment: (args) => {
    return Apartment.findById(args.id)
  },
  lowCostApartment: async () => {
    const lowCost = await Apartment.find({}).sort({ cost: 1 })
    return lowCost
  },
  higherCostApartment: async () => {
    const highCost = await Apartment.find({}).sort({ cost: -1 })
    return highCost
  },
  lowInterval: async () => {
    const lowInterval = await Apartment.find({}).sort({ interval: 1 })
    return lowInterval
  },
  higherInterval: async () => {
    const hightInterval = await Apartment.find({}).sort({ interval: -1 })
    return hightInterval
  },
  updateApartment: async (args) => {
    const { title, description, cost, rooms, img } = args.updateApartment
    const apartment = await Apartment.findByIdAndUpdate(
      { _id: args.id },
      { title, description, cost, rooms, img }
    )
    await apartment.save()

    return apartment
  },
  deleteApartment: async (args) => {
    const apartment = await Apartment.findByIdAndDelete(args.id)
    const user = await User.findById(args.userId)
    const filter = user.apartments.filter((item) => String(item) !== args.id)
    user.apartments = filter
    await user.save()
    return apartment
  },
  createApartments: async (args) => {
    try {
      const apartment = new Apartment({
        title: args.inputApartment.title,
        description: args.inputApartment.description,
        cost: +args.inputApartment.cost,
        img: args.inputApartment.img,
        rooms: +args.inputApartment.rooms,
        interval: args.inputApartment.interval,
        attachment: args.inputApartment.attachment,
      })
      const result = await apartment.save()

      const user = await User.findById(args.inputApartment.attachment)
      await user.apartments.push(apartment)
      await user.save()

      return result
    } catch (error) {
      throw error
    }
  },
}
