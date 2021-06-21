import { Injectable, Inject } from "@nestjs/common";
import { User, LoginUser } from "./interface/users.interface";
import { Repository } from "typeorm";
import { Users } from "src/model/user.entity";
import { Bcrypt } from "../commonUtils/bcrypt";
import { JsonwebToken } from "../commonUtils/jsonwebtoken";

@Injectable()
    export class UsersService {
        private readonly users: User[] = [];
        constructor( 
            @Inject('USERS_REPOSITORY')
            private usersRepository: Repository<Users>,
            private jsonwebtoken: JsonwebToken,
            private bcrypt: Bcrypt
        ){}

        async create(user: User): Promise<any>{
            user.password = await this.bcrypt.hash(user.password)
            const _user = this.usersRepository.create(user);
            this.usersRepository.save(_user);
              return 'user created'
            }



        async findAll(): Promise<Users[]> {
            return this.usersRepository.find();
          }

        async update(user: User): Promise<any>{
             this.usersRepository.save(user);   
            return 'user updated'
          }


        async login(user: LoginUser): Promise<any>{
            const _user = await this.usersRepository.findOne({where: {username: user.username}});
            
            if(_user){
                const result = await this.bcrypt.compare(user.password,  _user.password);
                if(result) {
                    return {
                        token: this.jsonwebtoken.createToken({id: _user.id, username: _user.username}),
                        message: 'user logged in'
                    }
                } else {
                    return {
                        message: "Either username or password is incorrect."
                    }
                }
            } else {
                return {
                    message: "Either username or password is incorrect."
                }
            }
            
        }

        async findById(id: number): Promise<User> {
            return this.usersRepository.findOne({ where: { id }});
        }
    }