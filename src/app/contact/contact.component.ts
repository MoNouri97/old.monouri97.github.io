import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('cSection') cSection: ElementRef;
  email: {
    message: string;
    subject: string;
  } = { message: '', subject: '' };

  constructor() {}

  scrollIntoView() {
    this.cSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    window.open(
      `mailto:mohamed.nouri.1997@gmail.com?subject=${this.email.subject}&body=${this.email.message}`
    );
  }
}
