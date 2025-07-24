import { Role } from "../generated/prisma"

interface EventDto{
   id? : number ,
   title : string ,
   description? : string,
   data : Date ,
   venueid : number ,
   createdAt? : Date,
   updatedAt? : Date ,
}

enum role{
    Admin ,
    User ,
}

interface IPDto {

    name : string,
    password : string

}
interface IPRegister{
    name: string ,
    password : string,
    role : string
}

interface AttendeeDto {
    id : number ,
    eventsid? : number,
    name : string,
    email : string ,
    registerdAt? : Date ,
}

interface VenueDto{
    id? : number,
    venuename : string,
    address: string,
    capacity : number 
}

interface EventAttendeeDto {
    id? : number ,
    eventid : number,
    attendeeid : number ,
    registeredAt? : Date 
}


export {EventAttendeeDto,EventDto,VenueDto,AttendeeDto , role,IPDto, IPRegister}