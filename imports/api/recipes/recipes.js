import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Recipes = new Mongo.Collection('Recipes');

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  author: {
    type: String,
    label: 'Author',
  },
  ingredients: {
    type: [Object],
    label: 'Ingredients',
  },
  instructions: {
    type: String,
    label: 'Instructions',
  },
  time: {
    type: String,
    label: 'Duration',
  },
});

Recipes.attachSchema(RecipeSchema);
