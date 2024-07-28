import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }


  canAccess(){
    if(!this.isAuthenticated()){
      // redirect to login
      this.router.navigate(['/login']);
    }
  }
}


/*

Example 01:
-----------

export class AuthService {

  constructor() { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }
}

Example 02:
-----------

export class AuthService {

  constructor(private router:Router) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }


  canAccess(){
    if(!this.isAuthenticated()){
      // redirect to login
      this.router.navigate(['/login']);
    }
  }
}


*/