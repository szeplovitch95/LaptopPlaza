import { lessonsData } from './lessons';
import { Injectable } from "@angular/core";
import { Http } from  "@angular/http";   

@Injectable()
export class LessonsService {
    lessons = [];

    constructor(private http:Http) {
        this.loadLessons();
    }

    loadLessons() {
        this.http.get('http://localhost:4005/items')
            .map(res => res.json())
            .subscribe(
                users => this.lessons = users
            );
        }
}