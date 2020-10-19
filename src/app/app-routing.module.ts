import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./modules/user/auth/signin/signin.component";
import { HomeComponent } from "./modules/home/home.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "auth",
    component: SigninComponent,
    data: { pageTitle: "Sign In" },
  },
  {
    path: "phonebook",
    loadChildren: () =>
      import("../app/modules/phonebook/phonebook.module").then(
        (m) => m.PhonebookModule
      ),
  },
  { path: "home", component: HomeComponent },

  {
    path: "**",
    loadChildren: () =>
      import("./shared/pagenotfound/pagenotfound.module").then(
        (m) => m.PagenotfoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // ,
      //  {enableTracing:true}
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
