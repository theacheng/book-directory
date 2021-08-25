import asyncHandler from 'express-async-handler'
import Book from '../models/book_model.js'
import jsonapiSerializer from 'jsonapi-serializer';
import mongoosePaginate from 'mongoose-paginate-v2';

var JSONAPISerializer = jsonapiSerializer.Serializer;
const bookAttributes = ['title', 'description', 'authur', 'published_date', 'created_at', 'updated_at', 'properties'];
const relationshipAttributes = (_included) => {
  const includes = _included.split(',');
  const map = {
    properties: {
      ref: "id",
      included: true,
      attributes: ['name', 'value']
    },
    authur: {
      ref: "id",
      included: true,
      attributes: ['first_name', 'last_name']
    },
  }
  const relationships = Object.keys(map).reduce((object, key) => {
    if (!includes.includes(key)) {
      object[key] = map[key]
    }
    return object
  }, {})
  return relationships
}

const fetchBooks = () => asyncHandler(async (req, res) => {
  const per_page = parseInt(req.query.per_page) || 20
  const page = parseInt(req.query.page) || 0
  const included = req.query.included

  const options = {
    page: page,
    limit: per_page,
    populate: "authur",
  };

  const books = await Book.paginate({}, options)
  const BooksSerializer = new JSONAPISerializer('books', {
    attributes: bookAttributes,
    pagination: true,
    meta: {
      count: books.limit,
      total_count: books.totalDocs,
      total_pages: books.totalPages,
      current_page: books.page,
    },
    topLevelLinks: {
      self: books.page,
      next: books.nextPage,
    },
    ...relationshipAttributes
  });

  const _books = BooksSerializer.serialize(books.docs)
  res.send(JSON.stringify(_books))
})

const fetchBookDetail = asyncHandler(async (req, res) => {
  const id = req.params.id

  if (!id) {
    res.send({ message: 'id not found' })
    return
  }

  try {
    const book = await Book.findById(id).populate('authur')
    const BooksSerializer = new JSONAPISerializer('book', {
      attributes: bookAttributes,
      ...relationshipAttributes
    });
    const _book = BooksSerializer.serialize(book);;
    res.send(JSON.stringify(_book))
  } catch (error) {
    res.send({ message: "id not found" })
  }
})

export { fetchBooks, fetchBookDetail }