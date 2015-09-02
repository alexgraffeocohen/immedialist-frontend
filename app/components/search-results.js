import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col-md-offset-1', 'col-md-10'],
  searchResults: function() {
    return this.get('search.items');
  }.property('search'),
  mediaType: function() {
    return this.get('search.mediaType').capitalize();
  }.property('search')
});
