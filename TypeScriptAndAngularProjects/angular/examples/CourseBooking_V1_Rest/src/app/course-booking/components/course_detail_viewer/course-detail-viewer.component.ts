import {Component, Input} from '@angular/core';
import {Course} from '../../model/course';

@Component({
  selector: 'app-course-detail-viewer',
  templateUrl: './course-detail-viewer.component.html',
  styleUrls: ['./course-detail-viewer.component.css']
})
export class CourseDetailViewerComponent {
  name = 'CourseDetailViewer';

  @Input() selected: Course;
}
