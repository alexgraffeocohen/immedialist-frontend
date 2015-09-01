import Ember from 'ember';

export default Ember.Component.extend({
  searchResults: function() {
    return this.get('search.items');
  }.property('search')
});
