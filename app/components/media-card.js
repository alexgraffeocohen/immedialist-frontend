import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectItem() {
      this.sendAction('action', this.get('item'));
    }
  },
  charCountForTitle: 35
});
