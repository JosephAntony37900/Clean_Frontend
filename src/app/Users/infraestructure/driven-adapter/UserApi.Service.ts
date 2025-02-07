import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersGateway } from "../../domain/models/users_gateway";
import { Users } from "../../domain/models/users";

@Injectable({
    providedIn: 'root'
})

 export abstract class UserApiService extends UsersGateway{
    private _url = "http://localhost:8080/users"
    constructor( private http: HttpClient) {super();}

    getAll(): Observable<Users[]>{
        return this.http.get<Array<Users>>(this._url);
    }

    register(user: Users): Observable<void> {
        return this.http.post<void>(this._url, user);
    }

    update(id: string, user: Users): Observable<void> {
        return this.http.put<void>(`${this._url}/${user.id}`, user);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`http://localhost:8080/delete/users/${id}`);
    }
}