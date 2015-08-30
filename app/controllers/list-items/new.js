import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      var formParams = {name: this.get('name'), mediaType: this.get('mediaType')};
      var requestedItem = this.store.createRecord(
        'requested-item', {name: formParams.name, mediaName: formParams.mediaType}
      );
      requestedItem.save().then((item) => {
        var listItem = this.store.createRecord(
          'listItem', {name: formParams.name, item: item}
        );
        listItem.save();
        this.clearNameFromForm();
      });
    },

    selectMediaType(selection) {
      this.set('mediaType', selection);
    }
  },
  clearNameFromForm() {
    this.set('name', '');
  },
  mediaType: 'movie' // TODO: have this always be in sync with value of select
});
