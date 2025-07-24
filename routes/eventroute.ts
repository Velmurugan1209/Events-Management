import { Router } from "express";
import { eventattendeeList, eventCreate, eventDestroy, eventUpdate } from "../controller/eventcontroller";
import { LoginVerifyAdmin ,LoginverifyUser } from "../middleware/eventsmiddleware";
import { IPCreate,IPLogin } from "../controller/admincontroller";


export const router = Router();

router.post('/AdminCreate' , IPCreate)
router.get('/Login' , IPLogin)


router.post('/Events',  LoginVerifyAdmin ,eventCreate)
router.put('/Events/:id' ,LoginVerifyAdmin, eventUpdate)
router.delete('/Events/:id',LoginVerifyAdmin , eventDestroy)
router.get('/Events/:eventsid',LoginVerifyAdmin, eventattendeeList)