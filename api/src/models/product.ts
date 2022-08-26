import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  price: number
}

export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
export default mongoose.model<ProductDocument>('Product', productSchema)
