import{ Router} from 'express'

import {Addlogin,} from './logincontroller'

const router = new Router()

router.post('/',Addlogin)

export default router