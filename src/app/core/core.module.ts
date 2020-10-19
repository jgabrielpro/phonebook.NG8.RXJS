import { EnsureModuleLoadedOnceGuard } from "./services/ensure-module-loaded-once.guard";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { NavbarComponent } from "../shell/navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [RouterModule, HttpClientModule, NavbarComponent],
  declarations: [NavbarComponent],
  providers: [
    { provide: "Window", useFactory: () => window },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
