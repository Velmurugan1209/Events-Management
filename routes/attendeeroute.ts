import { Router } from "express";
import { csvExport, RegisterAttendeeVerify, RegisterVenueVerify } from "../middleware/eventsmiddleware";
import { AttendeeCreate, AttendeeList } from "../controller/attendeecontroller";

export const AttendeeRoute = Router();

AttendeeRoute.post('/Register' ,RegisterAttendeeVerify,AttendeeCreate)
AttendeeRoute.get("/CSV" , csvExport, AttendeeList)