import express from 'express';
import {
  fetchBooks,
  fetchBookDetail
} from '../controllers/books_controller.js'

const router = express.Router();

router.route('/').get(fetchBooks())
router.route('/:id').get(fetchBookDetail)

export default router;