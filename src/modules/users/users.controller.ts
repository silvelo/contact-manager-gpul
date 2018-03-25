import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    retrieveAll() {
        return this.usersService.retreiveAll()
    }
}