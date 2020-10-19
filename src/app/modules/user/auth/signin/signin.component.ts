import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { MessageService } from "../../../message/message.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  pageTitle: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messages: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data) => (this.pageTitle = data.pageTitle)
    );
  }

  onLogin(f: NgForm) {
    console.log(f);
    f.value.email = "jbotrousdev@gmail.com";
    f.value.password = "12334";

    if (f.value.email && f.value.password) {
      this.messages.addMessage("User Logged in ");

      this.authService.onLogin();

      console.log(this.activatedRoute.url);

      this.router.navigate(["phonebook"]);
    }
  }
}
