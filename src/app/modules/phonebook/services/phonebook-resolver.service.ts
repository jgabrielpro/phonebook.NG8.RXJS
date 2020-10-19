import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { map, tap, retry, catchError } from "rxjs/operators";
import { ContactResolved } from "../Model/ContactResolved";
import { PhonebookService } from "./phonebook.service";

@Injectable({
  providedIn: "root",
})
export class PhonebookResolverService implements Resolve<ContactResolved> {
  constructor(private phonebookService: PhonebookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ContactResolved> {
    const id = route.paramMap.get("id");
    if (!id) {
      return of(null);
    }

    return this.phonebookService.getContactById(id).pipe(
      // tap((val) => console.log("getContact:" + JSON.stringify(val))),
      map((contact) => ({ contact: contact })),
      retry(3),
      catchError((error) => {
        const message = `Retrievak error: ${error}`;
        console.error(message);
        return of({ contact: null, error: message });
      })
    );
    // throw new Error('Method not implemented.');
  }


}
