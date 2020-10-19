import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { Contact } from "../../Model/Contact";
import { SorterService } from "@shared/services/sorter.service";
import { PhonebookService } from "../../services/phonebook.service";
import { TrackByService } from "@core/services/trackby.service";
import { IPagedResults } from "@shared/interfaces";
import { LoggerService } from "@core/services/logger.service";
import { FilterService } from "../../../../shared/filter-textbox/filter.service";
import { ActivatedRoute } from "@angular/router";
import { NotificationService } from "../../../../core/services/notification.service";
import { SubSink } from "subsink";
import { ParameterService } from "../../services/parameter.service";
import { FilterTextboxComponent } from "../../../../shared/filter-textbox/filter-textbox.component";
import { Observable } from 'rxjs';

@Component({
  selector: "app-phonebook-list",
  templateUrl: "./phonebook-list.component.html",
  styleUrls: ["./phonebook-list.component.scss"],
})
export class PhonebookListComponent
  implements OnInit, AfterViewInit, OnDestroy {
  pageTitle: string;

  subs = new SubSink();

  _filteredContacts: Contact[] = [];

  contacts: Contact[];

  get filteredContacts() {
    return this._filteredContacts;
  }
  set filteredContacts(value: Contact[]) {
    this._filteredContacts = value;
    this.contacts = this._filteredContacts;

    this.cdr.detectChanges();
  }

  @ViewChild(FilterTextboxComponent, { static: false })
  filterTextComponentRef: FilterTextboxComponent;

  contacts$: Observable<null>;

  totalRecords = 0;
  pageSize = 10;

  constructor(
    private sorterService: SorterService,
    private trackByService: TrackByService,
    private phonebookService: PhonebookService,
    private loggerService: LoggerService,
    private filterService: FilterService,
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private parameterService: ParameterService
  ) {}
  ngAfterViewInit(): void {
    this.filterTextComponentRef
      ? (this.filterTextComponentRef.listFilter = this.parameterService.filterBy)
      : null;
  }

  ngOnInit(): void {
    this.pageTitle = this.activatedRoute.snapshot.data["pageTitle"];

    this.loadContacts();
  }

  sort(prop: string) {
    this.sorterService.sort(this.contacts, prop);
  }

  pageChanged(page: number) {
    this.getContactPage(page);
  }

  getContactPage(page?: number) {
    this.subs = this.phonebookService.getAllContacts().subscribe(
      (response: IPagedResults<Contact[]>) => {
        this.contacts = this.filteredContacts = response.results;
        this.totalRecords = response.totalRecords;
      },
      (err: any) => this.loggerService.error(err),
      () =>
        this.loggerService.info(
          "getCustomersPage() retrieved customers for page: " + page
        )
    );
  }

  filterChanged(data: string) {
    if (data && this.contacts) {
      this.parameterService.filterBy = data;
      data = data.toUpperCase();
      const props = ["firstName", "lastName", "email"];
      this.filteredContacts = this.filterService.filter<Contact>(
        this.contacts,
        data,
        props
      );
    } else {
      this.loadContacts();
    }
  }

  loadContacts() {
    this.activatedRoute.data.subscribe((data) => {
      // this.contacts$ = data.resolvedData.contact;
      this.contacts = data.resolvedData.contact;
    });

    this.phonebookService.getAllContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  delete(event, id) {
    if (confirm("Are you Sure you want to delete this item?")) {
      this.notificationService.show("Contact Deleted");
    }
  }
}
