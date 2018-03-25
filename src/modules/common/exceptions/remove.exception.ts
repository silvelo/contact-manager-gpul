import { HttpException, HttpStatus } from "@nestjs/common";

export class RemoveException extends HttpException {
    constructor(id: number) {
        super(`The user ${id} dont exists`, HttpStatus.NOT_FOUND);
    }
}