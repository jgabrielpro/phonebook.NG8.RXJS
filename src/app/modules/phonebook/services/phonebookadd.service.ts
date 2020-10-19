// import {
//   HttpClient,
//   HttpErrorResponse,
//   HttpHeaders,
// } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, of, throwError } from "rxjs";
// import { catchError, map, retry, tap } from "rxjs/operators";
// import { IContact } from "../IContact";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-type": "application/json",
//   }),
// };

// @Injectable({
//   providedIn: "root",
// })
// export class PhonebookaddService {
//   public contact: IContact;

//   public contacts: IContact[];

//   listgroups: Array<any>;

//   states: Array<any>;

//   ngOnInit(): void {}

//   ngOnDestroy(): void {
//     //Called once, before the instance is destroyed.
//     //Add 'implements OnDestroy' to the class.
//   }

//   private baseUrl = "http:/localhost8080/contacts";

//   // Httpheaders

//   constructor(private http: HttpClient) {}

//   getContacts(): Observable<IContact[]> {
//     const url = `${this.baseUrl}`;

//     return this.http.get(url).pipe(
//       tap((val) => console.log("getContacts:" + JSON.stringify(val))),
//       map((data: any) => (this.contacts = data)),
//       catchError(this.handleError)
//     );
//   }

//   getContact(id: string): Observable<IContact> {

//     if(id === ''){

//       return of(this.initializeProduct());
//     }

//     const url = `${this.baseUrl}/${id}`;
//     return this.http.get(url).pipe(
//       tap((val) => console.log("getContact:" + JSON.stringify(val))),
//       map((data: any) => (this.contact = data)),
//       retry(3),
//       catchError(this.handleError)
//     );
//   }

//   saveContact(c: IContact): Observable<IContact> {
//     const url = `${this.baseUrl}`;

//     if (c.id === '' || c.id === undefined) {
//       c.id = undefined;

//       return this.http.post(url, c, httpOptions).pipe(
//         tap((val) => console.log("Save contact" + JSON.stringify(val))),
//         map(() => c)
//       );
//     } else {
//       const url = `${this.baseUrl}/${c.id}`;

//       return this.http.put(url, c, httpOptions).pipe(
//         tap((val) => console.log("updateContact" + JSON.stringify(val))),
//         map(() => c)
//       );
//     }
//   }

//   deleteContact(id: number): Observable<Response> {
//     const url = `${this.baseUrl}/${id}`;

//     return this.http.delete(url, httpOptions).pipe(
//       tap((val) => console.log("delete" + val)),
//       map(() => null),
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error("An error occurred:", error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` + `body was: ${error.error}`
//       );
//     }
//     // return an observable with a user-facing error message

//     return throwError("Something bad happened; please try again later.");
//   }

//   initializeProduct(): IContact {
//     return {
//       id: '',
//       firstName: null,
//       lastName: null,
//       email: null,
//       phone: null,
//       socialmedia: null,
//       birthdate: null,
//       fileUpload: null,
//       comment: null,
//       socialmediatext: null,
//       listgroup: [""],
//       Addresses: [""],
//     };
//   }

//   loadlistBox(): Array<any> {
//     return [
//       { id: 1, icon: "sci-fi", item: "Star Trek", year: "2009", rating: 8.0 },

//       {
//         id: 2,
//         icon: "adventure",
//         item: "Cast Away",
//         year: "2000",
//         rating: 7.7,
//       },

//       { id: 3, icon: "action", item: "Gladiator", year: "2000", rating: 8.5 },

//       { id: 4, icon: "drama", item: "Malèna", year: "2000", rating: 7.5 },

//       { id: 5, icon: "music", item: "Moulin Rouge", year: "2001", rating: 7.6 },

//       { id: 6, icon: "comedy", item: "Snatch", year: "2000", rating: 8.3 },

//       {
//         id: 7,
//         icon: "biography",
//         item: "A Beautiful Mind",
//         year: "2001",
//         rating: 8.2,
//       },

//       {
//         id: 8,
//         icon: "crime",
//         item: "Black Hawk Down",
//         year: "2001",
//         rating: 7.7,
//       },

//       {
//         id: 9,
//         icon: "western",
//         item: "Django Unchained",
//         year: "2012",
//         rating: 8.5,
//       },

//       {
//         id: 10,
//         icon: "sci-fi",
//         item: "Man of Steel",
//         year: "2013",
//         rating: 7.2,
//       },

//       { id: 11, icon: "horror", item: "The Ring", year: "2002", rating: 7.1 },

//       {
//         id: 12,
//         icon: "romance",
//         item: "40 Days and 40 Nights",
//         year: "2002",
//         rating: 5.6,
//       },

//       {
//         id: 13,
//         icon: "sci-fi",
//         item: "Minority Report",
//         year: "2002",
//         rating: 7.7,
//       },

//       {
//         id: 14,
//         icon: "comedy",
//         item: "Scary Movie 3",
//         year: "2003",
//         rating: 5.5,
//       },

//       {
//         id: 15,
//         icon: "music",
//         item: "Walk the Line",
//         year: "2005",
//         rating: 7.9,
//       },

//       {
//         id: 16,
//         icon: "romance",
//         item: "How to Lose a Guy in 10 Days",
//         year: "2003",
//         rating: 6.4,
//       },

//       {
//         id: 17,
//         icon: "crime",
//         item: "The Dark Knight",
//         year: "2008",
//         rating: 9.0,
//       },

//       {
//         id: 18,
//         icon: "horror",
//         item: "American Psycho",
//         year: "2000",
//         rating: 7.6,
//       },

//       {
//         id: 19,
//         icon: "drama",
//         item: "The Grand Budapest Hotel",
//         year: "2014",
//         rating: 8.1,
//       },

//       {
//         id: 20,
//         icon: "comedy",
//         item: "The Wolf of Wall Street",
//         year: "2013",
//         rating: 8.2,
//       },
//     ];
//   }

//   loadStates(): Array<any> {
//     return ["NY","NJ", "CA", "PA"];
//   }
// }
