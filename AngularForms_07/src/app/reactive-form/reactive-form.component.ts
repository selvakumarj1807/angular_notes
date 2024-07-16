import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('selva'),
    lastName: new FormControl({
      value: 'kumar',
      disabled: true // disabled: false
    }),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    })
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}


/*
Example 1:
----------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  });

  onSubmit(){
    console.log(this.contactForm.value);
  }
}

Example 2:
----------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    })
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}


Example 3:
----------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('tit'),
    lastName: new FormControl('tech'),
    email: new FormControl({
      value: 's@gmail.com',
      disabled: true
    }),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    })
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

*/