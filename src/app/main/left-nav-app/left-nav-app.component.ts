import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, style, animate } from "@angular/animations";
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'left-nav-app',
  templateUrl: './left-nav-app.component.html',
  styleUrls: ['./left-nav-app.component.css'],
  animations: [
    trigger('asideCollapse', [
      state('close', style({
        width: '100px'
      })),
      state('open', style({
        width: '350px'
      })),
      transition('open => close', animate('500ms ease-out')),
      transition('close => open', animate('500ms ease-in'))
    ])
  ]
})
export class LeftNavComponent implements OnInit {

  @Input() asideState: string
  today: Date
  
  constructor(private authService: AuthService) {
    this.today = new Date()
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
