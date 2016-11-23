import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { HomeLayout } from '../../ui/layouts/HomeLayout.html';
import { MainLayout } from '../../ui/layouts/MainLayout.html';
import { Recipes } from '../../ui/components/RecipeForm.html';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipes', {
  name: 'recipes',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewRecipe'});
  }
});
