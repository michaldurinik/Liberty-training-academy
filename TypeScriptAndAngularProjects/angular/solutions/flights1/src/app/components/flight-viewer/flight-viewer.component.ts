import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  name = 'FlightViewerComponent';

  flights: string;

  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/flights', {responseType: 'text'})
      .subscribe(jsonAsText => this.flights = jsonAsText);
  }
}
