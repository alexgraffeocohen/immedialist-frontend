import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    var listItemsNewController = this.controllerFor('listItems/new');
    // A little counter-intuitive, but we need this to be a requestedItem
    // rather than a listItem because we need to create a requestedItem before
    // creating a listItem. This slight confusion is worth it because setting
    // the model allows us some nice refactoring and clarity in other places.
    listItemsNewController.set('model', this.store.createRecord('requestedItem'));

    this.render('list-items');
    this.render('list-items/new', {
      into: 'list-items',
      outlet: 'new',
      controller: listItemsNewController
    });
  },
});
