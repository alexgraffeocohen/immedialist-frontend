import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('list-items');
    this.render('list-items/new', {
      into: 'list-items',
      outlet: 'new',
      controller: this.controllerFor('listItems/new')
    });
  },
});
