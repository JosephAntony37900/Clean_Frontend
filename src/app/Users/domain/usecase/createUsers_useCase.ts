import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/users";
import { UsersGateway } from "../models/users_gateway";

@Injectable({
    providedIn: 'root'
})
export class CreateUserUseCase {
    constructor(private usersGateway: UsersGateway) {}

    register(user: Users): Observable<void> {
        return this.usersGateway.register(user);
    }
}