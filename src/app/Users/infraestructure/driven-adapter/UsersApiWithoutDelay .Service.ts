import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersGateway } from "../../domain/models/users_gateway";
import { Users } from "../../domain/models/users";

@Injectable({
    providedIn: 'root'
})

 export abstract class UserApiServiceWithoutDelay extends UsersGateway{
    private _url = "http://localhost:8080/"
    constructor( private http: HttpClient) {super();}

    getAll(): Observable<Users[]>{
        return this.http.get<Array<Users>>(this._url);
    }
}