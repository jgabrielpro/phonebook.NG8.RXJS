
import { Contact } from './Contact';
export interface ContactResolved {
  contact: Contact;
  error?:any
}

export interface ContactResolvedList {
  contact: Contact[];
  error?:any
}
