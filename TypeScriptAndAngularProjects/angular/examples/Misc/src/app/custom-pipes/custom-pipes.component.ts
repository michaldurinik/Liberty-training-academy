import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
  numbers = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

  // Mutation - will not get picked up by pure pipe
  addNumber() {
    this.numbers.push(this.numbers.length + 1);
  }

  // Immutable operations - new array is created
  // This will be detected by a pure pipe
  removeNumber() {
    const newNumbers = [...this.numbers];
    newNumbers.pop();
    this.numbers = newNumbers;
  }
}
