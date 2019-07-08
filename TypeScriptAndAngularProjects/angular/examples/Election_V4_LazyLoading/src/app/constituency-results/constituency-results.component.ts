import {Component, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Candidate} from '../model/candidate';
import {ResultsService} from '../services/results.service';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './constituency-results.component.html',
  styleUrls: ['./constituency-results.component.css'],
})
export class ConstituencyResultsComponent {
  name = 'ElectionResultsByConstituency';

  @Output() results: Candidate[];
  @Output() constituencyName: string;

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

    function byConstituency(candidate: Candidate, constituency: string): boolean {
      const regexp = new RegExp(constituency, 'i');
      return candidate.constituency.search(regexp) >= 0;
    }

    this.route.params
      .pipe(map((params: Params) => params.name))
      .subscribe(name => {
        this.constituencyName = name;
        this.resultsService
          .fetchResults()
          .subscribe(candidates => {
            this.results = candidates.filter(c => byConstituency(c, name));
          });
      });
  }
}

