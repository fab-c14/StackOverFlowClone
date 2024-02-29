import express from 'express';
import {postAnswer} from '../controllers/Answers.js'

const router = express.Router();

router.patch('/post/:id',postAnswer) // patch is request used to update the data base


export default router;