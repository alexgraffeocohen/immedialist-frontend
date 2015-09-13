import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectItem(item) {
      var model = this.get('model');
      model.set('item', item);
      model.save().then(() => {
        this.
          get('flashMessages').
          success(`${item.get('name')} successfully selected!`);
        this.transitionToRoute('listItems');
      });
    }
  },
  flashMessages: Ember.inject.service()
});
