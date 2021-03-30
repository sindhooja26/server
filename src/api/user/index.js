import { Router } from 'express'

import { AddData,GetData,DeleteData

 } 
 from './controller'

const router = new Router()

router.post('/AddData', AddData)
router.get('/GetData', GetData)

router.delete('/AddData/:id',DeleteData)
export default router
