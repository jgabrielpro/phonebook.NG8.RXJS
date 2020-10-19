import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { Contact } from "../../Model/Contact";

import { PhonebookService } from "../../services/phonebook.service";

@Component({
  selector: "app-phonebook-detail",
  templateUrl: "./phonebook-detail.component.html",
  styleUrls: ["./phonebook-detail.component.scss"],
})
export class PhonebookDetailComponent implements OnInit {
  pageTitle: string;

  constructor(
    private phonebookService: PhonebookService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  display: boolean;

  states: Array<any>;

  listgroups: Array<any>;

  selectedItem = [];

  contact: Contact | null = null;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.contact = data.resolvedData.contact;
      this.pageTitle = data.pageTitle;
    });

    this.init();

    if (this.contact.listgroup) {
      this.selectedItem = this.listgroups.filter(
        (x) => x.name === this.contact.listgroup[0].name
      );
    }
  }

  init() {
    this.listgroups = this.phonebookService.initlistBox();
    this.states = this.phonebookService.initStates();
  }

  onBack() {
    this.route.navigate(["phonebook"]);
  }
}
