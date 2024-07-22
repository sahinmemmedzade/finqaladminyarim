// views.model.js

import mongoose from 'mongoose';

const newsViewsSchema = new mongoose.Schema({
    newsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News',
        required: true,
    },
    count: {
        type: Number,
        default: 0,
    },
});

const NewsViews = mongoose.model('NewsViews', newsViewsSchema);

export default NewsViews;
