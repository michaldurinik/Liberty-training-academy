import {Component, Output} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/course.service';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent {
  someCourseSelected: boolean;
  courseBeingUpdated: boolean;
  selectedCourse: Course;
  courseForUpdate: Course;
  name = 'CourseViewer';
  courses: Course[];

  @Output() status: string;

  constructor(private coursesService: CoursesService) {
    this.someCourseSelected = false;
    this.courseBeingUpdated = false;
    this.status = '';
    this.fetchAllCourses();
  }

  courseSelected(course: Course) {
    console.log('Selecting ' + course.id);
    this.someCourseSelected = true;
    this.selectedCourse = course;
  }

  courseDeleted(course: Course) {
    console.log('Deleting ' + course.id);
    this.someCourseSelected = false;
    this.selectedCourse = null;
    this.deleteACourse(course.id);
  }

  courseChosenForUpdate(course: Course) {
    function copyOf(input: any): any {
      return Object.assign({}, input);
    }

    this.courseBeingUpdated = true;
    this.courseForUpdate = copyOf(course);
  }

  courseUpdated(course: Course) {
    console.log('Updating ' + course.id);
    this.courseBeingUpdated = false;
    this.courseForUpdate = null;

    this.updateACourse(course);
  }

  private fetchAllCourses(): void {
    this.coursesService
      .fetchAllCourses()
      .subscribe((courses: Course[]) => this.courses = courses,
        () => 'Unable to fetch courses');

  }

  private deleteACourse(courseId: string) {
    const errorMsg = `Unable to delete course ${courseId}`;
    this.coursesService
      .removeCourse(courseId)
      .subscribe(id => {
          this.status = `Course ${id} deleted`;
          this.fetchAllCourses();
        },
        () => this.status = errorMsg);
  }

  private updateACourse(course: Course) {
    const errorMsg = `Unable to update course ${course.id}`;
    this.coursesService
      .updateCourse(course)
      .subscribe(id => {
          this.status = `Course ${id} updated`;
          this.fetchAllCourses();
        },
        () => this.status = errorMsg
      );
  }
}
