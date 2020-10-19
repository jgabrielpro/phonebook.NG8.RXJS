import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TrimPipe } from "./pipes/trim.pipe";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { SortByDirective } from "./directives/sortby.directive";
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [

    CapitalizePipe,
    TrimPipe,
    SortByDirective,
  ],
  imports: [
    CommonModule,
    // RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    // RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,


    CapitalizePipe,
    TrimPipe,
    SortByDirective,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: AuthService,
      providers: [AuthService]
    }
  }
}
