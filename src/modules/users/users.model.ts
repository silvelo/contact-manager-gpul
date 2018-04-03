import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class User {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly number: string;
}

export interface IUser {
    id: number,
    name: string,
    number: string
}

