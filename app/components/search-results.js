import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  searchResults: function() {
    return this.get('search.items');
  }.property('search'),
  helpText: function() {
    var text = `Select the Correct ${this.get('searchType').capitalize()}`;
    return text;
  }.property('search')
});
