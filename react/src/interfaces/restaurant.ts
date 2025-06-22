import { UUID } from "crypto";
import { Availability } from "./availability";
import { Review } from "./review";

export interface Restaurant {
  id: UUID;
  name: string;
  cuisine?: string;
  rating?: number | string;
  totalReviews?: number;
  location: string;
  phone: string;
  email: string;
  image: string; // geralmente `photos[0]`
  description: string;
  priceRange: string;// vindo de availability
  availableHours: string[];     // idem
  availableTables: any;
  reviews: any;
  availabilitys: Availability[]
  hours: any,
}