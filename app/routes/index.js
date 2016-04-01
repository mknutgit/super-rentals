import Ember from 'ember';

var rentals = [{
  id: 1,
  owner: "Veruca Salt",
  city: "San Francisco",
  type: "Estate",
  bedrooms: 15,
  image: "https://unpload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id:2,
  owner: "Mike TV",
  city: "Seattle",
  type: "Condo",
  bedrooms: 1,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3,
  owner: "Violet Beauregarde",
  city: "Portland",
  type: "Apartment",
  bedrooms: 3,
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model(){ ///// Model hook - returns hard coded array of rentals /////
    return this.store.findAll('rental');
  },
  //// this action is received upwards from component through the template  ////
  //// Now the route handler below will access the data store and delete the desired object ////
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }, //// have to add commas (,) after actions accept for the last one as below ////

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index'); //// returns to index page after the rental is deleted ////
    }
  }
});
