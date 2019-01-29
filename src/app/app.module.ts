import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ContactList } from "./contacts-list/contact-list.component";
import { ContactForm } from "./contact-form/contact-form.component";
@NgModule({
  declarations: [AppComponent, ContactList, ContactForm],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
