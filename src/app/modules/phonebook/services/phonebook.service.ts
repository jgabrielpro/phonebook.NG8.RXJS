import { BehaviorSubject, throwError } from "rxjs";
import { HttpErrorResponse,  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, take, tap, delay, catchError } from 'rxjs/operators';
import { Contact } from "../Model/Contact";


@Injectable({
  providedIn: "root",
})
export class PhonebookService {
  initPhoneBook;
  private contacts$ = new BehaviorSubject<Contact[]>([
    new Contact(
      "5f5975c5dec8ba229f868ea4",
      "Goerge",
      "Michael",
      "jkeriako@gmail.com",
      "+1 (917) 615-2349",
      "fb",
      "2020-10-08T04:00:00.000Z",
      null, //fileupload
      "Yvonne",
      "http://facbook.com",
      [{ id: 3, icon: "action", name: "Gladiator", year: "2000", rating: 8.5 }],
      "home",
      "42 prospect ave",
      null,

      "Bayonne",
      "NY",
      "07002"

    ),
    new Contact(
      "5f5975c5dec8ba229f868ea7",
      "John",
      "Ghaly",
      "jkeriako@gmail.com",
      "+1 (917) 615-2349",
      "fb",
      "2020-10-08T04:00:00.000Z",
      null, //fileupload
      "Yvonne",
      "http://facbook.com",
      [{ id: 3, icon: "action", name: "Gladiator", year: "2000", rating: 8.5 }],
      "home",
      "42 prospect ave",
      null,

      "Bayonne",
      "NY",
      "07002"
      // ["552 sd Avenue, Lund,', 'Virgin Islands',', 8634']
      // ["552 Union Avenue, Lund, Virgin Islands, 8634"]
    ),
    new Contact(
      "5f5975c5dec8ba229f868ea8",
      "Juliet",
      "Markos",
      "jkeriako@gmail.com",
      "+1 (917) 615-2349",
      "fb",
      "2020-10-08T04:00:00.000Z",
      null, //fileupload
      "Yvonne",
      "http://facbook.com",
      [{ id: 3, icon: "action", name: "Gladiator", year: "2000", rating: 8.5 }],
      "home",
      "42 prospect ave",
      null,

      "Bayonne",
      "NY",
      "07002"
      // ["552 sd Avenue, Lund,', 'Virgin Islands',', 8634']
      // ["552 Union Avenue, Lund, Virgin Islands, 8634"]
    ),
    new Contact(
      "5f5975c5dec8ba229f868ea9",
      "Joseph",
      "Botrous",
      "jkeriako@gmail.com",
      "+1 (917) 615-2349",
      "fb",
      "2020-10-08T04:00:00.000Z",
      null, //fileupload
      "Yvonne",
      "http://facbook.com",
      [{ id: 3, icon: "action", name: "Gladiator", year: "2000", rating: 8.5 }],
      "home",
      "42 prospect ave",
      null,

      "Bayonne",
      "NY",
      "07002"
      // ["552 sd Avenue, Lund,', 'Virgin Islands',', 8634']
      // ["552 Union Avenue, Lund, Virgin Islands, 8634"]
    ),
    new Contact(
      "5f5975c5dec8ba229f868ea2",
      "Leticia",
      "Vance",
      "vancealbert@fuelworks.com",
      "+1 (851) 524-2984",
      "Cook",
      "Sally",
      "Strickland",
      "Yvonne",
      "Patel",

      null,
      null,
      null,
      null,
      null,
      null,
      null
      // ["552 sd Avenue, Lund,', 'Virgin Islands',', 8634']
      // ["552 Union Avenue, Lund, Virgin Islands, 8634"]
    ),
    new Contact(
      "5f5975c514b9cb3a5043a1ea",
      "Erma",
      "Lorena",
      "lorenaalbert@fuelworks.com",
      "+1 (965) 585-2348",
      "Sadie",
      "Johnnie",
      "Swanson",
      "Lori",
      "Essie",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
    new Contact(
      "5f5975c52edac12e7bbd0d6c",
      "Robin",
      "Schneider",
      "schneideralbert@fuelworks.com",
      "+1 (840) 486-2288",
      "Underwood",
      "Warner",
      "Blackwell",
      "Merle",
      "Lelia",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
    new Contact(
      "5f5975c582a0d42d9852601a",
      "Madeline",
      "Leigh",
      "leighalbert@fuelworks.com",
      "+1 (827) 516-3361",
      "Turner",
      "Elsie",
      "Hutchinson",
      "Morton",
      "Farmer",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
    new Contact(
      "5f5975c50b7d877655a1c2c8",
      "Emerson",
      "Elizabeth",
      "elizabethalbert@fuelworks.com",
      "+1 (844) 458-2453",
      "Adele",
      "Noreen",
      "Savannah",
      "Gallegos",
      "Hilda",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
    new Contact(
      "5f5976ba5cb237b8ce276025",
      "Myers",
      "Ramona",
      "ramonaalbert@fuelworks.com",
      "+1 (957) 459-2592",
      "Mullins",
      "Laura",
      "Ernestine",
      "Rene",
      "Hooper",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),

    new Contact(
      "5f5976baf83254274ba4a8c6",
      "Katina",
      "Arline",
      "arlinealbert@fuelworks.com",
      "+1 (849) 484-3097",
      "Howard",
      "Bertha",
      "Atkins",
      "Margarita",
      "Pittman",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
    new Contact(
      "5f5976bad777ef6a1713fe43",
      "Rodgers",
      "Newman",
      "newmanalbert@fuelworks.com",
      "+1 (993) 435-3985",
      "Mckay",
      "Loretta",
      "Mcconnell",
      "Stanley",
      "Marjorie",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
    new Contact(
      "5f5976ba21185c078b0648bc",
      "Vasquez",
      "Burton",
      "burtonalbert@fuelworks.com",
      "+1 (976) 574-3691",
      "Wanda",
      "Hampton",
      "Kristine",
      "Franklin",
      "Doris",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ),
  ]);

  //Oveloading
  getAllContacts();
  getAllContacts(page: number);
  getAllContacts(page: number, pageSize: number);

  getAllContacts(page?: number, pageSize?: number) {
    if (page && typeof page === "number") {
      return this.contacts$.asObservable();

      // alert("test");
    } else if (pageSize && typeof pageSize === "number") {
      // alert("undefined");
    } else {
      return this.contacts$.asObservable();
    }
  }

  getContactById(id: string) {
    return this.contacts$.pipe(
      take(1),
      map((contacts) => {
        return { ...contacts.find((p) => p.id === id) };
      }),
      catchError(this.handleError)

    );
  }

  addContact(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    socialmedia: string,
    birthdate: string,
    fileUpload: string,
    comment: string,
    socialmediatext: string,
    listgroup: [""],
    addressType,
    street1,
    street2,
    city,
    state,
    zipCode
  ) {
    const newContact = new Contact(
      Math.random().toString(),
      firstName,
      lastName,
      email,
      phone,
      socialmedia,
      birthdate,
      fileUpload,
      comment,
      socialmediatext,
      listgroup,
      addressType,
      street1,
      street2,
      city,
      state,
      zipCode
    );

    return this.contacts$.pipe(
      take(1),
      delay(2000),
      tap((contactvar) => {
        this.contacts$.next(contactvar.concat(newContact));
      }),
      catchError(this.handleError)

    );
  }

  updateContact(contact: Contact) {
    return this.contacts$.pipe(
      take(1),
      delay(2000),
      tap((contacts) => {
        const updateContactIndex = contacts.findIndex(
          (p1) => p1.id === contact.id
        );
        const updateContacts = [...contacts];
        const oldContact = updateContacts[updateContactIndex];
        updateContacts[updateContactIndex] = new Contact(
          contact.id,
          contact.firstName,
          contact.lastName,
          contact.email,
          contact.phone,
          contact.socialmedia,
          contact.birthdate,
          contact.fileUpload,
          contact.comment,
          contact.socialmediatext,
          contact.listgroup,
          contact.addressType,
          contact.street1,
          contact.street2,
          contact.city,
          contact.state,
          contact.zipCode
        );

        this.contacts$.next(updateContacts);
      }),
      catchError(this.handleError)

    );
  }

  cancelContact(contactid: string) {
    return this.contacts$.pipe(
      take(1),
      delay(2000),
      tap((contactvar) => {
        this.contacts$.next(contactvar.filter((b) => b.id !== contactid));
      }),
      catchError(this.handleError)
    );
  }



  ////////////////////////////////////////////////
  // public contact: Contact;

  // public contacts: Contact[];

  // listgroups: Array<any>;

  // states: Array<any>;

  // ngOnInit(): void {}

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  // }

  // private baseUrl = "http:/localhost8080/contacts";

  // // Httpheaders

  // constructor(private http: HttpClient) {}

  // getContacts(): Observable<Contact[]> {
  //   const url = `${this.baseUrl}`;

  //   return this.http.get(url).pipe(
  //     tap((val) => console.log("getContacts:" + JSON.stringify(val))),
  //     map((data: any) => (this.contacts = data)),
  //     catchError(this.handleError)
  //   );
  // }

  // getContact(id: number): Observable<Contact> {
  //   if (id == 0) {
  //     return of(this.initializeProduct());
  //   }

  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get(url).pipe(
  //     tap((val) => console.log("getContact:" + JSON.stringify(val))),
  //     map((data: any) => (this.contact = data)),
  //     retry(3),
  //     catchError(this.handleError)
  //   );
  // }

  // saveContact(c: Contact): Observable<Contact> {
  //   const url = `${this.baseUrl}`;

  //   if (c.id === 0 || c.id === undefined) {
  //     c.id = undefined;

  //     return this.http.post(url, c, httpOptions).pipe(
  //       tap((val) => console.log("Save contact" + JSON.stringify(val))),
  //       map(() => c)
  //     );
  //   } else {
  //     const url = `${this.baseUrl}/${c.id}`;

  //     return this.http.put(url, c, httpOptions).pipe(
  //       tap((val) => console.log("updateContact" + JSON.stringify(val))),
  //       map(() => c)
  //     );
  //   }
  // }

  // deleteContact(id: number): Observable<Response> {
  //   const url = `${this.baseUrl}/${id}`;

  //   return this.http.delete(url, httpOptions).pipe(
  //     tap((val) => console.log("delete" + val)),
  //     map(() => null),
  //     catchError(this.handleError)
  //   );
  // }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message

    return throwError("Something bad happened; please try again later.");
  }

  // initializeContact(): Contact {
  //   return {
  //     id: "",
  //     firstName: null,
  //     lastName: null,
  //     email: null,
  //     phone: null,
  //     socialmedia: null,
  //     birthdate: null,
  //     fileUpload: null,
  //     comment: null,
  //     socialmediatext: null,
  //     listgroup: [""],
  //     addressType: null,
  //     street1: null,
  //     street2: null,
  //     city: null,
  //     state: null,
  //     zipCode: null,
  //   };
  // }

  public initlistBox(): Array<any> {
    return [
      { id: 1, icon: "sci-fi", name: "Star Trek", year: "2009", rating: 8.0 },

      {
        id: 2,
        icon: "adventure",
        item: "Cast Away",
        year: "2000",
        rating: 7.7,
      },

      { id: 3, icon: "action", name: "Gladiator", year: "2000", rating: 8.5 },

      { id: 4, icon: "drama", name: "Malèna", year: "2000", rating: 7.5 },

      { id: 5, icon: "music", name: "Moulin Rouge", year: "2001", rating: 7.6 },

      { id: 6, icon: "comedy", name: "Snatch", year: "2000", rating: 8.3 },

      {
        id: 7,
        icon: "biography",
        name: "A Beautiful Mind",
        year: "2001",
        rating: 8.2,
      },

      {
        id: 8,
        icon: "crime",
        name: "Black Hawk Down",
        year: "2001",
        rating: 7.7,
      },

      {
        id: 9,
        icon: "western",
        name: "Django Unchained",
        year: "2012",
        rating: 8.5,
      },

      {
        id: 10,
        icon: "sci-fi",
        name: "Man of Steel",
        year: "2013",
        rating: 7.2,
      },

      { id: 11, icon: "horror", name: "The Ring", year: "2002", rating: 7.1 },

      {
        id: 12,
        icon: "romance",
        name: "40 Days and 40 Nights",
        year: "2002",
        rating: 5.6,
      },

      {
        id: 13,
        icon: "sci-fi",
        name: "Minority Report",
        year: "2002",
        rating: 7.7,
      },

      {
        id: 14,
        icon: "comedy",
        name: "Scary Movie 3",
        year: "2003",
        rating: 5.5,
      },

      {
        id: 15,
        icon: "music",
        name: "Walk the Line",
        year: "2005",
        rating: 7.9,
      },

      {
        id: 16,
        icon: "romance",
        name: "How to Lose a Guy in 10 Days",
        year: "2003",
        rating: 6.4,
      },

      {
        id: 17,
        icon: "crime",
        name: "The Dark Knight",
        year: "2008",
        rating: 9.0,
      },

      {
        id: 18,
        icon: "horror",
        name: "American Psycho",
        year: "2000",
        rating: 7.6,
      },

      {
        id: 19,
        icon: "drama",
        name: "The Grand Budapest Hotel",
        year: "2014",
        rating: 8.1,
      },

      {
        id: 20,
        icon: "comedy",
        name: "The Wolf of Wall Street",
        year: "2013",
        rating: 8.2,
      },
    ];
  }

  public initStates(): Array<any> {
    return ["NY", "NJ", "CA", "PA"];
  }
}

// export default function handleError(error: HttpErrorResponse) {
//   if (error.error instanceof ErrorEvent) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error("An error occurred:", error.error.message);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong,
//     console.error(
//       `Backend returned code ${error.status}, ` + `body was: ${error.error}`
//     );
//   }
//   // return an observable with a user-facing error message

//   return throwError("Something bad happened; please try again later.");
// }
