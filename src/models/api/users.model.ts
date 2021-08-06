import { Role } from '../roles.enum';

export interface CreateUserPayload {
  role: Role,
  displayName: string,
  email: string,
  password: string,
}