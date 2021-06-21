import { Request } from 'express';
import { User } from '../users/interface/users.interface';

export interface ExpressRequest extends Request {
    user?: User
}