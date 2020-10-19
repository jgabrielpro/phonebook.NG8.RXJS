import { PhonebookResolverService } from "./services/phonebook-resolver.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneBookRouting } from "./phonebook-routing.module";
import { PhonebookAddComponent } from "./components/phonebook-add/phonebook-add.component";
import { PhonebookEditComponent } from "./components/phonebook-edit/phonebook-edit.component";
import { PhonebookDetailComponent } from "./components/phonebook-detail/phonebook-detail.component";
import { SharedModule } from "../../shared/shared.module";
import { PhonebookListComponent } from "./components/phonebook-list/phonebook-list.component";
import { FilterTextboxModule } from "../../shared/filter-textbox/filter-textbox.module";
import { PaginationModule } from "../../shared/pagination/pagination.module";
import { PhonebookListResolverService } from "./services/phonebook-list-resolver.service";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: PhonebookListComponent,
    resolve: { PhonebookListResolverService },
  },
  {
    path: "/new",
    component: PhonebookAddComponent,
    // resolve: { phone },
  },
  {
    path: "/:id/edit",
    component: PhonebookEditComponent,
    resolve: { PhonebookResolverService },
  },
  {
    path: "/:id/detail",
    component: PhonebookDetailComponent,
    resolve: { PhonebookResolverService },
  },
];

@NgModule({
  declarations: [
    PhonebookListComponent,
    PhonebookAddComponent,
    PhonebookEditComponent,
    PhonebookDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PhoneBookRouting,
    FilterTextboxModule,
    PaginationModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PhoneBookRouting,
    PhonebookListComponent,
    PhonebookAddComponent,
    PhonebookEditComponent,
    PhonebookDetailComponent,
    // MatSnackBarModule
  ],
})
export class PhonebookModule {}
