import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
import Authur from './authur_model.js'

const bookSchema = mongoose.Schema(
  {
    type: { type: String, default: 'book' },
    title: String,
    description: String,
    properties: [{
      type: { type: String, default: 'property' },
      name: String,
      value: String,
    }],
    authur: { type: mongoose.Types.ObjectId, ref: Authur },
  },
  {
    timestamps: {
      publishedDate: 'published_date',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

bookSchema.plugin(normalize);

const Book = mongoose.model('Book', bookSchema);
export default Book