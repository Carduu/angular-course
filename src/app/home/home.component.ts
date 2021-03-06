import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/services/lessons.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courseLessons = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons() {
    this.lessonsService.all()
        .subscribe(lessons => this.courseLessons = lessons);
  }
}
