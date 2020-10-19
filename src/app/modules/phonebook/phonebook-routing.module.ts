import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PhonebookListComponent } from "./components/phonebook-list/phonebook-list.component";
import { PhonebookListResolverService } from "./services/phonebook-list-resolver.service";
import { PhonebookAddComponent } from "./components/phonebook-add/phonebook-add.component";
import { AuthGuard } from "@core/guards/auth.guard";
import { PhonebookEditComponent } from "./components/phonebook-edit/phonebook-edit.component";
import { PhonebookResolverService } from "./services/phonebook-resolver.service";
import { PhonebookDetailComponent } from "./components/phonebook-detail/phonebook-detail.component";

const routes: Routes = [
  {
    path: "",
    component: PhonebookListComponent,
    data: { pageTitle: "Contact List" }, //fixed Property
    resolve: { resolvedData: PhonebookListResolverService },
  },
  {
    path: "new",
    component: PhonebookAddComponent,
    data: { pageTitle: "Add Contact" },
    canLoad: [AuthGuard],
  },
  {
    path: ":id/edit",
    component: PhonebookEditComponent,
    data: { pageTitle: "Edit Contact" },
    resolve: { resolvedData: PhonebookResolverService },
    canLoad: [AuthGuard],
  },
  {
    path: ":id/detail",

    component: PhonebookDetailComponent,
    data: { pageTitle: "Contact Detail" },
    resolve: { resolvedData: PhonebookResolverService },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneBookRouting {}
