import {NgModule} from '@angular/core';
import {CourseViewerComponent} from './components/course_viewer/course-viewer.component';
import {CourseDetailViewerComponent} from './components/course_detail_viewer/course-detail-viewer.component';
import {CourseRowDisplayComponent} from './components/course_row_display/course-row-display.component';
import {CourseUpdateFormComponent} from './components/course_update_form/course-update-form.component';
import {CoursesService} from './services/course.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CourseViewerComponent,
    CourseDetailViewerComponent,
    CourseRowDisplayComponent,
    CourseUpdateFormComponent
  ],
  exports: [
    CourseViewerComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CourseBookingModule {
}
