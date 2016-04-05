import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    addCity1() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.set('addNewCity', false);
      this.sendAction('addCity2', params);
    }
  }
});
