import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.service";
import { Router } from "@angular/router";
import { TrackByService } from "../../core/services/trackby.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private trackByService: TrackByService
  ) {}

  get messages() {
    return this.messageService.messages;
  }

  close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
