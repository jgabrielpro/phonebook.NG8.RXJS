import { NgModule } from "@angular/core";
import { PagenotfoundRoutingModule } from "./pagenotfound-routing.module";
// import { SharedModule } from "../shared.module";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound.component";

const routes: Routes = [
  {
    path: "",
    component: PagenotfoundComponent,
  },
];

@NgModule({
  declarations:[PagenotfoundComponent],
  imports: [PagenotfoundRoutingModule, RouterModule.forChild(routes)],
  exports: [PagenotfoundComponent, RouterModule],
})
export class PagenotfoundModule {}
