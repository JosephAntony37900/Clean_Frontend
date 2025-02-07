import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/products";
import { ProductGateway } from "../gateways/products_gateway";

@Injectable({
    providedIn: 'root'
})

export class UpdateProductUseCase {
    constructor(private productGateway: ProductGateway){}

    update(id: string, product: Product): Observable<void>{
        return this.productGateway.update(id, product)
    }
}