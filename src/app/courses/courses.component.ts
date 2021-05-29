import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
      this.resetSelectedCourse();
  }

  selectedCourse = null;

  selectCourse(course) {
    this.selectedCourse = course;
  }

  resetSelectedCourse() {
      const emptyCourse = {
          id: null,
          title: '',
          description: '',
          percentComplete: 0,
          favorite: false
      };
      this.selectedCourse = emptyCourse;
  }

  saveCourse() {
      console.log('Submitted course!');
  }
}
