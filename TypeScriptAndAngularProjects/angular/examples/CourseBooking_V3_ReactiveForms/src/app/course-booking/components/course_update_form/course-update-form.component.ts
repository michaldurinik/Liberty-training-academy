import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Course} from '../../model/course';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-course-update-form',
  templateUrl: './course-update-form.component.html',
  styleUrls: ['./course-update-form.component.css']
})
export class CourseUpdateFormComponent implements OnInit {
  updateForm: FormGroup;
  @Input() course: Course;
  @Output() updateComplete = new EventEmitter<Course>();

  courseTypes: any = [
    {name: 'Beginner', value: 'BEGINNER'},
    {name: 'Intermediate', value: 'INTERMEDIATE'},
    {name: 'Advanced', value: 'ADVANCED'}
  ];

  name = 'CourseUpdateForm';

  constructor(private formBuilder: FormBuilder) {
    this.updateForm = formBuilder.group({
      courseId: ['', Validators.required],
      courseTitle: ['', Validators.required],
      courseDifficulty: ['', Validators.required],
      courseDuration: [0, Validators.required]
    });
  }

  ngOnInit() {
    this.updateForm.setValue({
      courseId: this.course.id,
      courseTitle: this.course.title,
      courseDifficulty: this.course.difficulty,
      courseDuration: this.course.duration
    });

    // This is unnecessary but demonstrates the capability
    this.updateForm
      .valueChanges
      .pipe(filter(values => this.updateForm.valid))
      .subscribe(values => {
        console.log('Updating course object via Observable');
        this.course.id = values.courseId;
        this.course.title = values.courseTitle;
        this.course.difficulty = values.courseDifficulty;
        this.course.duration = values.courseDuration;
      });
  }

  updateCourse() {
    this.updateComplete.emit(this.course);
  }
}
