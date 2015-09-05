import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectItem() {
      this.sendAction('action', this.get('item'));
    }
  },
  charCountForTitle: 35,
  cardTitleTooLong: function() {
    let nameLength = this.get('item.name').length
    let tooLong = nameLength > this.get('charCountForTitle');
    return tooLong
  }.property('item.name', 'charCountForTitle')
});
