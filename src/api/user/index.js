import { Router } from 'express'

import { AddData,GetData,DeleteData,upData

 } 
 from './controller'

const router = new Router()

router.post('/AddData', AddData)
router.get('/Getdata', GetData)
router.put('/upData',upData)
router.delete('/AddData/:id',DeleteData)
export default router
