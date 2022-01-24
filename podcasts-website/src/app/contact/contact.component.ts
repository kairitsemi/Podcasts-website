import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = { } as FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'subject' : new FormControl(null, Validators.required),
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  submit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();

  }

  get email() {
    return this.contactForm.get('email')
  }

  get subject() {
    return this.contactForm.get('subject')
  }

  get message() {
    return this.contactForm.get('message')
  }
}
