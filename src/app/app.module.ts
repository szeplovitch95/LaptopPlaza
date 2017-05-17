import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LessonsService } from './services/lessons.service';
import { CollapseOnClick } from "./directives/collapse-on-click.directive";


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    CollapseOnClick
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
