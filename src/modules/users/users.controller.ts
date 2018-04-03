import { Controller, Get, Delete, Post, Param, Body, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { IUser, User } from "./users.model";
import { RemoveUserException } from "../common/exceptions/remove.exception";
import { ValidationPipe } from "../common/pipes/validation.pipe";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";

@ApiUseTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: User })
    @Post()
    createUser(@Body(new ValidationPipe()) newUser: CreateUserDto) {
        return this.usersService.createUser(newUser);
    }

    @ApiResponse({ status: 200, type: User, isArray: true })
    @Get()
    retrieveAll(): IUser[] {
        return this.usersService.retreiveAll()
    }

    @ApiResponse({ status: 200 })
    @ApiResponse({ status: 404, description: 'Not Found', type: User })
    @Get(':id')
    retreiveById(@Param('id') id: string): IUser {
        let user = this.usersService.retrieveById(+id);
        if (!user) throw new NotFoundException(`The user ${id} doesn't exist`);
        return user;
    }

    @ApiResponse({ status: 204, description: 'The record has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Not Found' })
    @Delete(':id')
    removeById(@Param('id') id: string) {
        let removeStatus = this.usersService.removeById(+id);
        if (removeStatus) throw new RemoveUserException(id);
    }

}