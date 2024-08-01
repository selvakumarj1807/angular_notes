import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formdata = { name: "", email: "", password: "" };
  submit = false;
  errorMessage="";
  loading=false;

  onSubmit() {
    console.log(this.formdata);
    this.loading=true;
  }
}

/*
Example 01:
-----------

export class RegisterComponent {

  formdata = {name:"",email:"",password:""};
  submit=false;

  onSubmit() {
    console.log(this.formdata);
  }
}

Example 02:
-----------

export class RegisterComponent {

  formdata = { name: "", email: "", password: "" };
  submit = false;
  errorMessage="";
  loading=false;

  onSubmit() {
    console.log(this.formdata);
    this.loading=true;
  }
}
*/
