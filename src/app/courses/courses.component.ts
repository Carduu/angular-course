import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../shared/services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
      this.resetSelectedCourse();
      this.loadCourses();
  }

  loadCourses() {
      this.coursesService.all()
          .subscribe(courses => this.courses = courses);
  }

  refreshCourses() {
      this.resetSelectedCourse();
      this.loadCourses();
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

  saveCourse(course) {
      if (course.id){
          this.coursesService.update(course)
              .subscribe(result => this.refreshCourses());
      } else {
          this.coursesService.create(course)
              .subscribe(result => this.refreshCourses());
      }
  }

  deleteCourse(courseId){
      this.coursesService.delete(courseId)
          .subscribe(result => this.refreshCourses());
  }
}
