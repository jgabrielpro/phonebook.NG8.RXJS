import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "messages",
    component: MessageComponent,
    outlet: "popup"
  },
];

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MessageComponent, RouterModule],
})
export class MessageModule {}
