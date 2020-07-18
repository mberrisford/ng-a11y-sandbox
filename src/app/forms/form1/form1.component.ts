import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';


// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private announcer: LiveAnnouncer,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // const invalidElements = this.el.nativeElement.querySelectorAll('.ng-invalid');
    // if (invalidElements.length > 0) {
    //   console.log(invalidElements[0]);
    //   invalidElements[0].focus();
    // }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      // setTimeout(() => {
      //   this.announcer.announce(
      //     'Oops, there are errors on this page. Focus moved to first error.',
      //     'polite');
      // }, 500);

      // setTimeout(() => {
      //   const firstInvalid = this.el.nativeElement.querySelector('.ng-invalid')[0];
      //   firstInvalid.focus();
      // }, 500);

      const invalidFields = [].slice.call(this.el.nativeElement.getElementsByClassName('ng-invalid'));
      invalidFields[1].focus();

      const numErrors = invalidFields.length - 1;

      setTimeout(() => {
        this.announcer.announce(
          'There are' + numErrors + 'fields in errors on this page. Focus moved to first error.',
          'polite');
      }, 500);


      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
