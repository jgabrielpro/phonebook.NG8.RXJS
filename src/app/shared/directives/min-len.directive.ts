import { Directive, ElementRef, Renderer2, OnInit, Input, HostBinding } from '@angular/core';


@Directive({
  selector: 'input[type="password"]'
})
export class MenuAcive {
@HostBinding('attr.minlength') minlen = 15

}
