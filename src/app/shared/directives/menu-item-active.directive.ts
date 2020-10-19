// import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

// @Directive({
//   selector: "span[appMenuItemActive]",
// })
// export class MenuItemActiveDirective {
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

//   @HostListener("click")
//   onMouseEnter() {
//     this.ren.addClass(this.elm, "active");
//   }
// }
