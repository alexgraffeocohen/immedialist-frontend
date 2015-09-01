import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('componentName', `${model.get('mediaType')}-detail`);
  }
});
