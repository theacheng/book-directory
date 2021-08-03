import connectDB from './configs/db_config.js'
import Book from './models/book_model.js'
import Authur from './models/authur_model.js';
import books from './data/books.js'
import authurs from './data/authurs.js'

connectDB();

const createBooks = async () => {
  try {
    await Book.deleteMany()
    await Authur.deleteMany()

    let createAuthurs = await Authur.insertMany(authurs)
    let _books = books.map((book) => {
      let authur = createAuthurs.find((authur) => {
        return book.authur.first_name == authur.first_name;
      });
      return { ...book, authur: authur._id };
    })

    await Book.insertMany(_books);
    console.log('Books imported')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

createBooks();