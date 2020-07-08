import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  contactForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.showMessage = false;
    this.submitted = false;

    this.contactForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.compose([
        Validators.required,
        Validators.pattern(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g),
        Validators.minLength(7)
      ])],
      message: [null, Validators.required]
    });
  }

  submitForm(value: any) {
    console.log(value);

    this.submitted = true;

    if (this.contactForm.valid) {
      this.showMessage = true;

      setTimeout(() => {
        const messageHeading = document.getElementById('message-heading');
        messageHeading.focus();
      }, 200);
    } else {
      setTimeout(() => {
        const errorHeading = document.getElementById('error-heading');
        errorHeading.focus();
      }, 200);
    }
  }
}
