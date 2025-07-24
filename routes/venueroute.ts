import { Router } from "express";
import { venueCreate, venueUpdate } from "../controller/venuecontroller";


export const VenueRoute = Router();
 

VenueRoute.post('/Create' , venueCreate)
VenueRoute.put('/Update' , venueUpdate)