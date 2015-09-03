import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectItem(item) {
      console.log(`in the media option component with ${item}`);
    }
  }
});
