import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';

import { Recipes } from '../../api/recipes/recipes.js';

import './RecipeForm.html';

Template.NewRecipe.helpers({
	recipes() {
		return Recipes;
	}
});
