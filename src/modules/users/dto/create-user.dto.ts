import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    @ApiModelProperty()
    readonly name: string;
    @IsString()
    @ApiModelProperty()
    readonly number: string;
}