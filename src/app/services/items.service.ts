import { Injectable } from "@angular/core";
import { Http } from  "@angular/http";   
import {iitem} from "./items.interface"

@Injectable()
export class ItemsService {
    
    items:iitem[]

    constructor(private http:Http) {
     this.loadItems();
    }
   getItems():iitem[]{
        return this.items;
   }
    loadItems() {
         this.http.get('http://209.35.196.171/WebAPI2/Bank')
            .map(res=>res.json())
            .subscribe(result => {
                this.items = result
            })
        }
}