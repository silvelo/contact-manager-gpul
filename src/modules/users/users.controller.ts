import { Controller, Get, Delete, Post, Param, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { IUser } from "./users.model";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    createUser(@Body() newUser: IUser) {
        return this.usersService.createUser(newUser);
    }

    @Get()
    retrieveAll(): IUser[] {
        return this.usersService.retreiveAll()
    }


    @Get(':id')
    retreiveById(@Param('id') id: string): IUser {
        return this.usersService.retrieveById(+id);
    }

    @Delete(':id')
    removeById(@Param('id') id: string) {
        return this.usersService.removeById(+id);
    }

}