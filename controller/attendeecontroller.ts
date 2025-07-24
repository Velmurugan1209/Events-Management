import { AttendeeDto } from "../dto/eventsdto";
import { AttendeeSchema } from "../utils/eventsvalidator";
import { Response,Request } from "express";
import { Attendee } from "../service/attendeeservice";
import {parse,writeToPath} from 'fast-csv' ;
import fs from 'fs'
import path from "path";
const attendeeservice = new Attendee ();


export const AttendeeCreate = async(req:Request,res:Response)=>{
    try{
        const requestAttendeeCreate= AttendeeSchema.parse(req.body)
        const responseAttendeeCreate = await attendeeservice.attendeeCreate(requestAttendeeCreate)
        res.status(200).json("Event Registerd Successfull")
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

export const AttendeeList = async(req:Request,res:Response)=>{
    try{
        const responseAttendeeList : AttendeeDto[] = await attendeeservice.getattendeeList()
        res.status(200).json({message:"Csv File and Get All List 'Check Your Dirctory" , data:[responseAttendeeList] });
        

        
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}
