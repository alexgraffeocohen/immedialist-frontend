import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectItem() {
      this.sendAction('action', this.get('option'));
    }
  },
  charCountForTitle: 35,
  titleTooLong: function() {
    let nameLength = this.get('option.name').length;
    let tooLong = nameLength > this.get('charCountForTitle');
    return tooLong;
  }.property('option.name', 'charCountForTitle')
});
