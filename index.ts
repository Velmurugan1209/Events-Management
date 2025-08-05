import express from 'express';
import {AttendeeRoute} from './routes/attendeeroute';
import {EventAttendeeRoute} from './routes/eventattendeeroute';
import {router} from './routes/eventroute';
import { VenueRoute } from './routes/venueroute';

const app = express();

app.use(express.json())

app.use('/' , router)

app.use('/Events' , AttendeeRoute)

app.use('/Events', EventAttendeeRoute)

app.use('/Events' , VenueRoute)

app.listen(3000 , ()=>{
    console.log("Server Is Runniung....");    
})
