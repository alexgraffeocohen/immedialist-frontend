import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  searchResults: function() {
    let searchResultsMethod = `search.${this.get('search.mediaType')}s`
    return this.get(searchResultsMethod);
  }.property('search'),
  helpText: function() {
    var text = `Select the Correct ${this.get('searchType').capitalize()}`;
    return text;
  }.property('search')
});
