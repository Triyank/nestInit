import { Controller, Get, Post, HttpCode, Body, Patch } from "@nestjs/common";
import { User } from "./interface/users.interface";
import { UsersService } from "./users.service";
import { LoginUserDto } from "./dto/user.dto";

@Controller('user')

export class UsersController{
    constructor(private usersService: UsersService) {}

    @Get()
    @HttpCode(200)
    async findAll(): Promise<User[]>{
        return this.usersService.findAll();
    }

    @Post()
    @HttpCode(201)
    async create(@Body() user: User): Promise<string> {        
        return this.usersService.create(user);
    }

    @Patch()
    @HttpCode(204)
    async update(@Body() user: User): Promise<any>{
        return this.usersService.update(user);
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginUserDto: LoginUserDto): Promise<any>{        
        return this.usersService.login(loginUserDto);
    }
}