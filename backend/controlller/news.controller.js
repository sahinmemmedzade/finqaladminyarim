import News from '../model/news.model.js';

// Yeni xəbər yaratma
export const createNews = async (req, res) => {
    try {
        const { title, description, categoryId } = req.body;
        const image = req.file.path;

        if (!title || !description || !categoryId || !image) {
            return res.status(400).send({ error: 'Zəhmət olmasa başlıq, təsvir, kateqoriya ID və şəkil təqdim edin' });
        }

        const newNews = new News({ title, description, categoryId, image });
        await newNews.save();

        res.status(201).send(newNews);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Bütün xəbərləri gətir
export const getAllNews = async (req, res) => {
    try {
        const news = await News.find().populate('reviews'); // 'reviews' sahəsini cəmlə
        res.status(200).send(news);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Tək bir xəbəri gətir
export const getSingleNews = async (req, res) => {
    const { id } = req.params;

    try {
        const news = await News.findById(id).populate('reviews'); // 'reviews' sahəsini cəmlə
        if (!news) {
            return res.status(404).send({ error: 'Xəbər tapılmadı' });
        }
        res.status(200).send(news);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Xəbəri yenilə
export const updateNews = async (req, res) => {
    const { id } = req.params;
    const { title, description, category } = req.body; // categoryId olaraq dəyişdirin
    const image = req.file ? req.file.path : null; // Şəkil yalnız varsa yenilə

    try {
        let news = await News.findById(id);
        if (!news) {
            return res.status(404).send({ error: 'Xəbər tapılmadı' });
        }

        // Dəyərlər yalnız varsa yenilənəcək
        if (title) {
            news.title = title;
        }

        if (description) {
            news.description = description;
        }

        if (category) {
            news.category = category; // Sahənin adını category olaraq saxlayın
        }

        if (image) {
            news.image = image;
        }

        // Yadda saxla
        news = await news.save();
        res.status(200).send(news);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Xəbəri sil
export const deleteNews = async (req, res) => {
    const { id } = req.params;

    try {
        const news = await News.findByIdAndDelete(id);
        if (!news) {
            return res.status(404).send({ error: 'Xəbər tapılmadı' });
        }
        res.status(200).send({ message: 'Xəbər uğurla silindi' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
