import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {

  // Constructor function for the component
  constructor() {}

  // Properties to hold first and last name of the author
  first_name: string = "";
  last_name: string = "";

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Initializing first_name and last_name with example values
    this.first_name = "Annie";
    this.last_name = "Spratt";
  }

  // Method to get the full name of the author
  get_Full_Name(): string {
    // Combining first_name and last_name to form the full name
    return `${this.first_name} ${this.last_name}`;
  }

}
