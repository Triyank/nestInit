import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { UsersService } from '../users/users.service';
import { JsonwebToken } from '../commonUtils/jsonwebtoken';
import { ExpressRequest as Request } from '../commonUtils/expressRequest'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private usersService: UsersService,
        private jsonwebToken: JsonwebToken    
    ) {}
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('authorization').split(' ')[1];
            const payload = this.jsonwebToken.parseToken(token);
            const user = await this.usersService.findById(payload.id);
            delete user.password
            req.user = user;
            next();
        } catch (error) {
            res.status(HttpStatus.FORBIDDEN).send(`unauthorized`)
        }
    }
}