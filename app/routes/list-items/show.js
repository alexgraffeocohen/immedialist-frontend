import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('componentName', `${model.get('mediaType')}-detail`);
    controller.set('typeIcon', this.get('iconNameGenerator').call(model));
    controller.set('mediaType', model.get('mediaType').toLowerCase());
  },

  renderTemplate(controller, model) {
    this.render('list-items/show');

    if(model.get('resolved')) {
      this.render('list-items/show/item', {
        into: 'list-items/show',
        outlet: 'show'
      });
    } else {
      this.render('list-items/show/search', {
        into: 'list-items/show',
        outlet: 'show'
      });
    }
  },

  iconNameGenerator: Ember.inject.service()
});
