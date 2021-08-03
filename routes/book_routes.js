import express from 'express';
import {
  fetchBooks,
} from '../controllers/books_controller.js'

const router = express.Router();

router.route('/').get(fetchBooks())

export default router;