const express=require('express')
const controler=require('../controler/empControler')
const router=express.Router()


router.post('/empPost',controler.empPost)

router.delete('/empDelete/:id',controler.empDelete)

router.put('/empUpdate/:id',controler.empUpdate)

router.get('/empGet',controler.empGet)


module.exports=router