import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Candidate} from '../../model/candidate';

@Component({
  selector: 'app-electoral-results',
  templateUrl: './election-results.component.html',
  styleUrls: ['./election-results.component.css']
})
export class ElectoralResultsComponent {
  name = 'ElectionResults';
  results: Candidate[];

  partyNamesMap = {
    APNI: 'Alliance Party Of Northern Ireland',
    Con: 'Conservative',
    DUP: 'Democratic Unionist Party',
    Ind: 'Independent',
    SDLP: 'Social Democratic and Labour Party',
    SF: 'Sinn Fein',
    UU: 'Ulster Unionist Party',
    Vote: 'Vote',
    WP: 'Workers Party',
    SEA: 'SEA'
  };

  constructor(private http: HttpClient) {
    this.http
      .get<Candidate[]>('assets/data/electionResults.json')
      .subscribe(results => this.results = results);
  }
}
