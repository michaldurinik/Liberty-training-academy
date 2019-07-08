import {NgModule} from '@angular/core';
import {CourseViewerComponent} from './course-booking/components/course_viewer/course-viewer.component';
import {CourseBookingModule} from './course-booking/course.app.module';

@NgModule({
  declarations: [],
  imports: [
    CourseBookingModule
  ],
  providers: [],
  bootstrap: [
    CourseViewerComponent
  ]
})
export class AppModule {
}
