import { Component } from '@angular/core';
import { LessonsService } from "./services/lessons.service";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { lessonsData } from './services/lessons';
import "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LessonsService]
})
export class AppComponent {
  title = 'app works!';
  lessons = lessonsData;

  constructor(private lessonsService: LessonsService) {
  }


}
