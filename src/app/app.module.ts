import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ItemsService } from './services/items.service';
import { CollapseOnClick } from "./directives/collapse-on-click.directive";
import { ItemsListComponent } from './items-list/items-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
