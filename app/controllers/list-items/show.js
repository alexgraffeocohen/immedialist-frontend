import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectItem(item) {
      let model = this.get('model');
      model.set('item', item);
      model.save().then((model) => {
        this.
          get('flashMessages').
          success(`${item.get('name')} successfully selected!`);
        this.transitionToRoute('listItems');
      });
    }
  },
  flashMessages: Ember.inject.service()
});
