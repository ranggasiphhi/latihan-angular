import { Component, OnInit, Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css'],
  
})
export class FormTestingComponent implements OnInit {

  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
   }

   createForm(): void {
     this.contactForm = new FormGroup({
       'name': new FormControl(this.contact.name, [
         Validators.required,
        Validators.minLength(4)
      ]),
        'email': new FormControl(this.contact.email, [
          Validators.required,
          Validators.email
        ]),
        'text': new FormControl(this.contact.text, Validators.required)
     });
   }

   onSubmit(): void{
     this.submitted = true;
   }

  ngOnInit() {
  }

}
