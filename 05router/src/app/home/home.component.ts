import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts = [
    { id: 1, title: 'Post Router 1' },
    { id: 2, title: 'Post Router 2' },
    { id: 3, title: 'Post Router 3' },
    { id: 4, title: 'Post Router 4' }
  ];
}
