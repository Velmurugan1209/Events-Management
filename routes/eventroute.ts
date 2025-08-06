import { Router } from "express";
import { eventattendeeList, eventCreate, eventDestroy, eventUpdate } from "../controller/eventcontroller";
import { LoginVerifyAdmin ,LoginverifyAdminUser } from "../middleware/eventsmiddleware";
import { IPCreate,IPLogin } from "../controller/admincontroller";


export const router = Router();

//LoginRouter
router.post('/AdminCreate', IPCreate)
router.get('/Login', IPLogin)


//EvenRouter
router.post('/Events',  LoginverifyAdminUser, eventCreate)
router.put('/Events/:id' , LoginVerifyAdmin, eventUpdate)
router.delete('/Events/:id', LoginVerifyAdmin, eventDestroy)
router.get('/Events', LoginVerifyAdmin, eventattendeeList)