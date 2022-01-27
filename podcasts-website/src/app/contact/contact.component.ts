import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  showConfirmation = false;

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      subject: this.formBuilder.control('', Validators.required),
      message: this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
    }, {updateOn: 'submit'})
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

  submit() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.formGroupDirective.resetForm()
      this.showConfirmation = true;
    } else {
      this.showConfirmation = false;
    }
  }

}
