import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {
  log: string[] = [];
  token = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  saveToken() {
    if (this.token) {
      localStorage.setItem('token', this.token);
    } else {
      localStorage.removeItem('token');
    }
  }

  readData() {
    this.http.get('assets/dummy.json')
      .subscribe(
        () => this.log.push('Successfully read data'),
        error => this.log.push('Error reading data: ' + JSON.stringify(error))
      );
  }
}
