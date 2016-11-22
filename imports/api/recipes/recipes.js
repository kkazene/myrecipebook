Recipes = new Mongo.Collection('Recipes');

Recipes.schema = new SimpleSchema({
  name: {type: String},
  author: {type: String},
  ingredients: {type: [Object]},
  instructions: {type: String},
  time: {type: String},
});

Recipes.attachSchema(schema);
