import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from "./shared/app.animation";
import { AuthService } from './core/services/auth.service';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  loading: boolean;
  title = "phonebook";


  get isAuthenticated(){
    return this.authService.userAuthenticated;
  }

  constructor(private router: Router,
    private authService: AuthService
    ) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }
  ngOnInit(): void {

  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
