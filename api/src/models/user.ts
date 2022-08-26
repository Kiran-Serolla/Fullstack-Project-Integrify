import mongoose, { Document } from 'mongoose'
import { orderSchema, OrderDocument } from './order'

export type UserDocument = Document & {
  name: string
  email: string
  password: string
  orders: string[] | OrderDocument[]
}
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
})
export default mongoose.model<UserDocument>('User', userSchema)
