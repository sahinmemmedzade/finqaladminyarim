import express from 'express';
import { createContactMessage,getAllContacts,getSingleContact ,deleteContact} from '../controlller/contack.controller.js'; 
import {protectRoutes} from '../midleware/protectRoutes.js'
const router = express.Router();

router.post('/contacts',protectRoutes, createContactMessage);
router.get('/contacts',protectRoutes, getAllContacts);

router.get('/contacts/:id',protectRoutes, getSingleContact);
router.delete('/contacts/:id',protectRoutes, deleteContact);

export default router;
