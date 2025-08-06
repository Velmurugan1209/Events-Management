import { Response,Request, NextFunction } from "express";
import JWT from 'jsonwebtoken'
import { AttendeeSchema, VenueSchema } from "../validator/eventsvalidator";
import { AttendeeDto, VenueDto } from "../dto/eventsdto";
import { PrismaClient } from "../generated/prisma";
import {parse,writeToPath} from 'fast-csv' ;
import path from "path";
import { JWTSecureKey , HashPasswordSecureKey } from "../service/eventservice";

const prisma = new PrismaClient();
 
console.log();


interface JWTpayload{
    Role: string ,

}

export const LoginVerifyAdmin = async(req:Request , res:Response ,next : NextFunction)=>{
    try{
        
        const requestLoginToken   = req.headers.authorization

        if(!requestLoginToken){
            res.status(404).json("No Headed Found")
        }
        else{const TokenRole : string | undefined  =  requestLoginToken?.split(' ')[1]
        
        if(!TokenRole){
            res.status(404).json('No Token found')
        }
        const RoleVerify = JWT.verify(TokenRole , JWTSecureKey ) as JWTpayload
        
         if (RoleVerify.Role === "Admin"){
            next();
        }
        else{res.status(404).json("Only Allowed Admins"); }
    }}
    catch(err:any){
        res.status(500).json("Login Eror")
    }
}

export const LoginverifyAdminUser = async(req:Request,res:Response,next:NextFunction)=>{
    try{
         const requestLoginToken   = req.headers.authorization

        if(!requestLoginToken){
            res.status(404).json("No Headed Found")
        }
        else{const TokenRole : string | undefined  =  requestLoginToken?.split(' ')[1]

        if(!TokenRole){
            res.status(404).json('No Token found')
        }
        const RoleVerify = JWT.verify(TokenRole , JWTSecureKey)

         if (RoleVerify === "User" || "Admin"){
                    next();
        }
        else{res.status(404).json("No Allowed");
        }
    }}
    catch(err:any){
        res.status(500).json("Login Eror")
    }
    }


export const RegisterAttendeeVerify = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const requestAttendeeVerify  = AttendeeSchema.parse(req.body)
        const {id,name,email,registerdAt} = requestAttendeeVerify  as AttendeeDto ;
        const responseAttendeeVerify : any[] = await prisma.attendee.findMany({where : {email:email},})
        if(responseAttendeeVerify.length === 0){
            next();           
        }
       else{ throw new Error("Your Already Registerd.  => Enter Another Email");}
        
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