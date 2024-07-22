import express from 'express';
import { createCategory, getAllCategories,deleteCategory,getNewsByCategory } from '../controlller/category.controller.js';
import { protectRoutes } from '../midleware/protectRoutes.js';

const router = express.Router();

router.post('/categories', protectRoutes, createCategory);

router.get('/categories', getAllCategories);
router.delete('/categories/:id', protectRoutes, deleteCategory);
router.get('/categories/:categoryId/news', getNewsByCategory); // Kategoriyaya görə xəbərləri əldə etmək üçün

export default router;
