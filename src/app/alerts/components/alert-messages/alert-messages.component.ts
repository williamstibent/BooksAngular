import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../services/messages.service";
import { Message } from "../../models/message";

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.css']
})
export class AlertMessagesComponent implements OnInit {
  message:Message;

  constructor(private alertService:MessagesService) { }

  getHeroes(): void {
    this.alertService.getMessage()
        .subscribe(message => {
          console.log(message);
        });
  }
  ngOnInit() {
    
  }

}
