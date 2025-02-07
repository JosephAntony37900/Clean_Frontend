import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/products";
import { ProductGateway } from "../gateways/products_gateway";

@Injectable({
    providedIn: 'root'
})

export class CreateProductUseCase {
    constructor(private productGateway: ProductGateway){}

    create(product: Product): Observable<void> {
        return this.productGateway.create(product)
    }
}