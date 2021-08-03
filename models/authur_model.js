import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const authurSchema = mongoose.Schema(
  {
    type: { type: String, default: 'authur' },
    first_name: String,
    last_name: String,
  },
)

authurSchema.plugin(normalize);
authurSchema.plugin(mongoosePaginate);

const Authur = mongoose.model('Authur', authurSchema);
export default Authur