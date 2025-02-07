import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/users";
import { UsersGateway } from "../models/users_gateway";

@Injectable({
    providedIn: 'root'
})

export class GetUsersUseCases{
    constructor( private _usersGateWay: UsersGateway) {}
    getAllUsers(): Observable<Array<Users>> {
        return this._usersGateWay.getAll();
    }
}
