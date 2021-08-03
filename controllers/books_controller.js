import asyncHandler from 'express-async-handler'
import Book from '../models/book_model.js'
import jsonapiSerializer from 'jsonapi-serializer';
import mongoosePaginate from 'mongoose-paginate-v2';

var JSONAPISerializer = jsonapiSerializer.Serializer;

const fetchBooks = () => asyncHandler(async (req, res) => {
  const per_page = parseInt(req.query.per_page) || 20;
  const page = parseInt(req.query.page) || 0;

  const options = {
    page: page,
    limit: per_page,
  };

  const books = await Book.paginate({}, options);

  const BooksSerializer = new JSONAPISerializer('books', {
    attributes: ['title', 'description', 'authur', 'published_date', 'created_at', 'updated_at', 'properties'],
    meta: {
      count: books.limit,
      total_count: books.totalDocs,
      total_pages: books.totalPages,
      current_page: books.page,
    },
    properties: {
      ref: "id",
      included: true,
      attributes: ['name', 'value']
    },
    topLevelLinks: {
      self: books.page,
      next: books.nextPage,
    },
  });

  const _books = BooksSerializer.serialize(books.docs);;
  res.send(JSON.stringify(_books))
})

export { fetchBooks }