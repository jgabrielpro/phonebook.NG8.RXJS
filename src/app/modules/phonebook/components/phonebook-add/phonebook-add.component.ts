import { Component, OnInit,  Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PhonebookService } from "../../services/phonebook.service";
import { NotificationService } from "../../../../core/services/notification.service";

@Component({
  selector: "app-phonebook-add",
  templateUrl: "./phonebook-add.component.html",
  styleUrls: ["./phonebook-add.component.scss"],
})
export class PhonebookAddComponent implements OnInit {
  pageTitle: string;

  contactForm: FormGroup;

  display: boolean;

  states: Array<any>;

  listgroups: Array<any>;

  private errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private phonebookService: PhonebookService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
     @Inject(NotificationService) private notificationService: NotificationService
  ) {}

  onSubmit() {
    if (this.contactForm.dirty && this.contactForm.valid) {
      this.phonebookService
        .addContact(
          this.contactForm.value.id,
          this.contactForm.value.firstName,
          this.contactForm.value.lastName,
          this.contactForm.value.email,
          this.contactForm.value.phone,
          this.contactForm.value.socialmedia,
          this.contactForm.value.birthdate,
          this.contactForm.value.fileUpload,
          this.contactForm.value.comment,
          this.contactForm.value.socialmediatext,
          this.contactForm.value.listgroup,
          this.contactForm.value.addressType,
          this.contactForm.value.street1,
          this.contactForm.value.street2,
          this.contactForm.value.city,
          this.contactForm.value.state,
          this.contactForm.value.zipCode
        )
        .subscribe(
          (dataResult) => this.onSaveComplete(dataResult),
          (error) => (this.errorMessage = error)
        );
    } else if (!this.contactForm.dirty) {
      console.log("th form is not dirty ");
    }
  }

  onSaveComplete(dataResult): any {
    this.notificationService.show("Contact Added");

    this.contactForm.reset();

    console.log("th form is  dirty ");
    console.log(dataResult);

    this.route.navigate(["/phonebook"]);
  }

  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data["pageTitle"];

    this.contactForm = this.fb.group({
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

    this.contactForm.get("socialmedia").valueChanges.subscribe((value) => {
      if (!value) {
        value = "none";
      }
      this.onSocialMediaSelectionChanged(value);
    });

    this.init();
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

  onCancel() {
    this.route.navigate([""]);
  }
}
