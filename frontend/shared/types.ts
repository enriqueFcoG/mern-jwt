export interface LoginInput {
    email: string;
    password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string | Date;
}


