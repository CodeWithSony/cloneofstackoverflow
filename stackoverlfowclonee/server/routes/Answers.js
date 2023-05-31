import express from 'express';

import {postAnswer} from '../controllers/Answers.js';

const router = express.Router();
router.patch('/post/:id', postAnswer);
//patch is used to update particular data in the database. we do have answer array in the database now we have to update it will values.


export default router
