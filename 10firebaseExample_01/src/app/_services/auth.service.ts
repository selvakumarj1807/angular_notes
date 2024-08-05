import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }


  canAccess() {
    if (!this.isAuthenticated()) {
      // redirect to login
      this.router.navigate(['/login']);
    }
  }

  register(name: string, email: string, password: string) {
    //send data to register api (firebase)
    //send data to register api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { displayName: name, email: email, password: password }
      )
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  canAuthenticate() {
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  login(email: string, password: string) {
    //send data to login api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { email, password }
      );
  }

  detail() {
    let token = sessionStorage.getItem('token');

    return this.http.post<{ users: Array<{ localId: string, displayName: string }> }>(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
      { idToken: token }
    );
  }

  removeToken() {
    sessionStorage.removeItem('token');
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

Example 03:
-----------

export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

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

  register(name:string,email:string,password:string){
    //send data to register api (firebase)
    //send data to register api (firebase)
    return this.http
    .post<{idToken:string}>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
      {displayName:name,email:email,password:password}
    )
  }

  storeToken(token:string){
    sessionStorage.setItem('token',token);
  }

  
}

Example 04:
-----------

export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }


  canAccess() {
    if (!this.isAuthenticated()) {
      // redirect to login
      this.router.navigate(['/login']);
    }
  }

  register(name: string, email: string, password: string) {
    //send data to register api (firebase)
    //send data to register api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { displayName: name, email: email, password: password }
      )
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  login(email:string,password:string){
    //send data to login api (firebase)
      return this.http
      .post<{idToken:string}>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
            {email,password}
      );
  } 


}

Example 05:
-----------

export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }


  canAccess() {
    if (!this.isAuthenticated()) {
      // redirect to login
      this.router.navigate(['/login']);
    }
  }

  register(name: string, email: string, password: string) {
    //send data to register api (firebase)
    //send data to register api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { displayName: name, email: email, password: password }
      )
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  canAuthenticate() {
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  login(email: string, password: string) {
    //send data to login api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { email, password }
      );
  }

  detail() {
    let token = sessionStorage.getItem('token');

    return this.http.post<{ users: Array<{ localId: string, displayName: string }> }>(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
      { idToken: token }
    );
  }

}

Example 06:
-----------

export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }


  canAccess() {
    if (!this.isAuthenticated()) {
      // redirect to login
      this.router.navigate(['/login']);
    }
  }

  register(name: string, email: string, password: string) {
    //send data to register api (firebase)
    //send data to register api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { displayName: name, email: email, password: password }
      )
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  canAuthenticate() {
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  login(email: string, password: string) {
    //send data to login api (firebase)
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
        { email, password }
      );
  }

  detail() {
    let token = sessionStorage.getItem('token');

    return this.http.post<{ users: Array<{ localId: string, displayName: string }> }>(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDl1yPJs_ZPT37-RBXed76ZXX9I0BG7Ntk',
      { idToken: token }
    );
  }

  removeToken() {
    sessionStorage.removeItem('token');
  }

}
*/