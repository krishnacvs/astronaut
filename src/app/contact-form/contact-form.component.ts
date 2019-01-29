import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html"
})
export class ContactForm {
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
