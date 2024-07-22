import mongoose from 'mongoose';
import Review from './reviews.model.js';

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categoryId: { // Sahənin adını categoryId olaraq dəyişdirin
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    
});

const News = mongoose.model('News', newsSchema);

export default News;
