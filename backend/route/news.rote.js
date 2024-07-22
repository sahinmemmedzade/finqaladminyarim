import express from 'express';
import { createNews, getAllNews, getSingleNews, deleteNews, updateNews } from '../controlller/news.controller.js';

const router = express.Router();

router.post('/news', createNews); // Yeni xəbər yaratmaq üçün
router.get('/news', getAllNews); // Bütün xəbərləri gətirmək üçün
router.get('/news/:id', getSingleNews); // Tək bir xəbəri gətirmək üçün
router.delete('/news/:id', deleteNews); // Xəbəri silmək üçün
router.patch('/news/:id', updateNews); // Xəbəri yeniləmək üçün

export default router;
