import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe1', 'This is a test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1200px-Thai_green_chicken_curry_and_roti.jpg'),
    new Recipe('A test recipe2', 'This is a test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1200px-Thai_green_chicken_curry_and_roti.jpg'),
    new Recipe('A test recipe3', 'This is a test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1200px-Thai_green_chicken_curry_and_roti.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
