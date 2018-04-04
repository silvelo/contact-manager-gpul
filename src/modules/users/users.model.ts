import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class User {
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly number: string;
}

export interface IUser extends Document {
    name: string,
    number: string
}

