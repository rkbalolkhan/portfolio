import { Router } from 'express'
import { sendContactEmail } from '../controllers/contactController.js'
import { validateContactForm } from '../middleware/validation.js'

const router = Router()

router.post('/', validateContactForm, sendContactEmail)

export default router
