import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {

  // Constructor function for the component
  constructor() {}

  // Property to hold the title
  title: string = "";

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Initializing the title with an example value
    this.title = "Embracing Minimalism";
  }

}
