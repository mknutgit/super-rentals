import Ember from 'ember';

export default Ember.Component.extend({
  updateRenatlForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      //// Hides the update form after save /////
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
