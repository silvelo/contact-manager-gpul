import { Component } from "@nestjs/common";
import { IUser } from "./users.model";
import { RemoveException } from "../common/exceptions/remove.exception";

@Component()
export class UsersService {
    private users: IUser[] = [{ id: 1, name: 'Arturo', number: '555-5555' }, { id: 2, name: 'Pepe', number: '5555-6666' }];
    private positionId: number = 2;

    retreiveAll(): IUser[] {
        return this.users;
    }

    retrieveById(userId: number) {
        return this.users.find(user => user.id === userId);
    }

    createUser(newUser: IUser) {
        this.positionId++;
        this.users.push({ ...newUser, id: this.positionId });
    }

    removeById(userId: number) {
        let index = this.users.findIndex(user => user.id == userId);
        if (index === -1) throw new RemoveException(userId)

        this.users.splice(index, 1);
    }


}