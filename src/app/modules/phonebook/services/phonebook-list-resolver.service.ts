import { PhonebookService } from "./phonebook.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { EMPTY, Observable, of } from "rxjs";
import { map, catchError, tap, retry, take, delay } from 'rxjs/operators';
import { ContactResolvedList } from "../Model/ContactResolved";

@Injectable({
  providedIn: "root",
})
export class PhonebookListResolverService
  implements Resolve<ContactResolvedList> {
  constructor(private phonebookService: PhonebookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ContactResolvedList> {
    return this.phonebookService.getAllContacts().pipe(
      take(1),
      // delay(2000),
      // tap((val) => console.log("getContact:" + JSON.stringify(val))),
      map((contact) => ({ contact: contact })),
      catchError((error) => {
        const message = `Retrieve error: ${error}`;
        console.error(message);
        return EMPTY; //of([])
      })
    );

    // throw new Error('Method not implemented.');
  }
}
