import { Router} from 'express'
import { addQuestion,getQuestion } from '../controllers/question.controller.js'

const router = Router()
router.route('/addQuestion').post(addQuestion)
router.route('/getQuestion').get(getQuestion)

export default router