import { EventAttendeeDto, EventDto, IPDto, IPRegister } from "../dto/eventsdto";
import { PrismaClient, Role } from "../generated/prisma";
import cryptojs from 'crypto-js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const prisma = new PrismaClient();
const secureKey : any  = process.env.secureKey


export class Eventservice {


    async getIPCreate(requestAdminCreate : IPRegister):Promise<IPRegister>{
        try{
            const {name,password,role} = requestAdminCreate as IPRegister

            const hashpassword : string  = cryptojs.AES.encrypt(password, secureKey).toString()
            
              const returnAdminCreate = await prisma.iP.create({data:{name:name,password:hashpassword,role:role as Role}})
            
            if(!returnAdminCreate){
                throw new Error("Login Failed");
             }
                return returnAdminCreate ;
                  }
        catch(err:any){
        throw new Error(err.message);
        } }

    async getLogin(requestAdminLogin : any):Promise<any>{
        try{
           const {name,password} = requestAdminLogin as IPDto 
            const returnAdminLogin : any   = await prisma.iP.findUnique({where:{name:name}})
             if(!returnAdminLogin){
                throw new Error("No Admin Found");
                }   
            const decode  =  cryptojs.AES.decrypt( returnAdminLogin?.password! , "12345").toString(cryptojs.enc.Utf8) 
   
          if(decode === password)  {
            const LogintToken = jwt.sign( {Role : returnAdminLogin.role!} , "12345" , {expiresIn:'1hr'})
            return {returnAdminLogin , LogintToken}
          }  
          else{
            throw new Error("Password Is Incorect");
          }                 
        }
        catch(err:any){
            throw new Error(err.any);
              }
    }

    async getEventCreate (requestEventCreate : EventDto):Promise<EventDto>{
        try{
            const {title,description,data,venueid} = requestEventCreate as EventDto
            const returnEventCreate  : any = await prisma.event.create({data:{title,description,data,venueid}})
            if(!returnEventCreate){
                throw new Error("No Event Create");
                }
            return returnEventCreate ;
        }  
        catch(err:any){
            throw new Error(err.message);
            
        }
    }

    async getEventUpdate(requestEventUpdate : EventDto , id : any):Promise<any>{
        try{
            const {title,description,data,venueid} =  requestEventUpdate as EventDto
            const returnEventUpdate  = await prisma.event.updateMany({
                where: { id: id },
                data: {title,description,venueid,data}
            })
            if(!returnEventUpdate){
                throw new Error("No Event Updated");
            }
            return returnEventUpdate ;
             }
        catch(err:any){
            throw new Error(err.message);   
        }
    }

    async getEventDestroy(requestidEventDestroy : number){
        try{
             const id = requestidEventDestroy 
             const returnEventDestroy = await prisma.event.delete({where:{id:id}})
             if (!returnEventDestroy){
                throw new Error("No Event Destroy");
             }
             return returnEventDestroy ;

        }
        catch(err:any){
            throw new Error(err.message);     
        }
    }

    async getEventAttendeeList (requestEventAttendeeList:number):Promise<any>{
        try{
            const id = requestEventAttendeeList ;
            const returnEventAttendeeList = await prisma.event.findMany()  
            if(!returnEventAttendeeList){
                throw new Error("No Attendee Found");   
            }
            return returnEventAttendeeList ;
        }
        catch(err:any){
            throw new Error(err.message);
        }
    }     
}