Ingredients = new Mongo.Collection('Ingredients');

Ingredients.schema = new SimpleSchema({
  name: {type: String},
  amount: {type: Number},
  kcal: {type: Number},
});

Ingredients.attachSchema(schema);
