import {   IPRegisterschema, IPSchema } from "../validator/eventsvalidator";
import { Eventservice } from "../service/eventservice";
import { Response , Request } from "express";
import { IPDto, IPRegister } from "../dto/eventsdto";

const eventservice = new Eventservice();

export const IPCreate  = async(req:Request , res:Response)=>{
    try{
        const requestAdminCreate : IPRegister = IPRegisterschema.parse(req.body)
        const responseAdminCreate = await eventservice.getIPCreate(requestAdminCreate)
        res.status(200).json("Admin Has Created Save Your Id And Password Must")  
    }
    catch(err:any){
        res.status(500).json(err.message);       
    }
}

export const IPLogin = async(req:Request , res:Response)=>{
    try{     
        const requestAdminLogin = IPSchema.parse(req.body)
        const responseAdminLogin  = await eventservice.getLogin(requestAdminLogin)
        res.status(201).json(responseAdminLogin.LogintToken)      
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

