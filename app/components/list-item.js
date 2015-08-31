import Ember from 'ember';

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
    switch(this.get('listItem.mediaType')) {
      case "movie":
        return "fa-film";
      case "show":
        return "fa-video-camera";
      case "actor":
        return "fa-user";
      case "director":
        return "fa-user";
      case "author":
        return "fa-user";
      case "artist":
        return "fa-user";
      case "song":
        return "fa-music";
      case "album":
        return "fa-music";
      case "book":
        return "fa-book";
    }
  }.property('listItem')
});
