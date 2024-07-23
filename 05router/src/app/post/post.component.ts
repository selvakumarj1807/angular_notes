import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private activatedRoute: ActivatedRoute) {

  }
  id!: string;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
