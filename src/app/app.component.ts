import { Component } from '@angular/core';
import { ImageComponent } from './components/image/image.component';
import { CategoryComponent } from './components/category/category.component';
import { TitleComponent } from './components/title/title.component';
import { DescriptionComponent } from './components/description/description.component';
import { AuthorComponent } from './components/author/author.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importing child components for use within this component
  imports: [ImageComponent, CategoryComponent, TitleComponent, DescriptionComponent, AuthorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /* This AppComponent class is currently empty as it serves as the root component for the Angular application. */

}
