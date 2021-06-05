import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript: The Hard Parts',
      description: 'Improve your JS knowledge',
      percentComplete: 100,
      favorite: true
    },
    {
      id: 3,
      title: 'Getting Started with JavaScript',
      description: 'Learn JS basics',
      percentComplete: 75,
      favorite: false
    }
  ];

  constructor(private http: HttpClient) { }

  private model = 'courses';

  private getUrl() {
    return `${BASE_URL}${this.model}`;;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  update(course) {
    return this.http.put(`${this.getUrl()}/${course.id}`, course);
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  delete(courseId) {
    return this.http.delete(`${this.getUrl()}/${courseId}`);
  }
}
