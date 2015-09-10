import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectItem(item) {
      let model = this.get('model');
      model.set('item', item);
      model.save().then(this.transitionToRoute('listItems'));
    }
  }
});
