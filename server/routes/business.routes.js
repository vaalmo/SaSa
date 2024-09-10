import { Router } from 'express';
//import bodyParser from 'body-parser';

import { getAllBusinesses, ola } from '../controllers/business.controllers.js';



const router = Router();

router.get("/businesses", getAllBusinesses)
router.get("/businesses/ola", ola)

export default router;