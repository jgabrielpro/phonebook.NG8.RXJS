// import {
//   Directive,
//   ElementRef,
//   Renderer2,
//   OnInit,
//   Input,
//   HostListener,
// } from "@angular/core";

// @Directive({
//   selector: "[menuActive]",
// })
// export class MenuAciveDirective implements OnInit {
//   // @Input("isActive")
//   elm: HTMLElement;

//   constructor(element: ElementRef, private ren: Renderer2) {
//     if (element && element.nativeElement) {
//       this.elm = element.nativeElement;
//     }
//   }
//   ngOnInit(): void {
//     if (this.elm) {
//       this.ren.removeClass(this.elm, "active");
//     }
//   }

//   @HostListener("mouseclick")
//   onMouseEnter() {
//     this.ren.addClass(this.elm, "active");
//   }
// }
