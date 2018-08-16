import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css']
})
export class BookRatingComponent implements OnInit {

  _score: any;
  _index = 0;
  range = [];

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set score(score: any) {
    if (score) {
      debugger
      this._score = score - 1;
      this.range = [0,1,2,3,4]
      /* for (var i = 0; i < this.maxScore; i++) {
        this.range.push(i);
      } */
    }
  }

  get score(): any { return this._score; }


  public isMarked (){
    this._index++;
    debugger
    if (this._index <= this._score) {
      return 'fa-star';
    }
    else {
      return 'fa-star-o';
    }
  }

}
