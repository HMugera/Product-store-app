import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  get messages(): string[] {
    return this.messageService.messages;
  }
  constructor(private route:Router,private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  close(): void {
    // Close the popup.
    this.messageService.isDisplayed = false;
    this.route.navigate([{outlets: { popup : null}}])
  }

}
