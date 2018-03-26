import { Controller, Get, Delete, Post, Param, Body, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { IUser } from "./users.model";
import { RemoveUserException } from "../common/exceptions/remove.exception";

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
        let user = this.usersService.retrieveById(+id);
        if (!user) throw new NotFoundException(`The user ${id} doesn't exist`);
        return user;
    }

    @Delete(':id')
    removeById(@Param('id') id: string) {
        let removeStatus = this.usersService.removeById(+id);
        if (removeStatus) throw new RemoveUserException(id);
    }

}