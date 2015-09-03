import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col-md-offset-1', 'col-md-10'],
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
