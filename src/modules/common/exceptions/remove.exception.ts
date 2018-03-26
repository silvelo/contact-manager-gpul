import { HttpException, HttpStatus } from "@nestjs/common";

export class RemoveUserException extends HttpException {
    constructor(id: string) {
        super(`The user ${id} doesn't exist`, HttpStatus.NOT_FOUND);
    }
}