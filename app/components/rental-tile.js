import Ember from 'ember';

export default Ember.Component.extend({
  //// Default setting for images, not showing ////
  isImageShowing: false,
  //// Default setting so form does not show ////
  updateRentalForm: false,
  actions: {
    //// imageShow is an 'action' coming from the rental-tile.hbs file ////
    //// will set isImageShowing as 'TRUE' when the button is clicked and the if statement there will display the image ////
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    //// Comma's (,) go between all actions!! /////
    imageHide: function () {
      this.set('isImageShowing', false);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
        if (confirm('Are you sure you want to delete this rental?')) {
          this.sendAction('destroyRental', rental);
        }
      }
    }
});
