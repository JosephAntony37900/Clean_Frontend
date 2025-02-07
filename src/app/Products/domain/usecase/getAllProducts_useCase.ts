import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/products";
import { ProductGateway } from "../gateways/products_gateway";

@Injectable({
    providedIn: 'root'
})

export class GetALLProductsUseCase{
    constructor( private productGateway: ProductGateway){}

    getAll(): Observable<Product[]>{
       return this.productGateway.getAll();
    }
}