import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];

  onSubmit(form: NgForm) {
    console.log('Form Submitted!', form.value); //if check the form element -  console.log('Form Submitted!', form);
  }
}

class Country {
  constructor(public id: string, public name: string) {}
}



/*
Example 1:
----------

export class TemplateDrivenFormComponent {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];
}

class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name
  }
}

Example 2:
----------

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];

  onSubmit(form: NgForm) {
    console.log('Form Submitted!', form.value); //if check the form element -  console.log('Form Submitted!', form);
  }
}

class Country {
  constructor(public id: string, public name: string) {}
}
*/