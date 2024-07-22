// video.router.js

import express from 'express';
import { createVideo, getAllVideos, getVideo, updateVideo, deleteVideo } from '../controlller/video.controller.js';
import { protectRoutes } from '../midleware/protectRoutes.js';

const router = express.Router();

router.post('/', protectRoutes, createVideo);
router.get('/', getAllVideos);
router.get('/:id', getVideo);
router.patch('/:id', protectRoutes, updateVideo);
router.delete('/:id', protectRoutes, deleteVideo);

export default router;
