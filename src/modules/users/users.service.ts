import { Component } from "@nestjs/common";

@Component()
export class UsersService {
    private users = [{ name: 'Arturo' }, { name: 'Pepe' }];

    retreiveAll() {
        return this.users;
    }
}