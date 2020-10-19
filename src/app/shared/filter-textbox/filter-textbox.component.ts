import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ParameterService } from "../../modules/phonebook/services/parameter.service";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: "app-filter-textbox",
  templateUrl: "./filter-textbox.component.html",
  styleUrls: ["./filter-textbox.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTextboxComponent implements AfterViewInit {
  @ViewChild("filterElement", { static: false }) filterElement: ElementRef;

  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private parameterService: ParameterService,
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.renderer.selectRootElement("#filterElement").focus();
  }

  private _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
      this._listFilter = value;
      this.parameterService.filterBy = this._listFilter;
      this.changeDetectorRef.detectChanges();
  }



  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.listFilter); // Raise changed event
  }
}
