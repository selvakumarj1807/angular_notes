import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  contactForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(10)]),
      lastName: new FormControl({
          value: 'Kumar',
          disabled: false
      },[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      isMarried: new FormControl("",[Validators.requiredTrue]),
      country: new FormControl("",[Validators.required]),
      address: new FormGroup({
        city: new FormControl("",[Validators.required]),
        pincode:new FormControl("",[Validators.required])
      })
  })

  get firstname() {
    return this.contactForm.get('firstName')
  }
  get lastname() {
    return this.contactForm.get('lastName')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get gender() {
    return this.contactForm.get('gender')
  }
  get marriedStatus() {
    return this.contactForm.get('isMarried')
  }
  get country() {
    return this.contactForm.get('country')
  }
  get city() {
    return this.contactForm.get('address')?.get('city')
  }
  get pincode() {
    return this.contactForm.get('address')?.get('pincode')
  }

  onSubmit() {
      console.log(this.contactForm.value)
  }
}



/*
Example 1:
----------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('selva'),
    lastName: new FormControl({
      value: 'kumar',
      disabled: false // disabled: true
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


Exampe 2:
---------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl({
      value: 'kumar',
      disabled: false // disabled: true
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


Exampe 3:
---------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl({
      value: 'kumar',
      disabled: false // disabled: true
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

  get firstname() {
    return this.contactForm.get('firstName')
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

Exampe 4:
---------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(10)]),
    lastName: new FormControl({
      value: 'kumar',
      disabled: false // disabled: true
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

  get firstname() {
    return this.contactForm.get('firstName')
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}


Exampe 5:
---------

export class ReactiveFormComponent {
  contactForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(10)]),
      lastName: new FormControl({
          value: 'Kumar',
          disabled: false
      },[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      isMarried: new FormControl("",[Validators.requiredTrue]),
      country: new FormControl("",[Validators.required]),
      address: new FormGroup({
        city: new FormControl("",[Validators.required]),
        pincode:new FormControl("",[Validators.required])
      })
  })

  get firstname() {
    return this.contactForm.get('firstName')
  }
  get lastname() {
    return this.contactForm.get('lastName')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get gender() {
    return this.contactForm.get('gender')
  }
  get marriedStatus() {
    return this.contactForm.get('isMarried')
  }
  get country() {
    return this.contactForm.get('country')
  }
  get city() {
    return this.contactForm.get('address')?.get('city')
  }
  get pincode() {
    return this.contactForm.get('address')?.get('pincode')
  }

  onSubmit() {
      console.log(this.contactForm.value)
  }
}


*/