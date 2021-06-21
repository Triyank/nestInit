require("dotenv").config();
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
const { SECRET_KEY } = process.env;

@Injectable()
export class JsonwebToken {
    createToken(payload: any): string {
        return jwt.sign(payload, SECRET_KEY);
    }

    parseToken(token: string): any {
        return jwt.verify(token, SECRET_KEY);
    }
}