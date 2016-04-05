import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  //// async: true means that if the related model data isn't already loaded, an additional request should be made to Firebase in order to retreive it.
  city: DS.belongsTo('city', {async: true}),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
