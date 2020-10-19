import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
// import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";
// import { LayoutComponent } from "./layout/layout.component";
// import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class ShellModule {}
