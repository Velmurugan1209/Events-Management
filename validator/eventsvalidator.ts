import { z} from 'zod';

export const IPSchema = z.object({
    name : z.string().nonempty(),
    password : z.string().nonempty(), 
})

export const IPRegisterschema = z.object({
   name : z.string().nonempty(),
    password : z.string().nonempty(),
    role : z.string()
})

export const EventSchema = z.object({
    title :z.string().nonempty(),
    description : z.string().optional(),
    date:  z.preprocess((val) => {
  if (typeof val === 'string') {
    if (val === "20-08-2025") {
      const [day, month, year] = val.split("-");
      const formattedDate = new Date(`${year}-${month}-${day}`);
      if (!isNaN(formattedDate.getTime())) {
        return formattedDate;
      }
    }
  }
  throw new Error("Only '20-08-2025' is accepted in DD-MM-YYYY format");
}, z.date()),
     
    //  data : z.date().minDate()

    venueid : z.number().nonnegative(),  
    // CreaterEmail : z.string().optional  ()
})

export const AttendeeSchema = z.object({
    id : z.number(),
    eventsid : z.number().optional(),
    name : z.string().nonempty(),
    email : z.string().email(),

})

export const VenueSchema = z.object({
    id : z.number().optional(),
    venuename : z.string().nonempty(),
    address : z.string().nonempty(),
    capacity : z.number().nonnegative()
})

export const EventAttendeeSchema = z.object({
    eventid : z.number().nonnegative(),
    attendeeid : z.number().nonnegative()
})

export const EventConfirmationSchema = z.object({
  status : z.string(),
  AcceptedBy : z.string() 
}) 


