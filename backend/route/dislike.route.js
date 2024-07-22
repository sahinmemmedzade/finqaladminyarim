import express from 'express';
import { increaseDislike, decreaseDislike } from '../controlller/dislike.controller.js';
import { authenticateUser } from '../midleware/generateTokenandSetCookie.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const router = express.Router();

// Beğenmeme sayısını artırma
router.post('/:newsId/increase', authenticateUser, async (req, res) => {
    const { newsId } = req.params;
    const token = req.cookies.jwt;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        const isValidObjectId = mongoose.Types.ObjectId.isValid(newsId);
        if (!isValidObjectId) {
            return res.status(400).send({ error: 'Invalid newsId format' });
        }

        await increaseDislike(newsId, res);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Beğenmeme sayısını azaltma
router.post('/:newsId/decrease', authenticateUser, async (req, res) => {
    const { newsId } = req.params;
    const token = req.cookies.jwt;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        const isValidObjectId = mongoose.Types.ObjectId.isValid(newsId);
        if (!isValidObjectId) {
            return res.status(400).send({ error: 'Invalid newsId format' });
        }

        await decreaseDislike(newsId, res);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;
