import { Observable } from "rxjs";
import { Users } from "./users";

export abstract class UsersGateway {
    abstract getAll(): Observable<Array<Users>>;
    abstract detele(id: string): Observable<Users>;
    abstract register(_user: Users): Observable<void>;
    abstract update(id: string, _user: Users): Observable<void>;

}