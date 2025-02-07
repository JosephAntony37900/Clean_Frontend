import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/users";
import { UsersGateway } from "../models/users_gateway";

@Injectable({
    providedIn: 'root'
})
export class UpdateUserUseCase {
    constructor(private usersGateway: UsersGateway) {}

    update(id: string, user: Users): Observable<void> {
        return this.usersGateway.update(id, user);
    }
}