import {Component, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Candidate} from '../../model/candidate';
import {ResultsService} from '../../services/results.service';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './party-results.component.html',
  styleUrls: ['./party-results.component.css'],
})
export class PartyResultsComponent {
  name = 'ElectionResultsByParty';

  @Output() results: Candidate[];
  @Output() partyName: string;

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

  constructor(private route: ActivatedRoute,
              private resultsService: ResultsService) {
    this.route.params
      .pipe(map((params: Params) => params.name))
      .subscribe(name => {
        this.partyName = name;
        console.log('Filtering results by party ' + name);
        this.resultsService
          .fetchResults()
          .subscribe(people => this.results = people.filter(item => item.party === name));
      });
  }
}

