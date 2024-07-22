import Review from '../model/reviews.model.js';
import News from '../model/news.model.js';
import User from '../model/auth.model.js';

export const createReview = async (req, res) => {
    try {
        const { comment } = req.body;
        const { newsId } = req.params; // newsId'yi parametr kimi al

        if (!comment || !newsId) {
            return res.status(400).send({ error: 'Zəhmət olmasa bütün lazımi sahələri doldurun' });
        }

        // Authenticated user-in məlumatlarını götür
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).send({ error: 'İstifadəçi tapılmadı' });
        }

        // News obyektini tap
        const news = await News.findById(newsId);
        if (!news) {
            return res.status(404).send({ error: 'Xəbər tapılmadı' });
        }

        // Yeni review yaradın
        const newReview = new Review({
            Username: user.userName,
            email: user.email,
            comment,
            news: news._id // newsId'yi review'ə əlavə edin
        });

        await newReview.save();

        // Review xarici açara əlavə olunsun
        news.reviews.push(newReview._id);
        await news.save();

        res.status(201).send(newReview);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Bütün review-ları gətir
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Review-u yenilə
export const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const {  comment } = req.body;

        const updatedReview = await Review.findByIdAndUpdate(
            id,
            {  comment },
            { new: true, runValidators: true }
        );

        if (!updatedReview) {
            return res.status(404).send({ error: 'Review tapılmadı' });
        }

        res.status(200).send(updatedReview);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Review-u sil
export const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return res.status(404).send({ error: 'Review tapılmadı' });
        }

        res.status(200).send({ message: 'Review uğurla silindi' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
