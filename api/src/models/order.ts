import mongoose, { Document } from 'mongoose'

export type OrderDocument = Document & {
  date: Date
}
export const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
})
const orderModel = mongoose.model<OrderDocument>('Order', orderSchema)
export default orderModel
