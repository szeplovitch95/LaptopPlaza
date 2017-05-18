import { Component } from '@angular/core';
import { ItemsService } from "./services/items.service";
import { ItemsListComponent } from "./items-list/items-list.component";
import "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService]
})
export class AppComponent {

  constructor(private itemsService: ItemsService) {
     
  }
 

}
