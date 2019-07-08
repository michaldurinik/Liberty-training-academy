import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Course} from '../model/course';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class CoursesService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseServerUrl + '/courses/';
  }

  fetchAllCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.baseUrl)
      .pipe(map(items => items.map(this.convertEntryToCourse)));
  }

  fetchSingleCourse(id: string): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + id);
  }

  removeCourse(id: string): Observable<string> {
    return this.http.delete(this.baseUrl + id, {responseType: 'text'});

  }

  private convertEntryToCourse(entry: any) {
    return new Course(entry.id, entry.title, entry.difficulty, entry.duration);
  }
}
