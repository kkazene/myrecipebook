import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Ingredients = new Mongo.Collection('Ingredients');

Ingredients.schema = new SimpleSchema({
  name: {type: String},
  amount: {type: Number, defaultValue: 0},
  kcal: {type: Number},
});


//Ingredients.attachSchema(schema);
