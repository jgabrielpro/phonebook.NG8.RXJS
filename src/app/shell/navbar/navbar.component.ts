import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ViewChild,
  ElementRef,
  TemplateRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@core/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isCollapsed: boolean;
  loginLogoutText = "Login";

  get isLoggedin(): boolean {
    return !!this.authService.userAuthenticated;
  }

  // @ViewChild('menuitems', {static:false}) menuitems : TemplateRef<any>

  @ViewChild("contactList", { static: false }) contactList: ElementRef;
  @ViewChild("addContact", { static: false }) addContact: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }

  activateMenuItem(event) {
    console.log(event);
    this.renderer.removeClass(this.addContact.nativeElement, "active");
    this.renderer.removeClass(this.contactList.nativeElement, "active");

    const lookuptable = {
      contactlist: () => {
        this.renderer.addClass(this.contactList.nativeElement, "active");
      },
      addContact: () => {
        this.renderer.addClass(this.addContact.nativeElement, "active");
      },
    };

    lookuptable[event.currentTarget.id]();
  }

  signOut() {
    this.authService.onLogout();

    this.router.navigate(["/home"]);
  }
}
