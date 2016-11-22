import { Template } from 'meteor/templating';
import { Recipes } from '../../api/recipes/recipes.js';
import { Ingredients } from '../../api/ingredients/ingredients.js';

import './body.html';

Template.body.helpers({
  recipes: [
    { name: 'This is name 1' },
    { name: 'This is name 2' },
    { name: 'This is name 3' },
  ],
});
