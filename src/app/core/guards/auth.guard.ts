import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "@core/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {

    // let url: string = route.

    if (!this.authService.userAuthenticated) {
    return  this.router.navigateByUrl("/auth");
    }

    return this.authService.userAuthenticated;
  }
}
