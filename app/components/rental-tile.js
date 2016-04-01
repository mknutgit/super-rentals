import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false, //// Default setting for images, not showing ////
  actions: {
    //// imageShow is an 'action' coming from the rental-tile.hbs file ////
    //// will set isImageShowing as 'TRUE' when the button is clicked and the if statement there will display the image ////
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function () {
      this.set('isImageShowing', false);
    }
  }
});
