import { Response,Request, NextFunction } from "express";
import JWT from 'jsonwebtoken'
import { AttendeeSchema, EventConfirmationSchema, EventSchema, VenueSchema } from "../validator/eventsvalidator";
import { AdminConformationDto, AttendeeDto, EventCreatedByUserDto, EventDto, IPRegister, VenueDto } from "../dto/eventsdto";
import { PrismaClient } from "../generated/prisma";
import {parse,writeToPath} from 'fast-csv' ;
import path from "path";
import { JWTSecureKey , HashPasswordSecureKey } from "../service/eventservice";
import nodemailer from 'nodemailer'
import { error } from "console";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";
const prisma = new PrismaClient();
 
interface JWTpayload{
    Role: string ,
}
interface JWTpayloadConfirmation{
    status : string
}

export const LoginVerifyAdmin = async(req:Request , res:Response ,next : NextFunction)=>{
    try{
        
        const requestLoginToken   = req.headers.authorization
        
        const requestUserCreatedEventDetails  = EventSchema.parse(req.body) ;
        console.log(requestUserCreatedEventDetails);
        
        if(!requestLoginToken){
            res.status(404).json("No Headed Found")
        }
        else{const TokenRole : string | undefined  =  requestLoginToken?.split(' ')[1]
       
        
        if(!TokenRole){
            res.status(404).json('No Token found You Need To Login Must')
        }
        const RoleVerify = JWT.verify(TokenRole , JWTSecureKey ) as JWTpayload
        console.log(RoleVerify.Role);
        
        
         if (RoleVerify.Role === "Admin"){
            next();
        }
        else if (RoleVerify.Role === "User"){
            const {title,description,date,venueid,CreaterEmail} = requestUserCreatedEventDetails as unknown as EventCreatedByUserDto
            const  EventCreatedDetails  :any = {title,description,date,venueid} 

            const connect = nodemailer.createTransport({
                service : "gmail",
                auth :{
                    user : "velupvm1209@gmail.com",
                    pass : "bjwe zujv llwy izeq"
                }
            })
            const send = await connect.sendMail({
                to: "velupvm1209@gmail.com",
                subject: "Confirmation of User Event Create",
                text: JSON.stringify(EventCreatedDetails)
            })
            if(send){
            res.status(200).json({message:"Sended Event Detail to Admin. should be Waiting for Confimation..."});
         } } }
    }
    catch(err:any){
        res.status(500).json({error:err.message})
    }
}

export const confirmationGmailtoUser = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const requestGmailConfirmationdetails = EventConfirmationSchema.parse(req.body) as AdminConformationDto
        const {status,AcceptedBy} = requestGmailConfirmationdetails as AdminConformationDto
        
        if(status === "Accept"){
                   next();
                  } 
        else if(status === "Reject"){
               res.status(401).json({message:"Your Request Has Reject Betterluck Nexttime"})
       }
     }
    catch(err:any){
    res.status(500).json({message:err.message})
      }
 }

export const ConfirmationVerifyByAdmin = async(req:Request,res:Response,next:NextFunction)=>{
    try{
         const requestLoginToken   = req.headers.authorization ;

        if(!requestLoginToken){
            res.status(404).json("No Headed Found")
        }
        else{const TokenRole : string | undefined  =  requestLoginToken?.split(' ')[1]

        if(!TokenRole){
            res.status(404).json('No Token found')
        }
        const StatusVerify = JWT.verify(TokenRole , JWTSecureKey) as JWTpayloadConfirmation
        console.log(StatusVerify);
        
         if (StatusVerify.status === "Accept" || "NewUsers"){
                    next();
        }
        else{
            throw new Error("Your Rejected By Admin");     
        }
        
    }}
    catch(err:any){
        res.status(500).json({message:err.message})
    }
    }

export const RegisterAttendeeVerify = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const requestAttendeeVerify  = AttendeeSchema.parse(req.body)
        const {id,name,email,registerdAt} = requestAttendeeVerify  as AttendeeDto ;
        const responseIPverify : any = await prisma.iP.findUnique({where:{name:name}})
        if(!responseIPverify){
            res.status(404).json({message:"You Need To Account Registerd First"})
        }
        const responseAttendeeVerify : any[] = await prisma.attendee.findMany({where : {email:email},})
        if(responseAttendeeVerify.length === 0){
            next();           
        }
       else { res.status(500).json("Enter Another Email Your Already Registered");}
        
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

export const RegisterVenueVerify = async (req:Request , res:Response,next:NextFunction)=>{
    try{
        const requestVenueVerify = VenueSchema.parse(req.body)
        const {id,venuename,capacity,address} = requestVenueVerify as VenueDto
        const responseVenueVerify = await prisma.venue.findUnique({where:{capacity:capacity , id:id}})
        if(responseVenueVerify?.capacity === 0){
            throw new Error("Event Full");     
        }
        next();
    }
    catch(err:any){
        res.status(500).json(err.message)
    }
}

export const csvExport = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const responseAttendeeListCsv = await prisma.attendee.findMany()
        const csvfile = path.join(`./exports/attendeelist ${Date.now()}.csv`)
        const rawdata = JSON.parse(JSON.stringify(responseAttendeeListCsv))
        if(rawdata){
        writeToPath(csvfile,rawdata ,{headers:true})
        .on('finish', ()=>{
            next();
        })
        .on('error' , (err:any)=>{
            throw new Error(err.message);  
        })
    }
    else{
        throw new Error("No Csv Raw Data Found");
        
    }}
    catch(err:any){
        throw new Error(err.message);
        
    }
}