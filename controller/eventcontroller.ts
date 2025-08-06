import { EventSchema } from "../validator/eventsvalidator";
import { Eventservice } from "../service/eventservice";
import { Response,Request } from "express";



const eventservice = new Eventservice()


export const eventCreate = async(req:Request , res:Response)=>{
    try{
        const requestEventCreate = EventSchema.parse(req.body) 
        const responseEventCreate= await eventservice.getEventCreate(requestEventCreate)
        res.status(200).json({message:`Event Has Created. If you need Invite Other Friends Share This Token : ${responseEventCreate.NewUserToken}`})
        
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

export const eventUpdate = async(req:Request,res:Response)=>{
    try{
        const id : number = Number(req.params.id) 
        const requestEventUpdate  = EventSchema.parse(req.body)
        const responseEventUpdate = await eventservice.getEventUpdate(requestEventUpdate , id)
        console.log(responseEventUpdate);
        
        res.status(200).json({message: "Update Sucessfull" })

    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

export const eventDestroy = async(req:Request,res:Response)=>{
    try{
        const requestidEventDestroy = Number(req.params.id)
        const responseEventDestroy = await eventservice.getEventDestroy(requestidEventDestroy)
        res.status(200).json("Event Has Deleted")
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

export const eventattendeeList = async(req:Request,res:Response)=>{
    try{
        const requesteventattendeeList = Number(req.params.eventsid)
        const responseeventattendeeList : any[] = await eventservice.getEventAttendeeList(requesteventattendeeList)
        res.status(200).json(responseeventattendeeList);
    }
    catch(err:any){
        throw new Error(err.message);
        
    }
}





