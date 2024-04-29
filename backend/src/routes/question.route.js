import Router from 'express'
import addQuestion from '../controllers/question.controller'

const router = Router()

router.route('/addQuestion').post(addQuestion)

export default router