import { Router } from "express";
import { csvExport, RegisterAttendeeVerify, RegisterVenueVerify } from "../middleware/eventsmiddleware";
import { AttendeeCreate, AttendeeList } from "../controller/attendeecontroller";
import { LoginverifyAdminUser } from "../middleware/eventsmiddleware";

export const AttendeeRoute = Router();

AttendeeRoute.post('/Register',LoginverifyAdminUser,RegisterAttendeeVerify,AttendeeCreate)
AttendeeRoute.get("/CSV" , csvExport, AttendeeList)




