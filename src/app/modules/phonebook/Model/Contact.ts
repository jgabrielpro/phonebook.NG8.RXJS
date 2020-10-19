
export class Contact {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public socialmedia: string,
    public birthdate: string,
    public fileUpload: string,
    public comment: string,
    public socialmediatext: string,
    public listgroup: any,
    public addressType: string,
    public street1: string,
    public street2: string,
    public city: string,
    public state: string,
    public zipCode: string
  ) { }
}
