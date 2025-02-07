import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/users";
import { UsersGateway } from "../models/users_gateway";

@Injectable({
    providedIn: 'root'
})
export class DeleteUserUseCase {
    constructor(private usersGateway: UsersGateway) {}

    delete(id: string): Observable<Users> {
        return this.usersGateway.detele(id);
    }
}