import Ember from 'ember';
import IconNameGenerator from '../services/icon-name-generator';

export default Ember.Component.extend({
  actions: {
    deleteListItem: function() {
      var listItem = this.get('listItem');
      listItem.deleteRecord();
      listItem.save();
    }
  },

  mediaType: function() {
    return this.get('listItem.mediaType').toLowerCase();
  }.property('listItem'),
  itemName: function() {
    return this.get('listItem.name').dasherize();
  }.property('listItem'),
  itemDOMID: function() {
    return "#" + this.get('itemName');
  }.property('listItem'),
  typeIcon: function() {
    var iconNameGenerator = IconNameGenerator.create({
      listItem: this.get('listItem')
    });
    return iconNameGenerator.call();
  }.property('listItem')
});
