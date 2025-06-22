import { Booking } from "./booking";
import { Review } from "./review";
import { User } from "./user";

export interface Client extends User {
  bookings: Booking[];
  reviews: Review[];
}