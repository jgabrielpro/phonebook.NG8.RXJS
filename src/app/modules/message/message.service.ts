import { Injectable, ModuleWithProviders } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  private _messages: string[] = [];
  isDisplayed = false;

  get messages() : string[] {
    return this._messages;
  }

  addMessage(message) {
    const currentDate = new Date();
    this._messages.push(message + "at" + currentDate.toLocaleString());
  }
}
