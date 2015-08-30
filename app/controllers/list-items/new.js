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
      this.set('model.mediaName', this.get('optionsForSelect')[0]);
    }
  },
  clearNameFromForm() {
    this.set('model.name', '');
  },
  optionsForSelect: [
    "Movie",
    "Show",
    "Actor",
    "Director",
    "Song",
    "Album",
    "Artist",
    "Book",
    "Author"
  ]
});
