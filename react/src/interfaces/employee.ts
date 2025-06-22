import { User } from "./user";
import { Restaurant } from "./restaurant";

export interface Employee extends User {
  restaurant: Restaurant | null; // null se restaurant_id for nullable
}