import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShellModule } from "./shell/shell.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";

import { AuthModule } from "./modules/user/auth/auth.module";
import { HomeComponent } from "./modules/home/home.component";
import { MessageModule } from "./modules/message/message.module";
import { MatSnackBarModule } from '@angular/material';

declare var userInfo: any;

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    ShellModule,
    AuthModule,
    MessageModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
