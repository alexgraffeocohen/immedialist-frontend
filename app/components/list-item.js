import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteListItem: function() {
      var listItem = this.get('listItem');
      listItem.deleteRecord();
      listItem.save();
    }
  },

  iconNameGenerator: Ember.inject.service(),
  mediaType: function() {
    return this.get('listItem.mediaType').toLowerCase();
  }.property('listItem'),
  itemName: function() {
    return this.get('listItem.name').dasherize();
  }.property('listItem'),
  typeIcon: function() {
    return this.get('iconNameGenerator').call(this.get('listItem'));
  }.property('listItem')
});
