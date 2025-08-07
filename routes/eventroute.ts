import { Router } from "express";
import { eventattendeeList, eventConfirmation, eventCreate, eventDestroy, eventUpdate } from "../controller/eventcontroller";
import { LoginVerifyAdmin , ConfirmationVerifyByAdmin, confirmationGmailtoUser } from "../middleware/eventsmiddleware";
import { IPCreate,IPLogin } from "../controller/admincontroller";


export const router = Router();

//LoginRouter
router.post('/AdminCreate', IPCreate)
router.get('/Login', IPLogin)

//Conformation For When User Created Events
router.post('/Confirmation',confirmationGmailtoUser,eventConfirmation)


//EvenRouter
router.post('/Events',  LoginVerifyAdmin, eventCreate)
router.put('/Events/:id' , LoginVerifyAdmin, eventUpdate)
router.delete('/Events/:id', LoginVerifyAdmin, eventDestroy)
router.get('/Events', LoginVerifyAdmin, eventattendeeList)


//EventCreateBy User
router.post('/EventsCreateUser',ConfirmationVerifyByAdmin, eventCreate)