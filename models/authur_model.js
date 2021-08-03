import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
import Book from './book_model.js'

const authurSchema = mongoose.Schema(
  {
    type: { type: String, default: 'authur' },
    first_name: String,
    last_name: String,
  },
)

authurSchema.plugin(normalize);

const Authur = mongoose.model('Authur', authurSchema);
export default Authur