import { Component } from "@nestjs/common";
import { IUser } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { Model } from 'mongoose';
import { UserSchema } from "./schema/user.schema";
import { InjectModel } from "@nestjs/mongoose";

@Component()
export class UsersService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<IUser>) { }

    async retreiveAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }

    async retrieveById(userId: string): Promise<IUser> {
        return await this.userModel.findById(userId);
    }

    async createUser(newUser: CreateUserDto) {
        return await this.userModel.create(newUser);
    }

    async removeById(userId: string) {
        await this.userModel.findByIdAndRemove(userId);
    }


}