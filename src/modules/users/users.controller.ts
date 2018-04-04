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
    async createUser(@Body(new ValidationPipe()) newUser: CreateUserDto): Promise<IUser> {
        return await this.usersService.createUser(newUser);
    }

    @ApiResponse({ status: 200, type: User, isArray: true })
    @Get()
    async retrieveAll(): Promise<IUser[]> {
        return await this.usersService.retreiveAll()
    }

    @ApiResponse({ status: 200 })
    @ApiResponse({ status: 404, description: 'Not Found', type: User })
    @Get(':id')
    async retreiveById(@Param('id') id: string): Promise<IUser> {
        let user = await this.usersService.retrieveById(id);
        if (!user) throw new NotFoundException(`The user ${id} doesn't exist`);
        return user;
    }

    @ApiResponse({ status: 204, description: 'The record has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Not Found' })
    @Delete(':id')
    async removeById(@Param('id') id: string) {
        await this.usersService.removeById(id);

    }

}