enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  CLIENT = 'CLIENT',
}



export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  roles: Role[];
}