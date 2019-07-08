import {Component, Output} from '@angular/core';
import {ResultsService} from '../../services/results.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-electoral-results',
  templateUrl: './election-results.component.html',
  styleUrls: ['./election-results.component.css'],
})
export class ElectoralResultsComponent {
  name = 'ElectionResults';

  @Output() partyNames: Array<string>;

  constructor(private service: ResultsService) {
    function keepFirst(item: string, index: number, inputArray: string[]): boolean {
      return inputArray.indexOf(item) === index;
    }

    this.service
      .fetchResults()
      .pipe(map(results => results.map(result => result.party)))
      .subscribe(parties => this.partyNames = parties.filter(keepFirst));
  }
}
