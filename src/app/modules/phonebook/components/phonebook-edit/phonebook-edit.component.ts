import { Component, OnInit } from "@angular/core";
import {  FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Contact } from "../../Model/Contact";

import { PhonebookService } from "../../services/phonebook.service";
import { NotificationService } from "../../../../core/services/notification.service";

@Component({
  selector: "app-phonebook-edit",
  templateUrl: "./phonebook-edit.component.html",
  styleUrls: ["./phonebook-edit.component.scss"],
})
export class PhonebookEditComponent implements OnInit {
  pageTitle: string;

  contactForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(5)]],
    lastName: ["", [Validators.required, Validators.minLength(5)]],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+"),
      ],
    ],
    phone: [""],
    socialmedia: ["none"],
    birthdate: [""],
    fileUpload: [""],
    comment: [""],
    socialmediatext: [""],
    listgroup: [""],
    addressType: "home",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  constructor(
    private fb: FormBuilder,
    private phonebookService: PhonebookService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  display: boolean;

  states: Array<any>;

  listgroups: Array<any>;

  private errorMessage;

  // contact: Contact;
  id: string;

  onSubmit() {
    if (this.contactForm.dirty && this.contactForm.valid) {
      console.log(this.id);

      const contact: Contact = {
        id: this.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        socialmedia: this.contactForm.value.socialmedia,
        birthdate: this.contactForm.value.birthdate,
        fileUpload: this.contactForm.value.fileUpload,
        comment: this.contactForm.value.comment,
        socialmediatext: this.contactForm.value.socialmediatext,
        listgroup: this.contactForm.value.listgroup,
        addressType: this.contactForm.value.addressType,
        street1: this.contactForm.value.street1,
        street2: this.contactForm.value.street2,
        city: this.contactForm.value.city,
        state: this.contactForm.value.state,
        zipCode: this.contactForm.value.zipCode,
      };

      this.phonebookService.updateContact(contact).subscribe(
        (dataResult) => this.onSaveComplete(dataResult),
        (error) => (this.errorMessage = error)
      );
    } else if (!this.contactForm.dirty) {
      console.log("th form is not dirty ");
    }
  }

  onSaveComplete(dataResult): any {
    this.notificationService.show("Contact updated");

    this.contactForm.reset();

    console.log("th form is  dirty ");
    console.log(dataResult);

    this.route.navigate(["/phonebook"]);
  }

  ngOnInit() {
    this.contactForm.get("socialmedia").valueChanges.subscribe((value) => {
      value ? this.onSocialMediaSelectionChanged(value) : null;
    });

    this.init();
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.id = params.get("id");
    this.onContactRetrievedComplete();
    // });

    // this.init();
  }

  init() {
    this.listgroups = this.phonebookService.initlistBox();
    this.states = this.phonebookService.initStates();
  }

  onSocialMediaSelectionChanged(data: string) {
    const socialMediaInputControl = this.contactForm.get("socialmediatext");

    const lookuptable = {
      fb: () => {
        this.display = true;
        socialMediaInputControl.setValidators(Validators.required);
        socialMediaInputControl.updateValueAndValidity();
        return;
      },
      tw: () => {
        this.display = true;
        socialMediaInputControl.setValidators(Validators.required);
        socialMediaInputControl.updateValueAndValidity();
        return;
      },
      none: () => {
        this.display = false;
        socialMediaInputControl.clearValidators();
        socialMediaInputControl.updateValueAndValidity();
        return;
      },
    };

    lookuptable[data]();
  }

  onFileComplete(data: any) {
    console.log(data);
  }

  onContactRetrievedComplete() {
    this.activatedRoute.data.subscribe((dataResult) => {
      this.pageTitle = dataResult.pageTitle;
      this.id = dataResult.resolvedData.contact.id;

      this.contactForm.patchValue({
        firstName: !!dataResult.resolvedData.contact.firstName
          ? dataResult.resolvedData.contact.firstName
          : "",
        lastName: !!dataResult.resolvedData.contact.lastName
          ? dataResult.resolvedData.contact.lastName
          : "",
        email: !!dataResult.resolvedData.contact.email
          ? dataResult.resolvedData.contact.email
          : "",
        birthdate: !!dataResult.resolvedData.contact.birthdate
          ? dataResult.resolvedData.contact.birthdate
          : "",

        phone: !!dataResult.resolvedData.contact.phone
          ? dataResult.resolvedData.contact.phone
          : "",
        comment: !!dataResult.resolvedData.contact.comment
          ? dataResult.resolvedData.contact.comment
          : "",

        fileUpload: dataResult.resolvedData.contact.fileUpload
          ? dataResult.resolvedData.contact.fileUpload
          : null,

        listgroup: dataResult.resolvedData.contact.listgroup
          ? dataResult.resolvedData.contact.listgroup
          : "",

        socialmedia: !!dataResult.resolvedData.contact.socialmedia
          ? dataResult.resolvedData.contact.socialmedia
          : "",
        socialmediatext: !!dataResult.resolvedData.contact.socialmediatext
          ? dataResult.resolvedData.contact.socialmediatext
          : "",

        street1: dataResult.resolvedData.contact.street1
          ? dataResult.resolvedData.contact.street1
          : null,
        street2: dataResult.resolvedData.contact.street2
          ? dataResult.resolvedData.contact.street2
          : null,
        city: dataResult.resolvedData.contact.city
          ? dataResult.resolvedData.contact.city
          : null,
        state: dataResult.resolvedData.contact.state
          ? dataResult.resolvedData.contact.state
          : null,
        zipCode: dataResult.resolvedData.contact.zipCode
          ? dataResult.resolvedData.contact.zipCode
          : null,
      });
    });
  }

  onCancel() {
    this.route.navigate(["phonebook"]);

  }
}
