import { UUID } from "crypto";

export interface Review {
  id: UUID;
  author: string,
  classification: number;
  comment: string;
  date: Date
  // Outros campos, se retornados pelo backend
}