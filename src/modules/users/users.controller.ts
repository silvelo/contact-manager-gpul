import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UsersController {

    @Get()
    retrieveAll() {
        return [{ name: 'Arturo' }, { name: 'Pepe' }]
    }
}