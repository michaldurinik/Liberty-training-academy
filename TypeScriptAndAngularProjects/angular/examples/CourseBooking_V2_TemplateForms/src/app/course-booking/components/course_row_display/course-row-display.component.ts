import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../model/course';

@Component({
  selector: '[app-course-row-display]',
  templateUrl: './course-row-display.component.html',
  styleUrls: ['./course-row-display.component.css']
})
export class CourseRowDisplayComponent {
  @Input() course: Course;
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseUpdated = new EventEmitter<Course>();

  name = 'CourseRowDisplay';

  selectCourse() {
    console.log('Course Selected');
    this.courseSelected.emit(this.course);
  }

  deleteCourse() {
    console.log('Course Deleted');
    this.courseDeleted.emit(this.course);
  }

  updateCourse() {
    console.log('Course Being Updated');
    this.courseUpdated.emit(this.course);
  }
}
