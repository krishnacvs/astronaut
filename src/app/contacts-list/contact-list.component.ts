import { Component } from "@angular/core";
import { Http } from "@angular/http";
@Component({
  selector: "contact-list",
  templateUrl: "./contact-list.component.html"
})
export class ContactList {
  http;
  contacts;
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.http
    .get("app.json")
    .map(
      (response) => response.json()
    )
    .subscribe(
      (data) => { this.getContacts(data); 
    ) 
  }

  getContacts(data) {
    console.log(data);
    this.contacts = data;
  }
}
