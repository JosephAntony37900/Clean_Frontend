import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/products";
import { ProductGateway } from "../gateways/products_gateway";

@Injectable({
    providedIn: 'root'
})

export class DeleteProductUseCase{
    constructor(private productGateway: ProductGateway){}

    delete(id: string): Observable<Product>{
        return this.productGateway.delete(id)
    }
}