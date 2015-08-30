import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.setMediaNameIfNull()
      this.get('model').save().then((item) => {
        var listItem = this.store.createRecord(
          'listItem', {name: this.get('model.name'), item: item}
        );
        listItem.save();
        this.clearNameFromForm();
      });
    },
  },
  setMediaNameIfNull() {
    // TODO: why does emberx-select not set whatever the default value of the
    // select is on initial load?
    if(this.get('model.mediaName') === undefined) {
      // TODO: try to have this not break if the first option in the select
      // changes independently
      this.set('model.mediaName', 'movie');
    }
  },
  clearNameFromForm() {
    this.set('name', '');
  },
});
