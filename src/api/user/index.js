import { Router } from 'express'

import { AddData,GetData,Deletedata

 } 
 from './controller'

const router = new Router()

router.post('/AddData', AddData)
router.get('/Getdata', GetData)

router.delete('/AddData/:id',Deletedata)
export default router
