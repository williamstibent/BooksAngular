import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  stateAside: string
  toggleProfileAside: boolean

  constructor() {
    this.stateAside = 'open'
    this.toggleProfileAside = false;
   }

  ngOnInit() {
  }

  closeAside(state){
    this.stateAside = state
  }

}
