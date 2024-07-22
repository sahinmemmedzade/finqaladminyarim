import Category from '../model/category.model.js'; 
import User from '../model/auth.model.js';
import News from '../model/news.model.js'
export const createCategory = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await User.findById(userId);

        // if (!user || !user.isAdmin) {
        //     return res.status(403).send({ error: 'You do not have permission to add a category' });
        // }

        const { name } = req.body;

        if (!name) {
            return res.status(400).send({ error: 'Please provide a category name' });
        }

        const newCategory = new Category({ name });

        await newCategory.save();

        res.status(201).send(newCategory);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await User.findById(userId);

     

        const { id } = req.params;

        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).send({ error: 'Category not found' });
        }

        res.status(200).send({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
export const getNewsByCategory = async (req, res) => {
    const { categoryId } = req.params;

    try {
        console.log('Received categoryId:', categoryId);

        const news = await News.find({ categoryId: categoryId }).populate('reviews');

        console.log('Found news:', news);

        if (news.length === 0) {
            return res.status(404).send({ error: 'Bu kateqoriyaya aid xəbər tapılmadı' });
        }

        res.status(200).send(news);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
