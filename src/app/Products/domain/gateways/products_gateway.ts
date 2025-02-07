import { Observable } from "rxjs";
import { Product } from "../models/products";

export abstract class ProductGateway {
    abstract getAll(): Observable<Array<Product>>;
    abstract delete(id: string): Observable<Product>;
    abstract create(_product: Product): Observable<void>;
    abstract update(id: string, _product: Product): Observable<void>;

}