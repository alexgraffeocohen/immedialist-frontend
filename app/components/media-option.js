import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectItem() {
      console.log(`in the media option component with ${this.get('option')}`);
    }
  },
  charCountForTitle: 35,
  cardTitleTooLong: function() {
    let nameLength = this.get('option.name').length
    let tooLong = nameLength > this.get('charCountForTitle');
    return tooLong
  }.property('option.name', 'charCountForTitle')
});
